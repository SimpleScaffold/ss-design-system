# 색 토큰 생성 프롬프트

> 용도: 새 프로젝트·어댑터·데모·AI 컨텍스트에서 **색 토큰을 만들 때** 쓰는 기준 프롬프트. 출력 형식은 [`examples/tokens/tokens.css`](../../examples/tokens/tokens.css)와 [`framework/specs/tokens/colors.md`](../../framework/specs/tokens/colors.md) §9와 같다.
>
> 다른 프롬프트(데모, spec-authoring, skills)는 색을 다룰 때 이 문서를 가리키거나 아래 프롬프트를 그대로 포함한다. 여기서 벗어난 `--color-primary`, `Primary-50`, hex를 public API로 쓰지 않는다.

## 프롬프트

```
색 토큰을 만들 때는 아래 계약을 그대로 따른다. 이름·형식을 바꾸거나 줄이지 마라.

1. 출발점은 examples/tokens/tokens.css 의 :root / .dark 블록이다. 뉴트럴은 chroma 0인 oklch 값을 유지한다.
2. 값은 반드시 oklch(...) 로 적는다. hex/hsl/rgb를 토큰 값으로 쓰지 마라. 브랜드 hex가 있으면 oklch로 변환한 뒤 --primary 에만 넣는다.
3. 시맨틱 이름은 고정이다. 새 이름을 만들지 마라.
   --background --foreground
   --card --card-foreground
   --popover --popover-foreground
   --primary --primary-foreground
   --secondary --secondary-foreground
   --muted --muted-foreground
   --accent --accent-foreground
   --destructive
   --border --input --ring
   --chart-1 --chart-2 --chart-3 --chart-4 --chart-5
   --radius
   --sidebar --sidebar-foreground
   --sidebar-primary --sidebar-primary-foreground
   --sidebar-accent --sidebar-accent-foreground
   --sidebar-border --sidebar-ring
4. 면적 비율: 60% --background / 30% --card·--muted / 10% --primary.
5. 브랜드색은 --primary (필요 시 --sidebar-primary)만 덮어쓴다. --primary-foreground 는 그 위 글자이며 명암비 4.5 이상을 만족하는 쪽(밝은 면 또는 어두운 면)을 고른다.
6. --color-primary-50 같은 primitive 이름 자체는 만들어도 된다 — 다만 컴포넌트 CSS·AI 프롬프트 등 바깥에서는 절대 직접 참조하지 마라. Semantic(--primary 등)만 그 primitive를 가리키고, 그 바깥은 항상 Semantic만 본다(framework/specs/tokens/token-architecture.md §3·§4). --primary-hover 처럼 상태 전용 이름을 새로 만드는 것도 금지 — 상태는 파생값으로 표현한다:
   Hover = color-mix(in oklch, var(--primary) 88%, var(--foreground))
   Pressed = color-mix(in oklch, var(--primary) 76%, var(--foreground))
7. 다크 모드는 새 팔레트가 아니다. 같은 이름을 .dark 에서 재배정한다. 배경은 어두운 L, 텍스트는 밝은 L.
8. Success/Warning/Info가 필요하면 --success / --warning / --info (+ -foreground)로만 확장한다. --destructive 와 값을 공유하지 마라. 배지·알림처럼 옅은 배경 위에 글자를 올려야 하면 그 상태색에 -surface / -border / -text 세 시맨틱을 추가한다(예: --destructive-surface, --destructive-border, --destructive-text) — 이것도 6번의 파생 금지 대상이 아니라 컴포넌트가 직접 참조하는 정식 이름이다(framework/specs/tokens/colors.md §7).
9. 무드 액센트는 --accent 이다. 상태색과 HEX를 공유하지 마라.
10. 출력은 :root { ... } 와 .dark { ... } 두 블록이다. 컴포넌트 CSS에는 var(--primary) 처럼 시맨틱 이름만 쓴다.

브랜드 Primary (있으면 oklch 또는 변환할 hex): [여기에 넣는다]
```

## 관련

- 스펙: [`framework/specs/tokens/colors.md`](../../framework/specs/tokens/colors.md) §1·§5·§7·§9·§12
- 기준 파일: [`examples/tokens/tokens.css`](../../examples/tokens/tokens.css)
- 컴포넌트 계약: [`framework/specs/components/component-contract.md`](../../framework/specs/components/component-contract.md)
- 적용 스킬: [`framework/skills/plan.md`](../../framework/skills/plan.md), [`transform.md`](../../framework/skills/transform.md)
