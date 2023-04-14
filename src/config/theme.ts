const ThemeConfig: Theme.Setting = {
  darkMode: false,
  scrollMode: 'content',
  header: {
    visible: true,
    height: 60
  },
  footer: {
    visible: false,
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
  menu: {
    collapse: false,
    collapseType: 'header',
    collapsedWidth: 220
  },
  breadcrumb: {
    visible: true,
    showIcon: true
  }
}

export { ThemeConfig }
