# Ant Design 타이포그래피 토큰 매핑

> 공통 스펙: [`framework/specs/tokens/typography.md`](../../specs/tokens/typography.md)
> 소스: [`shared/genFontSizes.ts`, `genFontMapToken.ts`](https://github.com/ant-design/ant-design/tree/master/components/theme/themes/shared) (실제 코드 직접 확인 및 계산 검증)

## 공통 스펙과의 근본적 차이 — 표가 아니라 "수식"으로 스케일 생성

KRDS/Material은 디자이너가 각 단계 크기를 직접 정한 **고정 테이블**이다. Ant Design은 **fontSize 시드값 1개(14)만 넣으면 지수함수로 전체 스케일을 계산**한다 — 공통 스펙 4항 "폰트도 팔레트처럼 사전 규칙을 정의"를 가장 극단적으로 자동화한 사례.

```ts
// base = 14일 때, index별 크기 = base * e^((index-1)/5), 반올림 후 짝수로 보정
baseSize = base * Math.E ** (i / 5)
```

## 실제 계산 결과 (base=14, 직접 검증)

| 인덱스 | 계산값 | 역할 |
| --- | --- | --- |
| 0 | 12 | `fontSizeSM` |
| 1 | **14** | `fontSize`(기본, seed 그대로) |
| 2 | 16 | `fontSizeLG` / `fontSizeHeading5` |
| 3 | 20 | `fontSizeXL` / `fontSizeHeading4` |
| 4 | 24 | `fontSizeHeading3` |
| 5 | 30 | `fontSizeHeading2` |
| 6 | 38 | `fontSizeHeading1` |
| 7 | 46 | (예약) |
| 8 | 56 | (예약) |
| 9 | 68 | (예약) |

지수 성장(e^(i/5))이라 상위로 갈수록 단계 간 간격이 커진다 — 공통 스펙의 "heading:body 비율 1.25~1.5배 권장"과 비교하면, Heading1(38)/기본(14) ≈ 2.7배로 훨씬 과감하다. 대신 인접 단계끼리는(예: Heading4 20 / Heading5 16 = 1.25배) 공통 스펙 권장 범위 안에 정확히 들어온다 — **전체 스케일이 아니라 "인접 단계 비율"을 지수함수로 일정하게 유지**하는 것이 핵심 설계 의도.

## Line-height 공식

```ts
lineHeight = (fontSize + 8) / fontSize
```

- 기본(14px): `(14+8)/14 ≈ 1.571` → 실제 줄높이 22px.
- 큰 글자일수록 배율은 1에 가까워지고, 작은 글자일수록 배율이 커진다 — 공통 스펙 5항 KRDS의 "줄간격 항상 150% 이상 고정값"과 달리 **크기에 반비례하는 동적 line-height**라는 점이 대비된다.

## 토큰화 예시 (공통 스펙 형식에 대입)

```
font-family-base: -apple-system, "Segoe UI", Roboto, "Noto Sans KR", sans-serif;

fontSize (seed): 14   →  나머지 9단계는 위 공식으로 자동 계산됨 (수동 테이블 불필요)
```

## 실무 시사점 (발표용 포인트)

세 어댑터(KRDS/Material/Ant Design) 중 **AI 에이전트에게 가장 다루기 쉬운 형태**가 바로 이 방식이다 — "seed 값 하나 + 공식"만 프롬프트에 담으면 되므로, KRDS처럼 15개 조합을 일일이 테이블로 나열할 필요가 없다. 슬라이드 31 "AI에게 규칙 전달하기"에서 이 대비를 직접 인용할 수 있다: *"규칙을 표로 주는 것보다 공식으로 주는 것이 AI에게는 더 정확하게 전달된다."*
