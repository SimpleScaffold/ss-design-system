# 상태 스펙 (States)

> 출처: `talk/script.md` 슬라이드 12~13(상태 색상), 21(대비 매직넘버). 여러 문서에 흩어져 있던 상태 규칙(`colors.md` §5, `components/component-contract.md` §3, `validation/accessibility-checklist.md` §4)을 하나로 모으고, `references/design-systems/ant-design/README.md`가 기록한 반례를 반영해 승격했다.

## 1. 상태 목록

컴포넌트가 가질 수 있는 상태는 아래 6가지로 시작한다. 실제로 필요한 것만 정의하면 되고, 전부 쓸 필요는 없다(예: 텍스트 링크는 보통 Loading이 없다).

- **Default** — 아무 상호작용도 없는 기본 상태.
- **Hover** — 포인터가 올라간 상태 (터치 전용 기기에는 해당 없음, 생략 가능).
- **Pressed** — 누르고 있는 상태.
- **Disabled** — 상호작용 불가. 색상은 보통 `--muted` / `--muted-foreground`로 대체하고, 커서도 `not-allowed`로 바꾼다.
- **Focus-visible** — 키보드 포커스.
- **Loading** — 비동기 처리 중. 텍스트는 유지하거나 스피너로 교체하되 컴포넌트 크기는 유지한다(레이아웃 밀림 방지).

## 2. 전이 방향은 시스템이 정한다

`colors.md` §5는 이 저장소 계약에서 "Default → Hover → Pressed로 갈수록 팔레트 레벨이 짙어지는 방향"을 기본값으로 둔다. 하지만 이것이 **모든 디자인 시스템에 보편적인 법칙은 아니다** — `references/design-systems/ant-design/README.md`가 기록한 대로, Ant Design은 10단계 파생 팔레트에서 Default를 가운데 두고 **Hover는 더 옅은 인덱스, Active(Pressed)는 더 짙은 인덱스**를 쓴다(KRDS는 Hover·Pressed 모두 짙어지는 방향).

→ 다른 시스템을 어댑터로 옮길 때 "당연히 짙어지는 방향"이라고 단정하지 말고, 그 시스템이 실제로 어느 방향을 쓰는지 소스에서 확인한다. 한 프로젝트 안에서는 방향을 하나로 통일하고 혼용하지 않는다.

## 3. 인접 레벨만 이동

방향이 무엇이든, 상태 전환 시 팔레트 레벨은 **인접한 단계로만** 이동한다.

- 명암비가 갑자기 반전되거나(예: 흰 글자 배경 → 검은 글자 배경) 너무 큰 폭으로 뛰지 않도록 한다.
- 파생 비율은 프로젝트 전체에서 동일하게 유지한다(`colors.md` §5의 `color-mix(...)` 파생 참고).

## 4. Focus-visible은 비색상 단서가 필수다

색상 변화만으로 포커스를 표시하지 않는다 — outline/ring 같은 **비색상 단서**를 반드시 함께 준다. 저시력 사용자나 색맹 사용자는 색상 변화만으로는 포커스 위치를 알 수 없다.

## 5. 터치 타깃 최소 크기

상호작용 가능한 요소(버튼, 링크, 아이콘 버튼 등)는 시각적 크기와 별개로 **탭/클릭 가능 영역**을 충분히 확보한다. 시각적으로 작은 아이콘 버튼이라도 터치 영역은 패딩으로 넓혀서, Pressed 상태로 전환되는 실제 히트 영역이 손가락 크기보다 작아지지 않게 한다.

## 6. Disabled도 최소 대비를 유지한다

비활성 상태를 "안 보이게" 처리하지 않는다 — 비활성임을 알아볼 수 있을 정도의 최소 대비는 유지해야, 사용자가 "고장난 화면"이 아니라 "지금은 쓸 수 없는 상태"라고 인식할 수 있다.

## 토큰화

```css
.component {
  /* Default → Hover → Pressed: 이 프로젝트는 짙어지는 방향(§2)을 채택 */
  background: var(--primary);
}
.component:hover {
  background: color-mix(in oklch, var(--primary) 88%, var(--foreground));
}
.component:active {
  background: color-mix(in oklch, var(--primary) 76%, var(--foreground));
}
.component:disabled {
  background: var(--muted);
  color: var(--muted-foreground);
  cursor: not-allowed;
}
.component:focus-visible {
  outline: 2px solid var(--ring);
  outline-offset: 2px;
}
```

## 관련

- `components/component-contract.md` §3·§4가 이 상태 목록을 Variant×Size×State 표에 적용하는 방법을 다룬다 — 상태 자체의 정의는 이 문서, 컴포넌트별 매핑은 그 문서가 담당한다.
- `validation/accessibility-checklist.md` §4가 이 스펙을 검증 항목으로 확인한다.
