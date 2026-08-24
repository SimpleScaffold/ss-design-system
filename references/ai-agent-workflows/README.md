# ai-agent-workflows

AI 에이전트가 디자인 시스템 규칙을 읽고 적용하는 방식에 대한 사례, 논문, 오픈소스 조사.

## Taste Skill

- Repo: [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) ("Anti-slop Agent Skills for premium frontends")
- 요약: AI가 만드는 프론트엔드가 "흔하고 뻔한(boilerplate-looking, slop)" 결과물이 되지 않도록, Claude Code / Codex / Cursor 등에 `npx skills add`로 설치하는 **Agent Skill 모음**. 코드형 스킬과 이미지 생성용 스킬로 나뉜다.
- 코드형 스킬 중 대표:
  | 스킬 (install name) | 용도 |
  | --- | --- |
  | `design-taste-frontend` (taste-skill v2) | 기본값. 브리프를 읽고 디자인 언어를 추론한 뒤 VARIANCE/MOTION/DENSITY 3개 다이얼로 톤을 조정 |
  | `gpt-taste` | GPT/Codex 대상, 더 엄격한 레이아웃 다양성·모션 강제 |
  | `redesign-existing-projects` | 기존 프로젝트 UI를 먼저 감사(audit)한 뒤 레이아웃/간격/위계/스타일 수정 |
  | `high-end-visual-design` | 절제된 대비, 여백, 고급 폰트, 스프링 모션 — "비싸 보이는" 톤 |
  | `minimalist-ui` / `industrial-brutalist-ui` | 각각 Notion/Linear류 에디토리얼 미니멀, 스위스 타이포 기반 브루탈리즘 |
  | `full-output-enforcement` | 모델이 코드 일부를 자리표시자로 생략하지 않고 전체를 출력하도록 강제 |
  | `stitch-design-taste` | Google Stitch 호환 규칙, `DESIGN.md` 출력 포맷 지원 |
- 이미지 생성 전용 스킬: `imagegen-frontend-web`(웹 시안), `imagegen-frontend-mobile`(모바일 화면/플로우), `brandkit`(브랜드 킷 보드) — 코드가 아닌 참고 이미지를 생성해 다른 코딩 에이전트에 넘기는 용도.
- 설정값: `DESIGN_VARIANCE`(레이아웃 실험성), `MOTION_INTENSITY`(애니메이션 강도), `VISUAL_DENSITY`(정보 밀도) — 1~10 다이얼.
- 이 저장소와의 접점: `talk/script.md` 슬라이드 31에서 말하는 "AI가 지켜야 하는 규칙을 Markdown으로 관리"의 실제 사례. `framework/skills/`(plan/transform/improve)를 만들 때 스킬 하나가 "한 가지 일만 한다"는 원칙과 다이얼(설정값) 기반 톤 조정 방식을 참고할 만하다.
