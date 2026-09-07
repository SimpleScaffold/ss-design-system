# conference-talks

디자인 "감"을 명시적 규칙·토큰으로 바꾸는 것, 디자인 시스템을 구축·운영하는 것, 그리고 AI 시대에 디자인 시스템이 어떤 역할을 하는지에 대한 실제 컨퍼런스 발표 모음.
모든 항목은 실제로 존재하는 발표만 다루며, 발표명·발표자·컨퍼런스/연도·URL을 검증한 뒤 기재했다. 링크가 있는 것은 실제 녹화 영상 또는 슬라이드이며, 발표자/발표명만 확인되고 공개 녹화를 찾지 못한 경우는 "조사하지 못한 부분"에 별도로 남긴다.

## 디자인 시스템 구축·운영

- **"Do more, with less. - 디자인 시스템, 그다음은?" — 이병철 (Toss)** — FEConf 2021 — [YouTube](https://www.youtube.com/watch?v=LmLchZ4tCXc)
  디자인 시스템이 디자이너-개발자 커뮤니케이션과 반복 작업은 줄여줬지만, 정작 개발자는 디자인 툴에서 이미 배치된 컴포넌트를 코드에서 다시 배치해야 하는 "이중 작업"이 남아있다는 문제의식에서 출발한 토스 디자인 시스템(TDS)의 다음 단계 이야기. 이 저장소가 다루는 "AI/개발자가 디자인 시스템을 그대로 못 쓰는 지점"과 정확히 같은 문제를 국내 사례로 짚는다.
- **"디자인 시스템, 형태를 넘어서" — 이소영 (flex)** — FEConf 2022 — [YouTube](https://www.youtube.com/watch?v=21eiJc90ggo)
  디자인 시스템을 컴포넌트의 "형태(생김새)" 집합이 아니라, 그 이면의 의사결정 구조와 확장 전략으로 다뤄야 한다는 관점을 국내 컨퍼런스에서 초기에 제시한 발표. 토큰/컴포넌트를 표면적 스타일이 아니라 규칙 체계로 봐야 한다는 이 저장소의 전제와 맞닿는다.
- **"크로스 플랫폼 디자인 시스템, 1.5년의 기록" — 하태영 (당근마켓)** — FEConf 2023 — [YouTube](https://www.youtube.com/watch?v=obQvttzgSzY)
  당근마켓 디자인 시스템 팀이 여러 플랫폼(웹/iOS/Android)에 걸쳐 시스템을 설계·구축하며 겪은 실패와 교훈을 1.5년치 기록으로 정리한 발표. 토큰·컴포넌트를 플랫폼 간에 일관되게 유지하는 실무적 어려움을 보여주는 국내 사례로, "닫힌 값 집합을 여러 어댑터에 뿌린다"는 이 저장소의 구조(`framework/adapters/`)와 겹치는 고민을 다룬다.
- **"현대자동차의 글로벌 앱 운영 디자인 플랫폼" — 이솔지·유아란 (현대자동차 모바일디자인그룹)** — Design Systems with Figma: Seoul (2026.02.23) — [YouTube](https://www.youtube.com/watch?v=zY6lFg5nqhc)
  전세계 여러 국가에 배포되는 현대자동차 앱을 하나의 디자인 플랫폼으로 운영하는 사례. 국가별 변형(로컬라이제이션)을 감당하면서도 코어 시스템의 일관성을 유지하는 대규모 조직의 실무 사례로, 국내에서 열린 최신(2026년) 행사라는 점에서 시의성이 있다.
- **"The Broken Promises of Design Systems" — Cam Worboys (Head of Design, OS, Cash App)** — Figma Config 2024 — [YouTube](https://www.youtube.com/watch?v=BQXTt-NZ2Bs)
  디자인 시스템이 약속한 "더 빠르고 일관된 작업"이 실제로는 창의성을 억누르고 획일적인 결과로 흐르는 부작용을 지적하는 비판적 시각의 발표. 규칙을 강하게 걸수록 결과가 안정되지만 동시에 "지루해질" 위험이 있다는, 이 저장소의 접근이 갖는 트레이드오프를 정직하게 짚어주는 반대 관점 자료로 인용할 만하다.
- **"Building design systems together" — Jake Albaugh & Chad Bergman (Figma)** — Figma Config 2025 — [YouTube](https://www.youtube.com/watch?v=kq_lqeIIkPw)
  디자인 시스템이 실패하는 가장 흔한 이유가 기술이 아니라 "디자이너와 개발자가 같은 언어를 쓰지 않는 것"이라는 전제로, 토큰 네이밍을 Figma부터 코드까지 동일하게 맞춰 하나의 source of truth를 만드는 협업 모델을 제시한다. 디자인-코드 간 공유 언어라는 주제가 이 저장소의 어댑터/스펙 구조와 직접 연결된다.

## 디자인 토큰

- **"Design Tokens in Design Systems" — Jina (Lead Designer, Salesforce Lightning Design System)** — The Mixin, San Francisco (2016) — [Speaker Deck](https://speakerdeck.com/jina/design-tokens-in-design-systems)
  "디자인 토큰"이라는 개념과 이를 여러 포맷(Sass, JSON, XML 등)으로 변환하는 오픈소스 도구 Theo를 세일즈포스 내부에서 처음 제안한, 디자인 토큰 개념 자체의 원류에 가까운 발표. 17년 묵은 레거시 코드베이스에서 텍스트 색상만 106종, 배경색 120종, 폰트 크기 73종이 발견됐다는 구체적 수치로 "왜 닫힌 토큰 집합이 필요한가"를 실증한다.
- **"The value of opinions in design systems" — Nate Baldwin (Intuit Design System)** — Figma Config 2024 — [YouTube](https://www.youtube.com/watch?v=piRTrMcoIqA)
  디자인 시스템이 "의견 없는 중립적 도구"가 아니라 이해관계자들과의 협업을 통해 형성된 명확한 관점(opinion)을 가져야 한다는 주장. 컴포넌트별 토큰에서 시맨틱 토큰으로 전환한 이유를 다뤄, 이 저장소의 토큰 설계(스펙에 "왜 이 값인가"의 근거를 남기는 것)에 참고할 만하다.

## AI × 디자인

> AI 도구/제품 자체(Figma MCP, Stitch 등)에 대한 상세 조사는 `references/ai-agent-workflows/README.md`에 있으므로 중복 서술하지 않고, 여기서는 컨퍼런스 발표 형태로 나온 것만 다룬다.

- **"The future of design systems and AI"** — Schema by Figma 2025 (2025.10.28) — [YouTube](https://www.youtube.com/watch?v=N2NwII5mAU4)
  Figma MCP 서버 정식 출시, AI 모델이 따라야 할 디자인 시스템 가이드라인 설정 기능 등 "AI 시대에 디자인 시스템이 코드화된 기반(codified foundation)으로서 더 중요해진다"는 주제를 다루는 세션. AI가 빨라질수록 규칙 체계가 더 필요해진다는, 이 저장소 전체 논지를 산업 최전선(Figma)이 그대로 뒷받침하는 자료다.
- **"AI Without the Chaos: Context-Based Design Systems to the Rescue" — Brad Frost, Ian Frost, TJ Pitre** — Into Design Systems Conference 2026 (2026.03.20) — [세션 페이지](https://www.intodesignsystems.com/agenda/context-based-design-systems-ai)
  디자인 시스템을 AI 생성 작업의 "가드레일"로 놓고, 컴포넌트·패턴을 컨텍스트로 제공하는 "Context-Based Design Systems" 워크플로를 제안하는 세션. Atomic Design 창시자인 Brad Frost가 직접 AI 시대의 디자인 시스템 역할을 다룬다는 점에서 이 저장소의 문제의식과 가장 가깝다.
  - 주의: 녹화 영상은 컨퍼런스 티켓 구매자에게만 공개되는 유료 플랫폼(Into Design Systems video platform)에 있어, 위 링크는 공개된 세션 소개 페이지다. 발표 자체의 존재와 발표자·내용은 해당 페이지로 검증했다.

## 조사하지 못한 부분

- **FEConf 2025 — 오소현, "소규모 스타트업의 디자인 시스템, 도입부터 안정화까지"**: 발표명·발표자·행사는 여러 후기 글에서 확인했으나, 발표 영상이나 슬라이드의 공개 링크는 이번 조사에서 찾지 못했다. FEConf Korea 유튜브 채널(`@feconfkorea`)에 추후 업로드될 가능성이 있어 재조사 여지가 있다.
- **Figma Config 2024 — Dmitry Belyaev (Booking.com), "Building Durable Component APIs for Design Systems"**: Supernova.io 블로그 글로 발표 내용은 확인했으나, Config 2024 공식 유튜브에서 해당 발표의 개별 영상 링크는 찾지 못해 본문에서 제외했다.
- **Nathan Curtis의 국내(서울) 발표**: 2026년 2월 "Design Systems with Figma: Seoul" 행사 연사 명단에 포함된 것은 확인했으나, 그의 세션 자체의 제목·개별 녹화 링크는 확인하지 못해 본문에서는 현대자동차 세션만 인용했다.
