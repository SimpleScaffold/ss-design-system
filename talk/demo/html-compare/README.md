# html-compare

발표 슬라이드 13(Before/After)용 HTML 비교 화면. Stitch/Claude Design 대신, 같은 3화면을 **규칙 없이** / **디자인 시스템 규칙으로** 각각 만들어 두었다.

| 파일 | 가정 | 한 줄 지시 |
| --- | --- | --- |
| [`a-no-prompt.html`](./a-no-prompt.html) | 프롬프트·규칙 없이 화면만 뽑음 | "토스 스타일의 모바일 금융 앱 화면을 디자인해줘." |
| [`b-with-design-system.html`](./b-with-design-system.html) | [`prompts/demo/toss.md`](../../../prompts/demo/toss.md) + `framework/specs/tokens/` 규칙을 지킴 | 색 60-30-10, radius 8px, 간격 8px, 타이포 3단계, gutter 24px |

각 파일에 **홈 / 송금 / 내역** 3화면이 나란히 있다. 브라우저에서 두 파일을 띄워 색 비율·Radius·간격이 어떻게 갈리는지 보면 된다.
