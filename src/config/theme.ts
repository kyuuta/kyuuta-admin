const ThemeConfig: Theme.Setting = {
  darkMode: false,
  followOSTheme: true,
  scrollMode: 'content',
  layoutMode: 'vertical-mix',
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
  menu: {
    collapse: false,
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
    mode: 'fade',
    modeList: [
      {
        value: 'zoom-fade',
        label: '渐变'
      },
      {
        value: 'zoom-out',
        label: '闪动'
      },
      {
        value: 'fade-slide',
        label: '滑动'
      },
      {
        value: 'fade',
        label: '消退'
      },
      {
        value: 'fade-bottom',
        label: '底部消退'
      },
      {
        value: 'fade-scale',
        label: '缩放消退'
      }
    ]
  }
}

export { ThemeConfig }
