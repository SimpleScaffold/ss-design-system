# shadcn 색상 토큰 매핑

> 공통 스펙: [`framework/specs/tokens/colors.md`](../../specs/tokens/colors.md)
> 소스: [ui.shadcn.com — Theming](https://ui.shadcn.com/docs/theming)

## 공통 스펙과의 관계 — 매핑이 아니라 원본

다른 어댑터는 공통 스펙(색상 배분 규칙)을 실제 시스템 값으로 "채워 넣는" 방향이다. shadcn은 반대다 — 공통 스펙 `colors.md` §9("시맨틱 이름 + oklch + `:root`/`.dark`")가 처음부터 shadcn의 계약을 그대로 가져온 것이다. 그래서 이 문서는 값을 새로 매핑하지 않고, **shadcn 공식 문서가 실제로 규정하는 것과 규정하지 않는 것**을 확인한다.

## 실제 값 — 공식 기본 테마 (`:root`)

[ui.shadcn.com/docs/theming](https://ui.shadcn.com/docs/theming)에 실린 기본 테마 전체:

```css
:root {
  --radius: 0.625rem;
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.145 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0 0);
  --secondary-foreground: oklch(0.205 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --accent: oklch(0.97 0 0);
  --accent-foreground: oklch(0.205 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --border: oklch(0.922 0 0);
  --input: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);
  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);
  --sidebar: oklch(0.985 0 0);
  --sidebar-foreground: oklch(0.145 0 0);
  --sidebar-primary: oklch(0.205 0 0);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.97 0 0);
  --sidebar-accent-foreground: oklch(0.205 0 0);
  --sidebar-border: oklch(0.922 0 0);
  --sidebar-ring: oklch(0.708 0 0);
}
```

`.dark`는 새 팔레트가 아니라 같은 이름의 재배정이다(공통 스펙 §12와 동일 원칙) — 예: `--background`가 `oklch(1 0 0)`(흰색)에서 `oklch(0.145 0 0)`(거의 검정)으로, `--primary`가 `oklch(0.205 0 0)`에서 `oklch(0.922 0 0)`으로 뒤집힌다.

이 저장소의 [`examples/tokens/tokens.css`](../../../examples/tokens/tokens.css)는 이 기본 테마를 그대로 기준값으로 쓰되, `--chart-*`만 프로젝트 기본 테마(chroma 0, 무채색)에 맞춰 회색조로 바꿨다 — 공통 스펙 §9가 "브랜드 어댑터는 primitive만 바꾸고 이름은 바꾸지 않는다"고 규정한 대로다.

## 공통 스펙에 없는 shadcn 고유 항목

- **시맨틱 = 원시값 (2-tier)** — 공식 기본 테마는 `--primary`에 `oklch(...)` 값을 직접 넣는다. 공통 스펙 §3·§9가 말하는 "Primitive는 참조 전용, 컴포넌트는 시맨틱만 쓴다"는 3-tier 구조가 아니라, shadcn 자체는 시맨틱 토큰 한 겹만 있는 2-tier가 기본값이다. 브랜드 색이 여러 개거나 프로그래밍적으로 팔레트를 파생해야 하는 프로젝트는 이 위에 원시 팔레트 계층을 직접 얹어야 한다 — 실제 확장 사례는 [`examples/shadcn-case/token-architecture.md`](../../../examples/shadcn-case/token-architecture.md) 참고.
- **`@theme inline`** — `:root`/`.dark`에 정의한 시맨틱 변수만으로는 `bg-primary` 같은 Tailwind 유틸리티가 생기지 않는다. `@theme inline { --color-primary: var(--primary); }`처럼 한 번 더 브리지해야 한다. `inline` 키워드가 핵심 — 값을 빌드 시점에 고정하지 않고 `var()` 참조로 남기므로, `.dark`가 실행되는 순간 유틸리티 클래스도 같이 바뀐다.
- **`--destructive-foreground` 부재** — 최신 shadcn 기본 테마는 `--destructive` 위에 올라가는 전경색 토큰을 별도로 두지 않는다(다른 `-foreground` 쌍과 다른 점). 이 대비를 직접 관리해야 하는 프로젝트는 확장해서 추가한다.

## 토큰화 예시

새 프로젝트에 shadcn 계약을 그대로 적용할 때 최소 단위:

```css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --border: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-destructive: var(--destructive);
  --color-border: var(--border);
  --color-ring: var(--ring);
}
```

컴포넌트는 `bg-primary text-primary-foreground` 처럼 이름으로만 참조하고, `oklch(...)` 값은 이 두 블록 밖으로 나가지 않는다.
