# TODO — FEConf 발표 준비

> 발표: "AI 에이전트와 디자인 시스템" · 스토리라인: [`talk/outline.md`](talk/outline.md) · 대본: [`talk/script.md`](talk/script.md)

## 1. 발표 콘텐츠 (`talk/`)
- [x] 스토리라인 확정 (`outline.md`)
- [x] 대본 초안 (`script.md`, 슬라이드 1~33)
- [x] 슬라이드 제작 — [Google Slides](https://docs.google.com/presentation/d/1akiV9NAUT5C_X2zkJZY85LLxYr8WO9oBUZFLMM4WQlA/edit?usp=sharing)에서 작업 중 (저장소 `talk/slides/`에는 아직 연결 안 됨)
- [x] 라이브 데모 시나리오 작성 (`demo/scenario.md`) — 기본안(사전 캡처 Before/After) + 선택적 라이브 데모 + 폴백 정리. 캡처 이미지 자체는 아직 미생성
- [ ] 대본 리허설 & 시간 측정

## 2. 범용 프레임워크 — 스펙 (`framework/specs/`)
- [x] tokens: colors / spacing / radius / typography / icon / layout / elevation — 1차 작성 완료
- [x] patterns: media (이미지·모달·텍스트 말줄임 전부 포함 — 이전 항목 "그 외 patterns 미착수"는 착오였음, 삭제)
- [x] components 스펙 신설 — `components/component-contract.md` (Variant × Size × State → Token 계약)
- [x] validation 스펙 신설 — `validation/accessibility-checklist.md`
- [x] pipeline 스펙 신설 — `pipeline.md` (슬라이드 30 "종합" 개념 — 규칙→어댑터→토큰 파일→프레임워크 설정→AI 컨텍스트 5단계). 실제 산출물: `examples/tokens/{tokens.css,tailwind.config.js}`, `examples/design-rules.md`(슬라이드 31 대응, 브랜드 중립 빈 템플릿)
- [ ] patterns 그 외 항목 확장 (media 외에 navigation/form 같은 패턴 추가 여부 검토)

## 3. 범용 프레임워크 — 어댑터 (`framework/adapters/`)
- [x] `krds/` — colors/typography/radius/layout/icon/elevation 토큰 실제 매핑 완료 (KRDS 공식 스타일 가이드 9페이지 전체 + krds-uiux 토큰 JSON 기반, 고대비 모드는 `colors.md` §10). components/validation은 공통 스펙 자체가 없어 매핑 보류
- [x] `material/` — colors/typography/radius/layout/icon 매핑 완료 (material-color-utilities + material-web 토큰 소스 코드 기반)
- [x] `ant-design/` — colors/typography/radius/layout/icon 매핑 완료 (antd v5 theme seed/algorithm 소스 코드 기반)
- [x] `_template/` — 신규 어댑터 작성 가이드(사용법, 문서 구조, 체크사항) 작성 완료
- [x] `shadcn/` — 공통 스펙 §9가 원본으로 채택한 shadcn/ui 공식 계약을 소스(ui.shadcn.com/docs/theming) 기준으로 정리(colors/radius). typography/layout/icon/elevation은 "없음"으로 명시(Tailwind 기본값에 위임)

## 4. 범용 프레임워크 — skills (`framework/skills/`)
- [x] `plan` 스킬 설계 — `framework/skills/plan.md`
- [x] `transform` 스킬 설계 — `framework/skills/transform.md`
- [x] `improve` 스킬 설계 — `framework/skills/improve.md`

## 5. 범용 프레임워크 — 기타
- [ ] `framework/scripts/` — 검증·스코어링 하네스 미착수 (`specs/validation/accessibility-checklist.md`의 §2·§5 항목부터 자동화 후보)
- [ ] `framework/resources/` — 체크리스트, manifest 미착수
- [x] material의 elevation을 `layout.md`에서 `elevation.md`로 분리 완료
- [ ] `framework/adapters/` 정합성 — krds/material/ant-design 일부 문서(radius/icon/layout 등)에 토큰화 예시 섹션 누락, ant-design은 elevation 개념 자체가 없음을 명시적으로 기록할지 검토

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
- [ ] 시스템별 스크린샷·목업 수집 상태 점검 (krds / material-design / ant-design / carbon / fluent / apple-hig)

## 7-1. shadcn 실무 사례 (`examples/shadcn-case/`)
- [x] 실제 프로덕션 모노레포(shadcn/ui 기반 디자인 시스템 운영 사례)를 조사해 익명화·일반화한 6개 문서 작성 완료 — 3-tier 토큰 아키텍처(`token-architecture.md`), 멀티 브랜드 스킨 + Radix 12-step 팔레트(`multi-skin-tokens.md`), cva/cn() 컨벤션 + 타입 레벨 강제(`component-conventions.md`), 8px 공통 스펙과 다른 4px 그리드(`spacing-grid.md`), 규칙 문서화와 실제 준수의 간극(`gaps-and-lessons.md`)

## 8. 프롬프트 & 도구 (`prompts/`, `tools/`)
- [x] `prompts/framework/` — spec-authoring, skill-design 메타 프롬프트 작성
- [x] `prompts/research/` — design-system-reference, case-study-collection 메타 프롬프트 작성
- [x] `prompts/demo/` — 라이브 데모용 프롬프트 작성 (`toss.md`, `naver.md`, `daangn.md`)
- [ ] `tools/image-gen`, `tools/screenshot`, `tools/misc` 구현 상태 점검 (`tools/README.md`, `tools/misc/`는 이미 실제 내용 있음 — image-gen/screenshot만 미확인)

## 9. AI 전달 단계 (슬라이드 31)
- [x] 규칙 → Markdown 프롬프트 변환 예시 작성 — `prompts/demo/{toss,naver,daangn}.md`
- [ ] Stitch/Claude Design 등 실제 입력 데모 준비

---
우선순위 제안: `components`/`validation` 공통 스펙 신설, `framework/skills`(plan/transform/improve) 설계, 나머지 참고자료(material-design/ant-design 철학 요약 + carbon/fluent/apple-hig 신규 + ai-agent-workflows/conference-talks 사례 수집), `prompts/framework`·`prompts/research` 메타 프롬프트까지 모두 완료. 남은 항목 중 **데모 캡처 이미지 실제 생성 + Google Slides 삽입 / 대본 리허설**은 Stitch·Claude Design 조작 및 실제 발표 연습이 필요해 사람이 직접 해야 하는 작업. 다음으로 자동화 가능한 우선순위는 **① `framework/adapters` 정합성 정리(material의 elevation 분리, 토큰화 예시 누락 보강) → ② `framework/scripts` 검증 하네스 구현 → ③ `design-examples/`·`tools/image-gen`·`tools/screenshot` 상태 점검**.
