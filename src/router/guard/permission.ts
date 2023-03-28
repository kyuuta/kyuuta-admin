import type {
  NavigationGuardNext,
  RouteLocationNormalized
} from 'vue-router'
import { useUserStore } from '@/store'
import { PageConfig } from '@/config/page'
import { exeStrategyActions } from '@/utils'
// import { createDynamicRouteGuard } from './dynamic'

// TODO:根据constantRouteMap 生成白名单
const LOGIN_PATH = PageConfig.BASE_LOGIN_NAME
const WhiteList = [LOGIN_PATH]
/**
 * 跳转逻辑处理
 */
export async function createPermissionGuard(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) {


  // TODO:处理外链

  // TODO:挂载异步路由
  // await createDynamicRouteGuard(to, from, next)

  const userStore = useUserStore()
  const isLogin = userStore.token

  const actions: Common.StrategyAction[] = [
    // 白名单
    [
      WhiteList.includes(to.name as PageConfig),
      () => {
        next()
      }
    ],
    // 未登录并且未在白名单中
    [
      !isLogin && !WhiteList.includes(to.name as PageConfig),
      () => {
        const redirect = to.fullPath
        next({ name: 'Login', query: { redirect } })
      }
    ]
  ]

  exeStrategyActions(actions)
}