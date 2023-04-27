import { App, Component } from 'vue'
import DarkModeContainer from '@/components/DarkModeContainer'
import TooltipContainer from '@/components/TooltipContainer'

interface Components {
  [key: string]: Component
}

const components: Components = {
  DarkModeContainer,
  TooltipContainer
}

/**
 * 全局注册自定义组件
 * @param app
 */
export default function setupCustomComponents(app: App) {
  Object.keys(components).forEach((key) => {
    app.component(`${key}`, components[key])
  })
}
