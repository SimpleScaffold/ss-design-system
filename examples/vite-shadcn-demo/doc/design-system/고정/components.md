# 컴포넌트 계약 — 고정 규칙

> 출처: [`framework/specs/components/component-contract.md`](../../../../framework/specs/components/component-contract.md). 컴포넌트 자체의 마크업/구조가 아니라 **컴포넌트가 어떤 토큰을 쓰는지의 계약**만 다룬다.

1. **모든 컴포넌트는 Variant × Size × State → Token으로 정의한다.** Variant(Primary/Secondary/Danger 등) × Size(sm/md/lg) × State(Default/Hover/Pressed/Disabled/Loading)의 조합마다 어떤 토큰을 쓰는지 표로 고정한다.
2. **반복되는 State 패턴은 한 번만 적는다.** Variant마다 State 규칙이 같은 패턴을 반복하면 "공통 패턴 + 팔레트만 교체"로 표현하고, 표 전체를 새로 쓰지 않는다.
3. **State 목록은 공통이다.** Default·Hover(터치 전용 기기는 생략 가능)·Pressed(팔레트 인접 레벨로만 이동)·Disabled(`--muted`/`--muted-foreground`로 대체)·Focus-visible(색상만이 아니라 outline/ring 같은 비색상 단서 필수)·Loading(크기 유지, 텍스트 유지 또는 스피너로 교체).
4. **색상은 기존 팔레트/레벨만 참조한다.** 컴포넌트 계약에서 새 hex 값을 만들지 않는다. Radius/Spacing/Typography도 전용 토큰부터 참조하고, 없으면 이 계약을 계기로 `tokens/`에 먼저 추가한다.
5. **접근성 필수 축(Disabled, Focus-visible)을 빠뜨리지 않는다.** [`validation.md`](./validation.md)로 확인한다.
