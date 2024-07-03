/** 系统主题配置 */
declare namespace Theme {
  /**
   * 滚动模式
   * - content: 内容滚动
   * - main: 整体滚动
   */
  type ScrollMode = 'content' | 'main'

  /**
   * Menu展开收起操作模式
   * - hide: 不展示
   * - bar: 参考naiveui layoutSide show-trigger属性 https://www.naiveui.com/zh-CN/light/components/layout
   * - arrow-circle: 参考naiveui layoutSide show-trigger属性 https://www.naiveui.com/zh-CN/light/components/layout
   */
  type MenuCollpaseType = 'bar' | 'arrow-circle'

  /**
   * 布局模式
   * - vertical: 左侧菜单模式
   * - horizontal: 顶部菜单模式
   * - vertical-mix: 左侧菜单混合模式
   * - horizontal-mix: 顶部菜单混合模式
   */
  type LayoutMode =
    | 'vertical'
    | 'horizontal'
    | 'vertical-mix'
    | 'horizontal-mix'

  /**
   * 过渡动画类型
   * - zoom-fade: 渐变
   * - zoom-out: 闪现
   * - fade-slide: 滑动
   * - fade: 消退
   * - fade-bottom: 底部消退
   * - fade-scale: 缩放消退
   */
  type ThemeAnimateMode =
    | 'zoom-fade'
    | 'zoom-out'
    | 'fade-slide'
    | 'fade'
    | 'fade-bottom'
    | 'fade-scale'

  interface Setting {
    /** 头部配置 */
    header: Hedaer
    /** 底部配置 */
    footer: Footer
    /** 暗黑模式 */
    darkMode: boolean
    /** 跟随系统主题 */
    followOSTheme: boolean
    /** 滚动模式 */
    scrollMode: ScrollMode
    /** 布局模式 */
    layoutMode: LayoutMode
    /** 主题色 */
    themeColor: string
    /** 其他主题色 */
    themeColorList: OtherColor
    /** 自定义InfoColor */
    isCustomizeInfoColor: boolean
    /** 标签页配置 */
    tab: Tab
    /** 菜单配置 */
    menu: Menu
    /** 面包屑配置 */
    breadcrumb: Breadcrumb
    /** 动画配置 */
    animation: Animation
    /** 语言 */
    language: 'zh-cn' | 'en'
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

  /** 标签页配置 */
  interface Tab {
    /** 是否展示 */
    visible: boolean
    /** 是否缓存标签页 */
    isCache: boolean
  }

  /** 菜单配置 */
  interface Menu {
    /** 手风琴模式 true开启 false关闭 */
    accordion: boolean
    /** 默认展开收起 */
    collapse: boolean
    /** 显示头部折叠图标 */
    showHeaderCollapse: boolean
    /** 是否展示Sider展开收起操作按钮 */
    showSiderCollapse: boolean
    /** 展开收起操作类型 */
    collapseType: MenuCollpaseType
    /** 展开收起操作类型表 */
    collapseTypeList: Common.OptionWithKey<MenuCollpaseType>[]
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

  /** 动画配置 */
  interface Animation {
    /** 是否使用动画 */
    visible: boolean
    /** 动画类型 */
    mode: ThemeAnimateMode
  }
}

declare namespace App {
  /** 菜单项配置 */
  // import('naive-ui').MenuOption &
  type GlobalMenuOption = {
    key: string
    label: string
    routeName: string
    routePath: string
    redirect?: string
    icon?: () => import('vue').VNodeChild
    children?: GlobalMenuOption[]
    hasChildren?: boolean
    meta?: import('vue-router').RouteMeta
  }
}

/** 多页签Tab的路由 */
interface GlobalTabRoute
  extends Pick<
    import('vue-router').RouteLocationNormalizedLoaded,
    'name' | 'fullPath' | 'meta'
  > {
  /** 滚动的位置 */
  scrollPosition: {
    left: number
    top: number
  }
}

/** vue 的defineExpose导出的类型 */
declare namespace Expose {
  interface BetterScroll {
    instance: import('@better-scroll/core').BScrollInstance
  }
}
