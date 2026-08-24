# Ant Design 레이아웃 / 간격 토큰 매핑

> 공통 스펙: [`framework/specs/tokens/layout.md`](../../specs/tokens/layout.md), [`framework/specs/tokens/spacing.md`](../../specs/tokens/spacing.md)
> 소스: [`shared/genSizeMapToken.ts`, `genControlHeight.ts`](https://github.com/ant-design/ant-design/tree/master/components/theme/themes/shared) (실제 코드 직접 확인)

## 공통 스펙과 가장 가깝게 일치하는 사례

세 어댑터(KRDS/Material/Ant Design) 중 간격 스케일이 공통 스펙 `space-1~7`(4/8/16/24/32/40/48)과 **가장 근접하게 겹친다.**

## 1. Size 스케일 — Seed 2개(`sizeUnit`, `sizeStep`)로 9단계 자동 파생

```ts
sizeUnit: 4, sizeStep: 4   // 시드값
```

| 토큰 | 계산식 | 값 | 공통 스펙 대응 |
| --- | --- | --- | --- |
| sizeXXS | unit×(step-3) | 4px | `space-1`(예외 허용값)과 정확히 일치 |
| sizeXS | unit×(step-2) | 8px | `space-2`(기본 단위)와 정확히 일치 |
| sizeSM | unit×(step-1) | 12px | (공통 스펙엔 없는 중간값) |
| **size** | unit×step | **16px** | `space-3`(16px)과 정확히 일치 |
| sizeMD | unit×(step+1) | 20px | (공통 스펙엔 없는 중간값) |
| sizeLG | unit×(step+2) | 24px | `space-4`(24px)와 정확히 일치 |
| sizeXL | unit×(step+4) | 32px | `space-5`(32px)와 정확히 일치 |
| sizeXXL | unit×(step+8) | 48px | `space-7`(48px)와 정확히 일치 |

→ 공통 스펙의 "8px 기본, 4px 예외 허용" 원칙을 그대로 계승하면서, 중간 단계(12px, 20px)를 추가로 채워 넣은 형태 — 셋 중 어댑터 작업이 가장 수월한 시스템.

## 2. 컴포넌트 높이(Control Height) — Seed 1개 → 3단계 배율 파생

```ts
controlHeight: 32   // 기본 버튼/인풋 높이(seed)
controlHeightXS = controlHeight × 0.5   = 16px
controlHeightSM = controlHeight × 0.75  = 24px
controlHeightLG = controlHeight × 1.25  = 40px
```

공통 스펙에는 없는 항목이지만, "컴포넌트 크기 3단계(sm/md/lg)"를 만들 때 **배수 관계로 파생**하는 패턴 자체는 공통 스펙 radius 항목의 "배수 관계 유지 권장"과 같은 철학 — 색상/Radius뿐 아니라 사이즈 체계 전반에 동일한 원칙을 적용한 사례로 인용 가능.

## 3. 그리드 시스템 — 24 컬럼 고정

Ant Design의 `Row`/`Col` 그리드는 브레이크포인트와 무관하게 **항상 24컬럼** 기준이다(컬럼 수 자체는 안 바뀌고, 각 컬럼이 차지하는 `span` 값만 브레이크포인트별로 바뀜). 공통 스펙 표(브레이크포인트마다 컬럼 수 자체가 4→8→12로 바뀌는 방식)와는 다른 접근 — "컬럼 수를 고정하고 span을 반응형으로 바꾸는" 방식도 유효한 대안이라는 사례.

| 브레이크포인트 | 최소 너비 |
| --- | --- |
| xs | 0 |
| sm | 576px |
| md | 768px |
| lg | 992px |
| xl | 1200px |
| xxl | 1600px |

## 토큰화

```
space-xxs: 4px
space-xs:  8px    /* 기본 단위 */
space-sm:  12px
space-md:  16px
space-lg:  24px
space-xl:  32px
space-xxl: 48px
```
