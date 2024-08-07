import { useOsTheme } from 'naive-ui'
import { useThemeStore } from '../modules'
import { loadLanguageAsync } from '@/plugins/i18n'
import {
  handleCssDarkModeClass,
  addThemeCssVarsToHtml
} from '@/utils'

/** 订阅ThemeStore */
export default function subscribeThemeStore() {
  const scope = effectScope()
  const theme = useThemeStore()
  const osTheme = useOsTheme()
  const { addDarkClass, removeDarkClass } =
    handleCssDarkModeClass()

  scope.run(() => {
    // 监听暗黑模式
    watch(
      () => theme.darkMode,
      (newValue) => {
        newValue ? addDarkClass() : removeDarkClass()
      },
      { immediate: true }
    )

    // 监听naiveui主题
    watch(
      () => theme.uiThemeOverrides,
      (newValue) => {
        if (newValue.common) {
          addThemeCssVarsToHtml(newValue.common)
        }
      },
      { immediate: true }
    )

    // 监听系统主题
    watch(
      osTheme,
      (newValue) => {
        const isDark = newValue === 'dark'
        theme.setAutoFollowOSTheme(isDark)
      },
      { immediate: true }
    )

    // i18n
    watch(
      () => theme.language,
      (val) => loadLanguageAsync(val)
    )
  })

  onScopeDispose(() => {
    scope.stop()
  })
}
