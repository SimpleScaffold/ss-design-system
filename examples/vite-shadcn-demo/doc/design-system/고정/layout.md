# 레이아웃 — 고정 규칙

> 출처: [`framework/specs/tokens/layout.md`](../../../../framework/specs/tokens/layout.md).

1. **최대 콘텐츠 너비를 먼저 정한다.** 화면이 그 이상 넓어지면 콘텐츠 폭은 고정하고 양옆 여백만 늘어난다.
2. **Gutter는 16px 또는 24px.** 요소는 반드시 Column 경계에서 시작·끝나야 하고, Gutter 영역에서 어정쩡하게 끊기지 않는다.
3. **반응형 컬럼 수는 셋 중 하나를 고른다.** Desktop(1440px 기준) 12 또는 16, Tablet(768px) 8 또는 12, Mobile(390px) 4 또는 6 — 2·3으로 나누기 쉬운 배수를 우선한다.
4. **반응형 기준 해상도 3개를 각각 확인한다.** Mobile 390px · Tablet 768px · Desktop 1440px — 화면을 단순히 줄여보는 것으로 대체하지 않는다.
