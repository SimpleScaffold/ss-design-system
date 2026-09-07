# 디자인 도구

> 출처: [`developers-apps-in-toss.toss.im/design/prepare/design.md`](https://developers-apps-in-toss.toss.im/design/prepare/design.md), [`.../design/prepare/figma-ui-license.md`](https://developers-apps-in-toss.toss.im/design/prepare/figma-ui-license.md)

앱인토스 미니앱 UI를 디자인하는 두 가지 방법: Figma(TDS 컴포넌트 라이브러리 직접 사용) 또는 App Builder(콘솔에서 바로 쓰는 웹 기반 UI 디자인 툴, 별도 설치 불필요).

## Figma

1. `TDS_Mobile_for_Apps_in_Toss_(2602).fig` 파일 다운로드
2. Figma의 Import 버튼으로 가져오기
3. Assets 패널에서 라이브러리로 Publish
4. Assets 탭에서 드래그해 컴포넌트 연결

유의사항: UI Kit의 Semantic Colors가 최신 코드 버전과 다를 수 있음, Figma는 SF Pro 폰트를 쓰지만 실제 토스 앱은 토스 프로덕트 산스를 자동 적용, 자동 업데이트 미지원(새 버전은 수동 재다운로드).

디자인 가이드라인: 모든 화면 상단에 Navigation 컴포넌트 사용, 속성은 우측 패널에서만 조작, 375px 너비 기준 설계, Top+ListRow 조합으로 빠른 레이아웃 구성, 대부분의 TDS 컴포넌트에 padding 내장.

## App Builder

콘솔에서 별도 라이브러리 없이 바로 쓰는 웹 기반 툴. 토스 UI 스타일 가이드에 맞는 화면 제작, 디자인 에셋·컴포넌트 바로 사용, 모바일 프리뷰로 프로토타이핑 가능.

작업 순서: 프로젝트 생성 → 브랜드 스타일 설정(서비스명·기본 버튼 색상) → 페이지 이해 → Quick Start(사전 제작된 플로우 수정) 또는 Custom(자유 제작) 선택 → 텍스트/아이콘/그래픽 에셋 구성 → Stack Layout으로 그룹핑 → 재생 버튼으로 모바일 프리뷰·링크 공유.

기준 화면 크기: iPhone 13 mini(375×812). "현재는 기본 UI 디자인 기능만 제공된다."

## Figma/TDS Mobile UI Kit 라이선스 — 요약

**허용**: 앱인토스용 애플리케이션 개발·디자인 작업·프로토타입 제작.

**금지**: 다른 프로젝트/제품/서비스에 사용, 상업적 활용(판매·제3자 제공), 복사·수정·편집·재가공, 재배포.

지식재산권은 전부 ㈜비바리퍼블리카(Viva Republica)에 귀속되며, 라이선스는 제한적 사용 권한만 부여하고 어떠한 지식재산권도 양도하지 않는다.

> **이 폴더(`examples/toss/`)가 위 라이선스를 지키는 방법**: Figma `.fig` 파일이나 컴포넌트/에셋 자체는 가져오지 않았다. 여기 있는 문서는 전부 공개 개발자 문서(`developers-apps-in-toss.toss.im`)의 가이드 **텍스트**를 출처를 밝혀 옮긴 것으로, UI Kit 자체의 사용·재배포와는 별개다.

전체 원문: [한국어](https://developers-apps-in-toss.toss.im/design/prepare/figma-ui-license.md)
