import { createApp } from 'vue'
import App from './App.vue'
import AppLoading from './components/AppLoading/index.vue'
import { setupStore } from './store'
import router, { setupRouter } from './router'
import { setupNaive, setupAssets } from '@/plugins'

async function bootstrap() {
  // import assets: js、css
  setupAssets()

  // app loading
  const appLoading = createApp(AppLoading)
  appLoading.mount('#appLoading')

  const app = createApp(App)

  // 注册naive-ui组件
  setupNaive(app)

  // 挂载状态管理
  setupStore(app)

  // 挂载路由
  setupRouter(app)

  // 路由准备就绪后挂载 APP 实例
  await router.isReady()

  app.mount('#app', true)
}

void bootstrap()
