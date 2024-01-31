import App from './App.vue'
import AppLoading from './components/AppLoading/index.vue'
import { setupDirectives } from './directives'
import { setupStore } from './store'
import { setupRouter } from './router'
import {
  setupAssets,
  setupI18n,
  setupNaiveDiscreteApi
} from '@/plugins'

async function setupApp() {
  // import assets: js、css
  setupAssets()

  // app loading
  const appLoading = createApp(AppLoading)
  appLoading.mount('#appLoading')

  const app = createApp(App)

  // 挂载状态管理
  setupStore(app)

  // 国际化
  setupI18n(app)

  // 挂载 naive-ui 脱离上下文的 Api
  setupNaiveDiscreteApi()

  // 挂载路由
  await setupRouter(app)

  // 挂载指令
  setupDirectives(app)

  app.mount('#app', true)
}

setupApp()
