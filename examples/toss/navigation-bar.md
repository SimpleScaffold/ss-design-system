# 네비게이션 바 설정

> 출처: [`developers-apps-in-toss.toss.im/documentation/common/navigationbar.md`](https://developers-apps-in-toss.toss.im/documentation/common/navigationbar.md)

화면 상단에 고정되는 공통 UI 컴포넌트. 앱인토스 SDK를 적용하면 별도 구현 없이 자동으로 표시된다.

## 1. 기본 기능

**게임** — 더보기 버튼과 닫기(X) 버튼으로 구성. `granite.config.ts`에서 앱 타입을 `game`으로 설정하면 게임 네비게이션 바가 적용된다.

```typescript
// WebView
export default defineConfig({
  webViewProps: { type: 'game' },
});

// React Native
export default defineConfig({
  plugins: [appsInToss({ appType: 'game' })],
});
```

**비게임** — 흰색 배경이 기본. 좌측에 미니앱 로고+이름, 우측에 더보기 버튼과 X 버튼.

더보기 버튼은 별도 서버 연동 없이 아래 기능을 바로 제공한다: 문의하기/신고하기(콘솔 등록 링크 자동 표시), 공유하기(미니앱 이름+딥링크), 권한 설정 ON/OFF, 홈 화면에 추가하기, 미니앱 용량 삭제, 미니앱 알림 ON/OFF.

## 2. 커스터마이징

`granite.config.ts`의 `navigationBar` 옵션으로 표시 방식을 설정한다.

```typescript
interface NavigationBarOptions {
  withBackButton?: boolean;       // 뒤로가기 버튼 유무
  withHomeButton?: boolean;       // 홈 버튼 유무 (비게임 전용)
  withTitle?: boolean;            // 미니앱 아이콘+이름 표시 여부
  transparentBackground?: boolean; // 배경 투명 여부 — 풀스크린 레이아웃용
  theme?: 'light' | 'dark';       // 배경색에 맞춘 버튼/텍스트 색상
  initialAccessoryButton?: InitialAccessoryButton; // 더보기 왼쪽 액세서리, 최대 1개
}

interface InitialAccessoryButton {
  id: string;
  title?: string;
  icon: { name: string };
}
```

게임앱은 `transparentBackground: true`를 권장. 비게임에서도 몰입도를 높이고 싶으면 `withBackButton/withHomeButton/withTitle`을 모두 `false`로 두고 `transparentBackground: true`만 남길 수 있다.

## 3. 디자인 가이드

상단 네비게이션은 일관된 정보 구조 전달을 위해 **모노톤 아이콘만** 사용한다. 컬러 아이콘은 시각적 주의를 과도하게 분산시키고 불필요한 강조로 혼란을 줄 수 있기 때문 — 특수 케이스를 제외하면 전부 모노톤으로 통일한다.

## 4. 액세서리 아이콘

게임/비게임 모두 더보기 버튼 왼쪽에 아이콘 1개를 추가할 수 있다.

- **WebView**: `partner.addAccessoryButton()`(런타임 추가) + `tdsEvent.addEventListener('navigationAccessoryEvent')`(클릭 이벤트), 또는 `defineConfig`의 `navigationBar.initialAccessoryButton`(초기 노출)
- **React Native**: `useTopNavigation()`의 `addAccessoryButton()`, 또는 `granite.config.ts`의 `initialAccessoryButton`

```tsx
// 초기 설정 예시 (Web)
navigationBar: {
  withBackButton: true,
  withHomeButton: true,
  initialAccessoryButton: {
    id: 'heart',
    title: 'Heart',
    icon: { name: 'icon-heart-mono' },
  },
}
```

```js
// 동적 추가 예시 (Web)
partner.addAccessoryButton({
  id: 'heart',
  title: '하트',
  icon: { name: 'icon-heart-mono' },
});

const cleanup = tdsEvent.addEventListener('navigationAccessoryEvent', {
  onEvent: ({ id }) => {
    if (id === 'heart') console.log('버튼 클릭');
  },
});
```

## 5. 홈 버튼

비게임 미니앱은 왼쪽 상단, 서비스 이름 오른쪽에 홈 버튼을 표시할 수 있다. "서비스 진입점" 역할만 하며 커스텀 문구/기능 추가는 불가. 액세서리 버튼 영역에 중복 추가하지 않는다.

## 참고사항

- 액세서리 버튼은 모노톤 아이콘만 지원, 한 번에 1개만 표시 가능.
- 컬러 아이콘·커스텀 UI 추가는 지원하지 않는다.
- 홈 버튼은 비게임 미니앱에서만 사용 가능.

관련: [`safe-area.md`](./safe-area.md) — X 버튼/네비게이션 바와 콘텐츠가 겹치지 않도록 여백을 계산하는 API.
