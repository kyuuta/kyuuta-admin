import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

const moduleName = 'dashboard'

const routes: RouteRecordRaw[] = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    redirect: '/dashboard/console',
    component: Layout,
    children: [
      {
        path: 'console',
        name: `${moduleName}Console`,
        component: () => import('@/views/dsahboard/console.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'workplace',
        name: `${moduleName}Workplace`,
        component: () => import('@/views/dsahboard/workplace.vue'),
        meta: {
          requiresAuth: true
        }
      }
    ]
  }
]

export default routes