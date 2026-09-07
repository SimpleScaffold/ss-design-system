# charts

차트·그래프·대시보드용 시각화 라이브러리.

고를 때 한줄 요약:

| 도구 | 언제 쓰는지 |
| --- | --- |
| [react-chartjs-2](#react-chartjs-2) | 막대/선/파이 같은 기본 차트를 React에서 심플하게 |
| [nivo](#nivo) | 차트 종류를 더 다양하게 (히트맵, sankey, treemap 등) |
| [chart.xkcd](#chartxkcd) | 손그림 느낌·귀여운 톤. 기능은 적고 간단히 |
| [billboard.js](#billboardjs) | 옵션·테마·대용량까지 복잡한 기능이 필요할 때 |

## react-chartjs-2

- 사이트: [react-chartjs-2.js.org](https://react-chartjs-2.js.org/) · Repo: [reactchartjs/react-chartjs-2](https://github.com/reactchartjs/react-chartjs-2)
- **용도: 심플하게 쓰기 좋음.** Chart.js 래퍼라 막대·선·도넛 같은 흔한 차트를 React 컴포넌트로 바로 붙인다.
- 특징: Chart.js v4 지원. 쓰는 엘리먼트만 `register`해서 트리쉐이킹 가능.
- 설치:
  ```bash
  npm install --save chart.js react-chartjs-2
  ```
- 라이선스: MIT (래퍼·Chart.js 모두)

## nivo

- 사이트: [nivo.rocks](https://nivo.rocks/) · Repo: [plouc/nivo](https://github.com/plouc/nivo)
- **용도: 조금 더 다양화.** D3 + React 기반. 캘린더, 레이더, sankey, treemap, sunburst, choropleth 등 종류가 넓다.
- 특징: 차트 타입별로 `@nivo/*` 패키지를 나눠 가져와 씀. SVG 컴포넌트.
- 라이선스: MIT

## chart.xkcd

- 사이트: [timqian.com/chart.xkcd](https://timqian.com/chart.xkcd/#introduction) · Repo: [timqian/chart.xkcd](https://github.com/timqian/chart.xkcd)
- **용도: 기능은 별로 없지만 완전 귀여움. 간단하게 쓰기 좋음.** xkcd 스타일(손그림·스케치) 선/막대/파이/레이더 정도.
- 특징: `<svg>` 하나 + 짧은 JS. React 래퍼 `chart.xkcd-react`도 있음. `unxkcdify`로 손그림 효과를 끌 수 있음.
- 설치:
  ```bash
  npm i chart.xkcd
  ```
- 라이선스: MIT

## billboard.js

- 사이트: [naver.github.io/billboard.js](https://naver.github.io/billboard.js/) · Repo: [naver/billboard.js](https://github.com/naver/billboard.js)
- **용도: 복잡한 기능까지 커버 가능.** D3 기반, 같은 API로 SVG 또는 Canvas. 조합 차트, 테마, 플러그인, 대용량 포인트.
- 특징: NAVER 유지보수. 차트 타입 20종, CSS 테마(default/dark/modern 등), ESM으로 필요한 타입만 import. Canvas 모드는 수만 포인트용.
- 설치:
  ```bash
  npm install billboard.js
  ```
- 라이선스: MIT
