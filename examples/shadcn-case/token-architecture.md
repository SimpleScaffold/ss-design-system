# 토큰 아키텍처 — 2-tier에서 3-tier로

> [`README.md`](./README.md)의 익명화 고지 참고. 아래 코드는 실제 관찰 사례를 일반화한 예시이며, 실제 프로젝트의 변수명·값을 그대로 옮긴 것이 아니다.
> 관련: [`framework/adapters/shadcn/colors.md`](../../framework/adapters/shadcn/colors.md) §공통 스펙에 없는 shadcn 고유 항목, [`framework/specs/pipeline.md`](../../framework/specs/pipeline.md)

## 문제 — shadcn 기본값은 2-tier

[`framework/adapters/shadcn/colors.md`](../../framework/adapters/shadcn/colors.md)에서 확인했듯, shadcn 공식 기본 테마는 시맨틱 토큰(`--primary`)에 `oklch(...)` 값을 직접 넣는다. 브랜드 색이 하나뿐이고 절대 안 바뀐다면 이걸로 충분하다.

하지만 실무에서는 보통 그렇지 않다 — 브랜드 색이 여러 개거나(제품 라인별로 다른 강조색), 상태 색상 계열(Danger/Warning/Success/Info)마다 명도 단계를 촘촘히 갖고 있어야 하거나, 다크모드에서 같은 역할이 다른 밝기 레벨을 가리켜야 한다. 시맨틱 토큰에 값을 직접 넣으면 이런 요구마다 값을 하드코딩하게 되고, 브랜드 색 하나를 바꿀 때 수십 군데를 손으로 고쳐야 한다.

## 해법 — 원시 팔레트 계층을 한 겹 더 둔다

실무 관찰 사례는 shadcn의 시맨틱 계층 아래에 **원시 팔레트 계층**을 추가해서 3-tier로 만든다. 시맨틱 토큰은 이제 값이 아니라 원시 토큰을 가리키는 참조가 된다.

```css
/* 1. Primitive — 색상군마다 50~950 단계, 색상각·채도는 고정하고 명도만 이동 */
:root {
  --color-primary-50: hsl(222 47% 95%);
  --color-primary-500: hsl(222 47% 50%);
  --color-primary-950: hsl(222 47% 11%);
  /* secondary, muted, accent, destructive, success, warning, info, neutral도 동일 패턴 */
}

/* 2. Semantic — shadcn 계약 이름을 그대로 쓰되, 값은 항상 primitive 참조 */
:root {
  --background: var(--color-neutral-0);
  --foreground: var(--color-neutral-950);
  --primary: var(--color-primary-500);
  --primary-foreground: var(--color-neutral-0);
  --destructive: var(--color-destructive-500);
}

.dark {
  --background: var(--color-neutral-950);
  --foreground: var(--color-neutral-0);
  --primary: var(--color-primary-200);   /* 다크모드에서는 더 밝은 단계를 가리킨다 */
  --primary-foreground: var(--color-neutral-900);
}

/* 3. Bridge — shadcn과 동일하게 @theme inline으로 Tailwind 유틸리티에 노출 */
@theme inline {
  --color-background: var(--background);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
}
```

`.dark`가 `--primary`를 `--color-primary-500`(중간 밝기)에서 `--color-primary-200`(밝은 단계)으로 재배정하는 부분이 핵심이다 — 색을 새로 만드는 게 아니라, 이미 있는 팔레트에서 "어느 단계를 가리킬지"만 바꾼다. 공통 스펙 [`colors.md`](../../framework/specs/tokens/colors.md) §12("고대비/다크 모드는 별도의 새 팔레트가 아니다")와 정확히 같은 원칙이다.

## 컴포넌트는 원시 값을 절대 보지 않는다

컴포넌트 클래스는 `bg-primary`처럼 항상 시맨틱 이름만 참조한다. `bg-[var(--color-primary-500)]`처럼 원시 토큰을 직접 쓰는 건 규칙 위반이다 — 브랜드 색을 바꿀 때 원시 팔레트 값만 갈아끼우면 되고, 컴포넌트 코드는 하나도 안 건드려도 되는 게 이 구조를 두는 이유이기 때문이다. 이 원칙이 지켜지는지는 grep 한 줄로도 확인 가능하다(`--color-{family}-{step}` 형태를 컴포넌트 소스에서 직접 참조하는 곳이 있는지).

이 구조를 `framework/specs/pipeline.md`의 5단계에 대응시키면, "2. 어댑터"와 "3. 토큰 파일" 사이에 원시 팔레트라는 절반 단계가 하나 더 낀 것과 같다 — 규칙(공통 스펙)은 그대로고, 그 규칙을 코드로 옮기는 과정에서 실무가 한 겹을 추가한 사례다.

## 다크모드가 런타임에 전환되는 이유

이 구조가 동작하려면 두 가지가 맞아떨어져야 한다.

1. **`@theme inline`** — `@theme`(inline 없이)으로 쓰면 Tailwind가 빌드 시점에 값을 스냅샷 떠서 굳혀버린다. `inline`을 붙여야 `bg-primary` 유틸리티가 `var(--primary)` 참조로 남아, `.dark` 클래스가 붙는 순간 값이 같이 바뀐다.
2. **클래스 전환 메커니즘** — Tailwind v4의 CSS-first 문법에서는 `@custom-variant dark (&:is(.dark *));`로 `dark:` variant를 등록한다. 이러면 다크모드는 미디어쿼리가 아니라 `<html>` 요소의 `.dark` 클래스 유무로 결정되고, 클래스를 토글하는 것은 별도의 작은 스크립트/컴포넌트(테마 프로바이더)가 담당한다 — `localStorage`에 사용자 선택을 저장하고, 페이지 로드 시 그 값 또는 시스템 설정(`prefers-color-scheme`)을 읽어 `documentElement.classList`에 반영하는 식이다.

이 두 조건이 갖춰지면, 다크모드 전환은 "CSS 파일을 새로 로드하는 것"이 아니라 "클래스 하나를 토글하는 것"이 되고, 토큰 계층 덕분에 전환 대상은 `.dark` 블록 하나로 좁혀진다.
