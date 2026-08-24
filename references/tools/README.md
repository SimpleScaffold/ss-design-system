# tools

관련 오픈소스/도구 조사 (디자인 토큰 변환기, 린터, MCP 서버 등).

## React Bits

- 사이트: [reactbits.dev](https://reactbits.dev/get-started/introduction) · Repo: [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits)
- **용도: 실제 컴포넌트 소스 코드가 필요한 경우 여기서 가져다 쓴다.** (텍스트 애니메이션, 배경, UI 컴포넌트 등 165개 이상)
- 특징: 컴포넌트당 **4개 변형**(JS-CSS / JS-TW / TS-CSS / TS-TW)을 제공해서 스택에 맞게 그대로 복사-붙여넣기 가능. 의존성이 가볍고 tree-shakeable.
- 설치 방법:
  ```bash
  # shadcn CLI로 개별 컴포넌트 추가
  npx shadcn@latest add @react-bits/BlurText-TS-TW
  ```
  또는 jsrepo CLI 사용 가능. 각 컴포넌트 문서 페이지에 복사용 CLI 명령이 포함되어 있음 — 직접 코드만 복사해도 됨.
- 추가 도구: Background Studio(애니메이션 배경 커스터마이즈/내보내기), Shape Magic(둥근 모서리 도형 → SVG/코드), Texture Lab(노이즈/디더링/ASCII 등 이미지·영상 효과) — [reactbits.dev/tools](https://reactbits.dev/tools)
- 라이선스: MIT + Commons Clause (개인/상업적 사용 무료)
- 다른 프레임워크 포트: [Vue Bits](https://vue-bits.dev/), [Svelte Bits](https://sveltebits.xyz/)
- 관련: [`Leonxlnx/taste-skill`](https://github.com/Leonxlnx/taste-skill)의 실버 스폰서로도 언급됨 (`references/ai-agent-workflows/README.md` 참고) — 애니메이션이 필요한 프론트엔드 결과물에서 자주 짝을 이루는 조합.
