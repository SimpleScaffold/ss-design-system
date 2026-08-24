# KRDS 타이포그래피 토큰 매핑

> 공통 스펙: [`framework/specs/tokens/typography.md`](../../specs/tokens/typography.md)
> 소스: [KRDS 스타일 가이드 — 타이포그래피](https://www.krds.go.kr/html/site/style/style_03.html), `krds-uiux` `responsive-pc`/`responsive-mobile` 토큰

## 1. 폰트 소스 → Pretendard GOV

- 국문/영문 공통으로 **Pretendard GOV** 1종만 사용 (공공기관 접근성·가독성에 최적화된 Pretendard 파생 서체).
- 확장형 스타일(타 기관 자체 폰트 사용 시)은 고딕 계열 권장 — 노토 산스, 나눔고딕, 스포카 한 산스.
- 공통 스펙의 "다국어 지원 시 하나의 폰트로 통일" 원칙과 동일.

## 2. rem 기준값 → 완전히 동일한 규칙

공통 스펙이 제안하는 "루트 폰트 크기를 62.5%(10px 기준)로 바꿔서 사용" 규칙을 KRDS도 그대로 명시한다 — 즉 두 스펙이 1:1로 일치하는 항목.

```css
html { font-size: 62.5%; } /* 1rem = 10px */
```

## 3. 기본 사이즈 → 17px (Pretendard 특성 보정)

- 일반적인 웹 기본값(16px)이 아니라 **17px**(`1.7rem`)을 본문 기본 크기로 사용한다.
- 이유: Pretendard GOV는 동일 px 값에서도 다른 서체보다 작게 느껴지는 특성이 있어 보정한 값.
- → 어댑터 적용 시 참고: 공통 스펙의 기본값(16px)을 그대로 쓰지 않고, **선택한 폰트의 시각적 크기를 실측**해서 기준값을 보정해야 함을 보여주는 사례.

## 4. 글자 두께 → Regular(400) / Bold(700), 확장 시 Medium(500)

공통 스펙에는 두께 규칙이 없어 KRDS 쪽이 더 구체적이다 — 최대 4단계까지만 허용, 표준형은 2단계(400/700)만 사용.

## 5. 줄 간격 → 최소 150%, 상대 단위

- `line-height` 최소 **150%** (WCAG 1.4.12 Text Spacing 기준).
- px 대신 `em`/`%` 등 상대 단위 사용.

## 6. 타입 스케일 → Display / Heading / Body·Label 3계층

공통 스펙의 `heading-1/2, body-1/2, caption` 5단계보다 세분화되어 있다. PC/Mobile 반응형 크기가 각각 다르다는 점이 공통 스펙에 없는 부분 — 어댑터 확장 포인트.

### Display (배너/마케팅용)

| Style | PC | Mobile | Weight | Line-height |
| --- | --- | --- | --- | --- |
| large | 60px | 44px | 700 | 150% |
| medium | 44px | 32px | 700 | 150% |
| small | 36px | 28px | 700 | 150% |

### Heading (h1~h5 계층)

| Style | PC | Mobile | Weight |
| --- | --- | --- | --- |
| xlarge (h1) | 40px | 28px | 700 |
| large (h1~h2) | 32px | 24px | 700 |
| medium (h2~h3) | 24px | 22px | 700 |
| small (h3~h4) | 19px | 19px | 700 |
| xsmall (h4~h5) | 17px | 17px | 700 |
| xxsmall (h5) | 15px | 15px | 700 |

### Body / Label

| Style | PC | Mobile |
| --- | --- | --- |
| large | 19px | 19px |
| medium (기본) | 17px | 17px |
| small | 15px | 15px |
| xsmall | 13px | 13px |

> 공통 스펙 권장(heading:body 비율 1.25~1.5배)과 비교: KRDS heading-medium(24px)/body-medium(17px) ≈ 1.41배로 권장 범위 내.

## 7. 토큰화 예시 (공통 스펙 형식에 KRDS 값 대입)

```
font-family-base: "Pretendard GOV", "Noto Sans KR", system-ui, sans-serif;

text-heading-medium: { size: 2.4rem, weight: 700, line-height: 150% }
text-body-medium:    { size: 1.7rem, weight: 400, line-height: 150% }  /* 기본 본문 */
text-body-small:     { size: 1.5rem, weight: 400, line-height: 150% }
```
