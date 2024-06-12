import { BasicLayout, ParentLayout } from '@/layout'

const moduleName = 'Table'

const routes: RouteRecordRaw[] = [
  {
    path: '/table',
    name: moduleName,
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
      },
      {
        path: 'product',
        name: `${moduleName}Product`,
        component: ParentLayout,
        props: { name: `${moduleName}Product` },
        redirect: '/table/product/index',
        meta: {
          requiresAuth: true,
          title: 'routes.table.product',
          icon: 'icon-park-outline:ad-product'
        },
        children: [
          {
            path: 'index',
            name: `${moduleName}ProductIndex`,
            component: () =>
              import('@/views/table/product/index.vue'),
            meta: {
              requiresAuth: true,
              hide: true,
              title: 'routes.table.product',
              activeMenu: `${moduleName}Product`,
              icon: 'icon-park-outline:ad-product'
            }
          },
          {
            path: 'detail/:id',
            name: `${moduleName}ProductDetail`,
            component: () =>
              import('@/views/table/product/detail.vue'),
            meta: {
              hide: true,
              keepAlive: true,
              multiTab: true,
              activeMenu: `${moduleName}Product`
            }
          }
        ]
      }
    ]
  }
]

export default routes
