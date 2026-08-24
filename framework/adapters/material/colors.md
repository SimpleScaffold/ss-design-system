# Material Design 3 색상 토큰 매핑

> 공통 스펙: [`framework/specs/tokens/colors.md`](../../specs/tokens/colors.md)
> 소스: [`material-color-utilities`](https://github.com/material-foundation/material-color-utilities) — `palettes/tonal_palette.ts`, `dynamiccolor/color_spec_2021.ts` (2026-01 기준 최신 코드 확인)

## 공통 스펙과의 근본적 차이 — "팔레트 대입"이 아니라 "알고리즘 생성"

KRDS/Ant Design은 사람이 미리 정해둔 hex 값 테이블을 참조하는 방식이지만, Material 3는 **Primary 색 1개(seed color)만 입력하면 나머지 전부를 알고리즘이 계산**한다. 공통 스펙 3항 "HSL의 L값만 조정해 팔레트 생성"과 방향은 같지만, Material은 HSL이 아니라 **HCT(Hue, Chroma, Tone)** 라는 자체 색공간을 쓴다 — 사람 눈에 더 균일하게 느껴지는 명도 스케일을 만들기 위함.

## 1. Tonal Palette — 13단계 Tone

Seed color 하나에서 Hue/Chroma를 고정한 채 **Tone(0~100)** 만 바꿔서 13단계 팔레트를 뽑는다. KRDS의 "13단계 명도 팔레트"와 단계 수까지 동일하다는 점이 흥미로운 수렴 사례.

```
0 - 10 - 20 - 30 - 40 - 50 - 60 - 70 - 80 - 90 - 95 - 99 - 100
```

## 2. 대비 규칙 → Role별 고정 Tone 매핑 (실제 소스 확인값)

공통 스펙의 "명암비 4.5 이상" 규칙을, Material은 **역할(Role)마다 라이트/다크에서 쓸 Tone을 고정**해서 보장한다. `color_spec_2021.ts`에서 직접 확인한 값:

| Role | Light | Dark |
| --- | --- | --- |
| primary | 40 | 80 |
| onPrimary | 100 | 20 |
| primaryContainer | 90 | 30 |
| onPrimaryContainer | 30 | 90 |
| surface | 98 | 6 |
| onSurface | 10 | 90 |
| outline | 50 | 60 |
| error | 40 | 80 |

패턴: 라이트 모드에서 낮은 tone(어두운 색)을 쓰는 role은 다크 모드에서 정확히 대칭적으로 높은 tone을 쓴다(`primary` 40↔80, `onSurface` 10↔90) — 다크모드 대응을 세트 안에 내장해둔 것.

## 3. 상태(State) 색상 → State Layer (투명도 오버레이)

공통 스펙의 "Default→Hover→Pressed = Primary-50→60→70(레벨 증가)" 방식과 달리, Material은 **팔레트 레벨을 바꾸지 않고 고정 색 위에 투명도 레이어를 얹는다**.

| 상태 | Overlay opacity (on 색 위에) |
| --- | --- |
| Hover | 8% |
| Focus | 10~12% |
| Pressed | 10~12% |
| Dragged | 16% |

→ 우리 공통 스펙에 "레벨 증가 방식"과 "투명도 오버레이 방식" 두 갈래가 있을 수 있음을 보여주는 대표 사례. 공통 스펙 10항(투명도 단계)이 KRDS에서는 심화 옵션이지만 Material에서는 상태 색상의 **기본 메커니즘**이라는 차이.

## 4. 색상 시스템 — Role 카테고리

| 카테고리 | 역할 |
| --- | --- |
| Primary / Secondary / Tertiary | 브랜드 강조, 3단 계층 (공통 스펙엔 없는 계층) |
| Neutral / Neutral Variant | 배경, 텍스트, 아웃라인 |
| Error | 시스템 오류 (Success/Warning/Info는 M3 표준에 없음 — 앱마다 자체 정의) |

> 공통 스펙 7항의 Success/Warning/Danger/Info 보조 팔레트는 Material 3 표준에는 포함되지 않는다 — 각 앱이 Extended Color(커스텀 팔레트)로 직접 추가해야 하는 영역. 어댑터 작성 시 이 부분은 "확장 슬롯"으로 남겨둘 것.

## 5. 토큰화 → Reference / System / Component 3계층

```
Reference tokens (ref)   → md.ref.palette.primary40           (원본 tonal palette, 직접 사용 금지)
System tokens (sys)      → md.sys.color.primary               (Role에 tone 매핑, 라이트/다크 스위칭)
Component tokens (comp)  → md.comp.filled-button.container.color
```

KRDS의 Primitive/Semantic/Component 3계층과 이름만 다를 뿐 구조가 동일 — "시스템 무관 공통 개념"이라는 이 프레임워크의 핵심 가설을 뒷받침하는 근거로 발표에 인용 가능.
