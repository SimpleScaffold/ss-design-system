# toss

Apps in Toss(앱인토스 — 토스 플랫폼 위에서 도는 미니앱) 공식 개발자 문서에서 디자인 관련 내용만 정리한 것. [`developers-apps-in-toss.toss.im`](https://developers-apps-in-toss.toss.im/design.md)의 공개 문서 텍스트를 출처를 밝혀 옮겨온 자료다.

## 왜 여기 있나

`framework/specs/`의 공통 규칙(색상/타이포/레이아웃 등)이 실제 대형 플랫폼에서는 "컴포넌트 라이브러리 + 브랜딩 가이드 + 플랫폼 제약(내비게이션 바·Safe Area)"의 조합으로 강제된다는 걸 보여주는 사례. `framework/adapters/`가 KRDS·Material·Ant Design처럼 토큰 값을 매핑하는 어댑터라면, 이건 "플랫폼이 디자인 자유도를 어디까지 규칙으로 강제하는가"를 보여주는 참고 자료에 가깝다.

## 가져오지 않은 것

- **Figma/TDS Mobile UI Kit 원본 파일** — [라이선스](https://developers-apps-in-toss.toss.im/design/prepare/figma-ui-license.md)가 "다른 프로젝트에 사용 금지·복제/재배포 금지"를 명시하고 있어 에셋·컴포넌트 파일 자체는 가져오지 않았다. 라이선스 조건 요약은 [`tools.md`](./tools.md) 참고.
- 아이콘/이모지 세트, 3D 그래픽 에셋, 스마트폰 목업 파일 등 저작물 자체.

아래 문서들은 전부 공개된 가이드 **텍스트**만 정리한 것이며, 실제 값(라이선스 조건, 컴포넌트 이름, API 시그니처)은 원문 링크에서 재확인할 것.

## 파일

| 문서 | 원문 |
| --- | --- |
| [`consumer-ux-guide.md`](./consumer-ux-guide.md) | 브랜딩 가이드 · 다크패턴 금지 · UX 라이팅 · 그래픽 리소스 · 해상도 가이드 |
| [`components.md`](./components.md) | 토스 디자인 시스템(TDS) 핵심 컴포넌트 11종 |
| [`navigation-bar.md`](./navigation-bar.md) | 네비게이션 바 설정 (게임/비게임, 커스터마이징, 액세서리 버튼) |
| [`safe-area.md`](./safe-area.md) | Safe Area API (WebView/React Native) |
| [`tools.md`](./tools.md) | Figma UI Kit · App Builder, 라이선스 조건 |

## 읽는 순서

1. [`consumer-ux-guide.md`](./consumer-ux-guide.md) — 플랫폼이 요구하는 브랜딩·UX 규칙 전반
2. [`components.md`](./components.md) — TDS가 이미 제공하는 컴포넌트
3. [`navigation-bar.md`](./navigation-bar.md), [`safe-area.md`](./safe-area.md) — 프레임워크가 강제하는 화면 영역
4. [`tools.md`](./tools.md) — 실제로 디자인 작업을 시작할 때 쓰는 도구와 라이선스
