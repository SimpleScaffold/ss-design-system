# vite-shadcn-demo

`framework/specs/` **전체**(토큰 7종 + 패턴·컴포넌트·검증 스펙, 10개 파일)와 `prompts/framework/color-tokens.md` 계약을 실제로 동작하는 Vite + React + Tailwind v4 + shadcn/ui 프로젝트에 적용한 예제. 저장소 나머지 부분과 달리 이 폴더만 **실제로 빌드/실행되는 코드**다.

## 실행

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # dist/ 로 빌드
```

## 무엇을 보여주나

- **색 — 6팔레트**: neutral(12단계, shadcn 기본값) + primary·destructive·success·warning·info(8단계: `05·10·20·30·50·60·70·100`). 전부 primitive → semantic 2단계, 컴포넌트는 semantic만 참조. `-foreground`(흰/검정)는 팔레트를 만드는 시점에 대비 4.5:1 이상으로 미리 확정해뒀다.
- **Hover/Pressed는 팔레트 단계 증가형**: 기본 50 → Hover 60 → Pressed 70(다크는 반대 방향 30→20→10). 컴포넌트는 여전히 `color-mix(in oklch, var(--primary) N%, var(--foreground))`만 쓰고, `N%`은 결과가 실제 단계 값과 같아지도록 역산했다.
- **상태색 소비 패턴**: Badge의 Destructive/Success/Warning/Info는 opacity 근사(`bg-destructive/10`) 대신 surface(05)/border(10)/text(60) 팔레트 단계를 그대로 쓴다.
- **표면(Surface) 깊이 -1~+3**: 배경/카드/팝오버/다이얼로그/사이드바가 전부 이 스케일을 가리킨다. 흰/어두운 천장 위(2~3단계)는 `--elevation-*` 그림자가 이어받는다.
- **타이포그래피**: `html { font-size: 62.5% }`(spec 원문 그대로 rem 루트 10px), Heading-1/2·Body-1/2·Caption 5단계. Tailwind 기본 spacing·font-size 스케일은 1.6배로 보정해 실제 px가 바뀌지 않게 했다. 한글 미지원 기본 폰트(Geist)는 Pretendard로 교체.
- **간격**: 8px 그리드 + Depth 기반 반응형 간격(H1→본문 64/80px, 섹션 간 40/64px …).
- **레이아웃**: 1120px 최대 너비, 24px 거터, 반응형 컬럼 Desktop 16 · Tablet 12 · Mobile 6(실제 그리드 데모 포함).
- **아이콘**: lucide-react 하나만, 크기 2단계.
- **엘리베이션**: 그림자 4단계(base/raised/overlay/modal), Dialog에 딤드(`black/70%`) 적용.
- **미디어 패턴**: `line-clamp-3` 실제 적용, 가로 100% SVG 일러스트, Dialog 너비 최대 85% + 내부 스크롤.
- **컴포넌트 갤러리**: Button 5 variant, Badge 8 variant를 실제로 나열.
- **다크모드**: `localStorage` 저장 + `prefers-color-scheme` 초기값 감지(`src/hooks/use-theme.ts`).

무엇이 저장소 공통 규칙(고정)이고 무엇이 이 프로젝트가 채운 값(변동)인지는 **[`doc/design-system/`](./doc/design-system/)**에 10쌍으로 나눠 정리했다.

## 저장소와의 관계

이 프로젝트는 어댑터(`framework/adapters/<system>/`)가 공통 스펙을 실제 값으로 채우는 것과 같은 일을, 코드가 실제로 동작하는 형태로 한 번 더 보여주는 것이 목적이다 — `framework/specs/`나 `prompts/`를 이 프로젝트만의 사정으로 고치지 않는다.
