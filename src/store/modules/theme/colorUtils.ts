import type { GlobalThemeOverrides } from 'naive-ui'
import { cloneDeep } from 'lodash-es'
import { ThemeConfig } from '@/config/theme'
import { addColorAlpha, getColorPalette } from '@/utils'

type ColorType = 'primary' | 'info' | 'success' | 'warning' | 'error'

/** 初始化主题配置 */
export function initThemeSetting() {
  // TODO:cache
  // TODO:customize info color
  const setting = cloneDeep({ ...ThemeConfig })
  return setting
}

/** 获取UI的主题颜色配置 */
export function getUIThemeOverrides(
  colors: Record<ColorType, string>
) : GlobalThemeOverrides {
  const { primary, success, warning, error } = colors
  const info = getColorPalette(primary, 7)

  const themeColors = getThemeColors([
    ['primary', primary],
    ['info', info],
    ['success', success],
    ['warning', warning],
    ['error', error]
  ])

  const colorLoading = primary

  return {
    common: { ...themeColors },
    LoadingBar: { colorLoading }
  }
}

interface ColorAction {
  scene: ColorScene
  handler: (color: string) => string
}
type ColorScene = '' | 'Suppl' | 'Hover' | 'Pressed' | 'Active'
type ColorKey = `${ColorType}Color${ColorScene}`
type ThemeColor = Partial<Record<ColorKey, string>>
/** 获取颜色的衍生场景颜色  */
function getThemeColors(colors: [ColorType, string][]) {
  const colorActions: ColorAction[] = [
    { scene: '', handler: color => color },
    { scene: 'Suppl', handler: color => color },
    { scene: 'Hover', handler: color => getColorPalette(color, 5) },
    { scene: 'Pressed', handler: color => getColorPalette(color, 7) },
    { scene: 'Active', handler: color => addColorAlpha(color, 0.1) }
  ]

  const themeColor: ThemeColor = {}

  colors.forEach(color => {
    colorActions.forEach(action => {
      const [ColorType, colorValue] = color
      const colorKey: ColorKey = `${ColorType}Color${action.scene}`
      themeColor[colorKey] = action.handler(colorValue)
    })
  })

  return themeColor
}