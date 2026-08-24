# Ant Design Radius 토큰 매핑

> 공통 스펙: [`framework/specs/tokens/radius.md`](../../specs/tokens/radius.md)
> 소스: [`shared/genRadius.ts`](https://github.com/ant-design/ant-design/blob/master/components/theme/themes/shared/genRadius.ts) (실제 코드 직접 확인 및 계산 검증)

## 공통 스펙을 정확히 구현한 사례 — "하나의 값 → 규칙 기반 확장"

공통 스펙의 권장 흐름("처음엔 하나의 값(`radius-base`)만 쓰고, 필요해지면 배수 관계를 유지하며 단계를 늘려라")을 Ant Design은 **`borderRadius` 시드값 1개 → if/else 구간별 규칙으로 4단계 자동 파생**하는 방식으로 정확히 구현하고 있다. 세 어댑터 중 공통 스펙 원문과 가장 가까운 사례.

## 실제 값 (seed `borderRadius: 6`, 직접 계산 검증)

| 토큰 | 값 | 파생 규칙 |
| --- | --- | --- |
| `borderRadiusXS` | 2px | seed≥6 → `2` |
| `borderRadiusSM` | 4px | 5≤seed<7 → `4` |
| **`borderRadius`(기본)** | **6px** | seed 그대로 |
| `borderRadiusLG` | 8px | 6≤seed<16 → `seed+2` |
| `borderRadiusOuter` | 4px | 4<seed<8 → `4` |

## 파생 규칙의 특징 — 구간별 분기(중간값에서 "안전값"으로 수렴)

KRDS(컨테이너 높이 × 0.125 계산식)나 Material(고정 7단계 테이블)과 달리, Ant Design은 **seed 값이 바뀌어도 극단으로 치우치지 않도록 구간마다 상한/하한을 clamp** 한다.

```
seed >= 16  →  borderRadiusSM = 8 (더 이상 커지지 않음)
seed >= 16  →  borderRadiusLG = 16 (더 이상 커지지 않음)
```

→ 디자이너가 seed를 극단적으로 크게 설정해도(예: 20) 전체 시스템이 지나치게 둥글어지지 않도록 안전장치가 내장돼 있다 — 공통 스펙에는 없는 "폭주 방지" 개념으로, 다른 어댑터를 만들 때도 참고할 만한 설계.

## 세 시스템 비교

| | KRDS | Material | Ant Design |
| --- | --- | --- | --- |
| 입력 방식 | 컴포넌트 크기 → 계산식 | 고정 7단계 테이블 | Seed 1개 → 조건부 분기 |
| 확장 방향 | 컴포넌트별로 이미 결정됨 | 디자이너가 표에서 선택 | Seed 값 하나만 바꾸면 전체 재계산 |
| 폭주 방지 | 최댓값 12px 하드 컷 | 없음(단계가 고정이라 불필요) | 구간별 clamp |

## 토큰화

```
radius-xs: 2px
radius-sm: 4px
radius:    6px   /* 기본 — button, input, card 등 대부분의 컴포넌트 */
radius-lg: 8px
```
