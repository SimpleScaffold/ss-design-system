# fluent

Microsoft Fluent Design System (Fluent 2 / Fluent UI) 공식 문서 원자료 및 요약.

## Fluent 2란

Fluent는 Microsoft가 만들고 유지하는 디자인 시스템으로, Windows·웹(React/Web Components)·iOS·Android 등 자사의 모든 플랫폼에서 일관된 제품 경험을 만들기 위한 원칙·컴포넌트·디자인 토큰을 제공한다. 현재 공식 사이트와 GitHub 저장소가 다루는 버전은 **Fluent 2**이며, "Fluent"라는 이름 자체가 가리키는 것은 항상 최신 세대를 뜻한다. Fluent 2는 과거 Windows 전용 비주얼 언어였던 Fluent(1)과, 웹/Office 제품용 컴포넌트 라이브러리였던 Office UI Fabric(이후 저장소·패키지명이 `office-ui-fabric-react` → `@fluentui/react`로, 저장소도 `OfficeDev/office-ui-fabric-react` → `microsoft/fluentui`로 개명)을 하나의 크로스플랫폼 시스템으로 통합한 결과물이다.

## 공식 소스

| 소스 | 위치 | 비고 |
| --- | --- | --- |
| Fluent 2 공식 사이트 | [fluent2.microsoft.design](https://fluent2.microsoft.design/) | 디자인 원칙, Figma UI 키트, 플랫폼별(Web/iOS/Android/Windows) 컴포넌트 문서 |
| 디자인 원칙 페이지 | [fluent2.microsoft.design/design-principles](https://fluent2.microsoft.design/design-principles) | Fluent 2의 4대 원칙 원문 |
| GitHub 모노레포 | [microsoft/fluentui](https://github.com/microsoft/fluentui) | React/Web Components/Blazor 등 구현체 전체 |
| 토큰 아키텍처 문서 | [`docs/architecture/design-tokens.md`](https://github.com/microsoft/fluentui/blob/master/docs/architecture/design-tokens.md) | Global/Alias/Control 3계층 토큰 구조 설명 |
| 토큰 원자료(Global) | [`packages/tokens/src/global/`](https://github.com/microsoft/fluentui/tree/master/packages/tokens/src/global) | `colors.ts`, `colorPalette.ts`, `brandColors.ts`, `fonts.ts`, `spacings.ts`, `borderRadius.ts`, `strokeWidths.ts`, `curves.ts`, `durations.ts` 등 — 의미 없는 원시 값(hex, px) |
| 토큰 원자료(Alias) | [`packages/tokens/src/alias/`](https://github.com/microsoft/fluentui/tree/master/packages/tokens/src/alias) | `lightColor.ts` / `darkColor.ts` / `highContrastColor.ts` 등 — Global 토큰에 의미를 부여한 시맨틱 토큰 |
| 완성 테마 | [`packages/tokens/src/themes/web/`](https://github.com/microsoft/fluentui/tree/master/packages/tokens/src/themes/web), [`.../themes/teams/`](https://github.com/microsoft/fluentui/tree/master/packages/tokens/src/themes/teams) | `webLightTheme`/`webDarkTheme`, Teams 전용 light/dark/high-contrast 테마 |
| 배포 패키지 | `@fluentui/tokens` (npm) — `@fluentui/react-theme`, `@fluentui/react-components`가 재수출 | 실제 컴포넌트가 소비하는 토큰 진입점 |
| 토큰 파이프라인 | [microsoft/fluentui-token-pipeline](https://github.com/microsoft/fluentui-token-pipeline) | 토큰 JSON(W3C Design Token Community Group 초안 포맷 지향)을 각 언어 소스로 변환하는 빌드 도구 |

## 디자인 철학 / 근거

### 세대 교체: Fluent(1) vs Fluent 2

- Fluent(1)은 2017년 Build 컨퍼런스에서 발표(코드네임 "Project Neon")된 Windows 전용 비주얼 언어로, **Light·Depth·Motion·Material·Scale** 5대 조형 요소를 축으로 삼았다 — 조명·그림자·모션 등 "화면이 물성을 갖는 느낌"에 초점을 맞춘 스타일 규범에 가까웠다.
- Fluent 2는 이 조형 원칙 대신, 플랫폼을 가리지 않는 **4대 디자인 원칙**으로 재정의됐다(아래 참고). Windows 고유의 시각효과 중심에서, 웹·모바일을 포함한 전 플랫폼이 공유할 수 있는 태도·가치 중심으로 무게중심이 옮겨간 것이 세대 차이의 핵심.

### Fluent 2의 4대 디자인 원칙

공식 문서(`design-principles` 페이지) 원문 기준:

1. **Natural on every platform** — 플랫폼에 맞게 적응하고, 사용자가 이미 익숙한 것 위에 설계한다.
2. **Built for focus** — 군더더기를 줄여 행동을 자연스럽게 이끌어낸다.
3. **One for all, all for one** — 다양한 관점과 능력을 고려해 모두에게 이롭게 설계한다(접근성이 원칙 레벨에 명시).
4. **Unmistakably Microsoft** — 어떤 제품·어떤 순간에도 "하나의 Microsoft"처럼 느껴지게 한다.

### 토큰 3계층 구조

`docs/architecture/design-tokens.md`가 명시하는 구조: **Global**(의미 없는 상수 — 예 "grey 64 = #A3A3A3") → **Alias**(Global 토큰에서 파생되며 맥락적 의미를 부여받은 시맨틱 토큰) → **Control**(개별 컴포넌트가 자신을 그릴 때 Alias 토큰을 소비하는 레벨). "하드코딩된 값은 테마·고대비 모드·다크모드를 깨뜨린다"는 것이 원칙의 근거로 명시돼 있다 — KRDS의 Primitive→Semantic→Component 3계층, 그리고 우리 프레임워크의 "공통 스펙 → 어댑터 → 실제 구현" 구조와 동일한 발상.

### 테마 모델

Fluent UI는 라이트/다크/고대비를 저장소에서부터 대등한 1급 시민으로 다룬다. 웹용 `webLightTheme`/`webDarkTheme` 외에 Teams 제품 전용 `teamsLightTheme`/`teamsDarkTheme`/`teamsHighContrastTheme` 세트가 별도로 존재 — 하나의 토큰 체계 위에서 제품별로 다른 테마 조합을 구성할 수 있는 구조다. `createLightTheme`/`createDarkTheme`/`createHighContrastTheme` 같은 테마 생성 함수도 공개돼 있어, 서드파티가 자체 브랜드 색으로 커스텀 테마를 만드는 것을 전제로 설계돼 있다.

## 발표에 인용할 만한 문구

> "Your experiences should consider, learn, and reflect a range of perspectives and abilities for the benefit of all." — 4대 원칙 중 "One for all, all for one"의 정의. 접근성을 부가 기능이 아니라 디자인 원칙 그 자체로 선언한 문구.

> "Hardcoded values break theming, high contrast mode, and dark mode." — 토큰 아키텍처 문서가 하드코딩을 금지하는 이유를 설명하는 문장. "왜 토큰을 써야 하는가"를 한 줄로 요약하는 근거로 그대로 인용 가능.

## 참고

이 저장소에는 아직 `framework/adapters/fluent/`가 없다. 즉 이 문서는 KRDS 어댑터 문서들과 달리 실제 hex/px 토큰 값을 옮겨 적지 않은 **철학·소스 포인터 전용** 문서다 — `material-design/README.md`, `ant-design/README.md`와 같은 위치의 문서이되, 향후 어댑터 작업의 1차 소스(위 GitHub 경로들)를 미리 정리해둔 상태. 실제 값이 필요해지면 `packages/tokens/src/global/`, `.../alias/`, `.../themes/`를 1차 소스로 삼아 어댑터 문서를 작성하면 된다.
