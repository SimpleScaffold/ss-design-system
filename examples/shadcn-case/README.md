# shadcn-case

실제 프로덕션 모노레포에서 shadcn/ui 기반 디자인 시스템을 운영하며 관찰된 실무 패턴을 일반화해서 정리한 사례 연구.

> **익명화 고지**: 아래 문서는 실제 관찰 사례를 바탕으로 하되, 회사명·패키지 스코프·프로젝트 코드네임·포트·내부 게이트웨이 주소·실제 브랜드 색상값 등 사내 식별자는 전부 제거하거나 일반화한 예시로 대체했다. 남긴 것은 재사용 가능한 **기법**뿐이다.

## 왜 여기 있나

`framework/adapters/`가 "shadcn/ui 자체가 공식적으로 무엇을 규정하는가"를 보여준다면, 이 폴더는 "실제 프로젝트가 그 위에 무엇을 더 쌓아야 했는가"를 보여준다. shadcn은 색상·radius 정도만 규정하고 타이포·간격·아이콘·엘리베이션은 프로젝트에 맡기는데, 실무에서는 그 빈틈을 메우면서 shadcn의 2-tier 색상 계약을 3-tier로 확장하고, 여러 브랜드 스킨을 한 컴포넌트 라이브러리로 지원하고, 규칙을 문서로만 적어두는 것과 실제로 강제하는 것 사이의 간극도 함께 만들어냈다.

## 파일

| 문서 | 내용 |
| --- | --- |
| [`token-architecture.md`](./token-architecture.md) | shadcn 기본 2-tier 색상 계약을 원시 팔레트 + 시맨틱 + Tailwind 브리지의 3-tier로 확장한 구조, 다크모드가 런타임에 전환되는 원리 |
| [`multi-skin-tokens.md`](./multi-skin-tokens.md) | 하나의 컴포넌트 라이브러리가 스코프 단위로 시맨틱 토큰을 재선언해 여러 브랜드 스킨을 갖는 패턴, Radix Colors 12-step 팔레트 방법론 |
| [`component-conventions.md`](./component-conventions.md) | cva variant/size 명명 관례, `cn()` 유틸리티, "hex 금지·semantic만" 규칙과 타입 레벨 강제 사례 |
| [`spacing-grid.md`](./spacing-grid.md) | 공통 스펙(8px 기본)과 다른 4px 그리드 우선 규칙 — 차이와 그 이유 |
| [`gaps-and-lessons.md`](./gaps-and-lessons.md) | 문서화된 규칙이 자동화 없이 얼마나 쉽게 깨지는지 보여주는 반면교사 사례 |

## 읽는 순서

1. [`token-architecture.md`](./token-architecture.md) — 색상 토큰이 몇 겹으로 쌓이는지
2. [`multi-skin-tokens.md`](./multi-skin-tokens.md) — 그 위에서 브랜드를 어떻게 갈아끼우는지
3. [`component-conventions.md`](./component-conventions.md) — 컴포넌트가 토큰을 어떻게 소비하는지
4. [`spacing-grid.md`](./spacing-grid.md) — 공통 스펙과 실무 값이 갈라지는 지점 하나
5. [`gaps-and-lessons.md`](./gaps-and-lessons.md) — 규칙을 정의하는 것과 지켜지게 만드는 것은 다른 문제라는 결론
