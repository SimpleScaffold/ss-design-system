# 당근 스타일 디자인 프롬프트

> 출처: `talk/script.md` 슬라이드 7 (당근 60-30-10 사례) · `framework/specs/tokens/colors.md`, `radius.md`, `spacing.md`, `layout.md`, `typography.md`의 공통 규칙을 당근의 실제 브랜드 색에 대입한 예시. 색 토큰 형식은 [`../framework/color-tokens.md`](../framework/color-tokens.md).
> 용도: Stitch, Claude Design 등 AI 디자인 생성 도구에 그대로 붙여넣어 "규칙을 전달했을 때와 안 했을 때"를 비교하는 라이브 데모용.

## 브랜드 색상 참고

| 비율 | 역할 | 색상 |
| --- | --- | --- |
| 10% | Primary (강조) | 당근 오렌지 계열 (예: `#FF8A3D`) |
| 30% | 구분된 영역 | 회색 카드/리스트 영역 |
| 60% | 배경 | 흰색/연회색 배경 |

> 정확한 공식 hex는 필요 시 당근 실제 앱/사이트에서 재확인할 것 — 위 값은 발표·데모용 근사치.

## 프롬프트

```
당신은 시니어 프로덕트 디자이너입니다. 아래 규칙을 반드시 지켜서 동네 커뮤니티/중고거래 앱의 홈 피드 화면 UI를 디자인해 주세요.

[색상]
- 색 토큰은 shadcn 시맨틱 계약이다. 이름: --background / --foreground / --card / --primary / --primary-foreground / --muted / --destructive / --border / --ring. 값은 oklch. hex를 컴포넌트에 직접 쓰지 않는다.
- 면적 비율: 60% --background / 30% --card·--muted / 10% --primary.
- --primary는 당근 오렌지(#FF8A3D를 oklch로 변환). 등록 FAB·가격/상태 뱃지에만 쓴다. 그 위 글자는 --primary-foreground (명암비 4.5+).
- 뉴트럴(--background, --card, --muted, --border)은 chroma 0을 유지한다.
- Hover/Pressed는 Primary-50/60이 아니라 color-mix(in oklch, var(--primary) 88%/76%, var(--foreground)).
- 토큰 파일을 만들면 examples/tokens/tokens.css를 복사하고 --primary만 덮어쓴다. --color-primary 같은 옛 이름은 쓰지 않는다.

[Radius]
- 카드/버튼/뱃지 등 모든 컴포넌트에 하나의 radius 값만 통일해서 사용한다(친근한 인상을 위해 12px 근처의 비교적 큰 값 권장).

[타이포그래피]
- 한글+영문+숫자를 함께 지원하는 폰트 하나만 사용한다.
- 제목(Heading), 본문(Body), 캡션(Caption) 3단계로만 크기를 나눈다.

[레이아웃]
- 모바일 기준(390px)으로 설계하며, 리스트 아이템은 화면 폭을 꽉 채운다.
- 좌우 여백(Gutter)은 16px로 통일하고, 요소 간 간격은 8px 단위(예외적으로 4px)만 사용한다.
- 등록 버튼(FAB)은 화면 우하단 고정 위치에 Primary 색으로 배치해 10% 영역의 시각적 강조를 담당하게 한다.

[이미지/텍스트]
- 상품 이미지는 정사각형 비율로 크롭해서 통일한다.
- 게시글 제목/설명 텍스트는 최대 3줄까지만 보여주고, 초과 시 말줄임 처리한다.

이 규칙을 모두 반영한 홈 피드 화면(상단 동네 이름 + 카테고리 탭 + 상품 리스트 카드 + 등록 FAB 버튼)을 디자인해 주세요.
```
