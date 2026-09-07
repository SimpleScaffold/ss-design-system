# apple-hig

Apple Human Interface Guidelines(HIG) 원자료 및 요약.

## HIG란

Human Interface Guidelines(HIG)는 Apple이 직접 발행하는 공식 디자인 가이드로, iOS·iPadOS·macOS·watchOS·tvOS·visionOS 전 플랫폼에 걸쳐 앱/게임을 어떻게 설계해야 하는지에 대한 원칙과 권장 사항을 담는다. KRDS·Material Design·Fluent·Carbon과 달리 **공개 GitHub 토큰 저장소나 배포 가능한 컴포넌트 라이브러리가 없다** — HIG는 처음부터 끝까지 "가이드 문서(prose)"이며, 실제 hex/px 값은 SwiftUI/UIKit/AppKit의 시스템 API(`Color.primary`, `labelColor` 등)가 런타임에 공급하고 HIG 본문에는 노출되지 않는다. 이 차이가 이 문서 전체의 전제다.

## 공식 소스

메인 진입점: [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines) (Foundations → Patterns → Components → Inputs → Technologies 순 구조). 2022년 6월 7일 사이트가 전면 개편되어 플랫폼별로 흩어져 있던 가이드를 하나의 통합 문서로 병합했고([Meet the new Human Interface Guidelines](https://developer.apple.com/news/?id=v8a3aetj)), 2025년 WWDC에서 "Liquid Glass"라는 새 머티리얼 언어가 도입되며 Foundations 하위 문서들이 다시 갱신됐다.

| 하위 문서 | URL | 핵심 내용 |
| --- | --- | --- |
| Color | [/color](https://developer.apple.com/design/human-interface-guidelines/color) | 시맨틱 컬러, 라이트/다크/고대비 자동 대응 |
| Dark Mode | [/dark-mode](https://developer.apple.com/design/human-interface-guidelines/dark-mode) | 다크모드 전용 팔레트, 대비 최소 기준 |
| Typography | [/typography](https://developer.apple.com/design/human-interface-guidelines/typography) | SF(San Francisco)/New York 폰트 패밀리, 텍스트 스타일, Dynamic Type |
| Layout | [/layout](https://developer.apple.com/design/human-interface-guidelines/layout) | 그룹핑, 여백, 화면 전체를 채우는 레이아웃 원칙 |
| Materials | [/materials](https://developer.apple.com/design/human-interface-guidelines/materials) | Liquid Glass / Standard materials |
| Motion | [/motion](https://developer.apple.com/design/human-interface-guidelines/motion) | 목적 있는 모션, 모션 대체 수단(햅틱/오디오) |
| Accessibility | [/accessibility](https://developer.apple.com/design/human-interface-guidelines/accessibility) | Intuitive·Perceivable·Adaptable 3원칙, Dynamic Type 200%(watchOS 140%) |
| SF Symbols | [/sf-symbols](https://developer.apple.com/design/human-interface-guidelines/sf-symbols) | 시스템 아이콘 심볼, 렌더링 모드 |

## 디자인 철학 / 근거

### "Clarity·Deference·Depth" — 역사와 현재 프레이밍의 차이

iOS 7 시절부터 Apple이 반복해서 언급해 온 세 가지 원칙은 **Clarity(명료함) · Deference(절제) · Depth(깊이)** 였다 — UI는 콘텐츠와 경쟁하지 않고(Deference), 텍스트/아이콘은 모든 크기에서 또렷해야 하며(Clarity), 레이어와 모션으로 위계를 전달한다(Depth)는 것. WWDC17 "Essential Design Principles" 등에서도 이 프레이밍이 반복됐다. 다만 **현재(2022년 개편 이후) 공식 사이트에는 이 세 가지를 하나의 페이지로 명시하는 "원칙" 문서가 더 이상 존재하지 않는다** — Foundations가 Color/Typography/Layout/Materials/Motion/Accessibility 등 주제별 문서로 재편됐고, 2025년 "Liquid Glass" 발표 이후로는 "컨트롤이 콘텐츠 위에 뜨는 독립된 기능 레이어를 이룬다"는 머티리얼 설계 자체가 사실상 Deference·Depth를 물리적으로 구현한 형태로 흡수된 것으로 보인다. 즉 세 기둥은 여전히 Apple 디자인 언어의 뿌리로 언급되지만, 지금은 "원칙 선언문"이 아니라 각 Foundations 문서의 실제 규칙으로 녹아 있다.

### 같은 원칙, 플랫폼마다 다른 구체값

HIG의 특징은 원칙은 플랫폼 공통이되 구체값은 플랫폼마다 다르게 명시한다는 점이다. Typography 문서의 기본/최소 본문 크기 표가 좋은 예다.

| 플랫폼 | 기본 크기 | 최소 크기 |
| --- | --- | --- |
| iOS, iPadOS | 17pt | 11pt |
| macOS | 13pt | 10pt |
| tvOS | 29pt | 23pt |
| visionOS | 17pt | 12pt |
| watchOS | 16pt | 12pt |

같은 "가독성" 원칙이 macOS(가까운 화면, 마우스)와 tvOS(먼 거리, 10ft UI)에서 전혀 다른 숫자로 표현된다 — watchOS는 손목이라는 제약 때문에 Dynamic Type 확대 상한도 다른 플랫폼(200%)과 달리 140%로 별도 명시돼 있다.

### 시스템 폰트와 Dynamic Type, 시맨틱 컬러

- **SF(San Francisco)** 패밀리는 SF Pro/SF Compact/SF Arabic/SF Mono 등 다국어·다용도 변형을 포함하고, **New York(NY)**은 세리프 짝꿍 폰트다. 두 폰트 모두 가변 폰트(variable font) 포맷으로 배포되어 굵기·너비 사이를 보간한다.
- 폰트 값 자체보다 **텍스트 스타일**(body, headline, large title 등 — 굵기·크기·행간의 조합)을 쓰라고 권장한다. 텍스트 스타일을 쓰면 Dynamic Type(사용자가 시스템 전체에서 글자 크기를 조절하는 기능)이 자동으로 따라온다.
- 색상도 마찬가지로 hex 값이 아니라 **시맨틱 컬러**(`labelColor`, `separator` 등)를 쓰라고 안내한다 — 이 값들은 라이트/다크 모드는 물론 "고대비(Increase Contrast)" 설정까지 자동으로 반영해 바뀐다. 커스텀 컬러를 쓰더라도 라이트/다크/고대비 변형을 각각 정의하라고 명시하며, 대비 비율은 시스템 컬러 기준 최소 4.5:1, 커스텀 컬러는 7:1을 권장한다.

### 접근성 3원칙과 머티리얼(Liquid Glass)

Accessibility 문서는 접근 가능한 인터페이스의 조건을 **Intuitive(직관적) · Perceivable(지각 가능) · Adaptable(적응 가능)** 세 가지로 정의한다. Materials 문서는 2025년부터 Liquid Glass(플랫폼 전반을 통일하는 동적 유리 재질 — 컨트롤/내비게이션 전용)와 Standard materials(콘텐츠 레이어 내부 구분용)를 구분해 쓰도록 안내하며, 두 재질 모두 라이트/다크 모드에 자동으로 적응한다.

## 발표에 인용할 만한 문구

> "Avoid using the same color to mean different things." — Color 문서 Best practices 첫 항목. 브랜드 색을 인터랙션 표시와 단순 강조에 동시에 쓰지 말라는 원칙으로, KRDS의 "색상만으로 정보를 전달하지 않는다"와 나란히 인용 가능.

> "Liquid Glass forms a distinct functional layer for controls and navigation elements ... that floats above the content layer, establishing a clear visual hierarchy between functional elements and content." — Materials 문서. "컨트롤은 콘텐츠 위에, 콘텐츠와 경쟁하지 않는다"는 Deference 철학이 2025년 머티리얼 설계로 구체화된 문장.

## 어댑터 부재에 대한 안내

`framework/adapters/apple-hig/`는 **존재하지 않으며, krds/material/ant-design과 같은 방식으로는 만들기 어렵다.** 다른 시스템은 `tokens/*.json`처럼 hex/px 원본 값을 공개 저장소에서 그대로 가져올 수 있지만, HIG는 의도적으로 그런 원본 값을 공개하지 않는다 — 시맨틱 컬러(`labelColor` 등)나 텍스트 스타일(`body`, `headline` 등)의 실제 값은 SwiftUI/UIKit/AppKit 런타임 안에만 존재하고, HIG 문서는 "이걸 써라"는 지침만 제공한다. 따라서 이 문서는 (다른 시스템들과 달리) 어댑터로 이어지는 1차 소스가 아니라, 철학/근거 참고용으로만 남겨둔다.
