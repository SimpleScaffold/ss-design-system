# framework

`framework/specs/`, `framework/adapters/`, `framework/skills/` 개발·튜닝, 그리고 완성된 규칙을 AI 프롬프트로 옮기거나 진단할 때 쓰는 프롬프트 모음. 상위 인덱스는 [`../README.md`](../README.md).

- [`color-tokens.md`](./color-tokens.md) — 색 토큰을 만들 때의 기준 프롬프트 (shadcn 시맨틱 이름 + oklch + `:root` / `.dark`). 다른 프롬프트·스킬은 색을 다룰 때 이것을 따른다.
- [`spec-authoring.md`](./spec-authoring.md) — `framework/specs/`에 새 공통 스펙 항목(tokens/patterns/components/validation)을 house style대로 추가하는 프롬프트.
- [`adapter-authoring.md`](./adapter-authoring.md) — `framework/adapters/<시스템>/`에 새 어댑터를 만들거나 매핑 문서를 보강하는 프롬프트.
- [`skill-design.md`](./skill-design.md) — `framework/skills/`에 새 범용 AI 워크플로 스킬 문서를 추가하는 프롬프트.
- [`ai-context.md`](./ai-context.md) — 확정된 규칙 + 실제 값을 `pipeline.md` 5단계(AI 컨텍스트) 산출물로 변환하는 프롬프트.
- [`audit.md`](./audit.md) — 이미 토큰화된 프로젝트를 `validation/accessibility-checklist.md` 기준으로 진단하는 프롬프트.

## 언제 어느 것을 쓰나

| 상황 | 프롬프트 |
| --- | --- |
| 아예 없던 규칙 영역을 스펙으로 신설 | `spec-authoring.md` |
| 새 디자인 시스템을 어댑터로 옮기거나 기존 어댑터 보강 | `adapter-authoring.md` |
| 새 워크플로(예: plan/transform/improve와 다른 절차)를 스킬로 문서화 | `skill-design.md` |
| 규칙이 다 정해졌고 이제 AI 디자인 도구에 붙여넣을 프롬프트가 필요 | `ai-context.md` |
| 이미 있는 프로젝트가 규칙을 잘 지키는지 점검 | `audit.md` |
| 위 어느 작업이든 색을 다룬다면 | `color-tokens.md`를 함께 참조 |
