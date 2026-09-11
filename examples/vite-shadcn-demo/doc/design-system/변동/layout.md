# 레이아웃 — 이 프로젝트가 채운 값

> 규칙: [`../고정/layout.md`](../고정/layout.md) · 실제 코드: [`../../src/App.tsx`](../../src/App.tsx)

## 최대 너비 · Gutter

```
max-width: 1120px   /* <main className="mx-auto max-w-[1120px] ..."> */
gutter:    24px      /* px-6 */
```

## 반응형 컬럼 수 — Desktop 16 · Tablet 12 · Mobile 6

고정/layout.md 3번의 선택지 중 이 프로젝트가 고른 값. Tailwind 기본 브레이크포인트에 매핑했다.

| 구간 | layout.md 기준 너비 | 실제 적용 브레이크포인트 | 컬럼 수 |
| --- | --- | --- | --- |
| Mobile | 390px | 기본(prefix 없음) | 6 |
| Tablet | 768px | `md:`(768px, layout.md 기준과 정확히 일치) | 12 |
| Desktop | 1440px | `xl:`(1280px — Tailwind 기본값 중 1440에 가장 가까움) | 16 |

실제 코드(`src/App.tsx` "레이아웃 컬럼" 섹션):

```tsx
<div className="grid grid-cols-6 gap-1 md:grid-cols-12 xl:grid-cols-[repeat(16,minmax(0,1fr))]">
```

`grid-cols-16`은 Tailwind 기본 스케일에 없어(기본은 1~12) `repeat(16,minmax(0,1fr))` 임의값 문법을 썼다. Playwright로 1280px(Desktop)·800px(Tablet)·390px(Mobile) 세 너비에서 실제로 16/12/6열이 되는 것을 스크린샷으로 확인했다.

## 단일 컬럼 화면이라 안 쓴 것

이 데모는 사이드바 없는 단일 컬럼 화면이라, 고정/layout.md의 "사이드바가 있는 경우" 규칙은 해당하지 않는다. 통계 카드 3개는 `grid sm:grid-cols-3`로 Tablet 이상에서 3열, 그 아래에서는 1열로 접혀 "Gutter 영역에서 어정쩡하게 끊기지 않는다"는 원칙을 지킨다.
