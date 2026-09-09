# shadcn Radius 토큰 매핑

> 공통 스펙: [`framework/specs/tokens/radius.md`](../../specs/tokens/radius.md)
> 소스: [ui.shadcn.com — Theming](https://ui.shadcn.com/docs/theming)

## 공통 스펙과의 관계

공통 스펙의 "처음에는 하나의 값을 통일해서 쓴다"를 shadcn은 **기준값 하나(`--radius`) + `calc()`로 파생한 스케일**로 구현한다. 실제로 관리하는 숫자는 하나뿐이고, 나머지는 전부 그 값의 배수다 — "값 하나를 정하고 나머지는 거기서 파생시킨다"는 점에서 공통 스펙의 취지와 동일하다.

## 실제 값

```css
:root {
  --radius: 0.625rem;
}

@theme inline {
  --radius-sm: calc(var(--radius) * 0.6);
  --radius-md: calc(var(--radius) * 0.8);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) * 1.4);
  --radius-2xl: calc(var(--radius) * 1.8);
  --radius-3xl: calc(var(--radius) * 2.2);
  --radius-4xl: calc(var(--radius) * 2.6);
}
```

기준값(`0.625rem` = 10px)이 스케일의 중간(`lg`)에 오고, `sm`/`md`는 그보다 작게, `xl` 이상은 그보다 크게 비율로 벌어지는 구조다. 배수는 전부 `--radius` 하나에 걸려 있으므로, 프로젝트가 기준값만 바꾸면 7단계 스케일 전체가 비율을 유지한 채 같이 움직인다.

## 공통 스펙에 없는 shadcn 고유 항목

- **곱셈 기반 파생** — 값을 더하는 방식(`+2px`, `+4px`처럼 고정 폭을 얹는 방식)이 아니라 기준값에 비율을 곱하는 방식이다. 기준값이 커지면 스케일 전체의 간격도 비례해서 벌어진다(고정폭 방식은 기준값이 커져도 단계 간 간격이 그대로다). 실무에서는 이 공식 비율 대신 `+px` 방식으로 바꿔 쓰는 경우도 있다 — 관찰 사례는 [`examples/shadcn-case/token-architecture.md`](../../../examples/shadcn-case/token-architecture.md) 참고.
- **`lg`가 기준값 그 자체** — `--radius-lg: var(--radius)`. 별도 계산 없이 기준값을 그대로 재노출한 것으로, "기본값"의 의미를 `lg` 단계가 맡는다.

## 토큰화 예시

```css
/* 기준값만 프로젝트에 맞게 바꾼다 */
:root {
  --radius: 0.5rem;
}
```

이 한 줄만 바꾸면 `rounded-sm`부터 `rounded-4xl`까지 전체 스케일이 새 기준값에 맞춰 다시 계산된다. 컴포넌트 코드에서 `rounded-*` 클래스 이름은 그대로 유지된다.
