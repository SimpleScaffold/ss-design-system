# TODO — FEConf 발표 준비

> 발표: "AI 에이전트와 디자인 시스템" · 스토리라인: [`talk/outline.md`](talk/outline.md) · 대본: [`talk/script.md`](talk/script.md)

## 1. 발표 콘텐츠 (`talk/`)
- [x] 스토리라인 확정 (`outline.md`)
- [x] 대본 초안 (`script.md`, 슬라이드 1~33)
- [x] 슬라이드 제작 — [Google Slides](https://docs.google.com/presentation/d/1akiV9NAUT5C_X2zkJZY85LLxYr8WO9oBUZFLMM4WQlA/edit?usp=sharing)에서 작업 중 (저장소 `talk/slides/`에는 아직 연결 안 됨)
- [x] 라이브 데모 시나리오 작성 (`demo/scenario.md`) — 기본안(사전 캡처 Before/After) + 선택적 라이브 데모 + 폴백 정리. 캡처 이미지 자체는 아직 미생성
- [ ] 대본 리허설 & 시간 측정

## 2. 범용 프레임워크 — 스펙 (`framework/specs/`)
- [x] tokens: colors / spacing / radius / typography / icon / layout / elevation — 1차 작성 완료, 이후 icon/radius/spacing/colors §10을 어댑터 수준으로 보강
- [x] patterns: media (이미지·모달·텍스트 말줄임 전부 포함) + navigation + form 신설 완료
- [x] components 스펙 신설 — `components/component-contract.md` (Variant × Size × State → Token 계약)
- [x] validation 스펙 신설 — `validation/accessibility-checklist.md`
- [x] pipeline 스펙 신설 — `pipeline.md` (슬라이드 30 "종합" 개념 — 규칙→어댑터→토큰 파일→프레임워크 설정→AI 컨텍스트 5단계). 실제 산출물: `examples/tokens/{tokens.css,tailwind.config.js}`, `examples/design-rules.md`(슬라이드 31 대응, 브랜드 중립 빈 템플릿, 색/Radius/타이포/아이콘/레이아웃/엘리베이션/상태/텍스트·미디어/검증 블록까지 확장)
- [x] `token-architecture.md`(Primitive→Semantic→Component 3계층) · `states.md`(상태 목록·전이 방향·터치 타깃) · `motion.md`(duration/easing, 값은 어댑터가 채움) 신설 — 다섯 시스템이 수렴하는 구조와 저장소 내부 근거만으로 승격
- [x] `motion.md`의 실제 어댑터 매핑 — `material/motion.md` 신설, `material-web`의 `_md-sys-motion.scss`를 직접 fetch해 실제 duration(16단계)·easing(10종 cubic-bezier) 값 확인 후 작성. `krds/README.md`에는 `krds-uiux` 토큰 JSON을 직접 확인해 duration/easing 키가 없음을 "없음 + 이유"로 명시. ant-design·shadcn은 아직 미착수(`_template/README.md` 매핑 표 참고)

## 3. 범용 프레임워크 — 어댑터 (`framework/adapters/`)
- [x] `krds/` — colors/typography/radius/layout/icon/elevation 토큰 실제 매핑 완료 (KRDS 공식 스타일 가이드 9페이지 전체 + krds-uiux 토큰 JSON 기반, 고대비 모드는 `colors.md` §10). components/validation은 공통 스펙 자체가 없어 매핑 보류
- [x] `material/` — colors/typography/radius/layout/icon/motion 매핑 완료 (material-color-utilities + material-web 토큰 소스 코드 기반, motion은 `_md-sys-motion.scss` 실제 duration/easing 값)
- [x] `ant-design/` — colors/typography/radius/layout/icon 매핑 완료 (antd v5 theme seed/algorithm 소스 코드 기반)
- [x] `_template/` — 신규 어댑터 작성 가이드(사용법, 문서 구조, 체크사항) 작성 완료
- [x] `shadcn/` — 공통 스펙 §9가 원본으로 채택한 shadcn/ui 공식 계약을 소스(ui.shadcn.com/docs/theming) 기준으로 정리(colors/radius). typography/layout/icon/elevation은 "없음"으로 명시(Tailwind 기본값에 위임)

## 4. 범용 프레임워크 — skills (`framework/skills/`)
- [x] `plan` 스킬 설계 — `framework/skills/plan.md`
- [x] `transform` 스킬 설계 — `framework/skills/transform.md`
- [x] `improve` 스킬 설계 — `framework/skills/improve.md`

## 5. 범용 프레임워크 — 기타
- [x] `framework/scripts/` — 검증 하네스 구현 완료. `contrast.mjs`(WCAG 명암비, oklch/hex 지원, 외부 의존성 없음), `scan-token-escapes.mjs`(팔레트 이탈 hex·8px/4px 그리드 이탈 스캔). 둘 다 `examples/vite-shadcn-demo/src`에 실행해 실제 위반 사례로 검증 — 기존에 사람이 수기로 문서화해둔 shadcn 벤더 기본값 예외와 정확히 일치. §4 상태 레벨 간격·§6 엘리베이션 단계는 구조적 판단이 필요해 보류(이유는 `framework/scripts/README.md` 참고)
- [x] `framework/resources/` — `checklist.json`(accessibility-checklist.md의 기계 판독용 버전, 항목별 automated/script 필드 포함), `manifest.json`(specs/adapters 파일 목록·매핑 관계, 각 시스템의 notMapped/notCovered 명시) 신설 완료
- [x] material의 elevation을 `layout.md`에서 `elevation.md`로 분리 완료
- [x] `framework/adapters/` 정합성 — krds(radius/icon/layout/elevation), material(icon), ant-design(icon) 토큰화 예시 6건 보강 완료. ant-design은 `README.md`에 elevation "없음 + 이유" 명시 완료. `krds/README.md`·`_template/README.md`의 낡은 매핑 표도 갱신

## 6. 참고자료 (`references/`)
- [x] KRDS, taste-skill, 색 조합 16가지 수집 완료
- [x] KRDS 공식 스타일 가이드(krds.go.kr) 요약 보강 — 표준형/확장형 구분, 접근성 설계 근거, 토큰 3계층 구조, 발표 인용 문구
- [x] KRDS 스타일 가이드 9페이지 전체(01 소개~09 선명한 화면 모드) 리스트업 및 매핑 상태 정리 — 누락돼 있던 `elevation`(엘리베이션), 고대비 모드를 공통 스펙(`framework/specs/tokens/elevation.md`, `colors.md` §12)과 KRDS 어댑터(`elevation.md`, `colors.md` §10)에 추가
- [x] `design-systems/material-design`, `ant-design` — 어댑터 리서치를 재사용해 철학/출처 요약 작성
- [x] `design-systems/carbon`, `fluent`, `apple-hig` — 공식 소스 기반 신규 작성 (어댑터는 아직 없음, 철학·출처 포인터만)
- [x] `ai-agent-workflows/` — AI 디자인 생성 도구·MCP·아티클·논문 사례 수집 (Taste Skill 기존 항목 유지)
- [x] `conference-talks/` — FEConf 국내 사례(이병철/이소영/하태영), Figma Config, 디자인 토큰 원류(Jina 2016), AI×디자인 세션까지 9건 수집 (검증 못한 후보는 "조사하지 못한 부분"에 별도 기록)
- [x] `articles/` — 기존 `color-combinations-16.md`를 README 인덱스에 연결
- [x] `tools/` — 이미 React Bits 등 실제 내용 있음, 추가 보강 없이 확인만

## 7. 디자인 예시 (`design-examples/`)
- [x] 시스템별 스크린샷·목업 수집 상태 점검 완료 — 6개 하위 폴더(krds/material-design/ant-design/carbon/fluent/apple-hig) 전부 3줄 placeholder README만 있고 **실제 이미지 파일은 0개**(`git log`로 초기 커밋 이후 변경 없음 확인). 실제 스크린샷·목업 캡처는 사람이 각 시스템의 실제 사이트/앱을 열어 캡처해야 하는 작업이라 자동화 범위 밖 — 다음 발표 준비 세션에서 `talk/demo/scenario.md`의 캡처 작업과 함께 진행 권장.

## 7-1. shadcn 실무 사례 (`examples/shadcn-case/`)
- [x] 실제 프로덕션 모노레포(shadcn/ui 기반 디자인 시스템 운영 사례)를 조사해 익명화·일반화한 6개 문서 작성 완료 — 3-tier 토큰 아키텍처(`token-architecture.md`), 멀티 브랜드 스킨 + Radix 12-step 팔레트(`multi-skin-tokens.md`), cva/cn() 컨벤션 + 타입 레벨 강제(`component-conventions.md`), 8px 공통 스펙과 다른 4px 그리드(`spacing-grid.md`), 규칙 문서화와 실제 준수의 간극(`gaps-and-lessons.md`)

## 8. 프롬프트 & 도구 (`prompts/`, `tools/`)
- [x] `prompts/framework/` — spec-authoring, skill-design, adapter-authoring, ai-context, audit 메타 프롬프트 작성 완료
- [x] `prompts/research/` — design-system-reference, case-study-collection 메타 프롬프트 작성
- [x] `prompts/demo/` — 라이브 데모용 프롬프트 작성 (`toss.md`, `naver.md`, `daangn.md`), `[색상]` 블록 중복 제거 + `[아이콘]`·`[상태]` 블록 추가, `## 관련` 섹션 통일
- [x] `prompts/README.md` 신설 — framework/research/demo 3분할 인덱스 + "언제 어느 것을 쓰는지" 표
- [x] `tools/image-gen`, `tools/screenshot`, `tools/misc` 구현 상태 점검 완료 — **셋 다 3줄 placeholder README뿐, 실제 스크립트 0개**(`git log`로 확인, 초기 커밋 이후 변경 없음). 이전 기록의 "`tools/misc/`는 이미 실제 내용 있음"은 착오였음, 정정. `framework/scripts/`(검증 하네스)는 이번에 실제 구현됐지만(§5 참고), `tools/`(이미지 생성·스크린샷 자동화)는 여전히 미착수 — `references/tools/`에 조사해둔 도구(Fooocus, ComfyUI 등)를 실제로 연동하는 것이 다음 단계.

## 9. AI 전달 단계 (슬라이드 31)
- [x] 규칙 → Markdown 프롬프트 변환 예시 작성 — `prompts/demo/{toss,naver,daangn}.md`
- [ ] Stitch/Claude Design 등 실제 입력 데모 준비

---
우선순위 제안: `components`/`validation` 공통 스펙 신설, `framework/skills`(plan/transform/improve) 설계, 나머지 참고자료(material-design/ant-design 철학 요약 + carbon/fluent/apple-hig 신규 + ai-agent-workflows/conference-talks 사례 수집), `prompts/framework`·`prompts/research` 메타 프롬프트, `framework/specs`의 역전 현상 해소(icon/radius/spacing/media를 어댑터 수준으로 보강), 신규 스펙 4종(`token-architecture`/`states`/`motion`/`navigation`+`form`), `framework/adapters` 정합성 정리(토큰화 예시 6건, ant-design elevation "없음" 명시, 낡은 인덱스 갱신), 프롬프트 층 신설(`adapter-authoring`/`ai-context`/`audit`/`prompts/README.md`), `framework/scripts`(`contrast.mjs`/`scan-token-escapes.mjs`) + `framework/resources`(`checklist.json`/`manifest.json`) 구현, `material/motion.md`(공식 소스 확인) 신설, `design-examples/`·`tools/` 상태 점검(둘 다 실제 콘텐츠 0개로 확인, 낡은 기록 정정)까지 모두 완료.

남은 항목 — 전부 사람이 직접 해야 하는 작업:
- **대본 리허설 & 시간 측정** — 실제 발표 연습 필요
- **데모 캡처 이미지 실제 생성 + Google Slides 삽입** (`talk/demo/scenario.md`) — Stitch·Claude Design 조작 필요
- **`design-examples/` 실제 스크린샷 캡처** — 6개 시스템 실제 사이트/앱 방문·캡처 필요
- **`tools/image-gen`, `tools/screenshot` 실제 구현** — `references/tools/`에 조사해둔 도구(Fooocus, ComfyUI 등)를 실제 스크립트로 연동하는 작업, 프로젝트 성격상 우선순위 낮음
- **ant-design·shadcn의 `motion.md`** — 공식 소스에 duration/easing 토큰이 있는지 추가 확인 필요
