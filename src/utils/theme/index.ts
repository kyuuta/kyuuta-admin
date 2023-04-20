import type { GlobalThemeOverrides } from 'naive-ui'
import { getRgbOfColor } from '@/utils'
import { kebabCase } from 'lodash-es'

/**
 * 添加dark类名至document
 * Add css dark class to document
 */
export function handleCssDarkModeClass() {
  const DARK_CLASS = 'dark'

  function addDarkClass() {
    document.documentElement.classList.add(DARK_CLASS)
  }

  function removeDarkClass() {
    document.documentElement.classList.remove(DARK_CLASS)
  }

  return {
    addDarkClass,
    removeDarkClass
  }
}

/**
 * 添加css变量至HTML
 * Add css variables to HTML
 */
type ThemeVars = Exclude<GlobalThemeOverrides['common'], undefined>
type ThemeVarsKeys = keyof ThemeVars

export function addThemeCssVarsToHtml(themeVars: ThemeVars) {
  const keys = Object.keys(themeVars) as ThemeVarsKeys[]
  const style: string[] = []

  keys.forEach((key) => {
    const color = themeVars[key]

    if (color) {
      const { r, g, b } = getRgbOfColor(color)
      style.push(`--${kebabCase(key)}: ${r}, ${g}, ${b}`)
    }
  })

  const styleStr = style.join(';')
  document.documentElement.style.cssText += styleStr
}
