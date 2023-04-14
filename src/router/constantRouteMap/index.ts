import { RouteRecordRaw } from 'vue-router'
import { PageConfig } from '@/config/page'

export const RootRoute: RouteRecordRaw = {
  path: '/',
  name: 'Root',
  redirect: PageConfig.BASE_HOME
}

export const ConstantRoute: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
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
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/components/PageStatus/notFound.vue'),
    meta: {
      title: '找不到页面'
    }
  }
]

export default [RootRoute, ...ConstantRoute]
