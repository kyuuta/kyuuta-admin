import { RouteRecordRaw } from 'vue-router'
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
  component: () => import('@/components/PageStatus/notFound.vue'),
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
      title: '登录'
    }
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/components/PageStatus/404.vue'),
    meta: {
      title: '404'
    }
  }
]

export default [RootRoute, ...ConstantRoute, ErrorPage]
