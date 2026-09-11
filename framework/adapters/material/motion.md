# Material Design 3 모션 토큰 매핑

> 공통 스펙: [`framework/specs/tokens/motion.md`](../../specs/tokens/motion.md)
> 소스: [`material-web` tokens `_md-sys-motion.scss`](https://github.com/material-components/material-web/blob/main/tokens/versions/v0_192/_md-sys-motion.scss) (실제 값 직접 확인, 2026-01 기준)

## 공통 스펙과의 관계 — "최소 3단계" 권장을 4단계 × 4단계로 확장

공통 스펙 §3은 "짧음/보통/느림 최소 3단계로 시작"하라고 권장한다. Material은 이미 성숙한 시스템이라 Duration을 **short/medium/long/extra-long 4단계 × 각 4단계(총 16개)**로, Easing을 **standard/emphasized/legacy 3계열 × 기본/가속/감속(총 10개)**으로 세분화해뒀다 — `radius.md`에서 KRDS·Material이 공통 스펙의 확장 경로를 이미 끝까지 밟아둔 것과 같은 패턴.

## 실제 값

### Duration — 4단계 × 4단계 (16개)

| 단계 | 1 | 2 | 3 | 4 |
| --- | --- | --- | --- | --- |
| short | 50ms | 100ms | 150ms | 200ms |
| medium | 250ms | 300ms | 350ms | 400ms |
| long | 450ms | 500ms | 550ms | 600ms |
| extra-long | 700ms | 800ms | 900ms | 1000ms |

공통 스펙의 "짧음/보통/느림" 3단계에 대응하면 대략 `short2`(100ms) / `medium1`(250ms) / `long2`(500ms) 근처가 각 단계의 대표값이다.

### Easing — 3계열 × 3가지(기본/가속/감속)

| 계열 | 기본 | 가속(Accelerate) | 감속(Decelerate) |
| --- | --- | --- | --- |
| Standard | `cubic-bezier(0.2, 0, 0, 1)` | `cubic-bezier(0.3, 0, 1, 1)` | `cubic-bezier(0, 0, 0, 1)` |
| Emphasized | `cubic-bezier(0.2, 0, 0, 1)` | `cubic-bezier(0.3, 0, 0.8, 0.15)` | `cubic-bezier(0.05, 0.7, 0.1, 1)` |
| Legacy(M2 호환) | `cubic-bezier(0.4, 0, 0.2, 1)` | `cubic-bezier(0.4, 0, 1, 1)` | `cubic-bezier(0, 0, 0.2, 1)` |

여기에 `easing-linear`(`cubic-bezier(0, 0, 1, 1)`, 등속) 1개가 별도로 더 있다.

- **기본(진행 중)**: 시작·끝 모두 부드럽게.
- **가속(Accelerate)**: 화면을 떠나는 요소(이탈)에 쓴다 — 빠르게 사라져야 다음 콘텐츠에 방해가 안 된다.
- **감속(Decelerate)**: 화면에 들어오는 요소(진입)에 쓴다 — 급하게 나타나면 시선을 놀라게 한다.

→ 공통 스펙 §2("두 축 — Duration/Easing")가 왜 두 축을 분리해서 정의해야 하는지의 실제 근거: Material은 "진입에는 감속, 이탈에는 가속"이라는 하나의 원칙을 Standard/Emphasized 두 계열 모두에 일관되게 적용한다.

## 공통 스펙에 없는 이 시스템 고유 항목

- **Emphasized vs Standard 계열 분리**: Standard는 일반적인 상태 전환(호버, 토글)에, Emphasized는 사용자의 주의를 끌어야 하는 큰 전환(화면 전체 전환, 컨테이너 변형)에 쓴다 — 같은 "기본" 커브라도 목적에 따라 계열 자체를 나눈 것은 공통 스펙에 없는 개념.
- **Legacy 계열**: Material 2와의 하위 호환을 위한 계열 — 신규 프로젝트라면 Standard/Emphasized만 쓰고 Legacy는 참고하지 않아도 된다.

## 토큰화 예시

```css
:root {
  --motion-duration-fast: 100ms;   /* short2 */
  --motion-duration-base: 250ms;   /* medium1 */
  --motion-duration-slow: 500ms;   /* long2 */

  --motion-easing-standard: cubic-bezier(0.2, 0, 0, 1);
  --motion-easing-enter: cubic-bezier(0, 0, 0, 1);      /* standard-decelerate */
  --motion-easing-exit: cubic-bezier(0.3, 0, 1, 1);     /* standard-accelerate */
  --motion-easing-emphasized: cubic-bezier(0.2, 0, 0, 1);
}

@media (prefers-reduced-motion: reduce) {
  :root {
    --motion-duration-fast: 0ms;
    --motion-duration-base: 0ms;
    --motion-duration-slow: 0ms;
  }
}
```
