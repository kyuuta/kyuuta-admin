import { App } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import ConstantRouteMap from './constantRouteMap'
import { createRouterGuard } from './guard'

const router = createRouter({
  history: createWebHashHistory(''),
  strict: true,
  routes: ConstantRouteMap,
  scrollBehavior: () => ({ left: 0, top: 0 })
})

export async function setupRouter(app: App) {
  app.use(router)
  createRouterGuard(router)
  await router.isReady()
}

export default router