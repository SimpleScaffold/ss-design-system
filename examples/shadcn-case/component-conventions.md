# 컴포넌트 컨벤션 — cva, cn(), 그리고 hex 금지 규칙

> [`README.md`](./README.md)의 익명화 고지 참고.
> 관련: [`framework/adapters/shadcn/README.md`](../../framework/adapters/shadcn/README.md) §이 시스템 고유 개념, [`framework/specs/components/component-contract.md`](../../framework/specs/components/component-contract.md)

## cva — Variant × Size 계약을 코드로

공통 스펙 [`component-contract.md`](../../framework/specs/components/component-contract.md)는 "Variant × Size × State → Token" 표를 문서로 고정하라고 말한다. shadcn 생태계에서는 이 표를 `cva`(class-variance-authority) 함수로 그대로 코드화한다.

```tsx
const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/80',
        outline: 'border border-input bg-background hover:bg-muted',
        destructive: 'bg-destructive/10 text-destructive hover:bg-destructive/20',
        ghost: 'hover:bg-muted hover:text-foreground',
      },
      size: {
        default: 'h-9 px-4',
        sm: 'h-8 px-3',
        lg: 'h-10 px-6',
        icon: 'size-9',
      },
    },
    defaultVariants: { variant: 'default', size: 'default' },
  },
)
```

관찰된 관례:

- **variant 값**: `default`/`outline`/`secondary`/`ghost`/`destructive`/`link`처럼 의미론적 이름을 쓰고, 색상은 전부 시맨틱 토큰(`bg-primary`, `bg-destructive`)만 참조한다. 원시 hex나 팔레트 단계(`bg-blue-500`)가 여기 들어오면 위반이다.
- **size 값**: `default`/`sm`/`lg`/`icon`이 기본 축이고, 필요하면 `icon-sm`/`icon-lg`처럼 조합해서 늘린다.
- **`defaultVariants`를 항상 지정한다** — variant/size를 생략해도 컴포넌트가 예측 가능한 기본 모습을 갖도록 강제한다.

`cva`로 만든 컴포넌트가 다른 컨텍스트(예: 특정 화면에서 색만 다르게)에 필요하면, cva 정의를 복제하지 않고 **variant 이름을 재매핑하는 얇은 래퍼**를 하나 더 두는 방식이 관찰됐다 — 원본 shadcn variant(`default`/`outline`/`ghost`...)와 화면에서 쓰고 싶은 의미론적 이름(`primary`/`accent`/`info`...)이 다를 때, 그 대응표를 컴포넌트 하나에 명시적으로 박아두는 것이다. 이렇게 하면 컴포넌트 소스는 하나만 유지되고, "이 의미론적 이름이 실제로 어떤 shadcn variant로 렌더링되는지"가 코드 한 곳에 드러난다.

## cn() — 조건부 클래스 + 충돌 해소

```ts
import { twMerge } from 'tailwind-merge'
import { clsx, type ClassValue } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

`clsx`는 `variant === 'outline' && 'border-2'`처럼 조건부로 클래스를 합쳐준다. `tailwind-merge`는 그 결과에서 **같은 CSS 속성을 다루는 Tailwind 클래스가 중복되면 뒤에 오는 쪽이 이기도록** 정리한다 — 예를 들어 컴포넌트 기본 클래스가 `h-9`인데 사용하는 쪽에서 `className="h-12"`를 넘기면, 문자열만 이어붙일 경우 둘 다 살아남아 CSS 우선순위 싸움이 되지만 `cn()`을 거치면 `h-12`만 남는다. 이 조합 덕분에 컴포넌트를 감싸 쓸 때 `className` prop 하나로 안전하게 스타일을 오버라이드할 수 있다.

## "슬롯 CSS엔 hex 금지, semantic만" — 문서화된 규칙

CSS 슬롯 기반으로 스킨을 입히는 부분(멀티 스킨 구조, [`multi-skin-tokens.md`](./multi-skin-tokens.md) 참고)에서는 다음 규칙이 파일 맨 위 주석으로 명시돼 있었다:

```
5. Slots  [data-slot]  ← hex 금지, semantic만
```

즉 컴포넌트를 스킨에 맞게 칠하는 CSS 규칙에서는 `#으로 시작하는 값을 절대 쓰지 않고, 항상 시맨틱 토큰(`var(--background)`, `var(--primary)`)만 참조한다는 규칙이다. 이 규칙 자체는 새롭지 않다 — [`token-architecture.md`](./token-architecture.md)가 말하는 "컴포넌트는 원시 값을 절대 보지 않는다"의 연장선이다.

## 타입 레벨 강제 — lint보다 강한 수단

문서화된 규칙 중 하나는 실제로 컴파일 타임에 강제되고 있었다: 컴포넌트의 퍼블릭 API에서 **`style` prop 자체를 타입에서 제거**해, 인라인 스타일로 토큰 규칙을 우회하는 걸 원천 차단한 것이다.

```ts
// 컴포넌트 props 유틸 — style prop을 타입에서 제거한다
type WithoutStyle<T> = Omit<T, 'style'>
```

```ts
export const SkinButton = ({ variant = 'primary', ...props }: WithoutStyle<ButtonProps>) => (
  <Button variant={variant} {...props} />
)
```

이렇게 하면 누군가 `<SkinButton style={{ color: '#ff0000' }} />`를 쓰려는 순간 TypeScript 컴파일 에러가 난다 — ESLint 규칙처럼 "고쳐라"라고 경고만 하는 게 아니라 애초에 그 코드가 존재할 수 없게 만든다. [`gaps-and-lessons.md`](./gaps-and-lessons.md)에서 다루듯, 이 저장소에서 관찰된 다른 규칙들은 대부분 사람이 지켜야 하는 컨벤션에 그쳤던 것과 대조적으로, 이 규칙만은 실제로 뚫리지 않는 강제 수단을 가지고 있었다.
