# KRDS 엘리베이션 토큰 매핑

> 공통 스펙: [`framework/specs/tokens/elevation.md`](../../specs/tokens/elevation.md)
> 소스: [KRDS 스타일 가이드 — 엘리베이션](https://www.krds.go.kr/html/site/style/style_08.html), [krds-uiux `tokens/transformed_tokens.json`](https://github.com/KRDS-uiux/krds-uiux/blob/main/tokens/transformed_tokens.json)

## 1. 6단계 구조 → 실제 용도

공통 스펙 §3의 6단계 예시는 KRDS 원문을 그대로 옮긴 것이다.

| 레벨 | 용도 |
| --- | --- |
| -1 | 배경 아래 (리스트 컨테이너) |
| 0 | 기본 배경 |
| +1 | 기본 상호작용, 비활성 요소 |
| +2 | 주요 상호작용 요소 (셀렉트, 메뉴) |
| +3 | 주목도 높은 요소 (툴팁, 모달) |
| +4 | 긴급 알림 (최상위) |

> 스타일 가이드 페이지 자체는 레벨별 정확한 box-shadow(offset/blur/spread) 수치나 레벨→토큰 매핑표를 공개 텍스트로 제공하지 않는다. 아래 §2~4는 실제 공개된 원시 토큰(그림자 alpha, 표면색, 보더 두께)이며, 레벨별 조합은 Figma 라이브러리(v1.0.0)가 1차 소스다 — 정확한 조합이 필요하면 그쪽을 확인할 것.

## 2. 그림자 (Shadow) — Alpha 토큰

그림자는 색상이 아니라 **검정에 대한 3단계 불투명도**로 정의되고, 실제 `box-shadow`는 이 alpha 색상에 offset/blur를 조합해서 만든다.

| 토큰 | 라이트 모드 | 선명한 화면 모드 |
| --- | --- | --- |
| `alpha.shadow1` | `#0000000d` (약 5%) | `#0000001f` (약 12%) |
| `alpha.shadow2` | `#00000014` (약 8%) | `#00000033` (20%) |
| `alpha.shadow3` | `#0000001f` (약 12%) | `#00000066` (40%) |

선명한 화면 모드에서는 배경 대비가 낮아지는 걸 보완하려고 **동일 단계의 그림자를 라이트 모드보다 2~3배 더 진하게(불투명하게)** 잡는다 — 공통 스펙 §4 "그림자만으로 부족하면 진하게" 원칙의 실제 수치.

## 3. 표면 색상 (Surface) — 레벨별 배경

| 토큰 | 라이트 모드 | 선명한 화면 모드 |
| --- | --- | --- |
| `surface.white` | `#ffffff` | `#000000` |
| `surface.white-subtle` | `#ffffff` | `#131416` |
| `surface.white-subtler` | `#ffffff` | `#1e2124` |
| `surface.gray-subtler` | `#f4f5f6` | `#131416` |
| `surface.gray-subtle` | `#e6e8ea` | `#1e2124` |
| `surface.disabled` | `#cdd1d5` | `#464c53` |
| `surface.inverse` | `#1e2124` | `#e6e8ea` |
| `surface.primary-subtler` | `#ecf2fe` | `#020f27` |
| `surface.danger-subtler` | `#fdefec` | `#260903` |
| `surface.warning-subtler` | `#fff3db` | `#241800` |
| `surface.success-subtler` | `#eaf6ec` | `#0e2012` |
| `surface.information-subtler` | `#e7f4fe` | `#021a2c` |

라이트 모드에서는 `white-subtle`/`white-subtler`가 전부 `#ffffff`로 그림자에만 의존하지만, 선명한 화면 모드에서는 `#131416 → #1e2124`처럼 **밝기 차이를 표면색에도 직접 반영**한다 — 공통 스펙 §4 "다크 모드는 위로 쌓일수록 더 밝아지는 방향" 규칙과 일치.

## 4. 딤드 (Dim)

- `background.dim = alpha.black75` (`#000000bf`, 검정 75%) — 라이트/선명한 화면 모드 공통으로 같은 개념(각 모드의 검정 기준으로 75%)을 쓴다.

## 5. 경계선 두께 (Border-width)

| 토큰 | 라이트 모드 | 선명한 화면 모드 |
| --- | --- | --- |
| `border-width.variable-regular` | `0.1rem` (1px) | `0.2rem` (2px) |
| `border-width.variable-medium` | `0.2rem` (2px) | `0.3rem` (3px) |

공통 스펙 §4의 "다크 모드에서는 보더를 더 굵게" 원칙의 실제 수치 — 선명한 화면 모드에서 보더가 정확히 **+1px(0.1rem)** 씩 두꺼워진다.

## 토큰화 예시

```css
:root {
  --surface-base: #ffffff;
  --surface-raised: #f4f5f6;   /* gray-subtler */
  --surface-overlay: #e6e8ea;  /* gray-subtle */
  --dim: #000000bf;            /* black 75% */
  --border-width-regular: 0.1rem;
  --border-width-medium: 0.2rem;
}

[data-theme='high-contrast'] {
  --surface-base: #1e2124;
  --surface-raised: #131416;
  --surface-overlay: #1e2124;
  --border-width-regular: 0.2rem;
  --border-width-medium: 0.3rem;
}
```
