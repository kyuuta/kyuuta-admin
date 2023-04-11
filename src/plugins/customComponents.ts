import { App, Component } from 'vue'
import TooltipContainer from '@/components/tooltipContainer'

interface Components {
  [key: string]: Component
}

const components: Components = {
  TooltipContainer
}

/**
 * 全局注册自定义组件
 * @param app
 */
export function setupCustomComponents(app: App) {
  Object.keys(components).forEach(key => {
    app.component(`${key}`, components[key])
  })
}
