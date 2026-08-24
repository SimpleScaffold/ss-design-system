# Material Design 3 레이아웃 / 간격 매핑

> 공통 스펙: [`framework/specs/tokens/layout.md`](../../specs/tokens/layout.md), [`framework/specs/tokens/spacing.md`](../../specs/tokens/spacing.md)
> 소스: [`material-web` tokens 디렉터리](https://github.com/material-components/material-web/tree/main/tokens/versions/v0_192) 구조 직접 확인

## 눈에 띄는 사실 — Material 3에는 시스템 레벨 "spacing/layout" 토큰 모듈이 없다

`material-web`의 `tokens/` 디렉터리를 실제로 확인해보면 `_md-sys-color.scss`, `_md-sys-shape.scss`, `_md-sys-typescale.scss`, `_md-sys-elevation.scss`, `_md-sys-motion.scss`, `_md-sys-state.scss`는 있지만 **`_md-sys-spacing.scss`나 그리드/브레이크포인트 시스템 토큰은 존재하지 않는다.**

간격은 각 컴포넌트 토큰 파일(`_md-comp-filled-button.scss` 등)에 개별적으로 박혀 있다 — 예: Filled Button의 `container-height: 40px`. 즉 Material은 **공통 스펙의 layout/spacing 항목에 해당하는 시스템 레벨 스펙을 아예 정의해두지 않은 시스템**이다.

> 발표에서 활용 포인트: "우리 프레임워크에 아직 없는 `components`/`validation` 공통 스펙"([`TODO.md`](../../../../TODO.md) 참고)이 왜 비어있는지에 대한 변명이 아니라, **실제로 성숙한 시스템(Material)조차 모든 레이어에 토큰을 두지 않는다** — 시스템 무관 공통 스펙이 "완전한 커버리지"를 목표로 할 필요는 없고, 각 시스템이 실제로 표준화한 만큼만 어댑터가 채우면 된다는 근거로 쓸 수 있다.

## 레이아웃 그리드 → Material 3 "Window Size Classes" (문서 기준, 컴팩트/미디엄/확장 3단)

토큰화되어 있지는 않지만 M3 문서가 권장하는 반응형 기준은 아래와 같다 — 공통 스펙 표(Desktop/Tablet/Mobile)와 개념적으로 대응된다.

| Window size class | 너비 기준 |
| --- | --- |
| Compact | ~600dp 미만 (모바일 세로) |
| Medium | 600~840dp (태블릿/폴더블) |
| Expanded | 840dp 이상 (데스크톱) |

## 간격의 대체 개념 → Elevation (배경 레이어의 Material식 구현)

공통 스펙 6항 "배경 레이어(bg-0/bg-1/bg-2)"와 KRDS의 elevation 개념에 대응하는 Material의 실제 값(`_md-sys-elevation.scss`, dp 단위 그림자):

```
level0: 0dp   level1: 1dp   level2: 3dp   level3: 6dp   level4: 8dp   level5: 12dp
```

KRDS가 배경색을 바꿔서 레이어를 표현하는 반면(`gray0 ↔ gray5` 번갈아 사용), Material은 **그림자(shadow) + 표면 틴트(surface tint overlay)** 로 레이어를 표현한다 — 같은 목적, 완전히 다른 구현 방식의 사례.

## 8dp 그리드는 컨벤션으로 살아있음

공식 토큰은 없지만 Material 커뮤니티/디자인 관행에서는 여전히 **4dp 배수**를 유지한다(예: 버튼 높이 40dp = 4dp×10). 공통 스펙의 "8px 기본 단위, 4px 예외 허용" 원칙과 정확히 반대 우선순위(Material은 4dp가 기본 단위, 8dp는 그 배수)라는 점이 흥미로운 차이.
