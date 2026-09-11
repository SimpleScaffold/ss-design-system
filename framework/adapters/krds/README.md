# krds

KRDS(Korea Design System) 어댑터. 공통 스펙(`framework/specs/tokens/*.md`)을 기준 스키마로 두고, KRDS 공식 스타일 가이드 + 실제 디자인 토큰 값을 그 자리에 대입한다.

## 매핑 문서

| 공통 스펙 | KRDS 매핑 |
| --- | --- |
| `specs/tokens/colors.md` | [`colors.md`](./colors.md) |
| `specs/tokens/typography.md` | [`typography.md`](./typography.md) |
| `specs/tokens/radius.md` | [`radius.md`](./radius.md) |
| `specs/tokens/layout.md`, `specs/tokens/spacing.md` | [`layout.md`](./layout.md) |
| `specs/tokens/icon.md` | [`icon.md`](./icon.md) |
| `specs/tokens/elevation.md` | [`elevation.md`](./elevation.md) |

> `components`/`validation`은 공통 스펙 자체가 값이 아니라 "토큰을 어떻게 쓰고 확인하는지"의 계약이라 어댑터가 매핑할 대상이 아니다(`framework/specs/README.md` 참고) — 미착수가 아니라 의도적으로 매핑 문서를 두지 않는 것.

## 참고 소스

- [KRDS 공식 스타일 가이드](https://www.krds.go.kr/html/site/style/style_01.html) (색상/타이포그래피/형태/레이아웃/아이콘/디자인 토큰 6개 페이지) — 위 매핑 문서들의 1차 소스. 상세 요약은 [`references/design-systems/krds/README.md`](../../../references/design-systems/krds/README.md) 참고.
- [KRDS-uiux/krds-uiux](https://github.com/KRDS-uiux/krds-uiux) — 공식 HTML ComponentKit(npm 패키지). `tokens/transformed_tokens.json`에 실제 hex/px 값이 들어있어 스타일 가이드 설명을 구체적인 수치로 확인할 때 사용한다.
