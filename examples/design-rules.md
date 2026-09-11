# 디자인 규칙 — AI 컨텍스트 템플릿

> 용도: `framework/specs/`의 규칙 + 프로젝트가 정한 실제 값(팔레트, radius, 타이포 등)을 Stitch·Claude Design 같은 AI 디자인 생성 도구에 그대로 붙여넣을 수 있는 컨텍스트로 정리하는 빈 템플릿. `framework/specs/pipeline.md` 5단계의 실제 산출물.
>
> `prompts/demo/toss.md`가 이 템플릿에 토스 브랜드 실제 값을 채운 완성본이다 — 이 문서는 그 반대로, 어떤 프로젝트든 대괄호 `[ ]`만 채우면 되는 출발점이다.

## 채우는 순서

1. `framework/skills/plan.md`의 절차대로 Color → Typography/Radius/Icon → Layout/Spacing → Component Contract를 먼저 확정한다.
2. `examples/tokens/tokens.css`를 복사하고, 색은 [`prompts/framework/color-tokens.md`](../prompts/framework/color-tokens.md)대로 `--primary`만 덮어쓴다.
3. 아래 템플릿의 `[ ]`를 그 토큰 파일의 값으로 치환한다 — 여기서 새 값을 만들지 않는다.
4. 화면 설명(맨 앞 문장)만 프로젝트에 맞게 바꾼다.

## 프롬프트

```
당신은 시니어 프로덕트 디자이너입니다. 아래 규칙을 반드시 지켜서 [화면 설명 — 예: 모바일 커머스 앱의 상품 목록 화면]을 디자인해 주세요.

[색상]
- 토큰 이름은 shadcn 시맨틱 계약이다: --background / --foreground / --card / --primary / --primary-foreground / --muted / --destructive / --border / --ring. 값은 oklch로 적는다.
- 화면 전체 면적 비율은 60(--background) : 30(--card/--muted) : 10(--primary)를 따른다.
- --primary는 [Primary oklch]이며, 이 화면 안에서 가장 중요한 강조 버튼/요소에만 사용한다. 그 위 글자는 --primary-foreground.
- 배경(60%)은 --background([보통 oklch(1 0 0)])로, 화면 대부분을 차지하는 무채색(chroma 0)이다.
- 구분 영역(30%)은 --card 또는 --muted를 쓴다.
- 파괴적 액션은 --destructive만 쓴다. Success/Warning/Info가 필요하면 같은 이름으로만 확장한다.
- 버튼 상태: Default = --primary, Hover/Pressed = color-mix(in oklch, var(--primary) 88%/76%, var(--foreground)). 상태 간 명암비가 급격히 반전되거나 큰 폭으로 뛰지 않게 한다.

[Radius]
- 카드/버튼/입력창 등 모든 컴포넌트에 하나의 radius 값(--radius, [0.625rem] 근처)만 통일해서 사용한다.

[타이포그래피]
- [지원 언어]를 함께 지원하는 폰트 하나([폰트 이름])만 사용한다.
- 제목(Heading)/본문(Body)/캡션(Caption) [N]단계로만 크기를 나눈다.

[아이콘]
- 아이콘 라이브러리는 [라이브러리 이름] 하나만 사용한다. 기준 크기 [24]px, 스트로크 두께는 크기가 바뀌어도 비율을 유지한다.
- 색상은 전용 팔레트 없이 인접 텍스트의 시맨틱 토큰을 상속한다.

[레이아웃]
- 좌우 여백(Gutter)은 [16 또는 24]px로 통일한다.
- 카드나 리스트 아이템은 화면 폭을 꽉 채우고, 어정쩡한 여백을 남기지 않는다.
- 요소 간 간격은 8px 단위(예외적으로 4px)만 사용하고 임의의 값은 쓰지 않는다.

[엘리베이션]
- 층이 다른 요소(카드/팝오버/모달)는 [--elevation-1]/[--elevation-2]/[--elevation-3] 단계 중 하나로만 표현한다. 임의의 그림자 값을 새로 만들지 않는다.
- 모달·바텀시트 아래는 반투명 검정 딤드([black/70~75%])로 통일한다.

[상태]
- Default→Hover→Pressed는 인접 레벨로만 이동한다(건너뛰지 않는다). Disabled는 --muted로 대체한다.
- 키보드 포커스는 색상 변화 외에 outline/ring 같은 비색상 단서를 반드시 함께 준다.
- 상호작용 요소의 탭/클릭 가능 영역은 시각적 크기보다 작아지지 않게 패딩으로 확보한다.

[텍스트/미디어]
- 카드 안 설명 텍스트는 최대 3줄까지만 보여주고, 초과 시 말줄임 처리한다.
- 모달 너비는 디바이스 너비의 최대 85%로 하고, 기본 정렬은 가운데로 한다.

[검증]
- 본문 텍스트와 배경의 대비는 4.5:1 이상(WCAG AA)을 만족해야 한다.
- 상태(성공/오류 등)를 색상만으로 표현하지 않고 아이콘·텍스트를 함께 쓴다.

이 규칙을 모두 반영해서 디자인해 주세요.
```

## 명시 수준과 결과 안정성

`talk/script-10min/script.md` 슬라이드 12에서 다루는 내용 — 규칙을 구체적인 숫자(hex, px, 배수)까지 명시할수록 매번 비슷한 결과가 나온다. 위 템플릿의 `[ ]`를 "적당히"(예: "파란 계열") 채우면 매 실행마다 다른 파란색이 나올 수 있으니, 항상 `tokens.css`의 실제 oklch/px 값을 그대로 붙여넣는다 — 새로 지어내지 않는다.

## 관련

- 빈 템플릿이 아니라 실제 값을 채운 완성 사례: [`prompts/demo/toss.md`](../prompts/demo/toss.md), [`naver.md`](../prompts/demo/naver.md), [`daangn.md`](../prompts/demo/daangn.md)
- 이 템플릿이 파이프라인의 어느 단계인지: [`framework/specs/pipeline.md`](../framework/specs/pipeline.md)
- 값의 출처: [`tokens/tokens.css`](./tokens/tokens.css)
