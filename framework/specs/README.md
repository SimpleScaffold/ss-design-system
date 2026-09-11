# specs

디자인 시스템 무관 공통 스펙 스키마. tokens / components / patterns / validation 항목을 시스템 어댑터가 채워 넣는 뼈대.

| 항목 | 다루는 것 | 상태 |
| --- | --- | --- |
| [`tokens/`](./tokens/) | 색상·타이포·radius·간격·레이아웃·아이콘·엘리베이션·모션·토큰 아키텍처·상태 — 각각의 "값 체계" | 1차 작성 완료 |
| [`patterns/`](./patterns/) | 이미지·모달·텍스트 말줄임, 내비게이션, 폼처럼 여러 토큰을 조합하는 UI 패턴 | media·navigation·form 작성 완료 |
| [`components/`](./components/) | 컴포넌트가 어떤 토큰을 쓰는지의 계약(Variant × Size × State → Token) | 1차 작성 완료 |
| [`validation/`](./validation/) | 위 스펙들을 실제로 지켰는지 확인하는 체크리스트 | 1차 작성 완료 |

`tokens/token-architecture.md`(Primitive → Semantic → Component 3계층)와 `tokens/states.md`(상태 목록·전이 규칙)는 색상·컴포넌트 계약 등 여러 스펙에 흩어져 있던 개념을 모은 횡단 스펙이다 — 특정 토큰 종류가 아니라 다른 스펙들이 참조하는 공통 어휘를 정의한다.

`components`/`validation`은 토큰 자체가 아니라 "토큰을 어떻게 쓰고, 어떻게 확인하는지"를 다루므로 어댑터(`framework/adapters/*`)가 값을 채우는 대상이 아니다 — 프로젝트마다 실제 컴포넌트 목록과 검증 도구를 이 스펙에 맞춰 만든다.

[`pipeline.md`](./pipeline.md)는 위 스펙들이 실제로 어떻게 코드·AI 컨텍스트까지 이어지는지(공통 스펙 → 어댑터 → 토큰 파일 → 프레임워크 설정 → AI 컨텍스트) 정의한다 — 실제 산출물 예시는 [`examples/tokens/`](../../examples/tokens/), [`examples/design-rules.md`](../../examples/design-rules.md) 참고.
