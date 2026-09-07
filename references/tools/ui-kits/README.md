# ui-kits

실제 컴포넌트 소스를 가져다 쓰는 킷. (차트·도형 생성기와 구분)

GitHub 스타(대략 2026-09)와 “복사해서 쓰는가”를 기준으로 4개. Aceternity UI는 모션 블록으로 유명하지만 유료 비중이 커서 제외.

| 도구 | 스타 | 언제 쓰는지 |
| --- | --- | --- |
| [shadcn/ui](#shadcnui) | ~123k | 접근성 있는 기본 컴포넌트를 복사해 쓰기 |
| [React Bits](#react-bits) | ~46k | 텍스트·배경 애니메이션이 필요할 때 |
| [daisyUI](#daisyui) | ~42k | Tailwind 클래스만으로 빠르게 |
| [Magic UI](#magic-ui) | ~22k | shadcn 위에 모션·랜딩 이펙트 |

## shadcn/ui

- 사이트: [ui.shadcn.com](https://ui.shadcn.com) · Repo: [shadcn-ui/ui](https://github.com/shadcn-ui/ui)
- **용도: 심플하게 쓰기 좋음 (기본 UI).** npm 패키지가 아니라 코드를 프로젝트에 복사. 토큰(CSS 변수)과 잘 맞음. 이 저장소 어댑터·데모 HTML을 컴포넌트 단위로 옮길 때 출발점.
- 설치: `npx shadcn@latest add button` 등 CLI.
- 라이선스: MIT

## React Bits

- 사이트: [reactbits.dev](https://reactbits.dev/get-started/introduction) · Repo: [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits)
- **용도: 실제 컴포넌트 소스 코드가 필요한 경우 여기서 가져다 쓴다.** (텍스트 애니메이션, 배경, UI 컴포넌트 등 165개 이상)
- 특징: 컴포넌트당 **4개 변형**(JS-CSS / JS-TW / TS-CSS / TS-TW). 의존성이 가볍고 tree-shakeable.
- 설치 방법:
  ```bash
  npx shadcn@latest add @react-bits/BlurText-TS-TW
  ```
  또는 jsrepo CLI. 문서 페이지에서 코드만 복사해도 됨.
- 같은 사이트의 생성 도구: [`../image-gen/`](../image-gen/) (Background Studio, Texture Lab), [`../shapes/`](../shapes/) (Shape Magic)
- 라이선스: MIT + Commons Clause (개인/상업적 사용 무료)
- 다른 프레임워크 포트: [Vue Bits](https://vue-bits.dev/), [Svelte Bits](https://sveltebits.xyz/)
- 관련: [`Leonxlnx/taste-skill`](https://github.com/Leonxlnx/taste-skill)의 실버 스폰서로도 언급됨 (`references/ai-agent-workflows/README.md` 참고)

## daisyUI

- 사이트: [daisyui.com](https://daisyui.com) · Repo: [saadeghi/daisyui](https://github.com/saadeghi/daisyui)
- **용도: Tailwind만 쓰는 페이지를 빠르게.** `btn`, `card` 같은 시맨틱 클래스로 테마(라이트/다크 등)를 통째로 바꿈. shadcn처럼 파일 복사가 아니라 플러그인.
- 라이선스: MIT

## Magic UI

- 사이트: [magicui.design](https://magicui.design) · Repo: [magicuidesign/magicui](https://github.com/magicuidesign/magicui)
- **용도: shadcn 위에 모션을 더할 때.** marquee, bento, shimmer 등 랜딩·데모용 이펙트. React + Tailwind + Motion. shadcn CLI로 개별 추가.
- 라이선스: MIT (Pro 티어는 별도, 오픈소스 코어만 여기 기준)
