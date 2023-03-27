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
    component: () => import('@/views/login/index.vue')
  }
]

export default [
  RootRoute,
  ...ConstantRoute
]