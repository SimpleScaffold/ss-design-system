#!/usr/bin/env node
/**
 * contrast.mjs — WCAG 명암비 계산기.
 *
 * framework/specs/validation/accessibility-checklist.md §2("대비", §2 항목)를 자동화한다.
 * hex(#rrggbb / #rgb)와 oklch(L C H [/ A]) 두 형식을 입력으로 받는다.
 * 외부 의존성 없음 — Node 내장 기능만 사용한다(package.json 불필요).
 *
 * 사용법:
 *   node framework/scripts/contrast.mjs "#3182F6" "#ffffff"
 *   node framework/scripts/contrast.mjs "oklch(0.5 0.18 265)" "oklch(0.985 0 0)"
 *
 * 출력: 대비율(N.NN:1)과 WCAG AA/AAA(본문·큰글자) 통과 여부.
 * 근거: framework/specs/tokens/colors.md §4(4.5:1), §12(고대비 7:1).
 */

function parseHex(input) {
  let hex = input.trim().replace(/^#/, '');
  if (hex.length === 3) {
    hex = hex.split('').map((c) => c + c).join('');
  }
  if (!/^[0-9a-fA-F]{6}$/.test(hex)) return null;
  const r = parseInt(hex.slice(0, 2), 16) / 255;
  const g = parseInt(hex.slice(2, 4), 16) / 255;
  const b = parseInt(hex.slice(4, 6), 16) / 255;
  return [r, g, b];
}

// OKLCH → OKLab → linear sRGB. 공개된 표준 변환식(Björn Ottosson, "A perceptual color space
// for image processing", 2020)을 그대로 구현한 것 — 특정 라이브러리 코드를 복사하지 않았다.
function parseOklch(input) {
  const m = input
    .trim()
    .match(/^oklch\(\s*([\d.]+)\s+([\d.]+)\s+([\d.]+)(?:\s*\/\s*[\d.%]+)?\s*\)$/i);
  if (!m) return null;
  const L = parseFloat(m[1]);
  const C = parseFloat(m[2]);
  const Hdeg = parseFloat(m[3]);
  const hRad = (Hdeg * Math.PI) / 180;
  const a = C * Math.cos(hRad);
  const b = C * Math.sin(hRad);

  const l_ = L + 0.3963377774 * a + 0.2158037573 * b;
  const m_ = L - 0.1055613458 * a - 0.0638541728 * b;
  const s_ = L - 0.0894841775 * a - 1.291485548 * b;

  const l3 = l_ ** 3;
  const m3 = m_ ** 3;
  const s3 = s_ ** 3;

  const rLin = +4.0767416621 * l3 - 3.3077115913 * m3 + 0.2309699292 * s3;
  const gLin = -1.2684380046 * l3 + 2.6097574011 * m3 - 0.3413193965 * s3;
  const bLin = -0.0041960863 * l3 - 0.7034186147 * m3 + 1.707614701 * s3;

  return [rLin, gLin, bLin].map(linearToSrgbGamma);
}

function linearToSrgbGamma(c) {
  const clamped = Math.min(1, Math.max(0, c));
  return clamped;
}

function parseColor(input) {
  if (input.trim().toLowerCase().startsWith('oklch(')) return parseOklch(input);
  return parseHex(input);
}

// sRGB(0~1, 감마 인코딩된 값) → WCAG 상대 휘도.
function relativeLuminance([r, g, b]) {
  const toLinear = (c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
  const [rl, gl, bl] = [r, g, b].map(toLinear);
  return 0.2126 * rl + 0.7152 * gl + 0.0722 * bl;
}

function contrastRatio(rgb1, rgb2) {
  const l1 = relativeLuminance(rgb1);
  const l2 = relativeLuminance(rgb2);
  const [lighter, darker] = l1 >= l2 ? [l1, l2] : [l2, l1];
  return (lighter + 0.05) / (darker + 0.05);
}

function main() {
  const [, , colorA, colorB] = process.argv;
  if (!colorA || !colorB) {
    console.error('사용법: node contrast.mjs <색상1> <색상2>  (예: "#3182F6" "#ffffff" 또는 "oklch(0.5 0.18 265)" "oklch(0.985 0 0)")');
    process.exit(1);
  }
  const rgbA = parseColor(colorA);
  const rgbB = parseColor(colorB);
  if (!rgbA || !rgbB) {
    console.error('색상 형식을 인식하지 못했습니다. #rrggbb 또는 oklch(L C H) 형식만 지원합니다.');
    process.exit(1);
  }
  const ratio = contrastRatio(rgbA, rgbB);
  const fmt = ratio.toFixed(2);
  console.log(`대비율: ${fmt}:1`);
  console.log(`- 본문 텍스트 AA(4.5:1): ${ratio >= 4.5 ? '통과' : '미달'}`);
  console.log(`- 큰 글자/헤딩 AA(3:1): ${ratio >= 3 ? '통과' : '미달'}`);
  console.log(`- 본문 텍스트 AAA / 고대비 모드(7:1, colors.md §12): ${ratio >= 7 ? '통과' : '미달'}`);
  console.log(`- 헤딩·레이블 고대비 모드(4.5:1, colors.md §12): ${ratio >= 4.5 ? '통과' : '미달'}`);
}

main();
