import type {
  NavigationGuardNext,
  RouteLocationNormalized
} from 'vue-router'
import { localStorage } from '@/utils'
import { PageConfig } from '@/config/page'

/**
 * 动态路由
 */
export async function createDynamicRouteGuard(
  to: RouteLocationNormalized,
  _from: RouteLocationNormalized,
  next: NavigationGuardNext
) {
  const {
    initAuthRoute,
    isInitAuthRoute,
    validConstantRoute
  } = useRouteStore()
  const { ROOT_NAME, BASE_LOGIN_NAME, NOT_FOUNT_NAME } =
    PageConfig
  const isLogin = Boolean(localStorage.get('token'))

  /** 初始化路由权限 */
  if (!isInitAuthRoute) {
    /** 未登录情况下回到登录页 登录成功后再加载权限路由 */
    if (!isLogin) {
      if (
        validConstantRoute(to.name as string) &&
        !to?.meta?.requiresAuth
      ) {
        next()
      } else {
        next({
          name: BASE_LOGIN_NAME,
          query: { redirect: to.fullPath }
        })
        return false
      }
      return false
    }

    await initAuthRoute()

    /** 触发新的导航以显示addRoute添加的路由 */
    /** https://router.vuejs.org/zh/api/#addroute-1 */
    if (to.name === NOT_FOUNT_NAME) {
      const path =
        to.redirectedFrom?.name === ROOT_NAME
          ? '/'
          : to.fullPath
      next({
        path,
        replace: true,
        query: to.query,
        hash: to.hash
      })
      return false
    }
  }

  /** 路由加载完成后 依旧未找到页面 定位到404 */
  if (to.name === NOT_FOUNT_NAME) {
    next({ name: '404', replace: true })
    return false
  }

  return true
}
