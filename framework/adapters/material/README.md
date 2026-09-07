# material

Google Material Design 3 어댑터. 공통 스펙(`framework/specs/tokens/*.md`)에 Material 3 실제 토큰 값을 대입.

## 매핑 문서

| 공통 스펙 | Material 3 매핑 |
| --- | --- |
| `specs/tokens/colors.md` | [`colors.md`](./colors.md) |
| `specs/tokens/typography.md` | [`typography.md`](./typography.md) |
| `specs/tokens/radius.md` | [`radius.md`](./radius.md) |
| `specs/tokens/layout.md`, `specs/tokens/spacing.md` | [`layout.md`](./layout.md) |
| `specs/tokens/icon.md` | [`icon.md`](./icon.md) |
| `specs/tokens/elevation.md` | [`elevation.md`](./elevation.md) |

## 참고 소스

- [`material-foundation/material-color-utilities`](https://github.com/material-foundation/material-color-utilities) — HCT 색공간, Tonal Palette, Role→Tone 매핑(`dynamiccolor/color_spec_2021.ts`)의 1차 소스.
- [`material-components/material-web`](https://github.com/material-components/material-web) `tokens/versions/v0_192/` — Shape/Typescale/Elevation 등 시스템 토큰의 실제 px 값.

## 다른 어댑터와 구별되는 특징

KRDS(고정 hex/px 테이블)와 달리 Material은 **Seed color 1개 → 알고리즘으로 전체 팔레트/역할 생성**하는 구조다. 또한 시스템 레벨 spacing/layout 토큰 모듈이 존재하지 않는다는 점이 확인됨([`layout.md`](./layout.md) 참고) — "성숙한 디자인 시스템도 모든 공통 스펙 항목을 다 채우지는 않는다"는 근거 사례.
