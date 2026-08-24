# KRDS 색상 토큰 매핑

> 공통 스펙: [`framework/specs/tokens/colors.md`](../../specs/tokens/colors.md)
> 소스: [KRDS 스타일 가이드 — 색상](https://www.krds.go.kr/html/site/style/style_02.html), [krds-uiux `tokens/transformed_tokens.json`](https://github.com/KRDS-uiux/krds-uiux/blob/main/tokens/transformed_tokens.json)

## 1. 60-30-10 → KRDS 색상 시스템

KRDS도 동일하게 **60-30-10 원칙**을 명시한다. 역할 이름만 다르게 부른다.

| 공통 스펙 | KRDS 명칭 | 역할 |
| --- | --- | --- |
| 60% 배경 | Gray (Neutral) | surface, background, text, icon, divider, element |
| 30% 구분 영역 | Secondary + Gray | element, border, divider, action, icon, text |
| 10% Primary | Primary | element, action, icon, link, button, input, text |
| (부가) | Accent | 알림 배지 등 강조 요소, **최대 5%** 이내로 제한 |

KRDS의 색상 카테고리는 공통 스펙보다 한 단계 더 세분화되어 있다: **주요 색상**(Primary/Secondary/Gray) · **강조 색상**(Accent) · **그래픽 색상**(Graphic — 차트/일러스트 전용) · **시스템 색상**(Danger/Warning/Success/Information).

## 2. Primary 색 선정 → 정부 상징색

KRDS 표준형 스타일의 Primary/Secondary는 임의 선정이 아니라 **정부 상징색(정부 청색·정부 회색·정부 적색)** 을 디지털 UI용으로 최적화한 값이다. Primary는 명도·채도를 높여 눈에 띄게, Secondary는 톤을 낮춰 안정감을 준다.

## 3. 팔레트 생성 규칙 → 13단계 HSL 명도 팔레트

공통 스펙(HSL의 L값만 조정)과 동일한 방식이되, KRDS는 이를 **13단계**로 표준화했다(Gray의 0/100 제외 시 11단계).

### 실제 값 (`primitive.color.light`, hex)

| 레벨 | Primary | Secondary | Gray |
| --- | --- | --- | --- |
| 0 | — | — | `#ffffff` |
| 5 | `#ecf2fe` | `#eef2f7` | `#f4f5f6` |
| 10 | `#d8e5fd` | `#d6e0eb` | `#e6e8ea` |
| 20 | `#b1cefb` | `#bacbde` | `#cdd1d5` |
| 30 | `#86aff9` | `#90b0d5` | `#b1b8be` |
| 40 | `#4c87f6` | `#6b96c7` | `#8a949e` |
| 50 | `#256ef4` | `#346fb2` | `#6d7882` |
| 60 | `#0b50d0` | `#1c589c` | `#58616a` |
| 70 | `#083891` | `#063a74` | `#464c53` |
| 80 | `#052561` | `#052b57` | `#33363d` |
| 90 | `#03163a` | `#031f3f` | `#1e2124` |
| 95 | `#020f27` | `#02162c` | `#131416` |
| 100 | — | — | `#000000` |

> Gray는 순수 무채색이 아니라 **블루 그레이 계열**을 사용한다 — Primary/선명한 화면 모드와의 조화를 위한 선택.

## 4. 대비 규칙 → "매직넘버"

공통 스펙의 "명암비 4.5 이상" 규칙을 KRDS는 **매직넘버**라는 이름으로 4단계 대비 기준으로 코드화했다.

| 매직넘버 | 명도 대비 | 용도 |
| --- | --- | --- |
| 40 | 3:1 | 아이콘, 인접 요소 최소 대비 |
| 50 | 4.5:1 | 본문 텍스트(WCAG AA) |
| 70 | 7:1 | 선명한 화면 모드 텍스트 |
| 90 | 15:1 | 선명한 화면 모드 본문 |

팔레트 제작 절차: ① HSL L=50%로 임시 설정 → ② L 5%~95% 11단계 생성 → ③ 매직넘버 50(4.5:1) 기준 미달 시 L값 보정(예: primary-50을 L55%로 조정) → ④ 매직넘버 40/70 기준으로 나머지 단계 보정.

## 5. 상태(State) 색상 → 시스템 색상 4종의 실제 레벨 매핑

공통 스펙의 "Default/Hover/Pressed = Primary-50/60/70" 규칙을, KRDS는 시스템 색상(Danger/Warning/Success/Information) 각각에 대해 **아이콘/텍스트/배경/보더 4요소 조합**으로 명시한다.

일반 모드:

| 요소 | 레벨 |
| --- | --- |
| 아이콘 | `{system}-50` |
| 텍스트 | `{system}-60` |
| 배경 | `{system}-5` |
| 보더 | `{system}-10` |

선명한 화면 모드(다크):

| 요소 | 레벨 |
| --- | --- |
| 아이콘 | `{system}-20` |
| 텍스트 | `{system}-20` |
| 배경 | `{system}-95` |
| 보더 | `{system}-90` |

### 실제 값 (`primitive.color.light`)

| 레벨 | Danger | Warning | Success | Information |
| --- | --- | --- | --- | --- |
| 5 | `#fdefec` | `#fff3db` | `#eaf6ec` | `#e7f4fe` |
| 10 | `#fcdfd9` | `#ffe0a3` | `#d8eedd` | `#d3ebfd` |
| 50 | `#de3412` | `#9e6a00` | `#228738` | `#0b78cb` |
| 60 | `#bd2c0f` | `#8a5c00` | `#267337` | `#096ab3` |
| 90 | `#390d05` | `#2e1f00` | `#122b18` | `#03253f` |
| 95 | `#260903` | `#241800` | `#0e2012` | `#021a2c` |

## 6. 배경 레이어 → Elevation

공통 스펙의 `bg-0/bg-1/bg-2` 레이어 개념과 정확히 대응한다.

- 기본 모드: `gray10(elevation-1) → gray0(elevation0) → gray5(elevation+1) → gray0(elevation+2)`
- 선명한 화면 모드: `gray90(elevation-1) → gray100(elevation0) → gray95(elevation+1) → gray90(elevation+2)` — 위로 쌓일수록 점점 밝아짐(다크모드 특성)

## 7. 보조 팔레트 → Point / Graphic

| 팔레트 | 용도 |
| --- | --- |
| Accent | 알림 배지 등 강조, 최대 5% |
| Point | 브랜드 보조 강조색 |
| Graphic | 차트/배너/일러스트 전용, 톤 다운 가능 |

## 8. 토큰화 → 3단계 토큰 레벨

KRDS는 공통 스펙의 "시맨틱 토큰" 개념을 3단계로 세분화한다.

```
Primitive  → primary-50, gray-5, number-4          (직접 사용 금지, 참조 전용)
Semantic   → color-icon-primary, color-border-gray-light   (디자인 툴에서 정의)
Component  → --namespace-component--theme-type-size-modifier (코드에서 정의)
```

공통 스펙 예시(`--color-primary: var(--primary-50)`)는 KRDS의 Semantic 토큰 레벨에 해당한다. Component 토큰은 KRDS에서 의도적으로 디자인 툴이 아닌 코드에서만 정의하도록 역할을 분리한다 — 어댑터 작성 시 이 경계를 유지할 것.

## 9. (심화) 투명도 → Alpha 5단계

KRDS는 5단계 투명도(Alpha)를 BG/Text/Line에 적용하며, disabled 상태에는 투명도를 쓰지 않도록 가이드한다(별도 disabled 색상 사용).

## 10. 고대비 모드 → "선명한 화면 모드"

> 공통 스펙: [`framework/specs/tokens/colors.md`](../../specs/tokens/colors.md) §12
> 소스: [KRDS 스타일 가이드 — 선명한 화면 모드](https://www.krds.go.kr/html/site/style/style_09.html)

### 목표 명암비 — 라이트 대비 한 단계 상향

| 콘텐츠 구분 | 라이트(기본) | 선명한 화면 모드 |
| --- | --- | --- |
| 본문 텍스트 | 4.5:1 이상 (매직넘버 50) | **7:1 이상** (매직넘버 70) |
| 헤딩, 레이블 | 3:1 이상 (매직넘버 40) | **4.5:1 이상** (매직넘버 50) |
| 아이콘, 시각 보조 | 3:1 이상 (매직넘버 40) | **4.5:1 이상** (매직넘버 50) |

### 별도 팔레트가 아니라 "레벨 재배정"

`primitive.color.high-contrast`의 Primary/Gray 레벨 0~50 값은 `primitive.color.light`와 **완전히 동일한 hex**다 (예: Primary-50 = `#256ef4` 양쪽 동일). 즉 선명한 화면 모드는 새 색을 만드는 게 아니라, §5 "일반 모드"에서 쓰던 `{system}-50/60/5/10` 레벨 배정을 아래처럼 더 극단적인 레벨로 바꾸는 것이다 (§5 표 재인용).

| 요소 | 일반 모드 | 선명한 화면 모드 |
| --- | --- | --- |
| 아이콘 | `{system}-50` | `{system}-20` |
| 텍스트 | `{system}-60` | `{system}-20` |
| 배경 | `{system}-5` | `{system}-95` |
| 보더 | `{system}-10` | `{system}-90` |

### 실제 비교 예시 (Gray 계열, `primitive.color.*`)

| 역할 | 라이트 | 선명한 화면 모드 |
| --- | --- | --- |
| 가장 진한 텍스트 (`text-bolder`) | `#131416` | `#0a0c10` |
| 옅은 텍스트 (`text-subtle`) | `#464c53` | `#cdd1d5` |
| 기본 배경 (`surface.white`) | `#ffffff` | `#000000` |
| 반전 배경 (`surface.inverse`) | `#1e2124` | `#e6e8ea` |

Secondary는 Primary/Gray와 달리 선명한 화면 모드 전용 색상표가 별도로 존재한다(레벨 5=`#edf6f8` 등, 라이트의 `#eef2f7`와 미세하게 다른 톤) — 브랜드 보조색은 필요시 대비 확보를 위해 톤 자체를 조정할 수 있다는 예외 사례.

### 형태/보더 변화

- 외곽선(보더)과 링크 밑줄을 기본 모드보다 굵게 — 실제 수치는 [`elevation.md`](./elevation.md) §5 참고(1px→2px, 2px→3px).
- 그림자 alpha도 더 진하게 조정한다 — [`elevation.md`](./elevation.md) §2 참고.

### 시각적 보조 (색상 외 단서)

색상만으로 상호작용 가능 여부를 표현하지 않는다 — 공통 스펙 §12의 "비색상 단서" 원칙의 실제 적용 사례.

| 영역 | 보조 방식 |
| --- | --- |
| 헤더 | 유틸리티 링크에 윤곽선/배경색 |
| 푸터 | 모든 링크에 밑줄 |
| 액션/선택/입력 | 버튼·입력·선택 컴포넌트 외곽선 강화, 인라인 링크 밑줄 |
