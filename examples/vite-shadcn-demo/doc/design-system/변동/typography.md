# 타이포그래피 — 이 프로젝트가 채운 값

> 규칙: [`../고정/typography.md`](../고정/typography.md) · 실제 코드: [`../../index.html`](../../index.html), [`../../src/index.css`](../../src/index.css), [`../../src/App.tsx`](../../src/App.tsx)

## 1. 폰트

shadcn init이 기본으로 넣어준 Geist Variable은 라틴 문자 전용이라 한글 글리프가 없다 — 고정/typography.md 1번을 어긴다. `@fontsource-variable/geist`를 빼고 **Pretendard Variable**(CDN)로 교체했다.

```html
<!-- index.html -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.css" />
```

```css
/* src/index.css @theme inline */
--font-sans: "Pretendard Variable", Pretendard, -apple-system, "Malgun Gothic", system-ui, sans-serif;
```

## 2. rem 루트 62.5% — spec 원문 그대로 채택

고정/typography.md 4번대로 루트를 10px로 재설정했다.

```css
html { font-size: 62.5%; }
```

5단계 타이포 값은 `typography.md §토큰화`·`examples/tokens/tokens.css`와 **숫자까지 동일**하다(이전에 16px 루트 기준으로 재환산했던 값은 되돌렸다):

| 티어 | 클래스 | rem(10px 루트) | 실제 px | weight | line-height |
| --- | --- | --- | --- | --- | --- |
| Heading 1 | `text-heading-1` | 2.8rem | 28px | 700(직접 지정) | 1.4 |
| Heading 2 | `text-heading-2` | 2.2rem | 22px | 700(직접 지정) | 1.4 |
| Body 1 | `text-body-1` | 1.6rem | 16px | 400 | 1.6 |
| Body 2 | `text-body-2` | 1.4rem | 14px | 400 | 1.6 |
| Caption | `text-caption` | 1.2rem | 12px | 400 | 1.4 |

## 3. 62.5% 리베이스가 깨뜨리는 것 — Tailwind 기본 스케일 보정

Tailwind v4 기본 테마의 `--spacing`과 `--text-xs…9xl` 스케일은 전부 **16px 루트를 전제한 rem 값**이다. 루트를 10px로 바꾸면:

- `--spacing: 0.25rem`(16px 루트에서 4px) → 루트가 10px가 되면 실제 2.5px로 줄어 [`spacing.md`](./spacing.md)의 8px 그리드가 전부 62.5%로 쪼그라든다.
- `--text-sm`(0.875rem, 16px 루트에서 14px) → 10px 루트에서 8.75px. shadcn이 생성한 Button/Badge/Card 등 내장 컴포넌트가 전부 이 스케일을 쓴다.

이 프로젝트는 두 스케일을 **1.6배(=16/10)** 로 재정의해 루트 변경 이전과 같은 실제 px가 나오도록 보정했다(`src/index.css` `@theme inline`):

| 토큰 | 보정 전(16px 루트 가정) | 보정 후(10px 루트) | 실제 px |
| --- | --- | --- | --- |
| `--spacing` | 0.25rem | **0.4rem** | 4px |
| `--text-xs` | 0.75rem | **1.2rem** | 12px |
| `--text-sm` | 0.875rem | **1.4rem** | 14px |
| `--text-base` | 1rem | **1.6rem** | 16px |
| `--text-lg` | 1.125rem | **1.8rem** | 18px |
| `--text-xl` | 1.25rem | **2rem** | 20px |
| `--text-2xl` | 1.5rem | **2.4rem** | 24px |
| `--text-3xl` | 1.875rem | **3rem** | 30px |
| `--text-4xl` | 2.25rem | **3.6rem** | 36px |

각 항목의 `--text-*--line-height`도 같은 비율로 맞췄다(코드 참고). 이 보정 덕분에 `spacing.md`의 8px 그리드와 shadcn 내장 컴포넌트의 글자 크기가 루트 변경 전후로 시각적으로 동일하다 — spec의 "Figma px = rem 숫자" 편의성과 Tailwind 기본 유틸리티의 실제 크기를 동시에 만족시키기 위한 절충이다.

## 4. 5단계 티어가 실제로 쓰인 곳

| 티어 | 쓰인 곳 |
| --- | --- |
| Heading 1 | 페이지 제목(`<h1>`) |
| Heading 2 | 통계 카드 숫자, 섹션 제목(`<h2>`), 카드 제목(`<CardTitle>`) |
| Body 1 | 헤더 리드 문단 |
| Body 2 | 카드 설명(`<CardDescription>`), 다이얼로그 본문, 컴포넌트 갤러리 소제목 |
| Caption | 통계 카드 하단 설명, 버튼 옆 보조 설명, 푸터 |
