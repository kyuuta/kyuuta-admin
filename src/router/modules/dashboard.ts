import { BasicLayout } from '@/layout'

const moduleName = 'Dashboard'

const routes: RouteRecordRaw[] = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    redirect: '/dashboard/console',
    component: BasicLayout,
    meta: {
      title: 'routes.dashboard.index',
      icon: 'mdi-light:console',
      order: 0
    },
    children: [
      {
        path: 'console',
        name: `${moduleName}Console`,
        component: () =>
          import('@/views/dsahboard/console.vue'),
        meta: {
          requiresAuth: true,
          title: 'routes.dashboard.console',
          icon: 'material-symbols:control-camera'
        }
      },
      {
        path: 'workplace',
        name: `${moduleName}Workplace`,
        component: () =>
          import('@/views/dsahboard/workplace.vue'),
        meta: {
          requiresAuth: true,
          title: 'routes.dashboard.workplace',
          icon: 'material-symbols:work-outline'
        }
      }
    ]
  }
]

export default routes
