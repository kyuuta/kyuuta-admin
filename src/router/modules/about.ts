import { BasicLayout } from '@/layout'
import type { RouteRecordRaw } from 'vue-router'

const moduleName = 'About'

const routes: RouteRecordRaw[] = [
  {
    path: '/about',
    name: moduleName,
    component: BasicLayout,
    redirect: '/about/index',
    meta: {
      title: 'routes.about.index',
      icon: 'mdi:about',
      order: 4
    },
    children: [
      {
        path: 'index',
        name: `${moduleName}Index`,
        component: () => import('@/views/about/index.vue'),
        meta: {
          hide: true,
          title: 'routes.about.index',
          icon: 'mdi:about'
        }
      }
    ]
  }
]

export default routes
