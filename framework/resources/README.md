# resources

체크리스트 JSON, manifest 등 정적 리소스. 둘 다 사람이 읽는 Markdown 원본의 파생물이다 — 원본을 고치면 이 파일도 함께 갱신한다(자동 생성기는 아직 없다).

- [`checklist.json`](./checklist.json) — `framework/specs/validation/accessibility-checklist.md`의 기계 판독용 버전. 항목마다 `automated`(자동화 여부)와 `script`(해당 시 `framework/scripts/`의 실행 파일 경로)를 붙여뒀다. `framework/scripts/`가 새 검증을 자동화할 때마다 해당 항목의 `automated`를 갱신한다.
- [`manifest.json`](./manifest.json) — `framework/specs/`와 `framework/adapters/`의 파일 목록·매핑 관계. 어떤 스펙에 어떤 어댑터 문서가 대응하는지, 어떤 조합이 아직 "없음"으로 명시됐는지를 한 파일로 조회할 수 있다.
