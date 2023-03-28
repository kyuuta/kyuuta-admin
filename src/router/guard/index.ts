import type { Router } from 'vue-router'
import { createPermissionGuard } from './permission'

/**
 * 路由守卫
 * @param router - 路由实例
 */
export function createRouterGuard(
  router: Router
) {
  
  router.beforeEach(async (to, from, next) => {
    window.$loadingBar?.start()
    await createPermissionGuard(to, from, next)
  })

  router.afterEach(to => {
    // TODO:document.title方法
    window.$loadingBar?.finish()
  })

}