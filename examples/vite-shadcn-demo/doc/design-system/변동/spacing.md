# 간격 — 이 프로젝트가 채운 값

> 규칙: [`../고정/spacing.md`](../고정/spacing.md) · 실제 코드: [`../../src/index.css`](../../src/index.css), [`../../src/App.tsx`](../../src/App.tsx)

## 1. 일반 여백 — 8px 배수 감사

별도의 `--space-*` 커스텀 프로퍼티를 새로 두지 않고, Tailwind의 spacing 스케일을 그대로 쓰되 **8px 배수 클래스만** 골라 썼다(스케일 자체가 62.5% 루트에 맞춰 보정된 것은 [`typography.md`](./typography.md) §3 참고).

| 용도 | 클래스 | 실제 값 |
| --- | --- | --- |
| 페이지 좌우 여백(Gutter) | `px-6` | 24px |
| 통계 카드 사이 간격 | `gap-4` | 16px |
| 다크모드 토글·버튼 그룹 내부 간격 | `gap-2` | 8px |

가장 얕은 depth(버튼·토글 같은 인라인 요소)에도 `gap-2`(8px) 이하로는 내려가지 않았다 — 고정/spacing.md 1번("8의 절반 이하로는 내려가지 않는다")과 맞춰 임의 값(예: `py-2.5`=10px)을 쓰지 않고 8px 배수로만 정리했다. shadcn이 자체 생성한 컴포넌트 내부 padding/gap(`button.tsx`의 `px-2.5`, `gap-1.5`, Card의 `--card-spacing:--spacing(4)`)은 벤더 기본값이라 이 감사 대상에서 제외했다 — 페이지 레이아웃(App.tsx)에서 이 프로젝트가 직접 고른 값만 검사했다.

## 2. Depth 기반 간격 스케일 (고정/spacing.md 3번)

제목 위계(H1 → 섹션 제목 → 카드 제목 → 본문)가 깊어질수록 간격이 좁아지도록, 반응형 CSS 커스텀 프로퍼티 4개를 정의했다. 전부 8의 배수다.

```css
/* src/index.css */
:root {
  --space-depth-0: 64px; /* H1 → 본문 */
  --space-depth-1: 40px; /* H2 형제(섹션) 간 */
  --space-depth-2: 32px; /* H3 형제 간 */
  --space-depth-3: 24px; /* Body 형제 간 */
}
@media (min-width: 1280px) {
  :root {
    --space-depth-0: 80px;
    --space-depth-1: 64px;
    --space-depth-2: 40px;
    --space-depth-3: 24px; /* 가장 깊은 단계는 스케일하지 않는다 */
  }
}
```

| Depth | Mobile(기본) | Desktop(1280px~) | 실제 쓰인 곳 |
| --- | --- | --- | --- |
| 0 | 64px | 80px | 헤더(H1) → 통계 카드 섹션 |
| 1 | 40px | 64px | 섹션(H2) 간 — 통계 카드, 컴포넌트 갤러리, 레이아웃 컬럼, 미디어 패턴, Dialog |
| 2 | 32px | 40px | 컴포넌트 갤러리 안 Button 블록 → Badge 블록 |
| 3 | 24px | 24px | 컴포넌트 갤러리 안 H3 제목(Button/Badge) → 그 아래 실제 목록 |

Desktop 값은 [`layout.md`](./layout.md)의 "Desktop" 브레이크포인트(1280px, Tailwind `xl:`)와 같은 기준을 쓴다 — 간격과 컬럼 수가 서로 다른 브레이크포인트를 쓰면 화면이 바뀌는 지점이 어긋나 보이기 때문이다.
