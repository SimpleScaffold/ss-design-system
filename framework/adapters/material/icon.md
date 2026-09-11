# Material Symbols 아이콘 매핑

> 공통 스펙: [`framework/specs/tokens/icon.md`](../../specs/tokens/icon.md)
> 소스: [Material Symbols 공식 문서](https://fonts.google.com/icons) · [Material 3 아이콘 가이드](https://m3.material.io/styles/icons/overview)

## "하나의 라이브러리" → Material Symbols 단일 세트, 3가지 스타일

공통 스펙의 핵심 규칙을 Material은 **하나의 아이콘 세트(Material Symbols) + 가변 축(variable font axes)** 조합으로 만족시킨다 — 여러 라이브러리를 섞는 대신, 하나의 세트 안에서 축 값만 바꿔 굵기/채움 여부를 표현하는 방식.

- 스타일 3종: **Outlined / Rounded / Sharp** — 한 프로젝트에서는 이 중 하나만 선택해서 통일 사용(공통 스펙의 "라이브러리 하나만" 규칙과 동일한 취지).

## 가변 축(Variable Font Axes)

| 축 | 범위 | 역할 |
| --- | --- | --- |
| FILL | 0~1 | 채움 없음(0) ↔ 완전 채움(1) — 상태(선택됨 등) 전환에 자주 사용 |
| wght(Weight) | 100~700 | 선 굵기 |
| GRAD(Grade) | -25~200 | 두께 미세 보정(다크모드에서 살짝 두껍게 등) |
| opsz(Optical size) | 20~48 | 크기별 최적화 — 작은 크기에서 뭉개지지 않도록 자동 보정 |

→ KRDS가 "24px 기준 두께 1.6px 고정 + 크기별 비율 조정"으로 수동 대응하는 것을, Material은 **가변 폰트 축 하나(opsz)로 자동화**한다는 점이 대비된다.

## 사이즈 → 24dp 기준, 4개 표준 크기

```
20dp · 24dp(기본) · 40dp · 48dp
```

## 그리드 → 24×24dp Keyline

KRDS의 "24×24 1000% 키라인" 개념과 동일한 목적 — 정사각/원형/직사각 아이콘의 시각적 면적을 통일하기 위한 격자.

## 공통 스펙 대비 특이사항

- 색상은 별도 아이콘 팔레트 없이 **텍스트와 동일한 M3 색상 role**(`onSurface`, `onSurfaceVariant` 등)을 그대로 사용 — [`colors.md`](./colors.md)의 role 시스템에 완전히 종속.
- 라이브러리에 없는 아이콘 필요 시: 공통 스펙의 3가지 대응(AI 생성/변환 도구/배경 제거)에 더해, Material은 커뮤니티가 만든 "Material Symbols 커스텀 아이콘 빌더"로 동일한 그리드·축 규칙을 적용해 제작하는 경로를 공식 제공한다.

## 토큰화 예시

```css
:root {
  --icon-size-sm: 20px;
  --icon-size-base: 24px; /* 기본 */
  --icon-size-lg: 40px;
  --icon-size-xl: 48px;
  --icon-fill: 0;   /* FILL 축 0~1 */
  --icon-weight: 400; /* wght 축 100~700 */
}
```

색상은 별도 토큰 없이 M3 색상 role(`--on-surface`, `--on-surface-variant` 등)을 상속한다.
