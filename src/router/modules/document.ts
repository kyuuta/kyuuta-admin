import { RouteRecordRaw } from 'vue-router'
import { BasicLayout } from '@/layout'
import { renderIcon } from '@/utils'
import { DashboardOutlined } from '@vicons/antd'

const routeName = 'Document'

const routes: RouteRecordRaw[] = [
  {
    path: '/document',
    name: routeName,
    redirect: '/document/vue',
    component: BasicLayout,
    meta: {
      title: '文档',
      icon: renderIcon(DashboardOutlined)
    },
    children: [
      {
        path: 'vue',
        name: `${routeName}Vue`,
        component: () =>
          import('@/views/document/vue/index.vue'),
        meta: {
          requiresAuth: true,
          title: 'Vue文档'
        }
      },
      {
        path: 'naive',
        name: `${routeName}Naive`,
        component: () =>
          import('@/views/document/naive/index.vue'),
        meta: {
          requiresAuth: true,
          title: 'NaiveUI文档'
        }
      },
      {
        path: 'vite',
        name: `${routeName}Vite`,
        component: () =>
          import('@/views/document/vite/index.vue'),
        meta: {
          requiresAuth: true,
          title: 'Vite文档'
        }
      }
    ]
  }
]

export default routes
