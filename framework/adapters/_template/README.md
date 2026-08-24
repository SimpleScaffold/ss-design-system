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
| `specs/tokens/layout.md`, `specs/tokens/spacing.md` | `layout.md` |
| `specs/tokens/icon.md` | `icon.md` |

> `components`/`validation` 공통 스펙은 아직 정의되지 않아 대응 매핑도 없다 (2026-08-24 기준, 다른 어댑터도 동일).

## 매핑 문서 하나의 기본 구조 (권장)

```markdown
# [시스템명] [토큰 종류] 토큰 매핑

> 공통 스펙: [`framework/specs/tokens/xxx.md`](../../specs/tokens/xxx.md)
> 소스: [공식 문서/레포 링크]

## 공통 스펙과 이 시스템의 관계 (동일한가, 다른가, 왜 다른가)

## 실제 값 (표/코드 블록으로 — 반드시 소스에서 확인한 값만)

## 공통 스펙에 없는 이 시스템 고유 항목

## 토큰화 예시 (공통 스펙 형식에 실제 값을 대입한 코드 블록)
```

## 참고 소스

- [시스템명] — [공식 홈페이지/문서]
- [시스템명] — [GitHub 레포, 실제 토큰 JSON/코드 경로]
