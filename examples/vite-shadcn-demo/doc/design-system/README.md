# design-system 문서

이 프로젝트가 `framework/specs/` **전체**(스펙 파일 10개: `tokens/` 7종 + `patterns/media.md` + `components/component-contract.md` + `validation/accessibility-checklist.md`)와 `prompts/framework/color-tokens.md` 계약을 어떻게 적용했는지 **고정 값**과 **변동 값**으로 나눠 기록한다. `framework/specs/`에 실제로 존재하는 스펙 파일과 정확히 1:1로 대응하는 것이 목표라, 이 폴더의 파일 10쌍은 그 디렉터리 구조를 그대로 반영한다.

- [`고정/`](./고정/) — 브랜드·프로젝트가 바뀌어도 그대로인 규칙. 저장소 공통 스펙(`framework/specs/`)을 그대로 옮긴 것이라, 이 프로젝트만의 사정으로 고치지 않는다.
- [`변동/`](./변동/) — 이 프로젝트가 그 규칙 위에 실제로 채운 값(팔레트 oklch, 폰트, radius px, 실제 컴포넌트 코드 위치 등). 다른 프로젝트가 이 템플릿을 복제하면 `변동/`만 다시 채우면 된다.
- [`추천사이트.md`](./추천사이트.md) — `변동/`을 채울 때 참고한 외부 사이트 모음(팔레트·명도·대비·폰트·아이콘·컴포넌트·화면 레퍼런스). 규칙(`고정/`) 자체를 바꾸는 문서가 아니다.

## 10쌍 목록

같은 파일 이름이 두 폴더에 짝을 이룬다 — `고정/X.md`가 규칙을, `변동/X.md`가 그 규칙으로 이 프로젝트가 실제로 채운 값을 보여준다.

| 파일 | 대응하는 공통 스펙 | 한 줄 요약 |
| --- | --- | --- |
| `colors.md` | `framework/specs/tokens/colors.md` | 6팔레트(neutral 12단계 + primary·destructive·success·warning·info 8단계), 표면(surface) 깊이 -1~+3 |
| `typography.md` | `framework/specs/tokens/typography.md` | 폰트 1개(Pretendard), rem 62.5% 리베이스, heading-1/2·body-1/2·caption 5단계 |
| `radius.md` | `framework/specs/tokens/radius.md` | 단일 radius 0.625rem + 배수 스케일 |
| `spacing.md` | `framework/specs/tokens/spacing.md` | 8px 그리드 + Depth 기반 간격(-0~-3) |
| `layout.md` | `framework/specs/tokens/layout.md` | 최대 너비 1120px, Gutter 24px, 반응형 컬럼 Desktop 16 · Tablet 12 · Mobile 6 |
| `icon.md` | `framework/specs/tokens/icon.md` | 아이콘 라이브러리 1개(lucide-react), 크기 2단계 |
| `elevation.md` | `framework/specs/tokens/elevation.md` | 그림자 4단계(0~3) + 표면색과 결합한 깊이 표현 |
| `media.md` | `framework/specs/patterns/media.md` | 3줄 말줄임, 가로 100% 이미지, 모달 너비 85%, 풀스크린·모달·스티커배너 소재 규격 |
| `components.md` | `framework/specs/components/component-contract.md` | Button·Badge의 Variant × State → Token 표 |
| `validation.md` | `framework/specs/validation/accessibility-checklist.md` | 실제 대비 계산 결과, 접근성 자가 점검 |

저장소 전체 관점의 구조는 [`framework/adapters/`](../../../framework/adapters/)(스펙 → 시스템별 실제 값)와 같은 관계이며, 이 문서는 그 관계를 프로젝트 하나 안에서 재현한 것이다.

실제 코드 위치: 토큰 전체는 [`src/index.css`](../src/index.css), 컴포넌트는 [`src/components/ui/`](../src/components/ui/), 페이지 적용은 [`src/App.tsx`](../src/App.tsx), 다크모드 저장은 [`src/hooks/use-theme.ts`](../src/hooks/use-theme.ts).
