import App from './App.vue'
import AppLoading from './components/AppLoading/index.vue'
import { setupStore } from './store'
import router, { setupRouter } from './router'
import { setupAssets } from '@/plugins'
import { setupI18n } from '~/src/plugins'

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

  // 挂载路由
  await setupRouter(app)

  app.mount('#app', true)
}

setupApp()
