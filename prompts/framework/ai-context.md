# AI 컨텍스트 생성 프롬프트

> 용도: `framework/specs/pipeline.md` 5단계("AI 컨텍스트")의 산출물 — 확정된 규칙 + 프로젝트 실제 값을 Stitch·Claude Design 같은 AI 디자인 생성 도구에 그대로 붙여넣을 수 있는 Markdown/프롬프트로 변환할 때 쓰는 메타 프롬프트. `examples/design-rules.md`(빈 템플릿)와 `prompts/demo/toss.md`(실제 값을 채운 완성본)가 이 프롬프트로 만든 산출물이다.

## 프롬프트

```
framework/specs/pipeline.md 5단계 산출물 — AI 디자인 생성 도구에 붙여넣을 프롬프트를 만들려고 한다.

절대 규칙: 이 단계는 요약이지 원본이 아니다. 1~4단계(공통 스펙 → 어댑터 → 토큰 파일 → 프레임워크 설정)에 없는 새 규칙을 여기서 만들어내지 마라. 토큰 파일에 없는 값을 "대략 이 정도"로 지어내지도 마라 — 값이 없으면 그 항목을 빼거나, 먼저 3~4단계를 채우라고 요청해라.

1. 입력으로 받을 것: 이 프로젝트의 토큰 파일(`examples/tokens/tokens.css` 형식, 또는 이미 채워진 프로젝트의 실제 CSS 변수), 그리고 화면 설명 한 문장.
2. framework/specs/의 10개 스펙 영역(colors/typography/radius/spacing/layout/icon/elevation/motion/states/token-architecture + patterns의 media/navigation/form + components/validation)을 훑어서, 이번 화면에 실제로 해당하는 영역만 골라라. 모든 화면에 모든 영역이 필요한 것은 아니다(예: 모달이 없는 화면에 media.md의 모달 규칙을 넣지 마라).
3. 고른 영역마다 대괄호 블록([색상], [Radius], [타이포그래피], [레이아웃], [아이콘], [상태], [텍스트] 등)을 만들고, 그 안에 규칙 + 토큰 파일의 실제 값을 함께 적어라. 규칙만 있고 값이 없으면("파란 계열을 쓴다") AI가 실행할 때마다 다른 결과를 낸다 — 반드시 토큰 파일의 실제 oklch/px 값을 그대로 붙여넣어라.
4. 색상 블록은 prompts/framework/color-tokens.md 계약(시맨틱 이름, oklch, 60-30-10 비율)을 그대로 따른다.
5. 상태(Hover/Pressed/Disabled/Focus)를 다루는 컴포넌트가 있으면 framework/specs/tokens/states.md의 전이 규칙을 한 줄로 포함해라.
6. 마지막 문장은 항상 "이 규칙을 모두 반영해서 디자인해 주세요" 같은 명확한 실행 지시로 끝내라 — 규칙 나열만 하고 지시 없이 끝내지 마라.
7. 산출물 상단에 이 프롬프트가 어느 스펙/토큰 파일에서 나왔는지 출처를 한 줄로 남겨라(다른 이 저장소 문서와 같은 관례).

토큰 파일: [examples/tokens/tokens.css 경로 또는 실제 값 붙여넣기]
화면 설명: [예: 모바일 커머스 앱의 상품 목록 화면]
```

## 관련

- 빈 템플릿: [`examples/design-rules.md`](../../examples/design-rules.md)
- 실제 값을 채운 완성 사례: [`prompts/demo/toss.md`](../demo/toss.md), [`naver.md`](../demo/naver.md), [`daangn.md`](../demo/daangn.md)
- 이 단계가 파이프라인의 어디인지: [`framework/specs/pipeline.md`](../../framework/specs/pipeline.md) §2 5단계, §3 "AI 컨텍스트는 요약이지 원본이 아니다"
- 색 토큰 계약: [`color-tokens.md`](./color-tokens.md)
