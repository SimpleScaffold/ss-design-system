# 사례·아티클 수집 프롬프트

> 용도: `references/ai-agent-workflows/`, `references/conference-talks/`, `references/tools/`처럼 여러 개의 사례/아티클/도구를 리스트 형태로 모으는 문서를 쓸 때 쓰는 프롬프트. 디자인 철학 요약 1건을 깊게 쓰는 `design-system-reference.md`와 달리, 이건 "검증 가능한 항목 여러 개를 큐레이션"하는 작업이다.

## 프롬프트

```
references/<디렉터리>/README.md에 사례/아티클/도구 목록을 정리한다.

절대 규칙:
- 실제 검색으로 확인한, 진짜 존재하는 항목만 넣는다 — 제목·발표자·회사·논문을 지어내지 않는다.
- 항목마다 실제 URL(원문 링크, 녹화 영상, 저장소)을 붙인다. URL을 확인하지 못한 항목은 넣지 않는다.
- 이미 이 저장소 다른 곳(예: framework/adapters/*, references/design-systems/*)에 정리된 내용과 겹치면 새로 요약하지 말고 그 문서로 링크만 걸어라.
- 양보다 질 — 확신 있는 항목 6~15개면 충분하다. 특정 하위 주제에서 근거를 못 찾았으면 "이 주제는 검증 가능한 사례를 찾지 못했다"고 문서 안에 명시하고 억지로 채우지 마라.
- 학술 논문을 인용할 때는 게재 여부(피어리뷰 통과 vs. 프리프린트)를 반드시 구분해서 적어라.

구성:
1. 이 문서가 왜 있는지, 이 저장소의 어떤 주장/작업과 연결되는지 한두 문장.
2. 주제별로 `## 소제목`을 나눠 항목을 그룹핑한다.
3. 항목 형식: **이름/제목** — [원문 링크] · 1~3문장 요약(무엇인지 + 이 저장소와 왜 관련 있는지).
4. 마지막에 "조사하지 못한 부분" 섹션 — 검색했지만 확신을 갖고 넣을 수 없었던 것들을 명시적으로 남긴다 (다음 리서치 때 다시 찾아볼 단서가 된다).

이번에 조사할 주제: [디렉터리명과, 찾아야 할 구체적인 하위 주제·키워드를 여기에 채워 넣는다]
```

## 관련

- 적용 사례: [`references/ai-agent-workflows/README.md`](../../references/ai-agent-workflows/README.md), [`references/conference-talks/README.md`](../../references/conference-talks/README.md)
- 기존 항목(이 프롬프트 이전에 작성됨): [`references/tools/`](../../references/tools/) (인덱스 + `ui-kits/` React Bits 등)
