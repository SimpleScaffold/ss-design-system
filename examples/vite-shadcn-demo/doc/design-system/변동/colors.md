# 색 — 이 프로젝트가 채운 값

> 규칙: [`../고정/colors.md`](../고정/colors.md) · 실제 코드: [`../../src/index.css`](../../src/index.css), [`../../src/components/ui/button.tsx`](../../src/components/ui/button.tsx), [`../../src/components/ui/badge.tsx`](../../src/components/ui/badge.tsx) · 참고 사이트: [`../추천사이트.md`](../추천사이트.md)

브랜드색은 실제 회사색이 아니라 **데모용으로 임의 지정한 인디고**다(색상각 265). `prompts/demo/{toss,naver,daangn}.md`처럼 실제 브랜드를 재현하는 문서가 아니라, "고정 계약을 지키는 임의의 프로젝트 하나"를 보여주는 것이 목적이라 실제 브랜드 hex를 쓰지 않았다.

## 1. 팔레트는 6개

| 팔레트 | 종류 | 단계 수 | 값의 출처 |
| --- | --- | --- | --- |
| neutral | 흑백(chroma 0) | 12 (`0·50·100·200·300·400·500·600·700·800·900·950`) | shadcn init이 생성한 기본값 — 값 그대로, 이름만 붙였다 |
| primary | 인터랙티브(브랜드) | 8 (`05·10·20·30·50·60·70·100`) | 이 프로젝트가 새로 만듦(아래 §2) |
| destructive / success / warning / info | 상태색 | 8 (동일) | 이 프로젝트가 새로 만듦(아래 §2) |

neutral이 12단계이고 나머지 5개가 8단계인 이유: neutral은 shadcn 기본값 자체가 이미 실사용 중이던 12개 명도 레벨을 그대로 이름 붙인 것이라 바꿀 이유가 없었고, 나머지 5개는 이 프로젝트가 목적(버튼 상태 전환, 배지 소프트 스타일)에 맞춰 처음부터 설계했다.

## 2. 팔레트 생성 방법

`색상각·채도는 고정, 명도만 이동`(고정/colors.md §2)을 실제 수치로 만들기 위해 임시 Node 스크립트([culori](https://culorijs.org/) 사용, 저장소에는 남기지 않음)로 계산했다 — 손으로 어림값을 넣지 않았다.

**단계별 명도(L)·채도 비율 커브** (5개 색상군 공통, `success`만 아래 각주대로 예외):

| 단계 | 05 | 10 | 20 | 30 | 50 | 60 | 70 | 100 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 역할 | surface(옅은 배경) | border | 다크 pressed | 다크 base | **base(기본, light)** | hover / text | pressed | 다크 배지 surface |
| L | 0.97 | 0.90 | 0.83 | 0.75 | 0.50 | 0.42 | 0.34 | 0.20 |
| 채도 비율(×family 최대채도) | 0.10 | 0.55 | 0.85 | 0.95 | 1.00 | 0.95 | 0.85 | 0.45 |

> `success`(초록, 색상각 150)는 같은 L에서 다른 색상군보다 시각적으로 더 밝게 읽혀 50/60/70단계에서 흰 글자 대비가 기준(4.5:1)에 못 미쳤다(계산 결과 4.34:1). 그래서 success만 50/60/70의 L을 `0.44/0.37/0.30`으로 더 낮췄다 — 색상각·채도 비율 공식은 동일하게 유지하고 L 커브만 이 색상군에 한해 보정한 것이라 `고정/colors.md` §2를 벗어나지 않는다.

**색상각·최대채도** (family별 고정값):

| family | 색상각(H) | 최대채도(C) |
| --- | --- | --- |
| primary | 265 | 0.18 |
| destructive | 27 | 0.24 |
| success | 150 | 0.16 |
| warning | 85 | 0.17 |
| info | 230 | 0.17 |

## 3. Primitive 값 + 대비 검산

각 단계 위에 흰 글자(`oklch(0.985 0 0)`)와 검은 글자(`oklch(0.205 0 0)`) 중 WCAG AA 4.5:1을 만족하는(혹은 더 큰 여유가 있는) 쪽을 스크립트로 계산해 **미리 정했다**(고정/colors.md §7) — 컴포넌트를 만들 때마다 다시 재지 않는다.

| family | 05 | 10 | 20 | 30 | 50 (base) | 60 | 70 | 100 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| primary | `oklch(0.97 0.014 265)` | `oklch(0.9 0.048 265)` | `oklch(0.83 0.084 265)` | `oklch(0.75 0.128 265)` | `oklch(0.5 0.18 265)` | `oklch(0.42 0.171 265)` | `oklch(0.34 0.153 265)` | `oklch(0.2 0.081 265)` |
| destructive | `oklch(0.97 0.015 27)` | `oklch(0.9 0.052 27)` | `oklch(0.83 0.094 27)` | `oklch(0.75 0.151 27)` | `oklch(0.5 0.204 27)` | `oklch(0.42 0.171 27)` | `oklch(0.34 0.139 27)` | `oklch(0.2 0.082 27)` |
| success | `oklch(0.97 0.016 150)` | `oklch(0.9 0.088 150)` | `oklch(0.83 0.136 150)` | `oklch(0.75 0.152 150)` | `oklch(0.44 0.121 150)` | `oklch(0.37 0.102 150)` | `oklch(0.3 0.083 150)` | `oklch(0.2 0.055 150)` |
| warning | `oklch(0.97 0.017 85)` | `oklch(0.9 0.094 85)` | `oklch(0.83 0.145 85)` | `oklch(0.75 0.154 85)` | `oklch(0.5 0.102 85)` | `oklch(0.42 0.086 85)` | `oklch(0.34 0.07 85)` | `oklch(0.2 0.041 85)` |
| info | `oklch(0.97 0.017 230)` | `oklch(0.9 0.061 230)` | `oklch(0.83 0.106 230)` | `oklch(0.75 0.149 230)` | `oklch(0.5 0.1 230)` | `oklch(0.42 0.084 230)` | `oklch(0.34 0.068 230)` | `oklch(0.2 0.04 230)` |

**대비 검산 결과 (05/10/20/30단계는 전부 흑자, 50/60/70/100단계는 전부 백자 — 아래는 채택된 쪽의 대비율)**:

| family | 05(흑) | 10(흑) | 20(흑) | 30(흑) | 50(백) | 60(백) | 70(백) | 100(백) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| primary | 16.42 | 13.27 | 10.57 | 7.97 | 5.98 | 8.46 | 11.71 | 17.51 |
| destructive | 16.35 | 13.06 | 10.24 | 7.56 | 6.40 | 8.86 | 12.01 | 17.69 |
| success | 16.51 | 13.71 | 11.15 | 8.54 | 7.03 | 9.55 | 12.65 | 17.12 |
| warning | 16.42 | 13.25 | 10.52 | 7.96 | 5.80 | 8.16 | 11.32 | 17.37 |
| info | 16.48 | 13.46 | 10.84 | 8.30 | 5.61 | 7.94 | 11.10 | 17.26 |

전부 4.5:1을 넉넉히 넘는다 — 가장 낮은 값(info의 50단계, 5.61)도 기준보다 1.1 이상 여유가 있다.

## 4. 상태색 소비 패턴 — surface / border / text

배지(Badge)처럼 옅은 배경 위에 글자를 올리는 컴포넌트는 base(50) 대신 이 세 시맨틱을 쓴다(고정/colors.md §9). `src/components/ui/badge.tsx`의 `destructive`/`success`/`warning`/`info` variant가 실제 사용처다.

| 시맨틱 | 라이트 | 다크 | 역할 |
| --- | --- | --- | --- |
| `--{name}-surface` | 단계 05 | 단계 100 | 배지 배경 |
| `--{name}-border` | 단계 10 | 단계 70 | 배지 테두리 |
| `--{name}-text` | 단계 60 | 단계 20 | 배지 글자 |

대비 검산(글자 vs 배경, 스크립트로 재확인):

| family | text(60)-on-surface(05), 라이트 | text(20)-on-surface(100), 다크 |
| --- | --- | --- |
| primary | 8.10 | 10.78 |
| destructive | 8.44 | 10.56 |
| success | 9.19 | 11.13 |
| warning | 7.82 | 10.65 |
| info | 7.63 | 10.91 |

## 5. Primary base + Hover/Pressed — 색-mix를 팔레트 단계에 맞추기

`--primary`는 라이트에서 50단계, 다크에서 30단계를 가리킨다(§6 다크 방향 참고). Hover는 60단계, Pressed는 70단계로 "한 단계씩 더 이동"하는 것이 목표이지만(고정/colors.md §8), 컴포넌트는 여전히 `color-mix(in oklch, var(--primary) N%, var(--foreground))`만 쓴다 — 아래 `N%`는 "결과 L이 목표 단계의 L과 같아지도록" 역산한 값이다.

```
N% = (L_목표단계 − L_foreground) / (L_base단계 − L_foreground)
```

| 모드 | base L | foreground L | Hover 목표(60/20) L | Hover N% | Pressed 목표(70/10) L | Pressed N% |
| --- | --- | --- | --- | --- | --- | --- |
| 라이트 | 0.50 | 0.145 (neutral-950) | 0.42 | **77%** | 0.34 | **55%** |
| 다크 | 0.75 | 0.985 (neutral-50) | 0.83 | **66%** | 0.90 | **36%** |

`src/components/ui/button.tsx`의 `default`/`destructive` variant가 실제 구현이다:

```
hover:bg-[color-mix(in_oklch,var(--primary)_77%,var(--foreground))]
active:bg-[color-mix(in_oklch,var(--primary)_55%,var(--foreground))]
dark:hover:bg-[color-mix(in_oklch,var(--primary)_66%,var(--foreground))]
dark:active:bg-[color-mix(in_oklch,var(--primary)_36%,var(--foreground))]
```

한계: `color-mix`는 L과 채도를 함께 옮기는 단일 파라미터라, 채도까지 목표 단계와 완전히 같아지지는 않는다(목표 60단계는 채도 0.95×최대인데 반해 77% 믹스의 실제 채도는 이보다 조금 낮다). L(밝기, 대비에 직접 영향)은 정확히 맞추고 채도는 근사치로 남긴 것 — "컴포넌트는 파생 토큰이 아니라 color-mix만 쓴다"는 계약과 "결과는 팔레트 단계와 같아야 한다"는 요구 사이의 실용적 절충이다.

## 6. 표면(Surface) 깊이 -1 ~ +3

`colors.md` §6(배경 레이어)과 `elevation.md` §3(레벨 -1~+4)을 합쳐 만든 표면 시맨틱 — neutral primitive만 가리킨다. 그림자와 짝을 이루는 부분은 [`elevation.md`](./elevation.md) 참고.

| 표면 | 레벨 | 라이트 | 다크 | 실제 쓰임 |
| --- | --- | --- | --- | --- |
| `--surface-recessed` | -1 | `--color-neutral-200` | `--color-neutral-950` | `--sidebar` (오목한 패널) |
| `--surface-base` | 0 | `--color-neutral-50` | `--color-neutral-900` | `--background` (페이지 캔버스) |
| `--surface-raised` | 1 | `--color-neutral-0` | `--color-neutral-800` | `--card` |
| `--surface-overlay` | 2 | `--color-neutral-0`* | `--color-neutral-800`* | `--popover` (`*` 그림자로 구분, `elevation.md` 참고) |
| `--surface-modal` | 3 | `--color-neutral-0`* | `--color-neutral-800`* | Dialog (`*` 그림자+딤드로 구분) |

라이트 모드는 0(옅은 회색 캔버스)→1(순백 카드)로 밝아지다 흰 천장에 막히고, 다크 모드는 §12 원칙대로 0→1로 갈수록 더 밝아지는 같은 방향을 유지한다 — 두 방향 다 "위로 갈수록 밝아진다"의 다른 표현이다.

## 7. Neutral (변경 없음)

`--color-neutral-0…950` 12단계는 shadcn init이 생성한 값 그대로다 — 라이트/다크 각각에서 실제로 쓰인 명도(L) 12개(1, 0.985, 0.97, 0.922, 0.87, 0.708, 0.556, 0.439, 0.371, 0.269, 0.205, 0.145)를 그대로 이름 붙인 것이라 값을 바꾸지 않았다.
