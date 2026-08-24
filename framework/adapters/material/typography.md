# Material Design 3 타이포그래피 토큰 매핑

> 공통 스펙: [`framework/specs/tokens/typography.md`](../../specs/tokens/typography.md)
> 소스: [`material-web` tokens `_md-sys-typescale.scss`](https://github.com/material-components/material-web/blob/main/tokens/versions/v0_192/_md-sys-typescale.scss) (실제 값 직접 확인, 1rem=16px 기준)

## 1. rem 기준값 → 웹 표준 그대로(16px), KRDS와 다른 선택

공통 스펙과 KRDS는 "루트를 10px로 바꿔서 계산 편의성을 높이자"는 입장이지만, Material은 **브라우저 기본값 16px을 그대로 사용**한다. 어댑터가 소스 시스템의 관습을 그대로 존중해야 하는 사례 — 공통 스펙의 권장값이 모든 어댑터에 강제되는 게 아니라 "제안"으로 남아야 하는 이유.

## 2. 타입 스케일 — Display / Headline / Title / Body / Label 5계층

공통 스펙(heading-1/2, body-1/2, caption 5단계)보다 계층 이름이 다르고 각 계층 안에 large/medium/small 3단계씩 있어 총 15개 스타일. KRDS(Display/Heading/Body·Label 3계층 구조)와 계층 개수는 같지만 이름 배분이 다르다.

| Style | Size | Line-height |
| --- | --- | --- |
| Display large | 57px | 64px |
| Display medium | 45px | 52px |
| Display small | 36px | 44px |
| Headline large | 32px | 40px |
| Headline medium | 28px | 36px |
| Headline small | 24px | 32px |
| Title large | 22px | 28px |
| Title medium | 16px | 24px |
| Title small | 14px | 20px |
| **Body large** | **16px** | 24px |
| **Body medium (기본)** | **14px** | 20px |
| Body small | 12px | 16px |
| Label large | 14px | 20px |
| Label medium | 12px | 16px |
| Label small | 11px | 16px |

> 공통 스펙 권장 비율(heading:body = 1.25~1.5배)과 비교: Headline-small(24px) / Body-medium(14px) ≈ 1.7배로 권장 범위를 넘어선다 — Material은 Display~Headline을 "매우 큰 마케팅용"으로, Title 계층을 사실상의 "일반 헤딩" 역할로 쓰기 때문(Title-medium 16px이 본문 근처 헤딩 역할).

## 3. 굵기(Weight) → Regular / Medium 2종

KRDS(Regular/Bold)와 달리 Material 기본 스케일은 **Regular(400)와 Medium(500)** 조합을 기본으로 한다. Bold(700)는 별도 강조가 필요할 때만 선택적으로 사용 — 무게감보다 크기 차이로 계층을 표현하는 철학.

## 4. Letter-spacing(자간) → 스타일마다 개별 지정

공통 스펙에는 자간 항목이 없는데, Material은 스타일별로 자간을 미세 조정한다(예: Display large `-0.25px`, Body large `0.5px`). 작은 글자일수록 자간을 넓혀 가독성을 보정하는 패턴 — 어댑터 확장 시 참고할 만한 항목.

## 5. 토큰화 예시 (공통 스펙 형식에 대입)

```
font-family-base: "Roboto", "Noto Sans KR", system-ui, sans-serif;

text-title-medium: { size: 16px, weight: 500, line-height: 24px }  /* 사실상 기본 헤딩 */
text-body-medium:  { size: 14px, weight: 400, line-height: 20px }  /* 기본 본문 */
text-label-large:  { size: 14px, weight: 500, line-height: 20px }  /* 버튼/폼 라벨 */
```
