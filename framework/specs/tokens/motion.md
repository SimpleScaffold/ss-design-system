# 모션 토큰 스펙 (Motion)

> 출처: `talk/script.md`에는 별도로 다루지 않는 주제 — `elevation.md`, `token-architecture.md`와 같은 승격 경로다. 이 저장소가 조사한 여러 시스템이 모션을 독립된 토큰 축으로 다룬다는 근거로 승격했다: `framework/adapters/material/layout.md`(`material-web` 소스에 `_md-sys-motion.scss`가 실존함을 확인), `references/design-systems/fluent/README.md`(토큰 원자료에 `curves.ts`/`durations.ts` 존재), `references/design-systems/apple-hig/README.md`(Motion Foundations — 목적 있는 모션과 대체 수단), `references/ai-agent-workflows/README.md`(taste-skill의 `MOTION_INTENSITY` 다이얼). 실제 값(ms, easing 곡선)은 각 어댑터가 채운다 — 이 스펙은 값을 정하지 않는다.

## 1. 왜 토큰인가

전환 속도가 컴포넌트마다, 파일마다 제각각이면 같은 화면인데도 "어떤 건 빠르고 어떤 건 느리다"는 인상을 준다. 색상·간격을 토큰화하는 것과 같은 이유로, 모션도 컴포넌트가 직접 ms 값을 적지 않고 미리 정의한 토큰을 참조하게 한다.

## 2. 두 축 — Duration / Easing

모션 토큰은 최소 두 축으로 구성한다.

- **Duration(지속 시간)** — 전환이 얼마나 걸리는지.
- **Easing(가속 곡선)** — 얼마나 빠르게 시작해서 얼마나 부드럽게 끝나는지.

두 축을 분리해서 정의해야, "이 요소는 빠르게 사라지지만 부드럽게 나타난다"처럼 진입/이탈에 다른 곡선을 조합해 쓸 수 있다.

## 3. 최소 단계로 시작

`radius.md` §1, `elevation.md` §3과 같은 원칙 — 처음부터 세분화하지 않는다. Duration은 짧음/보통/느림 3단계면 대부분의 인터랙션(호버, 토글, 다이얼로그 진입)을 커버한다. 필요가 커지면 그때 단계를 늘리되, 단계마다 어떤 상호작용에 쓰는지 명시적으로 고정한다(`radius.md` §3과 같은 원칙).

## 4. 목적 있는 모션만 사용한다

모션은 장식이 아니라 **상태 변화나 위치 관계를 전달하는 수단**일 때만 쓴다.

- 무엇이 나타나고 사라지는지(진입/이탈), 무엇이 어디서 왔는지(위치 이동)를 설명하는 모션은 사용성을 높인다.
- 정보 전달과 무관하게 화면을 화려하게 보이려는 모션은 오히려 실제 상태 변화를 알아채기 어렵게 만든다 — 모든 요소가 항상 움직이면 "지금 이것만 바뀌었다"는 신호가 묻힌다.

## 5. 모션 대체 수단을 제공한다

- 사용자가 시스템 설정에서 모션을 줄이도록(`prefers-reduced-motion`) 요청했다면 이를 존중한다 — 전환을 즉시 처리하거나 최소한으로 줄인다.
- 모션이 없어도 정보가 전달되어야 한다 — 모션 하나에만 의존해 상태 변화를 표현하지 않는다(§4의 "정보 전달" 목적과 같은 이유로, 색상 단독 사용을 금지하는 `validation/accessibility-checklist.md` §2·`tokens/states.md` §4와 같은 원칙).

## 토큰화

```css
:root {
  --motion-duration-fast: 150ms;
  --motion-duration-base: 250ms;
  --motion-duration-slow: 400ms;

  --motion-easing-standard: cubic-bezier(0.2, 0, 0, 1);
  --motion-easing-enter: cubic-bezier(0, 0, 0.2, 1);
  --motion-easing-exit: cubic-bezier(0.4, 0, 1, 1);
}

@media (prefers-reduced-motion: reduce) {
  :root {
    --motion-duration-fast: 0ms;
    --motion-duration-base: 0ms;
    --motion-duration-slow: 0ms;
  }
}
```
