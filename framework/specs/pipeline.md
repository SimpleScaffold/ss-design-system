# 파이프라인 스펙 (Rules → System)

> 출처: `talk/script.md` 슬라이드 30. "여러 규칙과 조합들이 모여 설정에 따라 디자인을 수정할 수 있는 디자인 시스템이 만들어진다"는 아이디어를, 실제로 무엇이 무엇으로 이어지는지 구체적인 단계로 풀어낸 것.

## 1. 왜 필요한가

`tokens/colors.md`, `typography.md`, `radius.md`... 개별 스펙은 각각 따로 있으면 그냥 "규칙 목록"이다. 이 규칙들이 실제 코드 한 곳에서 서로 참조할 때 비로소 "설정 하나를 바꾸면 화면 전체가 따라 바뀌는" 디자인 시스템이 된다. 이 문서는 규칙 목록에서 실제로 동작하는 시스템까지 가는 5단계와, 그 사이에서 값이 어떻게 흘러야 하는지를 정의한다.

## 2. 5단계

| 단계 | 무엇인가 | 이 저장소의 예시 |
| --- | --- | --- |
| 1. 공통 스펙 | 규칙 자체 — 값이 없다 | `framework/specs/tokens/*.md`, `patterns/*.md` |
| 2. 어댑터 | 규칙에 실제 값을 대입 (시스템 하나 기준) | `framework/adapters/{krds,material,ant-design}/` |
| 3. 토큰 파일 | 어댑터의 값을 실행 가능한 변수로 옮김 | [`examples/tokens/tokens.css`](../../examples/tokens/tokens.css) |
| 4. 프레임워크 설정 | 토큰을 유틸리티 클래스/컴포넌트 API로 노출 | [`examples/tokens/tailwind.config.js`](../../examples/tokens/tailwind.config.js) |
| 5. AI 컨텍스트 | 1~4단계를 사람이 아니라 AI가 읽고 따르는 형태로 재정리 | [`examples/design-rules.md`](../../examples/design-rules.md), `prompts/demo/{toss,naver,daangn}.md` |

## 3. 단계 전환 시 지켜야 할 것

- **값은 한 방향으로만 흐른다** — 스펙→어댑터→토큰→설정→AI 컨텍스트 순서. AI 컨텍스트 파일에만 규칙을 적어두고 토큰 파일(3단계)에 반영하지 않으면, 다음에 코드와 AI 프롬프트가 서로 다른 값을 말하게 된다.
- **컴포넌트 계약이 3~4단계 사이에 낀다** — 토큰이 있어도 `components/component-contract.md`가 "이 컴포넌트는 이 토큰을 쓴다"고 정하지 않으면 값이 화면에 반영되지 않는다.
- **검증은 3~4단계 산출물에 실행한다** — `validation/accessibility-checklist.md`는 이론적으로 모든 단계에 적용 가능하지만, 실제로는 토큰 파일과 설정 파일이 규칙을 어겼는지 확인하는 데 쓰인다.
- **AI 컨텍스트는 요약이지 원본이 아니다** — 5단계 파일은 1~4단계에 없는 새 규칙을 만들어내는 곳이 아니라, 이미 정해진 규칙을 AI가 읽기 좋은 형태로 옮기는 곳이다.

## 4. 실제 예시로 보는 전체 흐름

```
framework/specs/tokens/colors.md          §2 "Primary 색 하나를 고른다" (규칙, 값 없음)
  → framework/adapters/krds/colors.md     Primary = #2E6DE0 (KRDS 실제 값)
    → examples/tokens/tokens.css          --primary: oklch(...); (실행 가능한 변수)
      → examples/tokens/tailwind.config.js colors.primary: 'var(--primary)' (유틸리티 클래스)
        → examples/design-rules.md        "Primary 색은 다음 규칙을 지켜라: ..." (AI 컨텍스트)
```

`prompts/demo/toss.md`는 이 5단계를 토스의 실제 브랜드 값으로 전부 채운 완성본이다 — `examples/design-rules.md`가 빈 템플릿이라면, `prompts/demo/toss.md`는 그 템플릿에 값을 채운 사례.

## 5. `framework/skills/`와의 관계

- `plan`은 1→2→3→4단계를 순서대로 채워나가는 절차다.
- `transform`은 이미 존재하는 3~4단계 코드에서 거꾸로 1~2단계 규칙을 역산하는 절차다.
- `improve`는 1~4단계가 서로 어긋나 있는지(`validation/`) 진단하는 절차다.
- 세 스킬 모두 5단계(AI 컨텍스트)는 다루지 않는다 — 5단계는 1~4단계가 확정된 뒤 마지막에 한 번 정리하면 되는, 별도의 "번역" 작업이기 때문이다.
