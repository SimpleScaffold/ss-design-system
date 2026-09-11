import { useEffect, useState } from "react"

const STORAGE_KEY = "vsd-theme"

function getInitialDark() {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === "dark") return true
  if (stored === "light") return false
  return window.matchMedia("(prefers-color-scheme: dark)").matches
}

/**
 * localStorage에 사용자 선택을 저장하고, 저장된 값이 없으면 시스템 설정(prefers-color-scheme)을 따른다.
 * examples/shadcn-case/token-architecture.md가 설명하는 테마 프로바이더 메커니즘을 그대로 구현한 것.
 */
export function useTheme() {
  const [dark, setDark] = useState(getInitialDark)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark)
    localStorage.setItem(STORAGE_KEY, dark ? "dark" : "light")
  }, [dark])

  return [dark, setDark] as const
}
