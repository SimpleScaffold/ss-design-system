# shapes

도형·패스·SVG를 만들고 코드로 내보내는 도구.

GitHub 스타(대략 2026-09) 상위 벡터/도형 라이브러리 위주. 웹 GUI만 있는 Haikei·Shape Magic은 맨 아래 관련에 둠.

| 도구 | 스타 | 언제 쓰는지 |
| --- | --- | --- |
| [SVG.js](#svgjs) | ~12k | SVG를 코드로 심플하게 그리기·애니 |
| [Two.js](#twojs) | ~9k | 같은 API로 SVG/Canvas/WebGL |
| [Rough.js](#roughjs) | ~21k | 손그림·스케치 느낌 도형 (귀여움) |
| [Paper.js](#paperjs) | ~15k | 불리언·패스 연산까지 복잡한 벡터 |

## SVG.js

- 사이트: [svgjs.dev](https://svgjs.dev) · Repo: [svgdotjs/svg.js](https://github.com/svgdotjs/svg.js)
- **용도: 심플하게 쓰기 좋음.** 의존성 없이 SVG를 만들고 움직이기. 아이콘·간단한 장식 도형.
- 라이선스: MIT

## Two.js

- 사이트: [two.js.org](https://two.js.org/) · Repo: [jonobr1/two.js](https://github.com/jonobr1/two.js)
- **용도: 조금 더 다양화.** 렌더러를 SVG / Canvas / WebGL 중 고를 수 있어, 슬라이드용 SVG 내보내기와 인터랙티브 캔버스를 같은 장면 그래프로 다룸.
- 라이선스: MIT

## Rough.js

- 사이트: [roughjs.com](https://roughjs.com/) · Repo: [rough-stuff/rough](https://github.com/rough-stuff/rough)
- **용도: 완전 귀여움, 기능은 도형 primitive 위주.** xkcd/손그림 선·해칭. 차트.xkcd와 톤이 비슷할 때 아이콘·다이어그램 박스에.
- 특징: gzip ~9kB. Canvas와 SVG 둘 다.
- 라이선스: MIT

## Paper.js

- 사이트: [paperjs.org](http://paperjs.org) · Repo: [paperjs/paper.js](https://github.com/paperjs/paper.js)
- **용도: 복잡한 기능까지 커버.** Scriptographer 계열. 패스 불리언, 오프셋, 히트 테스트 등 벡터 연출이 무거울 때.
- 특징: 주 렌더는 HTML5 Canvas. SVG 가져오기/내보내기는 지원하지만 “순수 SVG 라이브러리”는 아님.
- 라이선스: MIT

## 관련 (웹 GUI, 스타 순위 밖)

- [Shape Magic](https://reactbits.dev/tools) (React Bits) — 둥근 모서리 도형 → SVG/코드
- [Haikei](https://haikei.app/generators/) — blob·웨이브·로폴리 배경 SVG 생성 (웹 앱)
- [SvgPathEditor](https://yqnn.github.io/svg-path-editor/) · [Yqnn/svg-path-editor](https://github.com/Yqnn/svg-path-editor) (~5k, Apache-2.0) — `d` 패스를 눈으로 편집
