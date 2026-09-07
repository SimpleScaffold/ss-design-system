# Material Design 3 엘리베이션 토큰 매핑

> 공통 스펙: [`framework/specs/tokens/elevation.md`](../../specs/tokens/elevation.md)
> 소스: [`material-web` tokens 디렉터리](https://github.com/material-components/material-web/tree/main/tokens/versions/v0_192) `_md-sys-elevation.scss` 구조 직접 확인

> 원래 `layout.md`에 "간격의 대체 개념"이라는 이름으로 섞여 있던 내용을 분리했다 — Elevation은 spacing이 아니라 공통 스펙의 독립된 토큰 종류이고, KRDS/Ant Design과 나란히 비교하려면 전용 파일이 있어야 다른 어댑터와 매핑 구조가 맞는다.

## 1. 6단계 → Material의 실제 단계 수는 6개 (KRDS와 동일)

공통 스펙 §3은 6단계(-1~+4) 예시를 들지만 "처음엔 최소 단계로 시작"을 권장한다. Material은 실제로 `level0~level5`의 6단계를 쓴다 — KRDS(-1~+4, 역시 6단계)와 단계 수가 우연히 일치한다.

## 2. 그림자 (Shadow) — dp 단위 그림자 높이

KRDS가 그림자를 alpha(불투명도) 토큰으로 정의하는 것과 달리, Material은 **그림자가 만드는 가상의 높이(dp)** 로 레벨을 정의하고 실제 box-shadow는 그 높이에서 알고리즘으로 계산한다.

```
level0: 0dp   level1: 1dp   level2: 3dp   level3: 6dp   level4: 8dp   level5: 12dp
```

## 3. 표면 색상 (Surface) — 그림자 + Surface Tint Overlay 병행

공통 스펙 §6의 "배경 레이어(bg-0/bg-1/bg-2)"에 대응하는 Material의 구현은 KRDS와 근본적으로 다르다. KRDS는 레벨마다 표면색 자체를 바꾸는 방식(`surface.white ↔ surface.gray-subtle`)이지만, Material은 **그림자 + 표면 틴트 오버레이(surface tint overlay)** 를 함께 써서 레벨이 높을수록 Primary색이 옅게 스며든 표면을 만든다 — 같은 목적(층 구분)을 완전히 다른 메커니즘으로 구현한 사례.

## 4. 라이트/다크 모드 대응

공통 스펙 §4 "다크 모드에서는 그림자만으로 층 구분이 어렵다"는 원칙을, Material은 다크 테마에서 그림자 대신 **표면 틴트 오버레이의 불투명도를 레벨에 따라 더 크게** 잡는 방식으로 보완한다 — 그림자 자체를 진하게 하는 KRDS의 접근과는 다른 해법.

## 토큰화 예시

```css
--md-sys-elevation-level0: 0dp;
--md-sys-elevation-level1: 1dp;
--md-sys-elevation-level2: 3dp;
--md-sys-elevation-level3: 6dp;
--md-sys-elevation-level4: 8dp;
--md-sys-elevation-level5: 12dp;
```
