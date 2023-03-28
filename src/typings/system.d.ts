/** 系统布局相关 */
declare namespace Layout {
  /** 滚动模式 */
  type scrollMode = 'content' | 'main'

  /** 系统布局 */
  interface Setting {
    /** 头部配置 */
    header: HeaderConfig,
    /** 底部配置 */
    footer: FooterConfig,
    /** 滚动模式 */
    scrollMode: scrollMode
  }

  /** 头部配置 */
  interface HeaderConfig {
    /** 是否显示 */
    visible: boolean
    /** 高度 */
    height: number
  }

  /** 底部配置 */
  interface FooterConfig {
    /** 是否显示 */
    visible: boolean
    /** 高度 */
    height: number
    /** 是否固定底部 */
    fixed: boolean
  }
}

/** 主题相关 */
declare namespace Theme {
  /** 主题颜色 */
  interface Setting {
    /** primary主题色 */
    themeColor: string
    /** 其他状态颜色 */
    otherColor: OtherColor
  }

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
}
