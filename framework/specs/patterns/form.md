# 폼 패턴 (Form)

> 출처: `talk/script.md`에는 폼 관련 슬라이드가 없다. 근거: `examples/vite-shadcn-demo/doc/design-system/고정/colors.md` §9(상태색 surface/border/text 3시맨틱), `framework/specs/components/component-contract.md` §3·§5, `framework/specs/validation/accessibility-checklist.md` §2(색상 단독 사용 금지). 이 문서는 저장소 안에 근거가 있는 항목만 다룬다 — 다루지 않는 것은 §5에 명시한다.

## 1. 레이블·헬퍼·에러의 배치 순서

레이블 → 입력 요소 → 헬퍼 텍스트(또는 에러 메시지) 순서로 배치하고, 이 순서를 프로젝트 전체에서 통일한다. 헬퍼 텍스트와 에러 메시지는 같은 자리에 나타나되 동시에 보이지 않는다 — 에러가 있으면 헬퍼 텍스트를 대체한다.

## 2. 필수 표시를 색상 단독으로 하지 않는다

필수 입력 항목을 색상만으로 표시하지 않는다(`validation/accessibility-checklist.md` §2). 별표(`*`)나 "필수" 텍스트처럼 색상에 의존하지 않는 표시를 함께 쓴다.

## 3. 에러 상태가 쓰는 토큰

에러 상태는 `tokens/colors.md` §7의 `--destructive`를 기본으로 쓰되, 배지·인라인 메시지처럼 옅은 배경 위에 글자를 올려야 하는 경우 같은 절이 정의하는 **surface(옅은 배경) / border(테두리) / text(글자)** 세 시맨틱을 함께 쓴다. 새 색상을 만들지 않는다.

- 입력 테두리: `--destructive-border`
- 에러 메시지 배경(필요 시): `--destructive-surface`
- 에러 메시지 글자: `--destructive-text`

## 4. 입력 요소의 상태는 `states.md`를 그대로 쓴다

Default / Hover / Focus-visible / Disabled 등 입력 요소의 상태 정의와 전이 규칙은 이 문서에서 새로 정의하지 않고 [`tokens/states.md`](../tokens/states.md)를 그대로 참조한다 — 폼 전용 상태 체계를 별도로 만들지 않는다. `components/component-contract.md`의 Variant×Size×State 표에 Input을 추가할 때도 이 스펙과 `states.md`를 함께 인용한다.

## 5. 이 스펙이 아직 다루지 않는 것

저장소 안에 검증 가능한 근거가 없어 이번에는 규칙으로 올리지 않았다 — 근거가 쌓이면 추가한다.

- 유효성 검증 시점(입력 중 vs 제출 시)
- 입력 그룹(같은 폼 안 여러 필드) 간격·정렬 규칙
- 자동완성·마스킹 등 입력 보조 UX

## 토큰화

```css
.form-field-error input {
  border-color: var(--destructive-border);
}
.form-field-error .form-message {
  color: var(--destructive-text);
}
```
