# ss-design-system

FEConf 발표 "AI 에이전트와 디자인 시스템"을 준비하기 위한 저장소.
[ss-design-krds](https://github.com/SimpleScaffold/ss-design-krds)(KRDS 전용 구현체)를
하나의 사례로 삼아, **디자인 시스템 무관(agnostic) 범용 프레임워크**를 설계하고
그 과정과 결과를 발표 콘텐츠로 정리한다.

## 폴더 구조

```text
ss-design-system/
├── talk/                        발표 준비물 (개요·슬라이드·스크립트·데모)
│   ├── outline.md
│   ├── slides/
│   ├── script.md
│   └── demo/
├── framework/                   범용 프레임워크 (핵심 산출물)
│   ├── skills/                  plan / transform / improve 등 범용 AI 워크플로
│   ├── specs/                   시스템 무관 공통 스펙 스키마 (tokens/components/patterns/validation)
│   ├── adapters/                시스템별 어댑터 — 공통 스펙에 실제 규칙 매핑
│   │   ├── krds/
│   │   ├── material/
│   │   ├── ant-design/
│   │   └── _template/           신규 시스템 추가 시 복사해서 시작
│   ├── scripts/                 검증·스코어링 하네스
│   └── resources/                체크리스트, manifest
├── references/                  참고자료
│   ├── design-systems/          시스템별 원자료·비교 노트
│   │   ├── krds/
│   │   ├── material-design/
│   │   ├── ant-design/
│   │   ├── carbon/
│   │   ├── fluent/
│   │   └── apple-hig/
│   ├── ai-agent-workflows/       AI 에이전트 × 디자인시스템 관련 사례/논문
│   ├── conference-talks/         관련 기존 발표 요약·인용
│   ├── articles/                 아티클/블로그 스크랩
│   └── tools/                    관련 오픈소스·도구 조사 (차트 / 이미지 생성 / 도형 / UI 킷 / 디자인 참고 사이트)
│       ├── charts/
│       ├── image-gen/
│       ├── shapes/
│       ├── ui-kits/
│       └── design-sites/
├── design-examples/             디자인 예시 — 시스템별 UI 스크린샷·목업 (발표 시각자료 원본)
│   ├── krds/
│   ├── material-design/
│   ├── ant-design/
│   ├── carbon/
│   ├── fluent/
│   └── apple-hig/
├── prompts/                     프롬프트 모음
│   ├── framework/                framework/skills 개발·튜닝용 프롬프트 (색 토큰은 color-tokens.md)
│   ├── research/                 참고자료 수집·요약용 프롬프트
│   └── demo/                     발표 라이브 데모용 프롬프트
├── tools/                       자료 제작용 유틸리티 도구 (이미지 생성, 스크린샷 자동화 등)
│   ├── image-gen/
│   ├── screenshot/
│   └── misc/
└── examples/                    프레임워크 데모용 샘플 프로젝트 (코드)
```

## 진행 상태

- [x] 발표 스토리라인 확정 (`talk/outline.md`)
- [x] 범용 스펙 스키마 초안 (`framework/specs/`)
- [x] KRDS 어댑터 이식 (`framework/adapters/krds/`)
- [x] 참고자료 수집 (`references/`)

세부 진행 상황과 남은 항목은 [`TODO.md`](./TODO.md) 참고.
