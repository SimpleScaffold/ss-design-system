# TODO — FEConf 발표 준비

> 발표: "AI 에이전트와 디자인 시스템" · 스토리라인: [`talk/outline.md`](talk/outline.md) · 대본: [`talk/script.md`](talk/script.md)

## 1. 발표 콘텐츠 (`talk/`)
- [x] 스토리라인 확정 (`outline.md`)
- [x] 대본 초안 (`script.md`, 슬라이드 1~33)
- [x] 슬라이드 제작 — [Google Slides](https://docs.google.com/presentation/d/1akiV9NAUT5C_X2zkJZY85LLxYr8WO9oBUZFLMM4WQlA/edit?usp=sharing)에서 작업 중 (저장소 `talk/slides/`에는 아직 연결 안 됨)
- [x] 라이브 데모 시나리오 작성 (`demo/scenario.md`) — 기본안(사전 캡처 Before/After) + 선택적 라이브 데모 + 폴백 정리. 캡처 이미지 자체는 아직 미생성
- [ ] 대본 리허설 & 시간 측정

## 2. 범용 프레임워크 — 스펙 (`framework/specs/`)
- [x] tokens: colors / spacing / radius / typography / icon / layout — 1차 작성 완료
- [x] patterns: media
- [ ] patterns: 그 외 항목 (modal, text-truncation 등 script.md 28~29 슬라이드 대응)
- [ ] components 스펙 스키마 — 미착수 (디렉터리조차 없음)
- [ ] validation 스펙 스키마 — 미착수 (디렉터리조차 없음)

## 3. 범용 프레임워크 — 어댑터 (`framework/adapters/`)
- [x] `krds/` — colors/typography/radius/layout/icon/elevation 토큰 실제 매핑 완료 (KRDS 공식 스타일 가이드 9페이지 전체 + krds-uiux 토큰 JSON 기반, 고대비 모드는 `colors.md` §10). components/validation은 공통 스펙 자체가 없어 매핑 보류
- [x] `material/` — colors/typography/radius/layout/icon 매핑 완료 (material-color-utilities + material-web 토큰 소스 코드 기반)
- [x] `ant-design/` — colors/typography/radius/layout/icon 매핑 완료 (antd v5 theme seed/algorithm 소스 코드 기반)
- [x] `_template/` — 신규 어댑터 작성 가이드(사용법, 문서 구조, 체크사항) 작성 완료

## 4. 범용 프레임워크 — skills (`framework/skills/`)
- [ ] `plan` 스킬 설계
- [ ] `transform` 스킬 설계
- [ ] `improve` 스킬 설계

## 5. 범용 프레임워크 — 기타
- [ ] `framework/scripts/` — 검증·스코어링 하네스 미착수
- [ ] `framework/resources/` — 체크리스트, manifest 미착수

## 6. 참고자료 (`references/`)
- [x] KRDS, taste-skill, 색 조합 16가지 수집 완료
- [x] KRDS 공식 스타일 가이드(krds.go.kr) 요약 보강 — 표준형/확장형 구분, 접근성 설계 근거, 토큰 3계층 구조, 발표 인용 문구
- [x] KRDS 스타일 가이드 9페이지 전체(01 소개~09 선명한 화면 모드) 리스트업 및 매핑 상태 정리 — 누락돼 있던 `elevation`(엘리베이션), 고대비 모드를 공통 스펙(`framework/specs/tokens/elevation.md`, `colors.md` §12)과 KRDS 어댑터(`elevation.md`, `colors.md` §10)에 추가
- [ ] `design-systems/` 나머지 시스템(material-design, ant-design, carbon, fluent, apple-hig) 자료 정리 상태 확인 및 보강
- [ ] `ai-agent-workflows/` 사례·논문 수집
- [ ] `conference-talks/` 관련 기존 발표 요약
- [ ] `articles/`, `tools/` 스크랩 정리

## 7. 디자인 예시 (`design-examples/`)
- [ ] 시스템별 스크린샷·목업 수집 상태 점검 (krds / material-design / ant-design / carbon / fluent / apple-hig)

## 8. 프롬프트 & 도구 (`prompts/`, `tools/`)
- [ ] `prompts/framework/` — skills 개발·튜닝용 프롬프트 작성
- [ ] `prompts/research/` — 참고자료 수집용 프롬프트 정리
- [ ] `prompts/demo/` — 라이브 데모용 프롬프트 작성
- [ ] `tools/image-gen`, `tools/screenshot`, `tools/misc` 구현 상태 점검

## 9. AI 전달 단계 (슬라이드 31)
- [x] 규칙 → Markdown 프롬프트 변환 예시 작성 — `prompts/demo/{toss,naver,daangn}.md`
- [ ] Stitch/Claude Design 등 실제 입력 데모 준비

---
우선순위 제안: 데모 시나리오, KRDS/Material/Ant Design 어댑터 매핑, `_template` 가이드까지 모두 완료. 남은 항목 중 **데모 캡처 이미지 실제 생성 + Google Slides 삽입 / 대본 리허설**은 Stitch·Claude Design 조작 및 실제 발표 연습이 필요해 사람이 직접 해야 하는 작업. 다음으로 자동화 가능한 우선순위는 **① `components`/`validation` 공통 스펙 신설 → ② `framework/skills`(plan/transform/improve) 설계 → ③ 나머지 참고자료(carbon/fluent/apple-hig 등) 보강**. `carbon`/`fluent`/`apple-hig`는 KRDS처럼 공식 소스에서 실제 값을 확인해 어댑터로 확장할 수도 있음(발표 범위 밖이면 생략 가능).
