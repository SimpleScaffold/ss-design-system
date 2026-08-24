# 타이포그래피 토큰 스펙

> 출처: `talk/script.md` 슬라이드 19~20.

## 폰트 소스

- [눈누](https://noonnu.cc)에서 무료 한글 폰트를 받거나, Google Fonts를 사용하는 것이 가장 보편적.

## 다국어 지원

- 지원 언어가 2~4개 정도로 고정되어 있다면, **해당 언어를 모두 지원하는 폰트 하나**를 선택한다.
- 언어별로 다른 폰트를 쓰면 언어마다 폰트 크기·행간을 다시 맞춰야 하는 문제가 생긴다.

## rem 기준값

- 반응형을 위해 `rem` 단위를 사용하되, 루트 기본값을 16 대신 **10**으로 바꿔서 사용한다.
  ```css
  html { font-size: 62.5%; } /* 10px 기준 */
  ```
- 디자이너가 Figma(px 단위)에서 보는 값과 1:1로 환산하기 쉬워진다 (예: `1.6rem` = `16px`).

## 이모지

- 국가/문화권마다 이모지 모양·의미가 다르게 보일 수 있다.
- 자주 쓰는 이모지가 있다면, 글로벌 서비스의 경우 문화권별 오해 소지가 없는지 한 번 확인한다.

## 토큰화

폰트도 색상 팔레트처럼 사전에 규칙(크기/굵기/줄간격 조합)을 정의해두고, 모든 텍스트가 동일한 구조로 이 팔레트를 참조하도록 한다.

```
font-family-base: "<선정한 폰트>", system-ui, sans-serif;

text-heading-1: { size: 2.8rem, weight: 700, line-height: 1.4 }
text-heading-2: { size: 2.2rem, weight: 700, line-height: 1.4 }
text-body-1:    { size: 1.6rem, weight: 400, line-height: 1.6 }
text-body-2:    { size: 1.4rem, weight: 400, line-height: 1.6 }
text-caption:   { size: 1.2rem, weight: 400, line-height: 1.4 }
```
