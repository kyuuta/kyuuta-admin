import App from './App.vue'
import { createApp } from 'vue'
import { setupStore } from './store'
import router, { setupRouter } from './router'
import { setupNaive, setupAssets, setupCustomComponents } from '@/plugins'

async function bootstrap() {
  // import assets: js、css
  setupAssets()

  const app = createApp(App)

  // 注册naive-ui组件
  setupNaive(app)

  // 全局自定义组件
  setupCustomComponents(app)

  // 挂载状态管理
  setupStore(app)

  // 挂载路由
  setupRouter(app)

  // 路由准备就绪后挂载 APP 实例
  await router.isReady()

  app.mount('#app', true)
}

void bootstrap()
