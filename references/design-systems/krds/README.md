# krds

KRDS 공식 문서/스타일가이드/패턴 원자료 및 요약.

## KRDS HTML ComponentKit

- Repo: [KRDS-uiux/krds-uiux](https://github.com/KRDS-uiux/krds-uiux)
- 설명: 대한민국 디지털 정부 서비스의 편의성·일관성·접근성·사용성을 보장하기 위해 설계된 디자인 시스템. 공공 서비스 웹/앱에서 일관된 UX/UI를 제공하고, 다양한 디지털 정부 서비스의 표준화를 목적으로 함.
- 설치: `npm install krds-uiux`
- 구조: `README.md`, `html/`(HTML 컴포넌트 키트), `tokens/`(디자인 토큰), `resources/`, `package.json`
- 핵심 개념: 디자인 요소를 코드화(디자인 토큰)해서 디자이너·개발자 간 커뮤니케이션 비용과 작업 프로세스를 최소화. 디자인 라이브러리 + 디자인 토큰 + HTML 컴포넌트 키트를 연동해서 공공 웹/앱의 디자인 일관성을 유지.
- 역할: 디자이너가 정의한 UI 컴포넌트를 개발자가 HTML/CSS/JS로 바로 재사용할 수 있게 제공 — 기본 UI 요소를 직접 만들지 않아도 되므로 개발 속도와 일관성을 동시에 확보.
- 공식 링크: [KRDS 홈페이지](https://www.krds.go.kr) · [KRDS HTML 컴포넌트 문서](https://www.krds.go.kr/html/site/component/component_summary.html)
- 라이선스: 대한민국 디지털 정부 디자인 시스템(KRDS) 이용약관을 따름 — [저작권 안내](https://www.krds.go.kr/html/site/utility/utility_06.html)

> `tokens/transformed_tokens.json`이 실제 디자인 토큰(hex/px 값 포함) 원본이므로, `framework/adapters/krds/` 매핑 작업 시 1차 소스로 참고.

## 공식 스타일 가이드 (krds.go.kr)

사이트는 **디자인 스타일**(6페이지) → **컴포넌트**(12개 카테고리, 60여 페이지) → **기본 패턴 / 서비스 패턴** 순으로 구성된다. `framework/adapters/krds/*.md` 매핑 문서는 아래 6페이지를 1차 소스로 작성했다.

| 페이지 | 제목 | 대응 매핑 문서 |
| --- | --- | --- |
| [style_02](https://www.krds.go.kr/html/site/style/style_02.html) | 색상 (Color) | [`colors.md`](../../../framework/adapters/krds/colors.md) |
| [style_03](https://www.krds.go.kr/html/site/style/style_03.html) | 타이포그래피 (Typography) | [`typography.md`](../../../framework/adapters/krds/typography.md) |
| [style_04](https://www.krds.go.kr/html/site/style/style_04.html) | 형태 (Shape) | [`radius.md`](../../../framework/adapters/krds/radius.md) |
| [style_05](https://www.krds.go.kr/html/site/style/style_05.html) | 레이아웃 (Layout) | [`layout.md`](../../../framework/adapters/krds/layout.md) |
| [style_06](https://www.krds.go.kr/html/site/style/style_06.html) | 아이콘 (Icon) | [`icon.md`](../../../framework/adapters/krds/icon.md) |
| [style_07](https://www.krds.go.kr/html/site/style/style_07.html) | 디자인 토큰 (Design Token) | 각 매핑 문서 §토큰화 섹션 |

값 자체는 어댑터 문서에 옮겨뒀으므로 여기서는 발표 콘텐츠 구성에 참고할 만한 **디자인 철학/근거**만 요약한다.

### 표준형 vs 확장형 스타일

KRDS는 두 갈래의 준수 방식을 둔다 — 개념이 다른 여러 부처가 하나의 시스템을 공유해야 하는 KRDS만의 특수한 문제라 눈여겨볼 만하다.

- **표준형 스타일**: 정의된 토큰(색상/형태/레이아웃 값)을 그대로 사용. 대다수 기관 대상.
- **확장형 스타일**: 기관 고유 브랜드 색상/폰트/래디어스를 쓰되, KRDS의 *체계*(단계 수, 계산 공식, 접근성 기준)는 그대로 따르는 방식. "값은 바꿔도 되지만 구조는 지켜라"는 원칙 — 우리 프레임워크의 "공통 스펙(무관) + 어댑터(값)" 구조와 정확히 같은 발상.

### 접근성이 최우선 설계 기준

- 색상: "매직넘버"(3:1/4.5:1/7:1/15:1) 대비 기준을 팔레트 생성 공식에 내장 → 임의로 예쁜 색을 고르고 나중에 접근성 검사를 하는 게 아니라, **처음부터 대비 기준을 만족하도록 역산**해서 팔레트를 만든다.
- 타이포그래피: 줄간격 최소 150%(WCAG 1.4.12), 본문 최소 크기 기준.
- 색맹 시뮬레이터 활용, 색상만으로 정보를 전달하지 않고 아이콘/텍스트 병행.
- **선명한 화면 모드(고대비 모드)**를 시스템 레벨에서 지원 — 일반 다크모드가 아니라 저시력자를 위한 고대비 모드로, 색상뿐 아니라 보더 두께까지 함께 바뀐다.

### 디자인 토큰 3계층 구조

Primitive(참조 전용) → Semantic(디자인 툴에서 정의, 맥락적 의미 부여) → Component(코드에서만 정의) — 디자인 툴과 코드의 책임을 명확히 분리한 것이 특징. 우리 프레임워크의 "공통 스펙 → 어댑터 → 실제 컴포넌트 구현" 3단 구조와 대응된다.

### 발표에 인용할 만한 문구

> "각진 형태는 신뢰성과 전문성을, 둥근 형태는 친근함과 안정감을 전달한다" — Radius 최댓값을 12px로 제한한 근거(정부 서비스다운 절충).

> "색상 비율은 60-30-10 원칙을 활용해 시각적으로 조화로운 구성을 만든다" — 발표 슬라이드 4~5의 60-30-10 파트에서 공공 사례로 그대로 인용 가능 (토스/네이버/당근과 나란히 "정부도 같은 원칙을 쓴다"는 근거로 활용).
