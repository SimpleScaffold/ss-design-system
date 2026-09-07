# ai-agent-workflows

AI 에이전트가 디자인 시스템 규칙을 읽고 적용하는 방식에 대한 사례, 논문, 오픈소스 조사.
공통 주제: **"규칙(토큰·컴포넌트·제약)을 구조화해서 AI에게 전달하면 결과가 안정된다"** — 이 저장소(`framework/specs/`, `framework/adapters/`)의 접근을 뒷받침하거나 참고할 만한 선행 사례들.

## AI 디자인 생성 도구 (디자인 시스템 컨텍스트를 입력으로 받는 것들)

일반 text-to-UI 도구가 아니라, **자신의 디자인 시스템/토큰을 넣어줄 수 있는** 도구 위주.

- **Google Stitch** — [blog.google 소개](https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-ai-ui-design/) · [DESIGN.md 설명 (dev.to)](https://dev.to/stevengonsalvez/google-stitch-ai-native-ui-design-that-actually-understands-your-design-system-58f2)
  Gemini 기반 UI 생성 도구. Theme 사이드바로 색상·라운드·폰트 같은 전역 토큰을 관리하고, `DESIGN.md`라는 "에이전트 친화적" 마크다운 포맷으로 디자인 시스템 전체(팔레트, 타이포, 스페이싱, 그리드, 라운드, 섀도)를 다른 도구로 내보내거나 기존 사이트에서 역추출할 수 있다. `framework/specs/`가 지향하는 "토큰을 마크다운 스펙으로 관리"와 거의 동일한 방향.
- **Figma First Draft** (구 Make Designs) — [Figma Blog 공지](https://www.figma.com/blog/figma-ai-first-draft/) · [Help Center](https://help.figma.com/hc/en-us/articles/23955143044247-Use-First-Draft-with-Figma-AI)
  프롬프트만 던지는 게 아니라 "model + context + prompt" 구조로, 실제 컴포넌트 라이브러리(예: 372개 컴포넌트로 구성된 Simple Design System)를 컨텍스트로 붙여 AI가 그 안에서 컴포넌트를 선택·배치하게 만든다. 결과 품질이 "얼마나 잘 관리된 디자인 시스템을 연결했는가"에 비례한다는 점이 핵심 시사점.
- **v0 by Vercel — Design Systems** — [Vercel Blog](https://vercel.com/blog/working-with-figma-and-custom-design-systems-in-v0) · [Design Systems 2.0 문서](https://v0.app/docs/design-systems-2)
  기존 색상·라운드·스페이싱·폰트 토큰을 shadcn/ui 테마에 매핑해 넣거나, Tailwind 설정 파일·Shadcn Registry를 통해 자신의 컴포넌트/토큰/컨벤션을 그대로 따르도록 생성 범위를 제한하는 기능. "당신의 시스템 없이 생성 → 임의 스타일"과 "시스템을 넣고 생성 → 브랜드 정합"의 대비를 제품으로 구현한 사례.
- **Claude Design (Anthropic)** — [MindStudio 설명 글](https://www.mindstudio.ai/blog/what-is-claude-design-anthropic-visual-prototyping)
  Claude의 대화형 모델 위에서 구조화된 시각 산출물(프로토타입, 슬라이드, 브랜드 자산 등)을 만드는 표면. 디자인 시스템 이해와 재사용 가능한 브랜드 컨텍스트를 스킬로 감싸 "출력이 깔끔하게 export 되도록" 스캐폴딩한다는 점이 이 저장소의 `framework/skills/` 방향과 유사.

> Galileo AI, UX Pilot 같은 text-to-UI 도구도 검색으로 확인했으나, 이들은 "프롬프트 → 시안 → Figma로 내보내 수동으로 브랜드에 맞게 다듬는" 흐름에 가깝고 위 도구들처럼 디자인 시스템 자체를 구조화된 입력으로 받는 기능은 확인하지 못해 이번 목록에서는 제외했다.

## MCP · 구조화된 컨텍스트

`talk/script.md`에서 언급하는 "MCP를 쓰면 결과 정확도가 올라간다"의 실제 구현체들.

- **Figma Dev Mode MCP Server (공식)** — [Figma Blog 발표](https://www.figma.com/blog/introducing-figma-mcp-server/) · [Help Center 가이드](https://help.figma.com/hc/en-us/articles/32132100833559-Guide-to-the-Figma-MCP-server)
  Figma 파일의 변수(variables)·컴포넌트·레이아웃 데이터를 코딩 에이전트(Cursor, Claude Code, Copilot 등)에 직접 공급하는 공식 MCP 서버. AI가 어떤 컴포넌트를 쓸지, 어떤 스타일 토큰을 적용할지를 실제 디자인 파일 구조에 근거해 판단하게 한다.
- **GLips/Figma-Context-MCP (커뮤니티)** — [GitHub](https://github.com/GLips/Figma-Context-MCP)
  Figma 레이아웃 정보를 Cursor 등 AI 코딩 에이전트에 제공하는 오픈소스 MCP 서버. 공식 서버 이전부터 존재했던 커뮤니티 구현으로, "디자인 파일 → 구조화된 JSON/컨텍스트 → 코드"라는 동일한 패턴을 보여준다.
- **shadcn/ui MCP Server (공식)** — [공식 문서](https://ui.shadcn.com/docs/mcp)
  컴포넌트/블록 레지스트리를 MCP로 노출해, 에이전트가 "로그인 폼 추가해줘" 같은 자연어 요청을 실제 레지스트리 명령으로 변환해 설치하게 한다. 사설 레지스트리도 연결 가능해, 팀 고유의 디자인 시스템을 레지스트리 형태로 만들면 같은 방식으로 노출할 수 있다는 점이 이 저장소의 어댑터(`framework/adapters/`) 구조와 맞닿아 있다.

## 아티클 · 사례

"규칙을 어떻게 구조화해서 넘기는가"에 초점을 맞춘 실전 글들.

- **"Expose your design system to LLMs" — Hardik Pandya** — [hvpandya.com](https://hvpandya.com/llm-design-systems) · [Substack 원문](https://hardik.substack.com/p/expose-your-design-system-to-llms)
  디자인 시스템이 이미 코드(컴포넌트 라이브러리, 토큰 파일, Figma 변수)로 존재해도 LLM은 이를 제대로 못 쓴다는 문제의식에서 출발. 해결책으로 (1) 매 세션 읽는 스펙 파일, (2) LLM이 값을 "지어내지" 못하게 막는 닫힌 토큰 레이어, (3) 위반을 잡아내는 자동 감사 3가지를 제시. `framework/specs/tokens/`가 왜 "닫힌 값 집합"이어야 하는지에 대한 근거로 인용할 만하다.
- **DESIGN.md (catrinmdonnelly)** — [GitHub](https://github.com/catrinmdonnelly/DESIGN.md)
  디자인 시스템 전체를 마크다운 한 파일(+ YAML frontmatter 토큰)로 정의해 AI의 "글래스모피즘·그라디언트 히어로·3단 카드 그리드" 같은 상투적 기본값을 명시적으로 금지하는 템플릿. `CLAUDE.md`에 "이 파일을 반드시 참조하라"고 못 박아야("wiring") 실제로 적용된다는 것을 실험으로 보여준 점이 핵심 — 스펙 문서를 만드는 것과 에이전트가 그걸 실제로 읽게 강제하는 것은 별개의 문제임을 시사.
- **"Design Systems for LLM Agents: Two Files That Fix Everything" — Design Systems Collective** — [기사](https://www.designsystemscollective.com/design-systems-for-llm-agents-two-files-that-fix-everything-3e78b0c7427e)
  `design.md`(토큰·컴포넌트·prop의 순수 스펙)와 `claude.md`(언제 무엇을 쓸지의 규칙, 금지 사항)로 역할을 분리하자는 제안. "LLM은 추측을 잘하는 게 아니라 정밀한 제약으로부터 예측을 잘한다"는 문구가 이 저장소의 논지를 그대로 요약한다.
- **"Dear LLM, here's how my design system works" — UX Collective** — [기사](https://uxdesign.cc/dear-llm-heres-how-my-design-system-works-b59fb9a342b7)
  디자이너 관점에서 자신의 디자인 시스템을 LLM이 이해할 수 있는 형태로 정리해 넘긴 실전 사례. 디자이너가 직접 "AI에게 브리핑하는 문서"를 만드는 과정을 다뤄, 이 저장소가 만드는 어댑터 문서(`framework/adapters/*/README.md`)와 목적이 같다.
- **"Prompt to Design Interfaces: Why Vague Prompts Fail and How to Fix Them" — Nielsen Norman Group (Huei-Hsin Wang, 2025)** — [nngroup.com](https://www.nngroup.com/articles/vague-prototyping/)
  같은 AI 프로토타이핑 도구에 모호한 프롬프트를 주면 위계 없는 "프랑켄슈타인 레이아웃"이 나오지만, 구체적인 프롬프트(시각적 키워드, 참조 이미지, Material Design 같은 기존 디자인 시스템 인용 등)를 주면 사람이 만든 것에 가까운 결과가 나온다는 것을 실증. "모호한 지시 vs 구조화된 지시"의 결과 차이를 다룬 신뢰할 만한 실증 자료.

## 학술 논문 (LLM · UI 생성 · 제약)

- **"UI Layout Generation with LLMs Guided by UI Grammar"** (arXiv:2310.15455, Lu, Tong, Zhao, Zhang, Li) — [arxiv.org/abs/2310.15455](https://arxiv.org/abs/2310.15455)
  UI 화면의 위계 구조를 표현하는 "UI grammar"를 LLM에 제약으로 제공해 레이아웃 생성의 설명가능성·통제가능성을 높이려는 포지션 페이퍼. GPT-4 기반 초기 실험에서 문법 기반 접근이 생성 품질을 개선할 잠재력을 보였다고 보고.
  - 주의: 최종 게재본 여부와 후속 실험 결과까지는 확인하지 못했으며, 초기 아카이브 버전 기준 요약이다.
- **"The role of large language models in UI/UX design"** (arXiv:2507.04469) — [arxiv.org/pdf/2507.04469](https://arxiv.org/pdf/2507.04469)
  2022~2025년 발표된 동료 심사 연구 38편을 종합한 체계적 문헌고찰(systematic literature review). 환각(hallucination), 프롬프트 불안정성, 설명가능성 부족이 반복되는 한계로 지적된다 — "구조 없이 프롬프트만으로는 안정적 결과를 못 낸다"는 이 저장소의 전제를 뒷받침하는 메타 근거.
  - 주의: 저널/컨퍼런스 게재 여부, 정확한 저자명까지는 검증하지 못해 arXiv 프리프린트로만 인용한다.

## 관련 항목 (이 저장소 내)

- [Taste Skill (Leonxlnx/taste-skill)](https://github.com/Leonxlnx/taste-skill) — Claude Code / Codex / Cursor에 설치하는 Agent Skill 모음으로, "AI가 지켜야 하는 규칙을 마크다운으로 관리"하고 `stitch-design-taste`처럼 Google Stitch의 `DESIGN.md` 포맷과 직접 호환되는 스킬도 포함한다. 상세 내용은 아래 표 참고.

### Taste Skill 상세

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

## 조사하지 못한 부분

- **UX Pilot, Galileo AI**는 "디자인 시스템을 구조화된 입력으로 받는다"는 근거보다 "Figma로 내보내 수동 정리"에 가까운 근거만 확인되어 본문에서는 도구 목록에서 제외하고 각주로만 남겼다. 두 도구의 API/토큰 입력 기능이 최근 추가됐을 가능성은 있으니 재조사 여지가 있다.
- **국내(한국어) 사례**는 이번 검색에서 검증 가능한 것을 찾지 못했다 (KRDS는 `framework/adapters/krds/`에서 별도로 다루고 있어 제외).
