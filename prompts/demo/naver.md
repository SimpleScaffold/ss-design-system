# 네이버 스타일 디자인 프롬프트

> 출처: `talk/script.md` 슬라이드 6 (네이버 60-30-10 사례) · `framework/specs/tokens/colors.md`, `radius.md`, `spacing.md`, `layout.md`, `typography.md`, `icon.md`, `states.md`의 공통 규칙을 네이버의 실제 브랜드 색에 대입한 예시. 색 토큰 형식은 [`../framework/color-tokens.md`](../framework/color-tokens.md) — `[색상]` 블록은 그 프롬프트를 그대로 포함하고 브랜드 값만 다르게 채운다.
> 용도: Stitch, Claude Design 등 AI 디자인 생성 도구에 그대로 붙여넣어 "규칙을 전달했을 때와 안 했을 때"를 비교하는 라이브 데모용.

## 브랜드 색상 참고

| 비율 | 역할 | 색상 |
| --- | --- | --- |
| 10% | Primary (강조) | 네이버 그린 계열 (예: `#03C75A`) |
| 30% | 구분된 영역 | 카드형 콘텐츠 박스 배경 |
| 60% | 배경 | 흰색/연회색 배경 |

> 정확한 공식 hex는 필요 시 네이버 실제 사이트에서 재확인할 것 — 위 값은 발표·데모용 근사치.

## 프롬프트

```
당신은 시니어 프로덕트 디자이너입니다. 아래 규칙을 반드시 지켜서 포털 서비스의 홈/피드 화면 UI를 디자인해 주세요.

[색상] (../framework/color-tokens.md 계약을 그대로 따른다)
- 색 토큰은 shadcn 시맨틱 계약이다. 이름: --background / --foreground / --card / --primary / --primary-foreground / --muted / --destructive / --border / --ring. 값은 oklch. hex를 컴포넌트에 직접 쓰지 않는다.
- 면적 비율: 60% --background / 30% --card·--muted / 10% --primary.
- --primary는 네이버 그린(#03C75A를 oklch로 변환). 검색창 강조·주요 액션 버튼에만 쓴다. 그 위 글자는 --primary-foreground (명암비 4.5+).
- 뉴트럴(--background, --card, --muted, --border)은 chroma 0을 유지한다.
- Hover/Pressed는 Primary-50/60이 아니라 color-mix(in oklch, var(--primary) 88%/76%, var(--foreground)).
- 토큰 파일을 만들면 examples/tokens/tokens.css를 복사하고 --primary만 덮어쓴다. --color-primary 같은 primitive 이름을 만들어도 되지만 컴포넌트가 직접 참조하지 않는다.

[Radius]
- 카드/버튼/검색창 등 모든 컴포넌트에 하나의 radius 값만 통일해서 사용한다(각지거나 아주 살짝 둥근 정도, 4~8px 근처).

[타이포그래피]
- 한글+영문+숫자를 함께 지원하는 폰트 하나만 사용한다.
- 제목(Heading), 본문(Body), 캡션(Caption) 3단계로만 크기를 나눈다. 정보 밀도가 높은 리스트형 UI이므로 캡션/본문 비중을 크게 둔다.

[아이콘]
- 아이콘 라이브러리는 하나만 사용하고, 24px 기준 하나의 스트로크 두께를 유지한다. 색상은 전용 팔레트 없이 인접 텍스트 색을 상속한다.

[레이아웃]
- 최대 콘텐츠 너비를 정하고, 그 이상 화면이 넓어지면 좌우 여백만 늘어나게 한다(무한정 넓게 늘어나지 않게).
- 콘텐츠 카드들은 그리드 컬럼 경계에서 시작/끝나도록 정렬하고, 좁은 여백에서 어정쩡하게 끊기지 않게 한다.
- 요소 간 간격은 8px 단위(예외적으로 4px)만 사용한다.

[상태]
- 버튼 Default→Hover→Pressed는 인접 레벨로만 이동한다(건너뛰지 않는다). Disabled는 --muted로 대체하고, 키보드 포커스는 색상 외에 outline/ring 같은 비색상 단서를 함께 준다.

[텍스트]
- 뉴스/카드 제목과 요약 텍스트는 최대 3줄까지만 보여주고, 초과 시 말줄임 처리한다.

이 규칙을 모두 반영한 홈/피드 화면(검색창 + 실시간 콘텐츠 카드 그리드 + 사이드 배너)을 디자인해 주세요.
```

## 관련

- 색 토큰 계약 원본: [`../framework/color-tokens.md`](../framework/color-tokens.md)
- 같은 형식의 다른 브랜드 사례: [`toss.md`](./toss.md), [`daangn.md`](./daangn.md)
- 빈 템플릿(브랜드 무관): [`examples/design-rules.md`](../../examples/design-rules.md)
