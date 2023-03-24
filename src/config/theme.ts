const layoutConfig: Layout.Setting = {
  scrollMode: 'content',
  header: {
    visible: true,
    height: 60
  },
  footer: {
    visible: false,
    height: 48,
    fixed: true
  }
}

const themeColorConfig: Theme.Setting = {
  themeColor: '#1890ff',
  otherColor: {
    info: '#2080f0',
    success: '#52c41a',
    warning: '#faad14',
    error: '#f5222d'
  }
}

export {
  layoutConfig,
  themeColorConfig
}
