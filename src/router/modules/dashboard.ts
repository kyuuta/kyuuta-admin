import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

const moduleName = 'dashboard'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    redirect: '/dashboard/console',
    component: Layout,
    children: [
      {
        path: 'console',
        name: `${moduleName}Console`,
        component: () => import('@/views/dsahboard/console.vue')
      },
      {
        path: 'workplace',
        name: `${moduleName}Workplace`,
        component: () => import('@/views/dsahboard/workplace.vue')
      }
    ]
  }
]

export default routes