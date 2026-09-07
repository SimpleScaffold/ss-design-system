# material-design

Google Material Design 3(M3) 원자료 및 요약. **실제 토큰 값(hex/px)은 여기 두지 않는다** — 전부 [`framework/adapters/material/`](../../../framework/adapters/material/)에 소스 코드 기반으로 정리되어 있다. 이 문서는 "왜 이런 구조인가"라는 철학/설계 근거만 다룬다 (krds/README.md와 같은 역할 분리).

## 공식 소스

- [m3.material.io](https://m3.material.io) — Material 3 공식 디자인 가이드 사이트 (Foundations: Color, Typography, Shape, Motion 등)
- [`material-foundation/material-color-utilities`](https://github.com/material-foundation/material-color-utilities) — 색상 알고리즘(HCT 색공간, Tonal Palette, Role→Tone 매핑)의 1차 소스. `framework/adapters/material/colors.md`가 이 코드를 직접 인용.
- [`material-components/material-web`](https://github.com/material-components/material-web) `tokens/versions/v0_192/` — Shape/Typescale/Elevation 등 시스템 토큰의 실제 값.

## 핵심 설계 철학

### Seed color 1개 → 알고리즘이 전체 팔레트/역할 생성

KRDS·Ant Design처럼 사람이 미리 정한 hex 테이블을 참조하는 방식과 달리, M3는 Primary 색 1개(seed color)만 입력하면 나머지 모든 색상 역할(Primary/Secondary/Tertiary/Neutral/Error, 각각의 Container/On 변형)을 알고리즘으로 계산한다. 이때 사람 눈에 더 균일하게 느껴지는 명도 스케일을 만들기 위해 HSL이 아니라 **HCT(Hue, Chroma, Tone)** 라는 자체 색공간을 쓴다 — `framework/specs/tokens/colors.md` §3 "HSL L값 조정" 원칙과 방향은 같지만 색공간 자체가 다른 대표 사례.

### Dynamic Color — 사용자 배경화면에서 팔레트를 뽑는다

Android 12+에서 도입된 개념으로, 사용자의 배경화면 색상에서 seed color를 실시간으로 추출해 시스템 전체 팔레트를 재계산한다. "브랜드가 Primary 색 하나를 정한다"는 우리 공통 스펙 2항의 전제를, "사용자 개인화가 Primary 색을 정한다"로 뒤집은 사례 — 브랜드 일관성과 개인화가 충돌할 수 있는 지점을 보여준다.

### 3계층 토큰 구조 — Reference / System / Component

```
Reference (ref)   md.ref.palette.primary40         원본 tonal palette, 직접 참조 금지
System (sys)      md.sys.color.primary             Role에 Tone 매핑, 라이트/다크 스위칭
Component (comp)  md.comp.filled-button.container.color
```

KRDS의 Primitive/Semantic/Component, Ant Design의 Seed/Map/Alias와 이름만 다를 뿐 구조가 동일하다 — "토큰은 원본→의미 부여→컴포넌트 적용의 3단을 거친다"는 게 특정 시스템의 관습이 아니라 여러 시스템이 수렴한 공통 패턴이라는 근거.

### 성숙한 시스템도 모든 걸 정의하지는 않는다

M3는 색상·타이포·Shape·Elevation은 정교하게 알고리즘화했지만, 시스템 레벨의 spacing/grid 토큰 모듈은 공식적으로 존재하지 않는다(`framework/adapters/material/layout.md` 참고 — 8dp 그리드는 관습으로 남아 있을 뿐 토큰화되어 있지 않다). Success/Warning/Info 같은 시스템 색상도 M3 표준에는 없고 각 앱이 Extended Color로 직접 추가해야 한다.

## 어댑터와의 관계

여기서 다룬 철학의 실제 수치(Tonal Palette 13단계, Role별 Light/Dark Tone 고정값, State Layer 투명도 등)는 [`framework/adapters/material/colors.md`](../../../framework/adapters/material/colors.md)에 소스 코드 인용과 함께 정리되어 있다.
