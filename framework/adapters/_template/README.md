# _template

신규 디자인 시스템 어댑터 추가 시 복사해서 시작하는 템플릿. `krds/`, `material/`, `ant-design/`가 실제 작성 예시다.

## 사용법

1. 이 폴더를 `framework/adapters/<시스템명>/`으로 복사한다.
2. 이 README의 `[시스템명]`, `[공식 소스 링크]` 등을 실제 값으로 채운다.
3. 아래 5개 매핑 문서를 대상 시스템의 **공식 소스(문서 원문 또는 실제 코드/토큰 JSON)** 를 직접 확인하며 작성한다 — 기억이나 추측으로 값을 채우지 않는다. `krds/colors.md`, `ant-design/radius.md` 등이 "소스 인용 + 실제 값 + 공통 스펙과의 비교"를 어떻게 구성했는지 참고.
4. 해당 시스템에 없는 개념(예: Material의 layout 토큰 부재)은 "없음"으로 명시하고 왜 없는지 적어둔다 — 억지로 채우지 않는다.

## 매핑 문서

| 공통 스펙 | 매핑 문서 |
| --- | --- |
| `specs/tokens/colors.md` | `colors.md` |
| `specs/tokens/typography.md` | `typography.md` |
| `specs/tokens/radius.md` | `radius.md` |
| `specs/tokens/layout.md`, `specs/tokens/spacing.md` | `layout.md` — 두 스펙은 파일을 나누되, 어댑터는 관례상 이 둘을 **한 문서로 합쳐서** 작성한다(krds/material/ant-design 전부 이 방식) |
| `specs/tokens/icon.md` | `icon.md` |
| `specs/tokens/elevation.md` | `elevation.md` (해당 시스템에 개념이 없으면 README의 매핑 표에 "없음 + 이유"만 명시하고 파일 자체는 생략한다 — krds·material은 작성됨, ant-design·shadcn은 "없음"으로 명시됨) |
| `specs/tokens/token-architecture.md` | 대응 매핑 문서를 따로 만들지 않는다 — 각 시스템의 3계층 이름 대응은 `colors.md`의 토큰화 섹션에서 함께 설명한다 |
| `specs/tokens/states.md` | 대응 매핑 문서를 따로 만들지 않는다 — 상태 전이 방향처럼 시스템마다 다른 부분은 `colors.md`에서 다룬다(`ant-design/README.md`의 Hover/Active 반례 참고) |
| `specs/tokens/motion.md` | 대응 매핑 문서 없음 (2026-09 기준 네 어댑터 모두 미착수 — 소스에 duration/easing 토큰이 확인되면 `motion.md`를 신설한다) |
| `specs/patterns/media.md` | 대응 매핑 문서 없음 (2026-09 기준 네 어댑터 모두 미착수) |
| `specs/patterns/navigation.md`, `specs/patterns/form.md` | 대응 매핑 문서 없음 (2026-09 기준 네 어댑터 모두 미착수) |

> `specs/components/`, `specs/validation/`은 시스템별 값이 아니라 "토큰을 어떻게 쓰고 확인하는지"의 계약이라 어댑터가 값을 채우는 대상이 아니다(`framework/specs/README.md` 참고) — 매핑 문서를 만들 필요가 없다.

## 매핑 문서 하나의 기본 구조 (권장)

```markdown
# [시스템명] [토큰 종류] 토큰 매핑

> 공통 스펙: [`framework/specs/tokens/xxx.md`](../../specs/tokens/xxx.md)
> 소스: [공식 문서/레포 링크]

## 공통 스펙과 이 시스템의 관계 (동일한가, 다른가, 왜 다른가)

## 실제 값 (표/코드 블록으로 — 반드시 소스에서 확인한 값만)

## 공통 스펙에 없는 이 시스템 고유 항목

## 토큰화 예시 (공통 스펙 형식에 실제 값을 대입한 코드 블록)

색은 `prompts/framework/color-tokens.md` 계약으로 옮긴다 — `:root` / `.dark`, oklch, `--primary` 등 시맨틱 이름. `--color-primary` / `primary-50`을 public API로 쓰지 않는다.
```

## 참고 소스

- [시스템명] — [공식 홈페이지/문서]
- [시스템명] — [GitHub 레포, 실제 토큰 JSON/코드 경로]
