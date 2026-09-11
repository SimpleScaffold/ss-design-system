# 진단 프롬프트

> 용도: 이미 토큰화된 프로젝트를 `framework/specs/`와 `validation/accessibility-checklist.md` 기준으로 진단할 때 쓰는 메타 프롬프트. `framework/skills/improve.md`의 절차를 그대로 실행시키는 프롬프트 버전이다.

## 프롬프트

```
이 프로젝트의 디자인 시스템(토큰·컴포넌트)을 framework/specs/ 기준으로 진단하려고 한다. framework/skills/improve.md를 먼저 읽고 그 절차를 그대로 따라라.

1. 전체 스캔 — framework/specs/validation/accessibility-checklist.md §2~§6을 순서대로 돌며 위반 항목을 전부 수집해라. 이 단계는 판단하지 말고 넓게 모으기만 해라. 코드에서 팔레트에 없는 hex/px 하드코딩, 상태 레벨이 인접 단계를 건너뛴 곳, Focus-visible에 비색상 단서가 없는 곳, 8px(예외 4px) 그리드를 벗어난 간격을 찾아라.
2. 심각도 분류 — 수집한 항목을 셋으로 나눠라.
   - 사용성 문제(대비 미달, Focus-visible 누락, 터치 타깃 부족 — framework/specs/tokens/states.md §5·§6)
   - 일관성 문제(컴포넌트마다 다른 radius, 시맨틱 토큰 이름이 primitive와 섞여 쓰임 — framework/specs/tokens/token-architecture.md §4 기준으로 확인)
   - 확장성 문제(팔레트 단계 부족, 새 컴포넌트를 기존 계약에 못 끼워 넣음)
3. 비교 참고 — 필요하면 framework/adapters/{krds,material,ant-design,shadcn}/를 참고해 다른 시스템은 이 문제를 어떻게 다루는지 확인해라. 그대로 베끼지 말고 이 프로젝트의 제약(플랫폼, 팀 규모)에 맞게 조정해라.
4. 개선안 — 항목마다 "무엇을 / 왜 / 어떻게"를 3줄로 정리해라. 기존 토큰 체계를 깨지 않는 선에서 제안해라 — 팔레트를 통째로 바꾸는 제안보다 "레벨 하나만 추가", "예외 규칙 하나만 문서화" 쪽을 우선해라.
5. 출력 형식 — 심각도별로 표를 나눠서 위반 항목·파일 위치·개선안·우선순위를 한 번에 볼 수 있게 정리해라. 발견한 모든 항목을 한 번에 고치라고 지시하지 말고, 우선순위가 매겨진 실행 목록으로 넘겨라 — 그대로 framework/skills/transform.md의 입력이 될 수 있는 형태여야 한다.

진단 대상: [프로젝트 경로 또는 토큰 파일 위치를 여기에 채워 넣는다]
```

## 관련

- 절차 원본: [`framework/skills/improve.md`](../../framework/skills/improve.md)
- 검증 기준: [`framework/specs/validation/accessibility-checklist.md`](../../framework/specs/validation/accessibility-checklist.md)
- 진단 후 실제 치환: [`framework/skills/transform.md`](../../framework/skills/transform.md)
