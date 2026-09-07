# carbon

Carbon Design System 공식 문서 원자료 및 요약.

## Carbon Design System

- 공식 사이트: [carbondesignsystem.com](https://carbondesignsystem.com/)
- Repo: [carbon-design-system/carbon](https://github.com/carbon-design-system/carbon) (모노레포)
- 설명: IBM이 자체 브랜드·제품을 위해 만들고 오픈소스로 공개한 디자인 시스템. IBM Design Language를 기반으로 컴포넌트 코드(React/Web Components 등), 디자인 리소스(Figma 키트), 휴먼 인터페이스 가이드라인을 함께 제공한다. IBM이 자사 비즈니스 필요에 맞춰 만들지만("we build for the company's business needs") 누구나 쓰고 기여할 수 있도록 오픈소스로 공개한 구조.
- 라이선스: Apache License 2.0 ([`LICENSE`](https://github.com/carbon-design-system/carbon/blob/main/LICENSE))
- 이름의 유래: "탄소(carbon)가 자연에서 단순한 화합물로부터 복잡한 구조를 만들어내듯, 개별 스타일과 컴포넌트가 결합해 아름답고 복잡하며 직관적인 디자인을 만든다"는 은유에서 이름을 땄다 — [`what-is-carbon.mdx`](https://github.com/carbon-design-system/carbon-website/blob/main/src/pages/all-about-carbon/what-is-carbon.mdx)

> `framework/adapters/carbon/`는 아직 존재하지 않는다. 이 문서는 실제 hex/px 토큰 값의 1차 소스가 아니라, `material-design`/`ant-design` README와 마찬가지로 **철학·출처 포인터** 역할만 한다. 실제 토큰 값이 필요해지면 아래 GitHub 패키지 소스를 1차 자료로 삼아 `framework/adapters/carbon/` 매핑 문서를 새로 만들어야 한다.

## 공식 소스 맵

사이트 정보 아키텍처는 **Elements**(색상/타이포그래피/스페이싱/2x Grid/테마 등 기초 요소) → **Components** → **Patterns** → **Guidelines**(접근성/콘텐츠) 순. 실제 토큰 값은 사이트가 아니라 모노레포의 개별 패키지 소스에 있다.

| 주제 | 사이트 문서 | 실제 토큰 소스 (GitHub) |
| --- | --- | --- |
| 색상 | [elements/color](https://carbondesignsystem.com/elements/color/overview/) | [`packages/colors`](https://github.com/carbon-design-system/carbon/tree/main/packages/colors), [`packages/themes/src/{white,g10,g90,g100}.js`](https://github.com/carbon-design-system/carbon/tree/main/packages/themes/src) |
| 테마 | [elements/themes](https://carbondesignsystem.com/elements/themes/overview/) | [`packages/themes`](https://github.com/carbon-design-system/carbon/tree/main/packages/themes) |
| 타이포그래피 | [elements/typography](https://carbondesignsystem.com/elements/typography/overview/) | [`packages/type`](https://github.com/carbon-design-system/carbon/tree/main/packages/type) |
| 스페이싱 | [elements/spacing](https://carbondesignsystem.com/elements/spacing/overview/) | [`packages/layout`](https://github.com/carbon-design-system/carbon/tree/main/packages/layout) |
| 그리드(2x Grid) | [elements/2x-grid](https://carbondesignsystem.com/elements/2x-grid/overview/) | [`packages/grid`](https://github.com/carbon-design-system/carbon/tree/main/packages/grid) |
| 접근성 | [guidelines/accessibility](https://carbondesignsystem.com/guidelines/accessibility/overview/) | IBM Accessibility Checklist (WCAG AA, Section 508 기반) |

## 디자인 철학 / 근거

### 다섯 가지 지향(guiding principles)

Carbon 공식 문서(`what-is-carbon.mdx`, "How Carbon works" 절)가 명시한 원칙은 다음 다섯 가지다 — 흔히 알려진 "Clear/Efficient/Consistent/Beautiful" 4원칙은 과거 버전(v6 이전) 표현으로 보이며 현재 라이브 사이트에서는 확인되지 않아 아래로 대체한다.

- **Open** — 오픈소스 운동의 원칙을 따르는 분산 협업 체계. 사용자가 곧 제작자.
- **Inclusive** — 능력·상황에 관계없이 누구나 접근 가능하도록 설계.
- **Modular and flexible** — 컴포넌트가 서로 어떤 조합으로도 매끄럽게 동작하도록 모듈화.
- **User first** — 실사용자 리서치에 기반해 설계.
- **Builds consistency** — IBM Design Language를 기반으로 모든 요소가 애초부터 함께 작동하도록 설계되어 일관되고 응집력 있는 경험을 만듦.

### 테마 모델 — 단일 라이트/다크가 아니라 4개의 명명된 테마

Carbon은 라이트/다크 이분법 대신 **배경색으로 이름 붙인 4개의 기본 테마**를 둔다 — White·Gray 10(라이트 2종), Gray 90·Gray 100(다크 2종). 토큰(`$background`, `$text-primary` 등)은 테마 전체에서 이름과 역할이 동일하고, 테마마다 값(hex)만 바뀐다. 레이어링 모델도 라이트/다크가 다르게 동작한다 — 라이트 테마는 White↔Gray 10을 번갈아 쌓고, 다크 테마는 한 단계씩 밝아지며 쌓인다. 컬러 팔레트 자체는 흑/백 + 색상군별 10단계, 총 12단계(grade) 체계다.

### IBM Plex — 자체 제작 오픈소스 서체

Carbon의 타이포그래피는 IBM이 "글로벌 기술 기업으로서의 필요를 충족하고 IBM의 정신·신념·디자인 원칙을 반영하도록" 직접 설계해 오픈소스로 공개한 서체 **IBM Plex**(Sans/Serif/Mono, 각 Light/Regular/SemiBold 위주 사용 권장)를 기반으로 한다. 타입 스케일은 하나의 수식으로 생성된다 — 기준값 12px에서 시작해 `Xn = Xn-1 + {INT[(n-2)/4] + 1} * 2` 공식으로 단계별 크기를 산출. 스타일은 "productive"(제품용, 기본 14px, 고정 헤딩, 정보 밀도 중시)와 "expressive"(에디토리얼/마케팅용, 기본 16px, 유동 헤딩)의 두 세트로 나뉜다.

### 2x Grid — 8px "미니 유닛"에서 출발하는 기하학적 격자

그리드는 "IBM 디자인의 모든 시각 요소(타이포그래피부터 컬럼·박스·아이콘·일러스트까지)의 기하학적 토대"로 서술된다. 기본 단위는 8px "미니 유닛"이며, 2로 나누거나 곱하는 리듬(유동 그리드는 나눗셈, 고정 그리드는 곱셈)으로 컬럼·박스 크기를 만든다. 스페이싱 스케일(2/4/8의 배수, `$spacing-01`~`$spacing-13`, 2px~160px) 역시 이 2x 리듬과 타이포그래피 스케일에 맞춰 설계됐다고 명시한다.

### 접근성 — 체크리스트 기반, WCAG AA + Section 508

"접근 가능한 디자인은 장애가 있는 사용자만이 아니라 모두에게 더 나은 경험을 제공한다"는 전제 아래, 모든 컴포넌트가 IBM Accessibility Checklist(WCAG AA·Section 508·유럽 표준 기반)를 따르도록 설계한다. 색상은 대비비 기준(4.5:1/3:1)을 팔레트 단계 수로 환산한 표를 제공하고, 저시력·전맹 등 사용자군별로 "디자이너가 무엇을 고려해야 하는가"를 구체적으로 서술하는 방식이 특징이다.

## 발표에 인용할 만한 문구

> "The design system is named Carbon Design System because in nature the element carbon builds complex structures from simpler compounds. This motif mimics how our individual styles and components can combine to make beautifully complex, natural, and intuitive designs." — 이름 자체에 "단순한 요소들의 조합이 복잡하고 아름다운 결과를 만든다"는 철학을 담았다는 근거.

> "IBM firmly believes that web and software experiences should be accessible for everyone, regardless of abilities or impairments." — 접근성 섹션 서두 문구, KRDS의 접근성 최우선 원칙과 나란히 인용 가능.
