# skills 설계 프롬프트

> 용도: `framework/skills/`(plan/transform/improve)처럼 "범용 AI 워크플로 스킬"을 설계할 때 쓰는 메타 프롬프트. 실행 가능한 코드가 아니라 절차 문서를 만드는 것이 목표다 — 이 저장소는 Markdown 문서 저장소이지 스킬 런타임이 아니다.

## 프롬프트

```
framework/skills/ 아래에 새 범용 AI 워크플로 스킬 문서를 추가하려고 한다. framework/skills/plan.md, transform.md, improve.md를 먼저 읽고 같은 구조를 따라라.

1. 제목: `# <스킬 이름> — <한 줄 설명>`
2. 이 스킬이 다른 두 스킬과 어떻게 다른지 한두 문장으로 대비해라 (예: "plan이 0에서 만드는 스킬이라면 이건 ...").
3. "언제 쓰나" — 실제로 이 스킬이 필요해지는 구체적 상황 2~3개.
4. "절차" — 번호 붙은 단계. 각 단계는 반드시 framework/specs/의 실제 파일(tokens/colors.md, components/component-contract.md, validation/accessibility-checklist.md 등)을 지목해서 "그 파일의 어느 섹션을 어떻게 쓰는지" 구체적으로 연결해라. 추상적인 절차("좋은 디자인을 만든다")를 쓰지 마라.
5. "출력" — 이 스킬을 끝까지 실행하면 손에 남는 산출물이 정확히 무엇인지 (파일 형식까지).
6. "주의" 또는 "framework/specs·adapters와의 관계" — 이 스킬이 스펙 자체를 바꾸는 게 아니라 스펙이 정한 질문에 답하는 것뿐이라는 점, 다른 시스템을 참고할 때 그대로 베끼지 않는다는 원칙을 명시해라.
7. 실제 사례가 있으면 (예: prompts/demo/toss.md, examples/) 마지막에 연결해라.

이번에 추가할 스킬: [스킬 이름과 목적, 기존 plan/transform/improve와 겹치지 않는 지점을 채워 넣는다]
```

## 관련

- 적용 사례: [`framework/skills/plan.md`](../../framework/skills/plan.md), [`transform.md`](../../framework/skills/transform.md), [`improve.md`](../../framework/skills/improve.md)
