# 컴포넌트 스펙 (Component Contract)

> 출처: `talk/script.md`에는 컴포넌트 단위 규칙이 별도로 없다. `tokens/colors.md` §8("시스템 색상 → 컴포넌트 매핑")의 아이디어를 색상 외 모든 토큰 종류로 일반화해 공통 스펙으로 승격했다. 컴포넌트 자체의 마크업/구조가 아니라 **컴포넌트가 어떤 토큰을 쓰는지의 계약(contract)** 만 다룬다 — 실제 컴포넌트 라이브러리는 `examples/toss/components.md`(TDS)처럼 이 계약을 이미 구현해둔 사례로 참고한다.

## 1. 왜 필요한가

`tokens/*.md`가 "팔레트에 어떤 레벨이 있는지", "간격 단위가 몇 px인지"를 정의해도, 그 자체로는 화면에 아무 영향이 없다. 토큰이 실제로 화면에 반영되려면 **"이 컴포넌트의 이 상태는 이 토큰을 쓴다"** 는 명시적 매핑이 있어야 한다. 이 매핑이 없으면 같은 Primary 버튼이 화면마다 다른 레벨의 파란색을 쓰는 식의 불일치가 생긴다 — 개발자가 매번 "이 정도 파란색이면 되겠지"라고 감으로 고르기 때문이다. 컴포넌트 계약은 그 감을 규칙으로 대체한다.

## 2. 계약의 구조 — Variant × Size × State → Token

모든 컴포넌트는 아래 세 축의 조합으로 상태를 정의하고, 각 조합이 어떤 토큰을 참조하는지 표로 고정한다.

| 축 | 설명 | 예시 |
| --- | --- | --- |
| Variant | 같은 컴포넌트의 의미론적 종류 | Primary / Secondary / Ghost / Danger |
| Size | 크기 단계 | sm / md / lg |
| State | 상호작용 상태 | Default / Hover / Pressed / Disabled / Loading |

세 축을 곱한 만큼 표의 행이 생기지만, 실제로는 Variant마다 State 규칙이 동일한 패턴을 반복하는 경우가 많다 (§4 예시 참고) — 반복되는 패턴은 "기본 State 규칙"으로 한 번만 적어두고 Variant별로는 예외만 명시한다.

## 3. State 목록 (공통)

- **Default** — 아무 상호작용도 없는 기본 상태.
- **Hover** — 포인터가 올라간 상태 (터치 전용 기기에는 해당 없음, 생략 가능).
- **Pressed** — 누르고 있는 상태. `tokens/colors.md` §5의 상태 색상 규칙(`--primary`의 oklch L을 한 단계씩)을 그대로 따른다.
- **Disabled** — 상호작용 불가. 색상은 보통 `--muted` / `--muted-foreground`로 대체하고, 커서도 `not-allowed`로 바꾼다.
- **Focus-visible** — 키보드 포커스. 색상만으로 표시하지 않고 outline/ring 같은 비색상 단서를 반드시 함께 준다 (`validation/accessibility-checklist.md` §4).
- **Loading** — 비동기 처리 중. 텍스트는 유지하거나 스피너로 교체하되 컴포넌트 크기는 유지한다(레이아웃 밀림 방지).

## 4. 예시 — Button

```
Button
├─ Variant: Primary
│   ├─ Default   → bg: --primary        / text: --primary-foreground
│   ├─ Hover      → bg: color-mix(in oklch, var(--primary) 88%, var(--foreground))
│   ├─ Pressed    → bg: color-mix(in oklch, var(--primary) 76%, var(--foreground))
│   ├─ Disabled   → bg: --muted         / text: --muted-foreground
│   └─ Focus      → ring: --ring, ring-width: 2
├─ Variant: Danger
│   └─ (Primary과 동일 패턴, 팔레트만 --destructive 로 교체)
└─ 공통 (Variant 무관)
    ├─ radius     → --radius   (colors.md §9 / radius.md — 값 하나로 통일)
    ├─ padding    → --space-3 --space-4  (spacing.md 8px 단위)
    └─ typography → --font-label    (typography.md)
```

Variant를 늘릴 때마다 State 규칙 전체를 새로 쓰지 않고, "공통 패턴 + 팔레트 교체"로 표현하는 것이 핵심이다 — 그래야 컴포넌트가 늘어나도 계약이 선형으로 늘지 않는다.

## 5. 새 컴포넌트 추가 시 체크리스트

1. 이 컴포넌트에 실제로 필요한 Variant/State만 정의한다 (§3 목록을 전부 쓸 필요는 없다 — 예: 텍스트 링크는 보통 Loading이 없다).
2. 색상은 `tokens/colors.md`의 기존 팔레트/레벨만 참조한다. 새 hex 값을 컴포넌트 계약에서 만들지 않는다.
3. Radius/Spacing/Typography는 전용 토큰이 있으면 그것부터 참조하고, 없으면 이 계약을 계기로 `tokens/`에 먼저 추가한다.
4. 접근성 필수 축(Disabled, Focus-visible)을 빠뜨리지 않는다 — `validation/accessibility-checklist.md`로 확인한다.
5. 어댑터가 있는 프로젝트라면 (`framework/adapters/*`) 이 표를 어댑터의 실제 컴포넌트 라이브러리 문서와 대조해 값이 어긋나지 않는지 확인한다.

## 토큰화 예시

```css
/* Button/Primary */
.btn-primary {
  background: var(--primary);
  color: var(--primary-foreground);
  border-radius: var(--radius);
  padding: var(--space-3) var(--space-4);
}
.btn-primary:hover { background: color-mix(in oklch, var(--primary) 88%, var(--foreground)); }
.btn-primary:active { background: color-mix(in oklch, var(--primary) 76%, var(--foreground)); }
.btn-primary:disabled { background: var(--muted); color: var(--muted-foreground); }
.btn-primary:focus-visible { outline: 2px solid var(--ring); outline-offset: 2px; }
```
