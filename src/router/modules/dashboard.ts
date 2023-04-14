import { RouteRecordRaw } from 'vue-router'
import { BasicLayout } from '@/layout'
import { DashboardOutlined } from '@vicons/antd'
import { renderIcon } from '@/utils'

const moduleName = 'Dashboard'

const routes: RouteRecordRaw[] = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    redirect: '/dashboard/console',
    component: BasicLayout,
    meta: {
      title: '控制台',
      icon: renderIcon(DashboardOutlined)
    },
    children: [
      {
        path: 'console',
        name: `${moduleName}Console`,
        component: () => import('@/views/dsahboard/console.vue'),
        meta: {
          requiresAuth: true,
          title: '主控台'
        }
      },
      {
        path: 'workplace',
        name: `${moduleName}Workplace`,
        component: () => import('@/views/dsahboard/workplace.vue'),
        meta: {
          requiresAuth: true,
          title: '工作台'
        }
      }
    ]
  }
]

export default routes
