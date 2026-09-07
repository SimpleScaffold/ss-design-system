# 디자인 시스템 레퍼런스 리서치 프롬프트

> 용도: `references/design-systems/<system>/README.md`(철학·출처 요약, 실제 hex/px 값은 다루지 않음)를 새로 쓰거나 보강할 때 쓰는 프롬프트. `krds/README.md`가 품질 기준이다. `carbon/`, `fluent/`, `material-design/`, `ant-design/`을 이 프롬프트(또는 동등한 절차)로 작성했다.

## 프롬프트

```
references/design-systems/<시스템명>/README.md를 작성한다. 먼저 references/design-systems/krds/README.md를 읽어라 — 이 문서의 깊이와 형식이 기준이다.

절대 규칙: 기억이나 추측으로 값을 채우지 마라. 확인 가능한 공식 소스(공식 사이트, GitHub 리포지토리의 실제 소스 코드/토큰 파일)만 인용한다. 특정 수치·원칙 문구를 원문에서 확인하지 못했다면, 더 일반적인 서술로 바꾸거나 그 항목을 아예 빼라 — 지어내지 마라.

포함할 것:
1. 한 문단 소개 — 무엇이고 누가 만들고 무엇을 위한 것인지.
2. 공식 소스 표 — 사이트 URL과, 실제 토큰 값이 있는 GitHub 경로(패키지/파일 단위까지).
3. 디자인 철학/근거 — 이 시스템만의 특징 (예: 팔레트 생성 방식, 테마 모델, 타이포그래피 배경, 접근성 접근). 검증된 공식 원칙 문구가 있으면 인용하되 출처를 명시해라.
4. (선택) 발표에 인용할 만한 문구 — 원문에서 실제로 확인한 문장만, 따옴표로 인용하고 무엇을 뒷받침하는지 한 줄 설명을 붙여라.
5. `framework/adapters/<시스템명>/`가 이미 있으면 그 문서를 실제 값의 1차 자료로 지목하고 링크한다. 아직 없으면 "이 문서는 철학/출처 포인터 전용이며, 실제 토큰 값이 필요해지면 [GitHub 경로]를 1차 소스로 삼아 어댑터를 새로 만들어야 한다"고 명시한다. 어댑터에 색 토큰을 옮길 때는 `prompts/framework/color-tokens.md` 형식(`:root` / `.dark`, oklch, `--primary`)을 따른다.

분량: krds/README.md와 비슷하게 40~70줄.

이번에 조사할 시스템: [시스템명과, 이미 알고 있는 참고 링크가 있으면 여기에 채워 넣는다]
```

## 관련

- 적용 사례: [`references/design-systems/carbon/README.md`](../../references/design-systems/carbon/README.md), [`fluent/README.md`](../../references/design-systems/fluent/README.md), [`material-design/README.md`](../../references/design-systems/material-design/README.md), [`ant-design/README.md`](../../references/design-systems/ant-design/README.md)
- 품질 기준 원본: [`references/design-systems/krds/README.md`](../../references/design-systems/krds/README.md)
