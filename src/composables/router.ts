import { useRouter } from 'vue-router'
import type { RouteLocationRaw } from 'vue-router'
import globalRouter from '@/router'

/**
 * 路由跳转
 * @params inSetup - 是否在vue页面/组件的setup里面调用，在axios里面无法使用useRouter和useRoute
 */
export function useRouterPush(inSetup = true) {
  const router = inSetup ? useRouter() : globalRouter
  const route = globalRouter.currentRoute

  function routerPush(
    to: RouteLocationRaw,
    newTab = false
  ) {
    if (newTab) {
      const routerData = router.resolve(to)
      window.open(routerData.href, '_blank')
      return Promise.resolve()
    }
    return router.push(to)
  }

  function routerBack() {
    router.go(-1)
  }

  function toHome(newTab = false) {
    routerPush({ name: 'Root' }, newTab)
  }

  function toLoginRedirect() {
    const { query } = route.value
    if (query?.redirect) {
      routerPush(query.redirect as string)
    } else {
      toHome()
    }
  }

  return {
    toHome,
    routerBack,
    routerPush,
    toLoginRedirect
  }
}
