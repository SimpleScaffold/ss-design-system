# KRDS 레이아웃 / 간격 토큰 매핑

> 공통 스펙: [`framework/specs/tokens/layout.md`](../../specs/tokens/layout.md), [`framework/specs/tokens/spacing.md`](../../specs/tokens/spacing.md)
> 소스: [KRDS 스타일 가이드 — 레이아웃](https://www.krds.go.kr/html/site/style/style_05.html)

## 1. 최대 너비 → 1200px (표준형 고정 콘텐츠 영역)

공통 스펙은 "27인치 화면 기준으로 정하라"는 원칙만 제시하는데, KRDS는 실제 값을 확정해뒀다.

- 표준형 스타일: 콘텐츠 영역 최대 **1200px** 고정.
- 판단 로직: `스크린 마진(24px) + 콘텐츠 너비(1200px)` vs 디바이스 폭(1248px 기준) — 디바이스가 더 넓으면 콘텐츠 영역 유지, 좁으면 축소.
- 사이드 메뉴 포함 시에도 전체 폭은 동일하게 1200px 유지.

## 2. 반응형 컬럼 수 · Gutter · 브레이크포인트

공통 스펙의 표(Desktop/Tablet/Mobile 3단)보다 KRDS가 한 단계 더 세분화되어 있다 — 표준형 스타일은 **4단계** 브레이크포인트(xsmall 제외)를 쓴다.

| Breakpoint | Viewport | 컬럼 수 | Gutter | 최소 스크린 마진 |
| --- | --- | --- | --- | --- |
| small | 360px~ | 4 | 16px | 16px |
| medium | 768px~ | 8 | 16px | 24px |
| large | 1024px~ | 12 | 24px | 24px |
| xlarge | 1280px~ | 12 | 24px | 24px |

> 공통 스펙 표의 Desktop(1440px/12~16col) · Tablet(768px/8~12col) · Mobile(390px/4~6col)과 방향성은 같지만, KRDS는 컬럼 수를 브레이크포인트별로 **고정 값**으로 못박아 관리 부담을 줄인다 (공통 스펙은 범위로 열어둠).

## 3. 스크린 마진 / 컬럼 / 가터 정의

- **Screen margin**: 화면 양 끝 여백. 모바일 터치 오작동 방지 목적 — small 16px, medium/large 24px 최소.
- **Column**: 콘텐츠 수직 분할 영역. 화면 크기에 따라 백분율로 유동적, 한 화면에서 컬럼 수 혼용 금지.
- **Gutter**: 컬럼 사이 간격. 컬럼 너비의 절반 이하로 제한.

공통 스펙의 "요소는 반드시 Column 경계에서 시작/끝나야 한다" 규칙은 KRDS 원문에는 명시적으로 없지만 동일한 그리드 정렬 원칙으로 함께 적용 가능.

## 4. 서브 페이지 레이아웃 (사이드바 패턴)

공통 스펙 "사이드바 제외 나머지를 콘텐츠 영역으로" 규칙의 구체 사례:

- Header / Left menu / Main contents / Right menu / Footer 5영역 구조.
- **왼쪽 메뉴**: 깊은 계층 탐색(사이드 메뉴)에 사용, large 이상(1024px~)에서만 적용.
- **오른쪽 메뉴**: 콘텐츠 내 탐색(플로팅) 또는 도움 패널(우측에서 펼쳐짐) 용도 — 사이드 메뉴와 역할이 다르다.
- 좌우 메뉴를 동시에 쓰는 경우 작은 화면에서는 콘텐츠 가독성을 위해 배치를 조정(순차 노출 등).

## 5. 간격(Spacing) → 8-point grid + Primitive Number 스케일

공통 스펙의 `space-1(4px, 예외) ~ space-7(48px)` 8px 기준 스케일과 원칙적으로 동일 — KRDS는 이를 `number` 프리미티브 토큰으로 훨씬 넓은 범위까지 정의해둔다(1rem = 10px 기준).

| 토큰 | 값(rem→px) |
| --- | --- |
| number-2 | 0.2rem = 2px |
| number-3 | 0.4rem = 4px |
| number-4 | 0.6rem = 6px |
| number-5 | 0.8rem = 8px |
| number-6 | 1rem = 10px |
| number-7 | 1.2rem = 12px |
| number-8 | 1.6rem = 16px |
| number-9 | 2rem = 20px |
| number-10 | 2.4rem = 24px |
| number-12 | 3.2rem = 32px |
| number-14 | 4rem = 40px |
| number-16 | 4.8rem = 48px |

> 공통 스펙 `space-2(8px)/space-3(16px)/space-4(24px)/space-6(40px)`가 KRDS의 `number-5/8/10/14`에 각각 대응 — 값 자체는 호환되지만 KRDS는 4px 단위(짝수)까지 더 촘촘하게 쪼갠다.

- **Gap**: 컴포넌트 사이 간격(카드, 리스트 항목 등).
- **Padding**: 컴포넌트 내부 여백.
- 반응형: PC/Mobile 두 기기 유형 기준으로 각 값이 달라짐 — 예) 카드 내부 패딩 `padding-card`가 large(40px)~xsmall(16px)까지 4단계로 반응형 정의됨.

## 토큰화 예시

```css
:root {
  --layout-max-width: 1200px;
  --layout-screen-margin: 16px; /* small 기준 최소값 */
  --layout-gutter: 16px;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 16px;
  --space-4: 24px;
  --space-5: 32px;
  --space-6: 40px;
  --space-7: 48px;
}

@media (min-width: 768px) {
  :root {
    --layout-screen-margin: 24px;
    --layout-gutter: 16px;
  }
}

@media (min-width: 1024px) {
  :root {
    --layout-gutter: 24px;
  }
}
```
