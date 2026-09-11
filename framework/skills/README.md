# skills

특정 디자인 시스템에 종속되지 않는 범용 AI 워크플로 스킬. plan(설계) / transform(전환) / improve(개선) 3종.

| 스킬 | 언제 쓰나 |
| --- | --- |
| [`plan.md`](./plan.md) | 디자인 시스템이 아직 없는 프로젝트에 `framework/specs/`를 따라 처음부터 규칙 세트를 만든다 |
| [`transform.md`](./transform.md) | 하드코딩된 값이 흩어진 기존 코드에서 규칙을 역산해 토큰 체계로 옮긴다 |
| [`improve.md`](./improve.md) | 이미 토큰화된 시스템을 `framework/specs/validation/`으로 진단하고 개선안을 낸다 |

세 스킬 모두 `framework/specs/`(무엇이 규칙인지)와 `framework/specs/validation/`(규칙을 지켰는지 확인하는 법)을 공유하며, 실행 단계(코드 스캔) 일부는 `framework/scripts/`의 `scan-token-escapes.mjs`·`contrast.mjs`가 이미 자동화한다 — 특히 `improve`의 §1 전체 스캔에서 먼저 돌린다. 치환(transform §5) 자체는 아직 사람이 컴포넌트 단위로 진행한다.
