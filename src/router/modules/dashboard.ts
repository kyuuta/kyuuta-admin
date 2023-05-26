import { BasicLayout } from '@/layout'

const moduleName = 'Dashboard'

const routes: RouteRecordRaw[] = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    redirect: '/dashboard/console',
    component: BasicLayout,
    meta: {
      title: '控制台',
      icon: 'mdi-light:console'
    },
    children: [
      {
        path: 'console',
        name: `${moduleName}Console`,
        component: () =>
          import('@/views/dsahboard/console.vue'),
        meta: {
          requiresAuth: true,
          title: '主控台',
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
          title: '工作台',
          icon: 'material-symbols:work-outline'
        }
      },
      {
        path: 'detail/:id',
        name: `${moduleName}ConsoleDetail`,
        component: () =>
          import('@/views/dsahboard/detail.vue'),
        meta: {
          title: '测试详情',
          multiTab: true,
          hide: true,
          keepAlive: true,
          activeMenu: `${moduleName}`,
          icon: 'material-symbols:work-outline'
        }
      }
    ]
  }
]

export default routes
