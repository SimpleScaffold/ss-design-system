#!/usr/bin/env node
/**
 * scan-token-escapes.mjs — 팔레트 이탈 값 스캐너.
 *
 * framework/specs/validation/accessibility-checklist.md §2("팔레트 이탈 값")과
 * §5("간격 값" — 8px 단위, 예외 4px, framework/specs/tokens/spacing.md)를 자동화한다.
 * 외부 의존성 없음 — Node 내장 fs/path만 사용한다.
 *
 * 사용법:
 *   node framework/scripts/scan-token-escapes.mjs --tokens examples/tokens/tokens.css --target examples/vite-shadcn-demo/src
 *   node framework/scripts/scan-token-escapes.mjs --tokens <토큰 CSS 경로> --target <검사할 파일 또는 디렉터리>
 *
 * 하는 일:
 *   1. --tokens 파일에서 선언된 hex/oklch 값을 "허용된 팔레트"로 수집한다.
 *   2. --target 아래 모든 텍스트 파일(css/scss/tsx/jsx/ts/js/html)을 훑어서
 *      팔레트에 없는 hex 코드와, 8px(예외 4px) 배수가 아닌 px 값을 찾아 파일:줄 단위로 보고한다.
 *   3. 위반이 있으면 종료 코드 1을 반환한다(CI에서 게이트로 쓸 수 있게).
 *
 * 한계: oklch 값의 팔레트 이탈은 색상각·명도까지 비교해야 정확하지만, 이 스크립트는 문자열
 * 완전 일치만 검사한다 — 미묘하게 다른 oklch 값(예: 오타)은 잡아내지 못할 수 있다. hex 값과
 * px 간격 값 검사가 이 스크립트의 핵심이다.
 */

import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';

const TARGET_EXTENSIONS = new Set(['.css', '.scss', '.tsx', '.jsx', '.ts', '.js', '.html', '.md']);
const HEX_RE = /#[0-9a-fA-F]{3,8}\b/g;
const PX_RE = /(-?\d+(?:\.\d+)?)px\b/g;

function parseArgs(argv) {
  const args = {};
  for (let i = 0; i < argv.length; i += 1) {
    if (argv[i].startsWith('--')) {
      const key = argv[i].slice(2);
      args[key] = argv[i + 1];
      i += 1;
    }
  }
  return args;
}

function collectAllowedHex(tokensPath) {
  const content = readFileSync(tokensPath, 'utf8');
  const matches = content.match(HEX_RE) || [];
  return new Set(matches.map((h) => h.toLowerCase()));
}

function walk(target) {
  const stats = statSync(target);
  if (stats.isFile()) return [target];
  const entries = readdirSync(target, { withFileTypes: true });
  let files = [];
  for (const entry of entries) {
    if (entry.name === 'node_modules' || entry.name === 'dist' || entry.name.startsWith('.')) continue;
    const full = join(target, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(walk(full));
    } else if (TARGET_EXTENSIONS.has(extname(entry.name))) {
      files.push(full);
    }
  }
  return files;
}

function isAllowedPx(value) {
  const n = Math.abs(parseFloat(value));
  if (Number.isNaN(n)) return true;
  if (n === 0) return true;
  // spacing.md 기본 단위 — 8px 배수, 4px은 예외적으로만 허용.
  return n % 4 === 0;
}

function scanFile(file, allowedHex) {
  const lines = readFileSync(file, 'utf8').split('\n');
  const violations = [];
  lines.forEach((line, idx) => {
    let m;
    HEX_RE.lastIndex = 0;
    while ((m = HEX_RE.exec(line))) {
      if (!allowedHex.has(m[0].toLowerCase())) {
        violations.push({ file, line: idx + 1, type: 'hex-이탈', value: m[0] });
      }
    }
    PX_RE.lastIndex = 0;
    while ((m = PX_RE.exec(line))) {
      if (!isAllowedPx(m[1])) {
        violations.push({ file, line: idx + 1, type: 'px-그리드-이탈(8/4px 아님)', value: `${m[1]}px` });
      }
    }
  });
  return violations;
}

function main() {
  const { tokens, target } = parseArgs(process.argv.slice(2));
  if (!tokens || !target) {
    console.error('사용법: node scan-token-escapes.mjs --tokens <토큰 CSS 경로> --target <검사할 파일/디렉터리>');
    process.exit(1);
  }
  const allowedHex = collectAllowedHex(tokens);
  const files = walk(target).filter((f) => f !== tokens);
  const allViolations = files.flatMap((f) => scanFile(f, allowedHex));

  if (allViolations.length === 0) {
    console.log(`위반 없음 — ${files.length}개 파일 검사, 팔레트(${allowedHex.size}개 hex)·8px/4px 그리드 준수.`);
    process.exit(0);
  }

  console.log(`위반 ${allViolations.length}건 발견 (검사 파일 ${files.length}개):\n`);
  for (const v of allViolations) {
    console.log(`  ${v.file}:${v.line}  [${v.type}]  ${v.value}`);
  }
  process.exit(1);
}

main();
