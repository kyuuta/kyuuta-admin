import {
  createDiscreteApi,
  ConfigProviderProps
} from 'naive-ui'

/**
 * 挂载 Naive-ui 脱离上下文的 API
 * 如果你想在 setup 外使用 useDialog、useMessage、useNotification、useLoadingBar，可以通过 createDiscreteApi 来构建对应的 API。
 * https://www.naiveui.com/zh-CN/dark/components/discrete
 */

export function setupNaiveDiscreateApi() {
  const theme = useThemeStore()
  const configProviderPropsRef =
    computed<ConfigProviderProps>(() => ({
      theme: theme.naiveTheme
    }))

  const { message, dialog, notification, loadingBar } =
    createDiscreteApi(
      ['message', 'dialog', 'notification', 'loadingBar'],
      {
        configProviderProps: configProviderPropsRef
      }
    )

  window['$message'] = message
  window['$dialog'] = dialog
  window['$notification'] = notification
  window['$loading'] = loadingBar
}
