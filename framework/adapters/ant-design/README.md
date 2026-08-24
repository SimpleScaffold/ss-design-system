# ant-design

Ant Design v5 어댑터. 공통 스펙(`framework/specs/tokens/*.md`)에 Ant Design 실제 토큰 값을 대입.

## 매핑 문서

| 공통 스펙 | Ant Design 매핑 |
| --- | --- |
| `specs/tokens/colors.md` | [`colors.md`](./colors.md) |
| `specs/tokens/typography.md` | [`typography.md`](./typography.md) |
| `specs/tokens/radius.md` | [`radius.md`](./radius.md) |
| `specs/tokens/layout.md`, `specs/tokens/spacing.md` | [`layout.md`](./layout.md) |
| `specs/tokens/icon.md` | [`icon.md`](./icon.md) |

## 참고 소스

- [`ant-design/ant-design`](https://github.com/ant-design/ant-design) `components/theme/themes/` — Seed Token 기본값과 Seed→Map 파생 알고리즘(`seed.ts`, `shared/genColorMapToken.ts`, `genFontSizes.ts`, `genRadius.ts`, `genSizeMapToken.ts`)의 1차 소스.
- [`@ant-design/icons`](https://github.com/ant-design/ant-design-icons) — 아이콘 패키지.

## 다른 어댑터와 구별되는 특징

세 어댑터(KRDS/Material/Ant Design) 중 공통 스펙과 값이 가장 근접하게 일치한다([`layout.md`](./layout.md)의 spacing 스케일 비교 참고). Material처럼 "Seed → 알고리즘" 구조지만 HCT가 아닌 자체 HSV 기반 알고리즘을 쓰고, Radius/Typography 모두 **수식 기반 자동 파생**이라는 점이 특징 — AI에게 규칙을 전달할 때(발표 슬라이드 31) "표보다 공식이 더 압축적으로 전달된다"는 예시로 쓰기 좋다.
