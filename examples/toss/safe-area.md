# Safe Area

> 출처: [`developers-apps-in-toss.toss.im/documentation/common/screen/safe-area.md`](https://developers-apps-in-toss.toss.im/documentation/common/screen/safe-area.md)

모바일 브라우저에서는 상태바·홈 인디케이터 같은 시스템 UI 때문에 콘텐츠가 가려질 수 있다. 앱인토스 SDK는 화면의 안전 영역(Safe Area) 여백 값을 픽셀 단위로 계산하는 함수를 제공한다 — 특히 iPhone X 이상, 일부 Android 기기에서 전체 화면을 쓰는 웹 앱일수록 중요하다.

## `SafeAreaInsets` (권장)

- `SafeAreaInsets.get()` — 현재 화면 모드의 safe area 값을 가져온다.
- `SafeAreaInsets.subscribe()` — 화면 모드가 바뀔 때마다 값 변화를 구독한다.

```tsx
import { SafeAreaInsets } from '@apps-in-toss/web-framework';
import { useEffect, useState } from 'react';

function Page() {
  const [insets, setInsets] = useState(() => SafeAreaInsets.get());
  // 네비게이션 바 상단 여백: insets.top
  // 네비게이션 바 우측 여백: insets.right + 10

  useEffect(() => {
    const cleanup = SafeAreaInsets.subscribe({ onEvent: setInsets });
    return () => cleanup();
  }, []);
}
```

> 게임 내 X 버튼은 프레임워크가 기본 제공하며 화면 오른쪽 상단에 고정된다. 좌표: X축 `insets.right + 10`, Y축 `insets.top + 5`(iOS) / `insets.top + 10`(Android). 게임 내 버튼이 이 X 버튼과 겹치면 검수에서 반려될 수 있다.

## `getSafeAreaInsets` (deprecated, SDK 1.4.6까지만)

```ts
import { getSafeAreaInsets } from '@apps-in-toss/web-framework';
const insets = getSafeAreaInsets();
// { top: 44, bottom: 34 }
```

`top`(상단 상태바 회피 여백), `bottom`(하단 홈 인디케이터 회피 여백)을 반환한다. 하단 고정 버튼 padding, 상단 헤더 padding에 흔히 쓰인다.

## `useSafeAreaInsets` (React Native)

```tsx
import { useSafeAreaInsets } from '@granite-js/native/react-native-safe-area-context';
const { top: safeAreaTop, right: safeAreaRight } = useSafeAreaInsets();
```

## 공통 스펙과의 관계

`framework/specs/tokens/layout.md`의 "반응형 기준 해상도" 규칙이 웹 반응형 그리드를 다룬다면, Safe Area는 **네이티브 프레임워크 크롬(내비게이션 바, 시스템 UI)과 겹치지 않게 웹뷰 콘텐츠 여백을 맞추는 문제**라 별개의 축이다. 앱인토스처럼 호스트 앱이 자체 크롬을 그리는 플랫폼에 올릴 때는 이 여백 계산이 그리드/브레이크포인트보다 먼저 챙겨야 할 제약이다.
