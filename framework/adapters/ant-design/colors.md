# Ant Design 색상 토큰 매핑

> 공통 스펙: [`framework/specs/tokens/colors.md`](../../specs/tokens/colors.md)
> 소스: [`ant-design` v5 `components/theme/themes/seed.ts`, `shared/genColorMapToken.ts`](https://github.com/ant-design/ant-design/tree/master/components/theme/themes) (실제 코드 직접 확인, 2026-01 기준 master 브랜치)

## 공통 스펙과의 근본적 차이 — Material처럼 "Seed → 알고리즘"

Ant Design v5는 KRDS(고정 hex 테이블)와 달리, **Seed Token(색상 1개) → Map Token(파생 팔레트) → Alias Token(의미 부여)** 3단계를 실시간 알고리즘으로 계산한다. Material 3와 같은 "1개 입력값 → 전체 자동 생성" 철학이지만 HCT가 아니라 자체 HSV 기반 알고리즘(`@ant-design/fast-color`)을 쓴다.

## 1. Seed Token — 실제 기본값

```ts
colorPrimary: '#1677ff'   // 기본 브랜드색(블루)
colorSuccess: '#52c41a'
colorWarning: '#faad14'
colorError:   '#ff4d4f'
colorInfo:    (colorPrimary와 동일 — 별도 지정 안 하면 상속)
```

공통 스펙 2항 "Primary 색 하나만 고르면 나머지는 파생시킨다"는 원칙을 **코드 레벨에서 강제**한 사례 — 디자이너가 하나의 hex만 바꾸면 전체 테마가 재계산된다.

## 2. 팔레트 생성 → Seed 1개 → 10단계 자동 파생

공통 스펙 3항의 "HSL L값 조정으로 팔레트 생성"에 대응하는 실제 알고리즘: `generateColorPalettes(seedColor)`가 10단계 배열을 반환하고, 각 인덱스가 역할에 매핑된다.

| 배열 인덱스 | 역할(Primary 기준) |
| --- | --- |
| [1] | `colorPrimaryBg` (가장 옅은 배경) |
| [2] | `colorPrimaryBgHover` |
| [3] | `colorPrimaryBorder` |
| [4] | `colorPrimaryBorderHover` |
| [5] | `colorPrimaryHover` |
| **[6]** | **`colorPrimary`(기본값 자체)** |
| [7] | `colorPrimaryActive` |
| [8] | `colorPrimaryTextHover` |
| [9] | `colorPrimaryText` |
| [10] | `colorPrimaryTextActive` |

## 3. 상태(State) 색상 → Hover가 Default보다 "낮은" 인덱스

공통 스펙 5항의 "Default→Hover→Pressed = 레벨이 순증가"하는 KRDS식 규칙과 달리, Ant Design은 **Hover가 Default보다 낮은 인덱스([5] < [6]), Active(Pressed)가 더 높은 인덱스([7] > [6])** 다.

```
Hover(5) → Default(6) → Active(7)   // 가운데가 기준, 좌우로 옅어지고/짙어짐
```

→ "Hover 시 더 옅어지고, Pressed 시 더 짙어진다"는 방향성 — KRDS(Hover/Pressed 모두 짙어지는 방향)와 정반대 설계 선택. 공통 스펙을 작성할 때 "레벨이 항상 증가한다"고 단정하면 안 되는 근거로 쓸 수 있는 실제 사례.

## 4. 시스템 색상 → 4종 고정 (Success/Warning/Error/Info)

공통 스펙 7항과 거의 1:1 대응(Danger 대신 Error라는 이름만 다름). 각 색상도 동일한 10단계 파생 규칙을 그대로 적용받는다.

| Seed | Hex |
| --- | --- |
| colorSuccess | `#52c41a` |
| colorWarning | `#faad14` |
| colorError | `#ff4d4f` |
| colorInfo | `colorPrimary`와 동일(`#1677ff`) |

## 5. Preset Colors — 보조 팔레트 12색

공통 스펙에 없는 Ant Design 고유 항목 — 브랜드 강조와 무관하게 자유롭게 쓸 수 있는 사전 정의 색 12종(blue/purple/cyan/green/magenta/red/orange/yellow/volcano/geekblue/gold/lime), 각각 동일한 10단계 파생 규칙 적용.

## 6. 토큰화 → Seed / Map / Alias 3계층

```
Seed Token   → colorPrimary: '#1677ff'                (사람이 직접 설정, 유일한 입력값)
Map Token    → colorPrimaryBg, colorPrimaryHover, ...  (알고리즘 자동 계산, 10단계)
Alias Token  → Button의 colorPrimary, Link의 colorLink (컴포넌트 레벨에서 Map Token 재사용)
```

KRDS의 Primitive/Semantic/Component, Material의 Reference/System/Component와 동일한 3계층 구조 — 세 시스템 모두 이름은 다르지만 구조가 수렴한다는 것이 이 프레임워크의 핵심 근거 중 하나.
