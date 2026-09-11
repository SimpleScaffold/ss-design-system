# 색 — 고정 규칙

> 출처: [`framework/specs/tokens/colors.md`](../../../../framework/specs/tokens/colors.md), [`framework/specs/tokens/elevation.md`](../../../../framework/specs/tokens/elevation.md) §1(배경 레이어와 같은 개념), [`prompts/framework/color-tokens.md`](../../../../prompts/framework/color-tokens.md). 값이 아니라 규칙만 담는다 — 실제 값은 [`../변동/colors.md`](../변동/colors.md). 팔레트를 고를 사이트는 [`references/tools/design-sites/`](../../../../../references/tools/design-sites/README.md).

1. **면적 비율은 60 / 30 / 10.** 배경(`--background`) 60%, 구분 영역(`--card`·`--muted`) 30%, Primary 강조 10%.
2. **팔레트는 primitive → semantic 2단계로 만든다.** primitive는 색상각·채도를 고정하고 명도만 이동한 단계 팔레트, semantic은 그 primitive를 가리키기만 한다(`--primary: var(--color-primary-50)`). 컴포넌트는 semantic 이름만 참조하고 primitive를 직접 쓰지 않는다(`examples/shadcn-case/token-architecture.md` "컴포넌트는 원시 값을 절대 보지 않는다").
3. **팔레트는 6개다.** neutral(흑백, chroma 0) 1개 + primary·destructive·success·warning·info(인터랙티브·상태색) 5개.
4. **시맨틱 토큰 이름은 고정이다.** `--background --foreground --card --popover --primary --secondary --muted --accent --destructive --success --warning --info --border --input --ring --chart-1…5 --sidebar*`. 새 이름을 만들지 않는다.
5. **값은 oklch로 적는다.** hex/hsl/rgb를 토큰 값으로 쓰지 않는다.
6. **뉴트럴은 chroma 0.** 브랜드색은 `--primary`(필요 시 `--sidebar-primary`)의 primitive에만 넣는다.
7. **대비는 4.5:1 이상 (WCAG AA).** `-foreground` 짝은 이 기준을 만족하는 밝기 쪽으로, **팔레트를 만드는 시점에** 미리 정해둔다 — 컴포넌트를 붙일 때마다 다시 고르지 않는다.
8. **Hover/Pressed는 별도 토큰이 아니라 파생값이다.** `color-mix(in oklch, var(--primary) N%, var(--foreground))` — opacity 페이드나 `--primary-hover` 같은 상태 전용 토큰을 쓰지 않는다. 팔레트가 단계(step)로 나뉘어 있다면, `N%`은 "결과가 그 단계의 실제 값과 일치하도록" 역산해서 정한다 — 감으로 고르지 않는다.
9. **상태색(Destructive/Success/Warning/Info)은 base 하나로 끝나지 않는다.** 배지·알림처럼 옅은 배경 위에 글자를 올리는 용도가 있으면, 같은 색상군 안에서 **surface(옅은 배경) / border(테두리) / text(글자)** 세 시맨틱을 추가로 정의한다. 셋 다 상태 파생이 아니라 컴포넌트가 직접 참조하는 정식 이름이므로 8번 규칙(파생 토큰 금지)과 배치되지 않는다.
10. **배경은 레이어(표면, surface)로 관리한다.** `colors.md` §6과 `elevation.md` §3을 합쳐, "오목(recessed) → 기본(base) → 카드(raised) → 팝오버(overlay) → 모달(modal)" 순으로 명도가 이동하는 표면 시맨틱을 두고, `--background/--card/--popover/--sidebar`는 그 표면을 가리키기만 한다.
11. **다크 모드는 새 팔레트가 아니다.** 같은 primitive 중 라이트 모드와 다른 단계를 가리킨다. 표면은 라이트에서 위로 갈수록 밝아지다 흰색 천장에 막히면 그림자가 이어받고, 다크에서는 반대로 위로 갈수록 밝아지는 방향을 그대로 유지한다(§12).
