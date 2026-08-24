# Material Design 3 Radius(Shape) 토큰 매핑

> 공통 스펙: [`framework/specs/tokens/radius.md`](../../specs/tokens/radius.md)
> 소스: [`material-web` tokens `_md-sys-shape.scss`](https://github.com/material-components/material-web/blob/main/tokens/versions/v0_192/_md-sys-shape.scss) (실제 값 직접 확인)

## 실제 값 — 7단계 고정 스케일

공통 스펙의 "하나의 값에서 시작해 필요시 sm/md/lg/full로 확장"이라는 권장 경로를 Material은 이미 끝까지 밟아 **7단계 고정 스케일**로 표준화해뒀다.

| 토큰 | 값 |
| --- | --- |
| corner-none | 0px |
| corner-extra-small | 4px |
| corner-small | 8px |
| corner-medium | 12px |
| corner-large | 16px |
| corner-extra-large | 28px |
| corner-full | 9999px (완전한 원형/캡슐) |

## KRDS와의 비교 — 같은 목적, 다른 스케일 폭

| 단계 | KRDS | Material |
| --- | --- | --- |
| 최솟값(0 제외) | 2px | 4px |
| 중간값 | 6px(Medium=버튼 기본) | 12px(Medium) |
| 최댓값 | 12px | 28px (완전한 원형 `full`은 별도) |

Material은 **버튼 기본값이 Large(16px)에 가깝게 훨씬 둥근 편** — KRDS가 "과한 둥긂 방지를 위해 최댓값 12px 제한"이라는 보수적 철학인 반면, Material은 캡슐형 버튼(Full) 자체를 표준 컴포넌트 형태로 채택한 적극적 철학. **공통 스펙이 값 자체를 강제하면 안 되고, 각 시스템의 브랜드 톤(보수적 vs 친근한)에 맞춰 어댑터가 결정해야 한다**는 근거로 쓸 수 있는 대비 사례.

## 컴포넌트 매핑 예시

| 컴포넌트 | 토큰 |
| --- | --- |
| Text field, Card | corner-medium (12px) |
| Filled/Outlined Button | corner-full (캡슐형) |
| Dialog | corner-extra-large (28px) |
| FAB(Floating Action Button) | corner-large (16px) |

## 토큰화

```
radius-none:  0px
radius-xs:    4px
radius-sm:    8px
radius-md:    12px   /* card, text field 기본 */
radius-lg:    16px
radius-xl:    28px
radius-full:  9999px /* button, chip */
```
