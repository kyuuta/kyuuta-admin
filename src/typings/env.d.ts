interface ImportMetaEnv {
  /** 项目基本地址 */
  readonly VITE_BASE_URL: string

  /** 项目名称 */
  readonly VITE_APP_NAME: string

  /** iconify图标作为组件的前缀 */
  readonly VITE_ICON_PREFFIX: string
  /**
   * 本地SVG图标作为组件的前缀, 请注意一定要包含 VITE_ICON_PREFFIX
   * - 格式 {VITE_ICON_PREFFIX}-{本地图标集合名称}
   * - 例如：icon-local
   */
  readonly VITE_ICON_LOCAL_PREFFIX: string
}
