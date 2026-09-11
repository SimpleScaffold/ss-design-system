# prompts

이 저장소의 산출물(스펙·어댑터·스킬·AI 컨텍스트)을 만들거나 조사할 때 쓰는 메타 프롬프트 모음. 3개 하위 디렉터리로 나뉜다.

| 디렉터리 | 언제 쓰나 |
| --- | --- |
| [`framework/`](./framework/) | `framework/specs/`, `framework/adapters/`, `framework/skills/`에 새 문서를 추가하거나, 완성된 규칙을 실제 AI 프롬프트로 옮기거나, 기존 시스템을 진단할 때 |
| [`research/`](./research/) | `references/`에 새 자료(시스템 철학, 사례, 아티클, 도구)를 조사해서 정리할 때 |
| [`demo/`](./demo/) | 발표 라이브 데모에서 AI 디자인 생성 도구에 바로 붙여넣을 프롬프트가 필요할 때 |

## 어떤 작업에 어느 프롬프트를 쓰나

| 하려는 작업 | 프롬프트 |
| --- | --- |
| `framework/specs/`에 새 규칙 영역 추가 | [`framework/spec-authoring.md`](./framework/spec-authoring.md) |
| `framework/adapters/<시스템>/`에 새 어댑터 추가·매핑 문서 보강 | [`framework/adapter-authoring.md`](./framework/adapter-authoring.md) |
| `framework/skills/`에 새 워크플로 스킬 추가 | [`framework/skill-design.md`](./framework/skill-design.md) |
| 확정된 규칙 + 실제 값을 AI 디자인 생성 도구용 프롬프트로 변환 | [`framework/ai-context.md`](./framework/ai-context.md) |
| 색 토큰을 새로 만들거나 바꿀 때 (다른 프롬프트가 공통으로 참조) | [`framework/color-tokens.md`](./framework/color-tokens.md) |
| 이미 토큰화된 프로젝트를 진단하고 개선안 도출 | [`framework/audit.md`](./framework/audit.md) |
| 시스템 하나의 디자인 철학을 깊게 조사 | [`research/design-system-reference.md`](./research/design-system-reference.md) |
| 사례/아티클/도구 여러 건을 큐레이션 | [`research/case-study-collection.md`](./research/case-study-collection.md) |
| 발표 라이브 데모용 프롬프트 준비 | [`demo/README.md`](./demo/README.md) |
