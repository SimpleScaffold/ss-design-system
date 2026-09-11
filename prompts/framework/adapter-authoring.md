# 어댑터 작성 프롬프트

> 용도: `framework/adapters/<시스템명>/`에 새 어댑터를 만들거나 기존 어댑터의 매핑 문서를 보강할 때 쓰는 메타 프롬프트. `framework/adapters/_template/README.md`가 정의한 4단 구조와, `krds/colors.md`·`ant-design/radius.md`가 실제로 지킨 품질 기준을 프롬프트로 성문화한 것.

## 프롬프트

```
framework/adapters/<시스템명>/에 매핑 문서를 추가하거나 보강하려고 한다. 시작하기 전에 framework/adapters/_template/README.md를 읽고 이 저장소의 어댑터 구조를 파악하고, framework/adapters/krds/colors.md와 framework/adapters/ant-design/radius.md를 품질 기준으로 삼아라.

절대 규칙: 값을 기억이나 추측으로 채우지 마라. 반드시 그 시스템의 공식 소스(공식 문서 원문, 또는 GitHub 리포지토리의 실제 코드/토큰 파일)를 직접 확인한 값만 쓴다. 확인하지 못한 수치는 "확인 필요"로 남기거나 문장을 더 일반적으로 바꿔라 — 그럴듯한 값을 지어내지 마라.

각 매핑 문서는 다음 구조를 따른다:

1. 첫 줄 블록쿼트 두 개 — `> 공통 스펙: [framework/specs/tokens/xxx.md](...)`와 `> 소스: [공식 문서/레포 링크]`. 소스는 파일 단위까지 구체적으로 적어라(예: "seed.ts, genRadius.ts").
2. `## N. 공통 스펙 개념 → 이 시스템의 이름` 형식의 헤딩. 공통 스펙의 각 섹션 번호를 그대로 따라가면서, "이 시스템은 이 개념을 무엇으로 부르고 어떻게 구현하는지"를 설명해라. 공통 스펙과 같은지/다른지/왜 다른지를 반드시 밝혀라.
3. 실제 값은 `### 실제 값` 하위 섹션에 표나 코드 블록으로 넣고, 소스 토큰 경로를 백틱으로 함께 표기해라(예: `primitive.color.light`).
4. 그 시스템 고유 개념(공통 스펙에 없는 것)은 별도 섹션으로 분리해서 "공통 스펙에는 없는 항목"이라고 명시해라.
5. 다른 어댑터와 비교되는 지점이 있으면(예: Ant Design의 Hover가 더 옅어지는 반례처럼) 비교 표를 넣어라 — 이런 비교가 "공통 스펙이 값을 강제하면 안 된다"는 근거로 이 저장소 전체에서 쓰인다.
6. 그 시스템에 대응 개념 자체가 없으면(예: Material의 layout 토큰 부재, shadcn의 elevation 부재) 억지로 채우지 말고 README의 매핑 표에 "없음"으로 적은 뒤 왜 없는지 한 문단으로 설명해라.
7. 마지막 섹션은 `## 토큰화 예시` — 공통 스펙의 CSS 커스텀 프로퍼티 형식에 이 시스템의 실제 값을 대입한 코드 블록. 색 토큰이면 `prompts/framework/color-tokens.md` 계약(oklch, `:root`/`.dark`, 시맨틱 이름)을 따르고, primitive 이름을 만들더라도 컴포넌트가 직접 참조하지 않는다는 원칙(`framework/specs/tokens/token-architecture.md` §4)을 지켜라.

새 어댑터라면 framework/adapters/_template/README.md의 매핑 표에 있는 스펙 전부(colors/typography/radius/layout+spacing/icon/elevation/motion)를 확인하고, 대응 개념이 없는 것은 6번대로 처리해라 — motion처럼 공식 소스를 아직 확인 못 했다면 "확인 필요"로 남기고 지어내지 마라(material/motion.md가 material-web의 `_md-sys-motion.scss`를 직접 확인해 작성한 사례). patterns(media/navigation/form)·token-architecture·states는 개별 매핑 문서를 새로 만들지 않는다 — 시스템별 차이가 있으면 해당 개념이 속한 colors.md 등 기존 매핑 문서 안에서 설명해라(ant-design/colors.md의 Hover/Active 반례가 이 방식의 예시). 작업이 끝나면 framework/adapters/<시스템명>/README.md의 매핑 표와 framework/adapters/_template/README.md, framework/resources/manifest.json 세 곳 모두에 신규 문서를 등재해라.

이번에 작업할 시스템/문서: [시스템명과, 이번에 새로 작성하거나 보강할 매핑 문서, 확인한 공식 소스 링크를 여기에 채워 넣는다]
```

## 관련

- 구조 원본: [`framework/adapters/_template/README.md`](../../framework/adapters/_template/README.md)
- 품질 기준: [`framework/adapters/krds/colors.md`](../../framework/adapters/krds/colors.md), [`framework/adapters/ant-design/radius.md`](../../framework/adapters/ant-design/radius.md)
- 색 토큰 계약: [`color-tokens.md`](./color-tokens.md)
- 신규 스펙 신설이 먼저 필요하면: [`spec-authoring.md`](./spec-authoring.md)
