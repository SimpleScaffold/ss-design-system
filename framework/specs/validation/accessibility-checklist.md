# 검증 스펙 (Validation Checklist)

> 출처: `talk/script.md`에는 독립된 검증 슬라이드가 없다. 여러 토큰 스펙에 흩어져 있던 접근성·일관성 규칙(`colors.md` §4, `typography.md`, `elevation.md` §4, `components/component-contract.md` §3)을 하나의 체크리스트로 모아 검증 대상으로 승격했다. 이 중 코드로 판단 가능한 항목은 `framework/scripts/`가 실행 가능한 검증 도구로 구현했다(§ "`framework/scripts/`와의 관계" 참고).

## 1. 왜 별도 스펙인가

`tokens/*.md`는 "무엇을 규칙으로 정하는지"를 다루고, 이 문서는 "그 규칙을 실제로 지켰는지 어떻게 확인하는지"를 다룬다. 규칙을 세워도 검증 단계가 없으면 시간이 지나며 어긋난 값이 슬금슬금 들어온다(예: 급하게 처리한 화면에 `13px`, `#3183F7` 같은 임의 값이 하나씩 섞이는 식). 체크리스트는 사람이 리뷰할 때도, AI 에이전트가 생성 결과를 스스로 점검할 때도 같은 기준으로 쓸 수 있어야 한다.

## 2. 색상 검증

| 항목 | 기준 | 근거 |
| --- | --- | --- |
| 대비(Contrast) | 본문 텍스트/배경 4.5:1 이상 (WCAG AA) | `tokens/colors.md` §4 |
| 고대비 모드 대비 | 본문 7:1 이상, 헤딩/레이블 4.5:1 이상 | `tokens/colors.md` §12 |
| 색상 단독 사용 금지 | 상태(성공/오류 등)를 색상만으로 표현하지 않았는가 — 아이콘/텍스트 병행 여부 | `tokens/colors.md` §12 |
| 팔레트 이탈 값 | 코드에 `tokens/colors.md`의 팔레트/레벨에 없는 hex 값이 하드코딩되어 있지 않은가 | 팔레트 일관성 |

## 3. 타이포그래피 검증

| 항목 | 기준 |
| --- | --- |
| 줄간격 | 본문 기준 최소 150% |
| 폰트 개수 | 프로젝트 전체에서 지정한 1개 폰트 패밀리만 사용 (`tokens/typography.md`) |
| 지원 언어 커버리지 | 서비스 지원 언어를 모두 커버하는 폰트인가 |

## 4. 상태(State)·상호작용 검증

| 항목 | 기준 |
| --- | --- |
| 상태 레벨 간격 | Default→Hover→Pressed가 팔레트 인접 레벨만 이동했는가 (`tokens/states.md` §3 — 50→90처럼 건너뛰지 않기) |
| Focus-visible | 색상 변화 외에 outline/ring 등 비색상 단서가 있는가 (`tokens/states.md` §4) |
| 터치 타깃 | 상호작용 요소의 탭/클릭 영역이 시각적 크기보다 작지 않은가 (`tokens/states.md` §5) |
| Disabled 대비 | 비활성 상태도 "비활성임을 알아볼 수 있는" 최소 대비를 유지하는가 (`tokens/states.md` §6) |

## 5. 레이아웃·간격 검증

| 항목 | 기준 |
| --- | --- |
| 간격 값 | 8px 단위(예외 4px) 외의 임의 값이 없는가 (`tokens/spacing.md`) |
| Radius 값 | 프로젝트에 정의한 단일 radius 기준 외 값이 없는가 (`tokens/radius.md`) |
| Column/Gutter 정렬 | 요소가 Column 경계에서 시작/종료하는가 (`tokens/layout.md`) |

## 6. 엘리베이션 검증

| 항목 | 기준 |
| --- | --- |
| 단계 수 | 정의한 단계(예: base/raised/overlay) 밖의 임의 그림자 값이 없는가 (`tokens/elevation.md` §3) |
| 다크 모드 대응 | 다크/고대비 모드에서 그림자 대신 보더·표면색 대비로 층을 구분하는가 (`tokens/elevation.md` §4) |

## 7. 체크리스트 요약 — 실행 순서

1. 색상 대비 (§2) → 2. 팔레트 이탈 값 스캔 (§2) → 3. 타이포 일관성 (§3) → 4. 상태·상호작용 (§4) → 5. 간격/Radius (§5) → 6. 엘리베이션 (§6).

빠르게 훑을 때는 1·2·4번(대비, 팔레트 이탈, Focus-visible)이 실제 사용성 문제로 가장 자주 이어지므로 우선순위로 둔다.

## `framework/scripts/`와의 관계

이 체크리스트의 §2("팔레트 이탈 값")·§5("간격 값")·§2 대비 계산은 [`framework/scripts/`](../../scripts/)가 실제로 구현했다 — `scan-token-escapes.mjs`(팔레트 이탈 hex·8px/4px 그리드 이탈), `contrast.mjs`(WCAG 명암비 계산). §4 상태 레벨 간격·§6 엘리베이션 단계는 구조적 판단이 필요해 아직 자동화하지 않았다(이유는 `framework/scripts/README.md` "아직 자동화하지 않은 것" 참고).
