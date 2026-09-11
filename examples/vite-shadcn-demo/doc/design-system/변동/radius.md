# Radius — 이 프로젝트가 채운 값

> 규칙: [`../고정/radius.md`](../고정/radius.md) · 실제 코드: [`../../src/index.css`](../../src/index.css)

```
--radius: 0.625rem;   /* 10px — shadcn init 기본값을 그대로 채택 */
```

`--radius-sm/md/lg/xl/2xl/3xl/4xl`은 모두 이 값의 배수로 shadcn CLI가 자동 생성했다 — 고정/radius.md 2번 규칙(배수 관계 유지)과 그대로 맞아떨어져 손대지 않았다.

| 토큰 | 배수 | 실제 값(rem 루트 62.5% 기준 px) |
| --- | --- | --- |
| `--radius-sm` | ×0.6 | 0.375rem = 6px |
| `--radius-md` | ×0.8 | 0.5rem = 8px |
| `--radius-lg` | ×1.0 | 0.625rem = 10px |
| `--radius-xl` | ×1.4 | 0.875rem = 14px |
| `--radius-2xl` | ×1.8 | 1.125rem = 18px |
| `--radius-3xl` | ×2.2 | 1.375rem = 22px |
| `--radius-4xl` | ×2.6 | 1.625rem = 26px |

이 데모는 "각지거나 아주 살짝 둥근" 인상을 노린 것이 아니라 중립적인 기본값을 보여주는 것이 목적이라, 브랜드별로 값을 바꾼 `prompts/demo/*.md`와 달리 기본값을 유지했다. 실제 쓰인 곳: Button은 `rounded-lg`(`--radius-lg`), Card/Dialog는 `rounded-xl`(`--radius-xl`), Badge만 `rounded-4xl`(완전한 pill 형태 — shadcn 자체 기본값, 단일 radius 원칙과 별개로 "배지는 알약형"이라는 컴포넌트 고유 관례로 취급).
