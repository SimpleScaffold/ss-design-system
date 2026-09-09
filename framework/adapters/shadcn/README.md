# shadcn

[shadcn/ui](https://ui.shadcn.com) 어댑터. 다른 어댑터(`krds/`, `material/`, `ant-design/`)와 방향이 하나 다르다 — 이들은 "브랜드 산출물"을 공통 스펙에 매핑하지만, shadcn/ui는 애초에 **공통 스펙 `tokens/colors.md` §9가 그대로 채택한 시맨틱 계약**이다. 그래서 이 어댑터는 "shadcn이 공식적으로 무엇을 강제하고, 무엇을 강제하지 않는지"를 소스 기준으로 정리하는 역할을 한다. shadcn을 실제 프로덕션 프로젝트에서 어떻게 확장해서 쓰는지는 [`examples/shadcn-case/`](../../../examples/shadcn-case/)에 별도로 정리했다.

## 매핑 문서

| 공통 스펙 | shadcn 매핑 | 비고 |
| --- | --- | --- |
| `specs/tokens/colors.md` | [`colors.md`](./colors.md) | 공통 스펙이 이 계약을 원본 그대로 채택 |
| `specs/tokens/radius.md` | [`radius.md`](./radius.md) | 기준값 1개 + `calc()` 파생 스케일 |
| `specs/tokens/typography.md` | 없음 | shadcn은 폰트/크기 체계를 강제하지 않는다. Tailwind 기본 타이포 유틸리티와 프로젝트가 설치한 폰트에 위임한다 |
| `specs/tokens/layout.md`, `specs/tokens/spacing.md` | 없음 | 간격·레이아웃 토큰이 없다. Tailwind 기본 spacing scale(`0.25rem` 배수)을 그대로 쓴다 |
| `specs/tokens/icon.md` | 없음(관례만 있음) | 아이콘 라이브러리를 강제하지 않지만, 공식 예제·CLI 템플릿이 [lucide-react](https://lucide.dev)를 기본으로 쓰는 관례가 있다 |
| `specs/tokens/elevation.md` | 없음 | 전용 shadow 토큰이 없다. Tailwind 기본 `shadow-*` 유틸리티를 그대로 쓴다 |

## 이 시스템 고유 개념

- **cva (class-variance-authority)** — `framework/specs/components/component-contract.md`가 정의하는 "Variant × Size → Token" 계약을 실제 코드로 구현하는 shadcn 생태계의 표준 방법. Variant/Size 조합마다 클래스 문자열을 매핑하는 함수를 만들고, 컴포넌트는 그 결과를 그대로 `className`에 꽂는다.
- **`cn()` 유틸리티** — `clsx`(조건부 클래스 합성) + `tailwind-merge`(같은 속성을 다루는 Tailwind 클래스끼리 충돌 시 뒤에 오는 값이 이기도록 정리)의 조합. 컴포넌트를 감싸 쓸 때 `className` prop으로 넘어온 값이 컴포넌트 내부 기본 클래스를 안전하게 덮어쓰게 해준다.
- **`@theme inline`** — Tailwind v4의 CSS-first 설정 문법. 시맨틱 토큰(`--primary` 등)을 `@theme inline` 블록에서 `--color-primary: var(--primary)`처럼 한 번 더 감싸 노출해야 `bg-primary` 같은 유틸리티 클래스가 생긴다. `inline`이 붙어야 Tailwind가 값을 빌드 시점에 굳히지 않고 `var()` 참조로 남겨두므로, `.dark`가 같은 이름을 재정의하는 것만으로 런타임 다크모드 전환이 된다.

## 참고 소스

- [ui.shadcn.com — Theming](https://ui.shadcn.com/docs/theming) — 색상 토큰 전체 목록, `:root`/`.dark` 기본값, radius 스케일의 1차 소스.
- [ui.shadcn.com — Dark Mode](https://ui.shadcn.com/docs/dark-mode) — `.dark` 클래스 전략 개요.
- [github.com/shadcn-ui/ui](https://github.com/shadcn-ui/ui) — 컴포넌트 원본 소스(cva 정의 확인용).
