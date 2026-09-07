# image-gen

목업·슬라이드·배경용 **이미지·텍스처·이펙트**를 만드는 외부 도구.
이 저장소에서 직접 돌리는 생성 스크립트는 [`tools/image-gen/`](../../../tools/image-gen/)에 둔다.

GitHub 스타(대략 2026-09)와 용도를 같이 보고 고름. 로컬 diffusion UI 중 별이 가장 많은 것은 AUTOMATIC1111 WebUI(~160k)지만, 최근 업데이트가 느려 **복잡한 쪽 대표는 ComfyUI**로 둠.

| 도구 | 스타 | 언제 쓰는지 |
| --- | --- | --- |
| [Fooocus](#fooocus) | ~50k | 프롬프트만으로 심플하게 시안 뽑기 |
| [ComfyUI](#comfyui) | ~130k | 워크플로·모델 조합이 복잡한 생성 |
| [Satori](#satori) | ~14k | HTML/CSS(토큰)로 OG·카드 이미지 |
| [html-to-image](#html-to-image) | ~7k | 이미 있는 DOM을 PNG/SVG로 캡처 |

## Fooocus

- 사이트·Repo: [lllyasviel/Fooocus](https://github.com/lllyasviel/Fooocus)
- **용도: 심플하게 쓰기 좋음.** Midjourney처럼 프롬프트 중심으로, 샘플링 세부는 숨긴 로컬 생성기. 슬라이드용 목업을 빨리 뽑을 때.
- 특징: ControlNet 저자(lllyasviel). SDXL 최적화. GPU 필요. 현재는 LTS(버그픽스 위주)에 가깝다는 평가가 있음.
- 라이선스: GPL-3.0

## ComfyUI

- 사이트: [docs.comfy.org](https://docs.comfy.org/) · Repo: [Comfy-Org/ComfyUI](https://github.com/Comfy-Org/ComfyUI)
- **용도: 조금 더 다양화·복잡한 파이프라인.** 노드 그래프로 체크포인트·LoRA·ControlNet·Flux 등을 이어서 재현 가능한 워크플로로 저장.
- 특징: 새 모델 지원이 가장 빠름. Desktop 앱·App Mode로 완성 워크플로를 GUI로 공유 가능. GPU 필요.
- 라이선스: GPL-3.0

## Satori

- 사이트: [og-playground.vercel.app](https://og-playground.vercel.app) · Repo: [vercel/satori](https://github.com/vercel/satori)
- **용도: 디자인 토큰을 코드로 넣어 이미지 생성.** JSX/HTML+CSS → SVG. Open Graph·슬라이드 카드처럼 “화면이 아니라 스펙으로 그린 이미지”가 필요할 때.
- 특징: Vercel `@vercel/og`의 엔진. CSS 서브셋만 지원. PNG가 필요하면 resvg 등과 조합.
- 라이선스: MPL-2.0

## html-to-image

- Repo: [bubkoo/html-to-image](https://github.com/bubkoo/html-to-image)
- **용도: 에이전트가 만든 UI를 그대로 캡처.** DOM 노드 → PNG / JPEG / SVG / Blob. Before/After 비교 이미지, 발표 자료 캡처.
- 특징: 브라우저에서 canvas+SVG로 렌더. 서버 사이드가 아님.
- 라이선스: MIT

## 관련 (React Bits 웹 도구)

GitHub 스타 기준 4개에는 넣지 않음. 노이즈·애니메이션 배경은 여기서.

- [Texture Lab](https://reactbits.dev/tools) — 노이즈, 디더링, ASCII
- [Background Studio](https://reactbits.dev/tools) — 애니메이션 배경 커스터마이즈·내보내기
- 컴포넌트 킷: [`../ui-kits/`](../ui-kits/)
