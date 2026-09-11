# 컴포넌트 계약 — 이 프로젝트가 채운 값

> 규칙: [`../고정/components.md`](../고정/components.md) · 실제 코드: [`../../src/components/ui/button.tsx`](../../src/components/ui/button.tsx), [`../../src/components/ui/badge.tsx`](../../src/components/ui/badge.tsx)

component-contract.md §4의 "Button" 예시 형식을 이 프로젝트의 실제 Button/Badge에 그대로 적용한 표.

## Button — Variant × State → Token

| Variant | Default | Hover | Pressed | Disabled | Focus-visible |
| --- | --- | --- | --- | --- | --- |
| Default(Primary) | `bg-primary` / `text-primary-foreground` | `color-mix(var(--primary) 77%, var(--foreground))`(다크 66%) | `color-mix(var(--primary) 55%, var(--foreground))`(다크 36%) | `opacity-50` + `pointer-events-none` | `ring-3 ring-ring/50` |
| Destructive | `bg-destructive` / `text-destructive-foreground` | 같은 패턴, 팔레트만 `--destructive` | 같은 패턴 | 동일 | `ring-3 ring-destructive/20` |
| Secondary | `bg-secondary` | `color-mix(var(--secondary), var(--foreground) 5%)` | (Pressed 별도 없음 — `active:translate-y-px`로 눌림만 표현) | 동일 | `ring-3 ring-ring/50` |
| Outline | `bg-background` + `border-border` | `bg-muted` | 동일 | 동일 | 동일 |
| Ghost | 배경 없음 | `bg-muted` | 동일 | 동일 | 동일 |

공통(Variant 무관): `radius → --radius-lg`, `padding → h-8 px-2.5`(기본 사이즈), `typography → text-sm font-medium`(→ 62.5% 루트 보정 후 14px). component-contract.md §4가 예로 든 "Danger는 Primary와 동일 패턴, 팔레트만 교체"를 그대로 구현했다 — shadcn 기본값은 Destructive Button이 opacity 기반 소프트 스타일이었는데, 이 계약대로 Primary와 같은 solid+color-mix 패턴으로 고쳤다(자세한 이유는 [`colors.md`](./colors.md) §5).

## Badge — Variant × Token

Badge는 Hover/Pressed/Disabled 축이 없다(정적으로 표시되는 상태 표시자라 §3 목록을 전부 쓸 필요는 없다 — 고정/components.md 3번 각주와 동일한 판단).

| Variant | 배경 | 글자 | 테두리 |
| --- | --- | --- | --- |
| Default | `--primary` | `--primary-foreground` | 없음 |
| Secondary | `--secondary` | `--secondary-foreground` | 없음 |
| Destructive / Success / Warning / Info | `--{name}-surface`(단계 05, 다크 100) | `--{name}-text`(단계 60, 다크 20) | `--{name}-border`(단계 10, 다크 70) |
| Outline | 없음 | `--foreground` | `--border` |
| Ghost | 없음(hover 시 `--muted`) | `--muted-foreground` | 없음 |

Destructive/Success/Warning/Info 네 variant는 shadcn 기본값(`bg-destructive/10` 같은 opacity 근사)이 아니라 [`colors.md`](./colors.md) §4의 surface/border/text 팔레트 단계를 그대로 참조한다 — 새 hex를 만들지 않는다는 고정/components.md 4번을 지키면서, opacity보다 실제 대비가 검증된 값을 쓴 것.
