import type {
  NavigationGuardNext,
  RouteLocationNormalized
} from 'vue-router'
import { useRouteStore } from '@/store'

/**
 * 动态路由
 */
export async function createDynamicRouteGuard(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) {
  const route = useRouteStore()

  // 初始化路由权限
  if (!route.isInitAuthRoute) {
    // TODO:if(!isLogin) {
      // 判断是否需要登录访问的页面 
      // 未登录跳转登录页面
    // }

    // TODO:挂载异步路由
    // await route.initAuthRoute()

    // TODO:处理404
  }

  return true
}