# 엘리베이션 — 이 프로젝트가 채운 값

> 규칙: [`../고정/elevation.md`](../고정/elevation.md) · 실제 코드: [`../../src/index.css`](../../src/index.css), [`../../src/components/ui/card.tsx`](../../src/components/ui/card.tsx), [`../../src/components/ui/dialog.tsx`](../../src/components/ui/dialog.tsx)

## 4단계로 확장 (고정/elevation.md 2번의 "최소 단계"에서 시작해 늘린 경우)

`base(0) → raised(1) → overlay(2) → modal(3)` — [`colors.md`](./colors.md) §6의 표면(surface) 스케일과 레벨 번호를 그대로 공유한다. 단계마다 대응 컴포넌트를 고정해 오남용을 막았다(고정/elevation.md 2번).

```css
--elevation-0: none;
--elevation-1: 0 1px 2px oklch(0.145 0 0 / 6%), 0 1px 1px oklch(0.145 0 0 / 4%);
--elevation-2: 0 4px 12px oklch(0.145 0 0 / 10%), 0 2px 4px oklch(0.145 0 0 / 6%);
--elevation-3: 0 16px 40px oklch(0.145 0 0 / 18%), 0 4px 10px oklch(0.145 0 0 / 10%);
```

| 레벨 | 토큰 | 대응 컴포넌트 | 표면(surface) 짝 |
| --- | --- | --- | --- |
| 0 | `--elevation-0` | 페이지 배경 | `--surface-base` |
| 1 | `--elevation-1` | Card | `--surface-raised` |
| 2 | `--elevation-2` | Popover/드롭다운(현재 화면엔 트리거 없음, 토큰만 준비) | `--surface-overlay` |
| 3 | `--elevation-3` | Dialog | `--surface-modal` |

라이트 모드는 1·2단계까지는 표면색(흰 카드)만으로 층이 구분되지만, 표면색이 흰색 천장(`--color-neutral-0`)에 닿는 2~3단계부터는 그림자가 층 구분을 이어받는다(고정/elevation.md 1번 "표면색"과 "그림자" 병행).

## 다크 모드 — 불투명도 대신 무엇으로 보완했나

고정/elevation.md 3번대로, 그림자 불투명도를 단순히 올리는 것 외에 두 가지를 함께 썼다.

1. **표면색 자체가 이미 층마다 다르다** — `--surface-raised`(다크: `neutral-800`)가 `--surface-base`(다크: `neutral-900`)보다 밝아, 그림자가 옅어도 카드 경계가 표면색만으로 어느 정도 보인다.
2. **그림자는 더 검게, 더 크게** — 라이트에서 `oklch(0.145 0 0 / …)`(짙은 회색 반투명)를 쓰던 것을 다크에서는 `oklch(0 0 0 / …)`(순검정)로 바꾸고 불투명도도 6~18%에서 40~55%로 크게 올렸다.

```css
.dark {
  --elevation-1: 0 1px 2px oklch(0 0 0 / 40%);
  --elevation-2: 0 4px 12px oklch(0 0 0 / 45%), 0 2px 4px oklch(0 0 0 / 30%);
  --elevation-3: 0 16px 40px oklch(0 0 0 / 55%), 0 4px 10px oklch(0 0 0 / 35%);
}
```

## 딤드(Dim)

`DialogOverlay`가 유일한 딤드 사용처다 — `bg-black/70`으로 통일했고(고정/elevation.md 4번), 라이트/다크 모드에서 값을 다르게 쓰지 않는다.
