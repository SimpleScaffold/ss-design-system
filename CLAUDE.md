# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

Preparation repo for a FEConf talk, "AI 에이전트와 디자인 시스템" ("AI Agents and Design Systems"). It is a **Markdown content repository, not a software project** — there is no package.json, build step, linter, or test suite. "Development" here means writing/editing Markdown spec, adapter, and talk-content files, and researching real design-system sources to fill them in accurately.

Everything in the repo works toward one goal: take the design-sense-as-rules content in `talk/script.md`, generalize it into a design-system-agnostic spec (`framework/specs/`), and show it mapped onto real systems (`framework/adapters/`) as the talk's supporting material.

## Repo structure and how the pieces relate

```
talk/               발표 준비물: outline.md → script.md (슬라이드 1~33, 원본 콘텐츠) → slides/, demo/
framework/           핵심 산출물 — 범용 프레임워크
├── specs/tokens/     시스템 무관 공통 스펙 (colors, typography, radius, layout, spacing, icon, elevation)
├── specs/patterns/   시스템 무관 공통 패턴 (media 등)
├── adapters/         시스템별로 specs/를 실제 값에 매핑 (krds, material, ant-design, _template)
├── skills/           범용 AI 워크플로 스킬 (plan/transform/improve) — 미착수
├── scripts/          검증·스코어링 하네스 — 미착수
└── resources/        체크리스트/manifest — 미착수
references/          원자료: design-systems/*(시스템별 조사), ai-agent-workflows/, conference-talks/, articles/, tools/
design-examples/     시스템별 UI 스크린샷·목업 (발표 시각자료 원본)
prompts/             framework/research/demo 용 프롬프트 모음
tools/               실제 유틸리티 (image-gen, screenshot, misc) — references/tools(외부 도구 조사)와 다름
examples/            framework 적용 전/후 비교용 샘플 프로젝트
```

**Key dependency chain**: `talk/script.md` (original design-sense-as-rules content) → `framework/specs/tokens/*.md` (generalized, system-agnostic version of that content, each file citing which script.md slides it came from) → `framework/adapters/<system>/*.md` (that spec mapped onto one real design system's actual, source-verified values).

## Working on `framework/specs/`

Each spec file documents one system-agnostic rule area (e.g. `colors.md` covers the 60/30/10 area ratio, primary-color selection, palette generation via HSL lightness steps, WCAG AA contrast, state-color stepping, background layers, semantic tokenization, high-contrast/dark mode). Specs should stay implementation-agnostic — no system-specific values belong here, only the rule and its rationale (cite the source, e.g. `talk/script.md` slide numbers, when adding new rules).

`components/` and `validation/` spec categories are planned but **do not exist yet** — don't assume the directories are there.

## Working on `framework/adapters/`

Each adapter (`krds/`, `material/`, `ant-design/`) maps every applicable common spec file to that system's real values. `_template/` is the starting point for a new adapter — copy it, don't write one from scratch.

Hard rule for adapter content: **map values from the system's official source (docs, source code, or token JSON) — never from memory or guesswork.** `krds/colors.md` and `ant-design/radius.md` are the reference examples for how a mapping doc should cite its source, present the real values, and compare them against the common spec. If a system has no equivalent for a spec concept (e.g. Material has no layout tokens), say "없음" (none) explicitly and explain why, rather than forcing a mapping.

Each adapter mapping doc follows this structure (see `framework/adapters/_template/README.md`):
1. Link to the common spec + the official source used
2. How this system's rule relates to the common spec (same / different / why)
3. Actual values (table or code block, source-verified only)
4. This system's unique concepts not covered by the common spec
5. A tokenization example applying real values to the common spec's format

Since `components`/`validation` specs don't exist yet, adapters currently only cover: colors, typography, radius, layout (+ spacing), icon (+ elevation for krds).

## Content conventions

- Repo content is primarily in Korean (talk content, most READMEs); code/token examples and file paths stay in English. Match the existing language of whatever file you're editing.
- Every directory has a short `README.md` explaining its purpose — read the local README before adding files to a directory so new content matches its stated scope.
- `talk/slides/` is a placeholder: actual slides live in Google Slides (see `talk/outline.md` for the link), not committed to the repo.
- Track overall progress in `TODO.md` (root) — check it for current priorities before starting open-ended work, and update it when you complete a listed item.
