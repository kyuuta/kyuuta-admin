import type { RouteRecordRaw } from 'vue-router'
import { PageConfig } from '@/config/page'
import { BasicLayout } from '@/layout'

export const RootRoute: RouteRecordRaw = {
  path: PageConfig.ROOT,
  name: PageConfig.ROOT_NAME,
  redirect: PageConfig.BASE_HOME
}

export const ErrorPage: RouteRecordRaw = {
  path: '/:pathMatch(.*)*',
  name: 'NotFound',
  component: () =>
    import('@/components/PageStatus/notFound.vue'),
  meta: {
    title: '找不到页面'
  }
}

export const ConstantRoute: RouteRecordRaw[] = [
  {
    path: PageConfig.BASE_LOGIN,
    name: PageConfig.BASE_LOGIN_NAME,
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: 'routes.login.index'
    }
  },
  {
    path: '/404',
    name: 'ErrorPage',
    redirect: '/404/page',
    component: BasicLayout,
    meta: {
      title: '404',
      hideBreadcrumb: true
    },
    children: [
      {
        path: 'page',
        name: PageConfig.ERROR_PAGE_NAME,
        component: () =>
          import('@/components/PageStatus/404.vue'),
        meta: {
          title: '404',
          hideBreadcrumb: true
        }
      }
    ]
  }
]

export default [RootRoute, ...ConstantRoute, ErrorPage]
