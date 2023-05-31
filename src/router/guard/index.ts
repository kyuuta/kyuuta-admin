import type { Router } from 'vue-router'
import { createPermissionGuard } from './permission'
import { i18n } from '@/plugins/i18n'

/**
 * 路由守卫
 * @param router - 路由实例
 */
export function createRouterGuard(router: Router) {
  router.beforeEach(async (to, from, next) => {
    window.$loadingBar?.start()
    await createPermissionGuard(to, from, next)
  })

  router.afterEach((to) => {
    useTitle(i18n.global.t(to.meta.title))
    window.$loadingBar?.finish()
  })

  router.onError((error) => {
    console.log(error, '路由错误')
  })
}
