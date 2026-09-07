# 토스 디자인 시스템 (TDS)

> 출처: [`developers-apps-in-toss.toss.im/design/components.md`](https://developers-apps-in-toss.toss.im/design/components.md)

## TDS 장점

- 사용자에게 일관된 제품 경험을 줄 수 있다.
- 디자이너는 UI 구현보다 문제 해결에 집중할 수 있다.
- 개발자는 커스텀 UI를 직접 만들 때보다 3~5배 빠르게 개발할 수 있다.

## 사용 시 유의사항 — 라이선스

TDS(Figma/TDS Mobile UI Kit)를 사용하면 아래 조건에 동의한 것으로 간주된다. 전체 조건은 [`tools.md`](./tools.md) 참고.

1. **지식재산권** — 앱인토스 서비스로 제공되는 모든 자료의 권리는 토스에 있다. 파트너사는 앱인토스 서비스 이용 범위 안에서만 사용 가능.
2. **사용 권한 범위** — 앱인토스 서비스 제공을 위한 제한적 권한만 부여됨. 이 범위를 넘는 결과물이나 추가 권리는 얻을 수 없다.
3. **준수 의무 및 위반 시 조치** — 가이드·관련 법령 위반 시 토스는 서비스 제공을 중단하거나 필요한 조치를 취할 수 있다.

## 컴포넌트 리스트

앱인토스에서 가장 자주 쓰는 핵심 TDS 컴포넌트 11개.

| Component | 링크 |
| --- | --- |
| Badge | [tossmini-docs.toss.im/.../badge](https://tossmini-docs.toss.im/tds-mobile/components/badge/) |
| Border | [tossmini-docs.toss.im/.../border](https://tossmini-docs.toss.im/tds-mobile/components/border/) |
| BottomCTA | [tossmini-docs.toss.im/.../BottomCTA](https://tossmini-docs.toss.im/tds-mobile/components/BottomCTA/check-first/) |
| Button | [tossmini-docs.toss.im/.../button](https://tossmini-docs.toss.im/tds-mobile/components/button/) |
| Asset | [tossmini-docs.toss.im/.../Asset](https://tossmini-docs.toss.im/tds-mobile/components/Asset/check-first/) |
| ListRow | [tossmini-docs.toss.im/.../ListRow](https://tossmini-docs.toss.im/tds-mobile/components/ListRow/list-row-overview/) |
| ListHeader | [tossmini-docs.toss.im/.../list-header](https://tossmini-docs.toss.im/tds-mobile/components/list-header/) |
| Navigation | (네비게이션 바 — [`navigation-bar.md`](./navigation-bar.md) 참고) |
| Paragraph | [tossmini-docs.toss.im/.../paragraph](https://tossmini-docs.toss.im/tds-mobile/components/paragraph/) |
| Tab | [tossmini-docs.toss.im/.../tab](https://tossmini-docs.toss.im/tds-mobile/components/tab/) |
| Top | [tossmini-docs.toss.im/.../top](https://tossmini-docs.toss.im/tds-mobile/components/top/) |

## 공통 스펙과의 관계

`framework/specs/` 관점에서 보면, TDS는 색상/타이포/radius 같은 **토큰 레벨 규칙**이 아니라 그 토큰을 이미 적용해서 완성해둔 **컴포넌트 레벨 라이브러리**다. 어댑터(krds/material/ant-design)처럼 값을 매핑할 대상이 아니라, "규칙을 코드로 옮기는 마지막 단계를 플랫폼이 대신 제공하면 이런 모습이 된다"는 참고 사례로 본다.
