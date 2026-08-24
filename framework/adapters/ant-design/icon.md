# Ant Design 아이콘 토큰 매핑

> 공통 스펙: [`framework/specs/tokens/icon.md`](../../specs/tokens/icon.md)
> 소스: [`@ant-design/icons`](https://github.com/ant-design/ant-design-icons) 공식 패키지

## "하나의 라이브러리" → `@ant-design/icons` 단일 패키지, 3가지 테마 접미사

공통 스펙 규칙을 Ant Design은 **하나의 아이콘 패키지 + 컴포넌트명 접미사로 스타일 구분**하는 방식으로 만족한다.

- `-Outlined` (기본, 선 형태)
- `-Filled` (채움 형태 — 활성/선택 상태 표현에 사용)
- `-TwoTone` (2색 톤 — Primary 색상 하나를 주입해서 색상을 입힐 수 있음)

같은 의미의 아이콘이 3가지 컴포넌트로 각각 존재하는 구조라(`HomeOutlined`/`HomeFilled`/`HomeTwoTone`), Material의 "가변 축(FILL 0~1)"과 달리 **아예 별도 컴포넌트를 임포트하는 방식**이라는 점이 대비된다 — 번들 크기 관점에서는 불리하지만(트리쉐이킹 필요), 프레임워크 관점에서는 정적 타입/자동완성이 명확하다는 장점.

## 사이즈 → 기본 1em (텍스트 상속), 명시적 px 지정 시 관례상 16px 배수

Ant Design 아이콘은 KRDS/Material처럼 고정 px 그리드를 강제하지 않고, 기본적으로 **부모 텍스트의 `font-size`를 그대로 상속**(`1em`)한다 — 버튼/링크 안에 들어갈 때 텍스트 크기와 자동으로 맞춰지는 방식. 독립적으로 쓸 때는 관례적으로 `size` 스케일([`layout.md`](./layout.md)의 `size`=16px, `sizeLG`=24px 등)에 맞춘다.

## 색상 → `currentColor` 상속

별도 아이콘 색상 팔레트가 없고 텍스트 색을 그대로 물려받는다(`currentColor`) — [`colors.md`](./colors.md)의 시맨틱 색상(`colorText`, `colorPrimary` 등)이 적용된 부모 요소 안에 두면 자동으로 맞춰진다는 점에서 KRDS(별도 매직넘버 대비 기준)나 Material(별도 role 지정)보다 구현이 단순하다.

## 세 시스템 아이콘 전략 비교

| | KRDS | Material | Ant Design |
| --- | --- | --- | --- |
| 스타일 전환 | 없음(1종) | 가변 축(FILL 등) | 별도 컴포넌트(Outlined/Filled/TwoTone) |
| 크기 | 고정 px 그리드(24 기준) | 고정 dp 그리드(24 기준) | `em` 기반, 텍스트에 상속 |
| 색상 | 매직넘버 대비 기준 적용 | 색상 role 명시 지정 | `currentColor` 자동 상속 |

## 라이브러리에 없는 아이콘이 필요할 때

공통 스펙의 3가지 대응 방법에 더해, Ant Design은 `@ant-design/icons`의 `createFromIconfontCN`으로 커스텀 SVG를 같은 컴포넌트 인터페이스로 등록하는 공식 경로를 제공한다 — 새 아이콘도 기존 아이콘과 동일하게 `currentColor`/`1em` 상속을 그대로 따르게 만들 수 있다.
