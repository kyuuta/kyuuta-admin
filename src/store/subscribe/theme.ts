import { effectScope, onScopeDispose, watch } from 'vue'
import type { GlobalThemeOverrides } from 'naive-ui'
import { useThemeStore } from '../modules'
import { handleCssDarkModeClass, addThemeCssVarsToHtml } from '@/utils'

/** 订阅ThemeStore */
export default function subscribeThemeStore() {
  const scope = effectScope()
  const theme = useThemeStore()
  const { addDarkClass, removeDarkClass } = handleCssDarkModeClass()

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
  })

  onScopeDispose(() => {
    scope.stop()
  })
}
