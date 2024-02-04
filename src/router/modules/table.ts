import { BasicLayout } from '@/layout'

const moduleName = 'Table'

const routes: RouteRecordRaw[] = [
  {
    path: '/table',
    name: 'Table',
    redirect: '/table/basic',
    component: BasicLayout,
    meta: {
      title: 'routes.table.index',
      icon: 'material-symbols:table',
      order: 1
    },
    children: [
      {
        path: 'basic',
        name: `${moduleName}Basic`,
        component: () =>
          import('@/views/table/basic/index.vue'),
        meta: {
          requiresAuth: true,
          title: 'routes.table.basic',
          icon: 'mdi:table-cog'
        }
      }
    ]
  }
]

export default routes
