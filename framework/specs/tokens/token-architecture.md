# 토큰 아키텍처 — 3계층 구조 (Token Architecture)

> 출처: `talk/script.md`에는 이 개념이 없다. 이 저장소가 조사한 다섯 개 디자인 시스템(KRDS, Material, Ant Design, Fluent, shadcn)이 서로 다른 이름으로 **같은 3계층 구조**에 수렴한다는 사실을 발견해 공통 스펙으로 승격했다 — `framework/adapters/krds/colors.md` §8, `framework/adapters/material/colors.md`, `framework/adapters/ant-design/colors.md` §6, `references/design-systems/fluent/README.md`, `examples/shadcn-case/token-architecture.md`가 근거다.

## 1. 왜 계층이 필요한가

`colors.md` §3은 "Primary 색을 기준으로 명도만 조정해 단계별 팔레트를 생성한다"고 정하고, §9는 "그 결과물을 `--primary` 같은 시맨틱 이름으로 저장한다"고 정한다. 이 둘은 사실 **서로 다른 계층**을 가리킨다 — 팔레트 단계(예: `primary-50`)는 값 자체이고, `--primary`는 그 값을 가리키는 역할 이름이다. 이 구분을 명시하지 않으면 컴포넌트가 팔레트 단계를 직접 참조하게 되고, 나중에 브랜드 색을 바꿀 때 컴포넌트 코드를 전부 다시 뒤져야 한다.

## 2. 3계층 정의

| 계층 | 정의 | 이 저장소의 예시 |
| --- | --- | --- |
| Primitive | 색상각·채도 등은 고정하고 명도(또는 크기)만 이동한 원시 값. 그 자체로는 의미가 없다 | `--color-primary-50`, `--color-neutral-900` |
| Semantic | Primitive 하나를 가리키는 역할 이름. "어떤 값인지"가 아니라 "무슨 역할인지"를 말한다 | `--primary`, `--background`, `--destructive` |
| Component | 특정 컴포넌트가 Semantic 토큰을 어떻게 쓰는지의 매핑. `components/component-contract.md`가 이 계층을 다룬다 | `Button/Primary/Default → background: var(--primary)` |

## 3. 참조 방향은 한 방향

Component는 Semantic만 참조하고, Semantic은 Primitive만 참조한다. **컴포넌트가 Primitive를 직접 보지 않는다** — 계층을 건너뛰면 중간 계층이 존재할 이유가 없어진다.

```
Primitive (--color-primary-50)
  → Semantic (--primary: var(--color-primary-50))
    → Component (.btn-primary { background: var(--primary); })
```

브랜드 색을 바꾸는 작업은 Semantic이 가리키는 Primitive 값만 바꾸면 끝나야 한다 — Component 계층까지 손대야 한다면 계층 분리가 깨진 것이다.

## 4. Public API 경계 — 어디까지 공개하나

- **Semantic 이름만 컴포넌트 코드의 public API다.** `--primary`, `--background`, `--destructive` 같은 이름은 프로젝트 전체에서 고정하고 바꾸지 않는다(`colors.md` §9와 동일한 원칙을 색 외 모든 토큰 종류로 확장한 것).
- **Primitive 이름은 내부용이다.** `--color-primary-50` 같은 이름 자체를 쓰는 것은 문제가 아니다 — 팔레트 단계를 나타내려면 이런 이름이 필요하다. 다만 컴포넌트 코드나 AI 프롬프트가 Semantic을 건너뛰고 Primitive를 **직접 참조**하면 안 된다. 예를 들어 `.btn { background: var(--color-primary-50); }`처럼 컴포넌트가 Primitive를 직접 쓰면, 나중에 그 컴포넌트만 다른 Primitive로 옮기고 싶어도 Semantic이라는 중간 계층이 없어 전체 색 체계에서 분리해낼 수 없다.
- 즉 "Primitive 이름을 쓰지 마라"가 아니라 **"Primitive는 Semantic이 가리키기만 하고, 그 바깥(컴포넌트·프롬프트)은 Semantic만 본다"**가 규칙이다.

## 5. 다섯 시스템의 수렴

이름은 전부 다르지만 구조는 같다 — 이것이 3계층을 공통 스펙으로 승격한 핵심 근거다.

| 시스템 | Primitive | Semantic | Component |
| --- | --- | --- | --- |
| KRDS | Primitive (`primary-50`, `gray-5`) | Semantic (`color-icon-primary`) | Component (코드 전용) |
| Material | Reference (Tonal Palette) | System (Role: `primary`, `onSurface`) | Component |
| Ant Design | Seed (`colorPrimary`) | Map (`colorPrimaryHover` 등 10단계 자동 계산) | Alias (컴포넌트별 재사용) |
| Fluent | Global | Alias | Control |
| shadcn(이 저장소 계약) | `--color-*` | `--primary`, `--background` 등 | `components/component-contract.md` |

## 토큰화

```css
:root {
  /* Primitive — 내부용, 컴포넌트가 직접 참조하지 않는다 */
  --color-primary-50: oklch(0.5 0.18 265);
  --color-primary-70: oklch(0.34 0.153 265);

  /* Semantic — public API, 이 이름만 프로젝트 전체에서 참조한다 */
  --primary: var(--color-primary-50);
  --primary-foreground: oklch(0.985 0 0);
}

/* Component — components/component-contract.md가 정의하는 계층 */
.btn-primary {
  background: var(--primary); /* Semantic만 참조 — Primitive를 직접 쓰지 않는다 */
}
```

## 관련

- `prompts/framework/color-tokens.md` 6항의 "`--color-primary`를 public API로 쓰지 마라"는 이 스펙의 §4를 색 토큰에 적용한 것이다 — 금지 대상은 Primitive 이름 자체가 아니라 그 이름을 Semantic 없이 바깥에서 직접 참조하는 것이다.
- 이 계층 구조를 실제로 구현한 사례: `examples/vite-shadcn-demo/src/index.css`(primitive `--color-*` + semantic 재배정), `examples/shadcn-case/token-architecture.md`.
- (후속 과제) `examples/tokens/tokens.css`는 현재 Semantic 계층만 담고 있다 — Primitive 계층을 별도로 노출할지는 이 스펙 신설 이후의 검토 대상이다.
