# examples

framework 데모용 샘플 프로젝트 (adapters 적용 전/후 비교 등).

## tokens/, design-rules.md

`framework/specs/pipeline.md`(규칙 → 어댑터 → 토큰 파일 → 프레임워크 설정 → AI 컨텍스트 5단계)의 3~5단계 실제 산출물.

- [`tokens/tokens.css`](./tokens/tokens.css) — 공통 스펙을 실행 가능한 CSS 커스텀 프로퍼티로 옮긴 예시. 색은 `colors.md` §9 계약(shadcn 시맨틱 이름 + oklch, 뉴트럴 chroma 0). 브랜드색은 `--primary`만 덮어쓴다.
- [`tokens/tailwind.config.js`](./tokens/tailwind.config.js) — 위 CSS 변수를 그대로 참조하는 Tailwind 설정.
- [`design-rules.md`](./design-rules.md) — 위 토큰을 AI 디자인 생성 도구(Stitch, Claude Design 등)에 붙여넣을 수 있는 프롬프트로 정리한 빈 템플릿. `prompts/demo/toss.md`가 이 템플릿에 실제 값을 채운 완성 사례다.

## toss/

Apps in Toss(앱인토스) 공식 개발자 문서에서 디자인 관련 가이드 텍스트만 정리한 자료 — 브랜딩/다크패턴/UX 라이팅/그래픽/해상도 가이드, TDS 컴포넌트 목록, 네비게이션 바·Safe Area API. 실제 서비스가 아니라 플랫폼 공식 문서 요약이며, 라이선스가 걸린 Figma UI Kit 원본(에셋·컴포넌트 파일)은 가져오지 않았다 — 상세는 [`toss/README.md`](./toss/README.md).

## vite-shadcn-demo/

`prompts/framework/color-tokens.md` 계약과 `framework/specs/tokens/` 규칙을 실제로 빌드되는 Vite + React + Tailwind v4 + shadcn/ui 프로젝트에 적용한 예제 — 저장소에서 유일하게 실행 가능한 코드다. 무엇이 공통 규칙(고정)이고 무엇이 이 프로젝트가 채운 값(변동)인지는 `vite-shadcn-demo/doc/design-system/`에 규칙별로 나눠 정리했다 — 상세는 [`vite-shadcn-demo/README.md`](./vite-shadcn-demo/README.md).

## shadcn-case/

실제 프로덕션 모노레포에서 shadcn/ui 기반 디자인 시스템을 운영하며 관찰된 실무 패턴(3-tier 토큰 아키텍처, 멀티 브랜드 스킨, cva/컴포넌트 컨벤션, 8px 공통 스펙과 다른 4px 그리드, 규칙-따로-검증-따로의 반면교사 사례)을 일반화·익명화해서 정리한 사례 연구 — 상세는 [`shadcn-case/README.md`](./shadcn-case/README.md).
