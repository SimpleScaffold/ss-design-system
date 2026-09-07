# 공통 스펙 신설 프롬프트

> 용도: `framework/specs/tokens/`, `patterns/`, `components/`, `validation/`에 새 항목을 추가할 때 house style(`> 출처:` 인용, 번호 붙은 `## N.` 헤딩, 마지막 `## 토큰화` 섹션, 하드코딩된 브랜드 값 금지)을 지키게 하는 메타 프롬프트. `components/component-contract.md`, `validation/accessibility-checklist.md`를 이 프롬프트로 작성했다.

## 프롬프트

```
framework/specs/ 아래에 새 공통 스펙 파일을 추가하려고 한다. 이 저장소의 기존 스펙(framework/specs/tokens/colors.md, elevation.md, framework/specs/patterns/media.md)을 먼저 읽고 아래 형식을 그대로 따라라.

1. 제목: `# <한글 제목> (English)` — 짧은 스펙은 영문 병기 생략 가능.
2. 첫 줄은 `> 출처: talk/script.md 슬라이드 N~M.` 형태의 인용. talk/script.md에 없는 내용이면 "talk/script.md에는 없는 주제" + 왜 이 개념을 공통 스펙으로 승격했는지(어느 기존 시스템에서 발견했는지) 밝혀라. 절대로 출처 없이 규칙을 지어내지 마라.
3. 본문은 번호 붙은 `## N. 제목` 헤딩(짧은 스펙은 번호 생략 가능), 단정적 종결어미("-한다"/"-권장한다")의 한국어 불릿. 나열 가능한 매핑은 표로, 스케일/토큰 목록은 코드 블록으로 정리해라.
4. 규칙마다 "왜"를 함께 적어라 — 규칙만 나열하지 말고 근거(접근성 기준, 실패 사례, 다른 시스템과의 비교)를 붙여라.
5. hex 코드나 브랜드 고유 px 값을 넣지 마라. 색 토큰 이름은 `prompts/framework/color-tokens.md` 계약만 써라 (`--primary`, `--background`, `--destructive` …). `--color-primary`, `Primary-50` 같은 옛 이름을 새 스펙에 넣지 마라. 실제 값은 `examples/tokens/tokens.css` 형식으로 어댑터/프로젝트가 채운다.
6. 마지막 섹션은 `## 토큰화`(또는 `## 토큰화 예시`) — 색이면 `:root` / `.dark` + oklch 시맨틱 토큰을 코드 블록으로 보여줘라. 그 외 토큰은 CSS 커스텀 프로퍼티 형식이면 된다.
7. 다른 스펙과 관련 있으면 `§colors.md` 또는 `colors.md §6`처럼 상대 경로로 상호 참조해라.

이번에 추가할 스펙 주제: [여기에 주제와, 근거로 삼을 기존 자료(talk/script.md 슬라이드 번호 또는 특정 어댑터 문서)를 채워 넣는다]
```

## 관련

- 적용 사례: [`framework/specs/components/component-contract.md`](../../framework/specs/components/component-contract.md), [`framework/specs/validation/accessibility-checklist.md`](../../framework/specs/validation/accessibility-checklist.md)
- house style 원본 근거: [`framework/specs/tokens/colors.md`](../../framework/specs/tokens/colors.md), [`framework/specs/tokens/elevation.md`](../../framework/specs/tokens/elevation.md)
