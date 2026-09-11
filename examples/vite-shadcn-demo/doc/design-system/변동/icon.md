# 아이콘 — 이 프로젝트가 채운 값

> 규칙: [`../고정/icon.md`](../고정/icon.md) · 실제 코드: [`../../src/App.tsx`](../../src/App.tsx) · 참고 사이트: [`references/tools/design-sites/`](../../../../../references/tools/design-sites/README.md)

## 라이브러리

**lucide-react** 하나만 쓴다. `components.json`의 `iconLibrary: "lucide"`와 일치하고, shadcn CLI가 생성하는 Button/Dialog 등 내장 컴포넌트(`XIcon` 등)도 이미 lucide를 쓰고 있어 라이브러리를 늘리지 않았다(고정/icon.md 1번).

## 크기 단계 — 2단계만

별도 `--icon-size-*` 커스텀 프로퍼티를 새로 두지 않고, Tailwind의 `size-*` 유틸리티 중 두 단계만 골라 썼다.

| 단계 | 클래스 | 실제 px | 쓰인 곳 |
| --- | --- | --- | --- |
| sm | `size-4` | 16px | 다크모드 토글의 Sun/Moon, 통계 카드 아이콘(FileText/Blocks/Palette) |
| md | `size-5` | 20px | (예비 — 현재 화면엔 강조가 더 필요한 아이콘이 없어 미사용) |

Button/Dialog가 자체적으로 쓰는 아이콘(`XIcon` 닫기 버튼 등)은 컴포넌트 내부 기본 크기(`size-4`, 버튼 사이즈에 따라 `size-3`/`size-3.5`)를 그대로 따른다 — 페이지 레벨에서 별도로 지정하지 않았다.
