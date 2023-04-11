/** 系统主题配置 */
declare module Theme {
  /**
   * 滚动模式
   * @param content - 内容滚动
   * @param main - 整体滚动
   */
  type ScrollMode = 'content' | 'main'
  /**
   * Menu展开收起操作模式
   * @param hide - 不展示
   * @param bar - 参考naiveui layoutSide show-trigger属性 https://www.naiveui.com/zh-CN/light/components/layout
   * @param arrow-circle - 参考naiveui layoutSide show-trigger属性 https://www.naiveui.com/zh-CN/light/components/layout
   * @param header - 头部按钮
   */
  type MenuCollpaseType = 'hide' | 'bar' | 'arrow-circle' | 'header'

  interface Setting {
    /** 头部配置 */
    header: Hedaer
    /** 底部配置 */
    footer: Footer
    /** 暗黑模式 */
    darkMode: boolean
    /** 滚动模式 */
    scrollMode: ScrollMode
    /** 主题色 */
    themeColor: string
    /** 其他主题色 */
    themeColorList: OtherColor
    /** 自定义InfoColor */
    isCustomizeInfoColor: boolean,
    /** 菜单配置 */
    menu: Menu,
    /** 面包屑配置 */
    breadcrumb: Breadcrumb
  }
  /** 头部配置 */
  interface Hedaer {
    /** 是否展示 */
    visible: boolean
    /** 头部高度 */
    height: number
  }

  /** 底部配置 */
  interface Footer {
    /** 是否展示 */
    visible: boolean
    /** 底部高度 */
    height: number
    /** 是否固定 */
    fixed: boolean
  }

  /** 其他主题颜色 */
  interface OtherColor {
    /** 信息 */
    info: string
    /** 成功 */
    success: string
    /** 警告 */
    warning: string
    /** 错误 */
    error: string
  }

  /** 菜单配置 */
  interface Menu {
    /** 默认展开收起 */
    collapse: boolean
    /** 展开收起操作类型 */
    collapseType: MenuCollpaseType
    /** 菜单展开宽度 */
    collapsedWidth: number
  }

  /** 面包屑配置 */
  interface Breadcrumb {
    /** 是否展示 */
    visible: boolean
    /** 是否展示icon */
    showIcon: boolean
  }
}