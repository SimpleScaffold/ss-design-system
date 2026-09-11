# scripts

검증·스코어링 하네스. `framework/specs/validation/accessibility-checklist.md`가 "자동화 후보"로 지목한 항목 중, 코드만으로 판단 가능한 것부터 구현했다. 외부 의존성이 없는 순수 Node(ESM) 스크립트다 — `npm install` 없이 `node <파일>`로 바로 실행한다.

## `contrast.mjs` — WCAG 명암비 계산기

`accessibility-checklist.md` §2("대비")를 자동화한다. hex(`#rrggbb`)와 oklch(`oklch(L C H)`) 두 형식을 입력받아 대비율과 AA/AAA(고대비 모드 포함) 통과 여부를 출력한다.

```bash
node framework/scripts/contrast.mjs "#3182F6" "#ffffff"
node framework/scripts/contrast.mjs "oklch(0.5 0.18 265)" "oklch(0.985 0 0)"
```

기준값: `tokens/colors.md` §4(본문 4.5:1), §12(고대비 모드 본문 7:1·헤딩 4.5:1).

## `scan-token-escapes.mjs` — 팔레트 이탈 값 스캐너

`accessibility-checklist.md` §2("팔레트 이탈 값")·§5("간격 값")를 자동화한다. 토큰 CSS 파일에서 허용된 hex 값을 수집한 뒤, 대상 디렉터리를 훑어 팔레트에 없는 hex와 8px(예외 4px) 배수가 아닌 px 값을 파일:줄 단위로 보고한다.

```bash
node framework/scripts/scan-token-escapes.mjs --tokens examples/tokens/tokens.css --target examples/vite-shadcn-demo/src
```

위반이 있으면 종료 코드 1을 반환한다 — CI 게이트로 쓸 수 있다. `examples/vite-shadcn-demo/src`에 실행해보면 `변동/spacing.md`가 이미 수기로 문서화해둔 shadcn 벤더 기본값 예외(`button.tsx`의 `min(var(--radius-md),10px)` 등)와 정확히 같은 위치가 나온다 — 자동 검사 결과가 기존 수동 감사와 일치함을 확인했다.

**한계**: oklch 값은 문자열 완전 일치만 검사한다(색상각·명도까지 계산해 "팔레트 안 값인지" 판단하지 않는다). hex와 px 그리드 검사가 핵심이다.

## 아직 자동화하지 않은 것

- `accessibility-checklist.md` §4 "상태 레벨 간격"(Default→Hover→Pressed가 인접 레벨만 이동했는지) — 어떤 CSS 규칙이 "같은 컴포넌트의 상태 전이"인지 구조적으로 판단해야 해서, 정적 텍스트 스캔만으로는 안정적으로 자동화하기 어렵다.
- `accessibility-checklist.md` §6 "엘리베이션 단계" — box-shadow 값을 파싱해서 정의된 단계와 대조하는 것 자체는 가능하지만, 프로젝트마다 elevation 토큰 이름이 달라 아직 일반화하지 않았다.
- `radius.md`/`layout.md` 검증(§5의 나머지 항목)도 §2·§5의 px 스캔 로직을 재사용할 수 있어 다음 후보다.

## 관련

- 검증 기준 원본: [`framework/specs/validation/accessibility-checklist.md`](../specs/validation/accessibility-checklist.md)
- 진단 워크플로: [`framework/skills/improve.md`](../skills/improve.md), [`prompts/framework/audit.md`](../../prompts/framework/audit.md) — §1 "전체 스캔" 단계에서 이 스크립트들을 먼저 돌리고 나머지를 사람이 확인하는 순서를 권장한다.
