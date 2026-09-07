# ant-design

Ant Design v5 원자료 및 요약. **실제 토큰 값(hex/px)은 여기 두지 않는다** — 전부 [`framework/adapters/ant-design/`](../../../framework/adapters/ant-design/)에 소스 코드 기반으로 정리되어 있다. 이 문서는 "왜 이런 구조인가"라는 철학/설계 근거만 다룬다 (krds/README.md와 같은 역할 분리).

## 공식 소스

- [ant.design](https://ant.design) — Ant Design 공식 사이트 (컴포넌트 문서, 테마 커스터마이징 가이드)
- [`ant-design/ant-design`](https://github.com/ant-design/ant-design) `components/theme/themes/` — Seed Token 기본값과 Seed→Map 파생 알고리즘(`seed.ts`, `shared/genColorMapToken.ts`, `genFontSizes.ts`, `genRadius.ts`, `genSizeMapToken.ts`)의 1차 소스. `framework/adapters/ant-design/*.md`가 이 코드를 직접 인용.
- [`@ant-design/icons`](https://github.com/ant-design/ant-design-icons) — 아이콘 패키지.

## 핵심 설계 철학

### Seed → Map → Alias, 3단계 실시간 알고리즘

Ant Design v5는 KRDS(고정 hex 테이블)와 달리 **Seed Token(색상 1개) → Map Token(파생 팔레트) → Alias Token(의미 부여)** 3단계를 실시간으로 계산한다. Material 3와 같은 "1개 입력값 → 전체 자동 생성" 철학이지만, HCT가 아니라 자체 HSV 기반 알고리즘(`@ant-design/fast-color`)을 쓴다는 점이 다르다. 공통 스펙 2항("Primary 색 하나만 고르면 나머지는 파생시킨다")을 코드 레벨에서 강제한 사례 — 디자이너가 hex 값 하나만 바꾸면 테마 전체가 재계산된다.

### Radius·Typography도 수식 기반 자동 파생

색상뿐 아니라 Radius(`genRadius.ts`)와 Typography(`genFontSizes.ts`)도 시드 값 하나에서 수식으로 전체 스케일을 파생시킨다. 표로 나열하는 대신 "공식 하나"로 전체 스케일을 표현할 수 있다는 뜻이라, AI에게 규칙을 전달할 때(`talk/script.md` 슬라이드 31 영역) 표보다 공식이 더 압축적으로 전달되는 예시로 쓸 만하다.

### Hover가 Default보다 항상 짙어지지는 않는다

공통 스펙 5항은 "Default→Hover→Pressed로 갈수록 레벨이 순증가"한다고 전제하지만, Ant Design은 10단계 파생 팔레트에서 **Hover가 Default보다 낮은 인덱스(더 옅음), Active(Pressed)가 더 높은 인덱스(더 짙음)** 로 설계되어 있다 — Default를 가운데 두고 좌우로 옅어지고/짙어지는 구조. KRDS(Hover/Pressed 모두 짙어지는 방향)와 정반대 설계 선택이다. 공통 스펙을 "레벨은 항상 한 방향으로 증가한다"고 단정하면 안 되는 실제 반례.

### 3계층 토큰 구조 — Seed / Map / Alias

```
Seed Token   colorPrimary: '#1677ff'                사람이 직접 설정하는 유일한 입력값
Map Token    colorPrimaryBg, colorPrimaryHover, ...  알고리즘 자동 계산, 10단계
Alias Token  Button의 colorPrimary, Link의 colorLink 컴포넌트 레벨에서 Map Token 재사용
```

KRDS의 Primitive/Semantic/Component, Material의 Reference/System/Component와 동일한 3계층 구조 — 세 시스템의 이름은 다르지만 구조가 수렴한다는 것이 이 프레임워크의 핵심 근거 중 하나다.

### 세 어댑터 중 공통 스펙과 가장 근접

KRDS·Material·Ant Design 세 어댑터 가운데 Ant Design의 spacing 스케일이 공통 스펙(`framework/specs/tokens/spacing.md`)의 값과 가장 가깝게 일치한다(`framework/adapters/ant-design/layout.md` 비교 참고) — 공통 스펙을 설계할 때 실제로 참고하기 좋은 기준점.

## 어댑터와의 관계

여기서 다룬 철학의 실제 수치(Seed Token 기본값, Map Token 10단계 인덱스별 역할, Preset Colors 12색 등)는 [`framework/adapters/ant-design/colors.md`](../../../framework/adapters/ant-design/colors.md)에 소스 코드 인용과 함께 정리되어 있다.
