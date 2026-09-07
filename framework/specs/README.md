# specs

디자인 시스템 무관 공통 스펙 스키마. tokens / components / patterns / validation 항목을 시스템 어댑터가 채워 넣는 뼈대.

| 항목 | 다루는 것 | 상태 |
| --- | --- | --- |
| [`tokens/`](./tokens/) | 색상·타이포·radius·간격·레이아웃·아이콘·엘리베이션 — 각각의 "값 체계" | 1차 작성 완료 |
| [`patterns/`](./patterns/) | 이미지·모달·텍스트 말줄임처럼 여러 토큰을 조합하는 UI 패턴 | media만 작성 (그 외 패턴 미착수) |
| [`components/`](./components/) | 컴포넌트가 어떤 토큰을 쓰는지의 계약(Variant × Size × State → Token) | 1차 작성 완료 |
| [`validation/`](./validation/) | 위 스펙들을 실제로 지켰는지 확인하는 체크리스트 | 1차 작성 완료 |

`components`/`validation`은 토큰 자체가 아니라 "토큰을 어떻게 쓰고, 어떻게 확인하는지"를 다루므로 어댑터(`framework/adapters/*`)가 값을 채우는 대상이 아니다 — 프로젝트마다 실제 컴포넌트 목록과 검증 도구를 이 스펙에 맞춰 만든다.
