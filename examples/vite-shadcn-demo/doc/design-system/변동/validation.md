# 검증 — 이 프로젝트의 실제 점검 결과

> 규칙: [`../고정/validation.md`](../고정/validation.md) · 계산 방법: [`colors.md`](./colors.md) §2~§4(임시 Node 스크립트, culori)

accessibility-checklist.md §2~§6 항목별로, 이 프로젝트에 실제로 적용한 결과를 기록한다.

## §2 색상 검증

| 항목 | 기준 | 이 프로젝트 결과 |
| --- | --- | --- |
| 대비(Contrast) | 4.5:1 이상 | 통과 — 6팔레트 base/text 조합 전부 5.6:1 이상([`colors.md`](./colors.md) §3·§4 표), 가장 낮은 값은 info의 50단계 5.61:1 |
| 고대비 모드 대비 | 본문 7:1 이상 | 이 데모는 별도 고대비 모드를 구현하지 않았다 — 다크 모드까지만 적용(범위 밖으로 명시) |
| 색상 단독 사용 금지 | 아이콘/텍스트 병행 여부 | 부분 통과 — Badge(Destructive/Success/Warning/Info)는 색+텍스트 라벨을 함께 쓰지만, 전용 아이콘은 아직 없다(개선 여지로 남김) |
| 팔레트 이탈 값 | 하드코딩된 hex 없는지 | 통과 — 컴포넌트 소스(`grep -rn "#[0-9a-fA-F]\{3,6\}" src/`)에 hex 없음. 모든 색은 `oklch()` + semantic 변수 참조 |

## §3 타이포그래피 검증

| 항목 | 기준 | 이 프로젝트 결과 |
| --- | --- | --- |
| 줄간격 | 본문 최소 150% | 통과 — Body-1/2 line-height 1.6(160%) |
| 폰트 개수 | 1개만 | 통과 — Pretendard Variable 하나([`typography.md`](./typography.md)) |
| 지원 언어 커버리지 | 서비스 지원 언어 전부 | 통과 — 한글+영문+숫자, Pretendard가 전부 지원 |

## §4 상태·상호작용 검증

| 항목 | 기준 | 이 프로젝트 결과 |
| --- | --- | --- |
| 상태 레벨 간격 | Default→Hover→Pressed가 인접 레벨만 이동 | 통과 — 팔레트 단계 50→60→70(다크 30→20→10), 한 단계씩만 이동. 근거: [`colors.md`](./colors.md) §5 |
| Focus-visible | 비색상 단서(outline/ring) | 통과 — 모든 인터랙티브 요소가 `ring-3 ring-ring/50`(또는 destructive는 `ring-destructive/20`), Playwright로 Tab 이동 후 실제 렌더링 확인(`box-shadow: 0 0 0 3px`) |
| Disabled 대비 | 비활성임을 알아볼 최소 대비 | 통과 — `opacity-50` + `pointer-events-none`, 배경색은 유지한 채 투명도만 낮춰 "존재하지만 누를 수 없음"이 시각적으로 구분됨 |

## §5 레이아웃·간격 검증

| 항목 | 기준 | 이 프로젝트 결과 |
| --- | --- | --- |
| 간격 값 | 8px 단위(예외 4px) | 통과 — [`spacing.md`](./spacing.md) §1 감사 결과, App.tsx 레벨 임의 값 없음(shadcn 벤더 기본값은 범위 밖으로 명시) |
| Radius 값 | 단일 기준 외 값 없음 | 통과 — `--radius` 배수 스케일만 사용(Badge의 `rounded-4xl`은 "배지는 pill"이라는 컴포넌트 고유 관례로 별도 취급, [`radius.md`](./radius.md)) |
| Column/Gutter 정렬 | Column 경계에서 시작·종료 | 통과 — 레이아웃 컬럼 데모(`grid-cols-6/12/16`)가 세 브레이크포인트 모두에서 실제로 정렬되는 것을 Playwright 스크린샷으로 확인 |

## §6 엘리베이션 검증

| 항목 | 기준 | 이 프로젝트 결과 |
| --- | --- | --- |
| 단계 수 | 정의한 단계 밖 임의 그림자 없음 | 통과 — `--elevation-0/1/2/3` 4단계만 사용([`elevation.md`](./elevation.md)) |
| 다크 모드 대응 | 그림자 대신 보더·표면색 대비 | 통과 — 표면색 자체가 층마다 다르고(neutral-800/900), 그림자도 순검정+더 큰 불투명도로 보완 |

## 요약

우선순위로 꼽히는 3가지(대비, 팔레트 이탈, Focus-visible) 모두 통과했다. 미달/범위 밖으로 남긴 것은 고대비 모드(미구현)와 상태 배지의 아이콘 병행(라벨 텍스트로는 충족하나 아이콘까지는 추가하지 않음) 두 가지다 — 다음에 이 프로젝트를 확장한다면 우선순위로 삼을 항목.
