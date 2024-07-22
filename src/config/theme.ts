const ThemeConfig
: Omit<
    Theme.Setting, 
    'isMobile' | 'siderDrawerVisible'
  > = {
  darkMode: false,
  followOSTheme: true,
  scrollMode: 'content',
  layoutMode: 'vertical-mix',
  language: 'zh-cn',
  header: {
    visible: true,
    height: 60
  },
  footer: {
    visible: true,
    height: 48,
    fixed: true
  },
  themeColor: '#1890ff',
  themeColorList: {
    info: '#2080f0',
    success: '#52c41a',
    warning: '#faad14',
    error: '#f5222d'
  },
  isCustomizeInfoColor: false,
  tab: {
    visible: true,
    isCache: true
  },
  menu: {
    collapse: false,
    accordion: false,
    showHeaderCollapse: true,
    showSiderCollapse: true,
    collapseType: 'bar',
    collapseTypeList: [
      {
        label: 'Bar',
        value: 'bar'
      },
      {
        label: 'ArrowCircle',
        value: 'arrow-circle'
      }
    ],
    collapsedWidth: 220
  },
  breadcrumb: {
    visible: true,
    showIcon: true
  },
  animation: {
    visible: true,
    mode: 'fade'
  }
}

export { ThemeConfig }
