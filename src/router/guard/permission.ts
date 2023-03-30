import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import { PageConfig } from '@/config/page'
import { createDynamicRouteGuard } from './dynamic'
import { exeStrategyActions, localStorage } from '@/utils'

/** 路由跳转逻辑 */
export async function createPermissionGuard(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) {
  const permission = await createDynamicRouteGuard(to, from, next)
  if (!permission) return

  const { 
    href,
    requiresAuth = false,
    permissions = []
  } = to?.meta

  // 处理外链
  if (href) {
    window.open(href as string)
    next({ path: from.fullPath, replace: true, query: from.query })
    return
  }

  const { name, fullPath } = to
  const { ROOT_NAME, BASE_LOGIN_NAME } = PageConfig
  const needLogin = Boolean(requiresAuth) || Boolean(permissions.length)
  const isLogin = Boolean(localStorage.get('token'))

  const actions: Common.StrategyAction[] = [
    // 已登录状态跳转登录页，跳转至首页
    [
      isLogin && name === BASE_LOGIN_NAME,
      () => {
        next({ name: ROOT_NAME })
      }
    ],
    // 不需要登录权限的页面直接通行
    [
      !needLogin,
      () => {
        next()
      }
    ],
    // 未登录状态进入需要登录权限的页面
    [
      !isLogin && needLogin,
      () => {
        next({ name: BASE_LOGIN_NAME, query: { redirect: fullPath } })
      }
    ],
    // 登录状态进入需要登录权限的页面，有权限直接通行
    [
      isLogin && needLogin,
      () => {
        next()
      }
    ],
    // 登录状态进入需要登录权限的页面，无权限，重定向到无权限页面
    // [
    //   isLogin && needLogin && !hasPermission,
    //   () => {
    //     next({ name: '403' });
    //   }
    // ]
  ]

  exeStrategyActions(actions)
}
