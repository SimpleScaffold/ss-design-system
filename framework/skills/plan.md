# plan — 디자인 시스템 설계

새 프로젝트, 또는 아직 디자인 시스템이 없는 기존 프로젝트에 `framework/specs/`를 기준으로 처음부터 규칙 세트를 만드는 스킬. "빈 화면에서 시작해서 토큰 파일 하나를 완성한다"가 목표.

## 언제 쓰나

- 사이드 프로젝트/MVP처럼 디자이너 없이 개발자가 화면을 뽑아야 할 때
- 기존 프로젝트에 색상·간격이 파일마다 제각각이라 처음부터 다시 정하고 싶을 때

## 입력

- 브랜드 Primary 색 (없으면 참고할 서비스 1곳 — `references/design-systems/` 또는 `examples/`의 사례)
- 지원 언어, 타깃 플랫폼(웹/모바일 웹뷰 등 — `examples/toss/consumer-ux-guide.md`처럼 플랫폼 제약이 있으면 함께 입력)
- (선택) 참고할 기존 어댑터 — 예: "KRDS만큼 접근성을 엄격히" 같은 기준점

## 절차

1. **Color** — `tokens/colors.md`를 순서대로 따라간다: 60-30-10 비율 확인 → Primary 선정 → oklch L(또는 HSL L)만 조정한 단계 팔레트 → 명암비 4.5 검증(§4) → 상태를 `--primary`에서 파생(§5) → `--background`/`--card` 레이어(§6) → `--destructive` 등 시맨틱 이름에 올리기(§7·§9). 출력 형식은 `examples/tokens/tokens.css`와 같은 `:root` / `.dark` oklch 계약이다.
2. **Typography / Radius / Icon** — `tokens/typography.md`, `radius.md`, `icon.md`를 각각 한 번씩 통과하며 "폰트 1개, radius 1개, 아이콘 라이브러리 1개"를 확정한다. 처음엔 스펙이 권장하는 최소 단계로 시작 — 필요해지면 늘린다.
3. **Layout / Spacing** — `tokens/layout.md`(그리드·브레이크포인트) + `spacing.md`(8px 단위)를 확정한다. 플랫폼 제약(예: 앱인토스의 Safe Area — `examples/toss/safe-area.md`)이 있으면 이 단계에서 함께 반영한다.
4. **Component Contract** — `components/component-contract.md`의 구조를 따라, 이 프로젝트에서 가장 먼저 필요한 컴포넌트 3~5개(보통 Button/Input/Card/Badge)의 Variant×State→Token 표를 채운다.
5. **Validation 기준 확정** — `validation/accessibility-checklist.md`에서 이 프로젝트에 적용할 항목을 고른다 (전부 적용할 필요는 없다 — 예: 다국어 서비스가 아니면 §3의 언어 커버리지 항목은 생략).

## 출력

- 위 5단계를 채운 토큰 문서 1벌. 색은 [`prompts/framework/color-tokens.md`](../../prompts/framework/color-tokens.md) 계약 — `examples/tokens/tokens.css`를 복사하고 `--primary`만 덮어쓴 `:root` / `.dark` oklch 파일.
- 프로젝트별 Component Contract 표

## framework/specs·adapters와의 관계

`plan`은 스펙 자체를 바꾸지 않는다 — 스펙이 이미 정해둔 질문 순서를 그대로 따라가며 "이 프로젝트의 답"만 채운다. 기존 시스템의 답을 참고하고 싶으면 `framework/adapters/{krds,material,ant-design}/`의 실제 값을 참고하되, 그대로 복사하지 않고 이 프로젝트의 Primary 색 기준으로 다시 계산한다.

## 예시

`prompts/demo/toss.md`가 이 절차의 결과물을 AI 프롬프트 형태로 정리한 사례다 — 60-30-10 비율, 팔레트, radius, 타이포, 레이아웃, 텍스트 규칙이 한 프롬프트 안에 모두 들어 있다.
