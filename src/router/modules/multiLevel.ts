import { BasicLayout, ParentLayout } from '@/layout'

const moduleName = 'MultiLevel'

const routes: RouteRecordRaw[] = [
  {
    path: '/multiLevel',
    name: moduleName,
    redirect: '/multiLevel/menu1',
    component: BasicLayout,
    meta: {
      title: 'routes.multiLevel.index',
      icon: 'icon-park-twotone:multi-rectangle',
      order: 2
    },
    children: [
      {
        path: 'menu1',
        name: `${moduleName}Menu1`,
        component: () =>
          import('@/views/multiLevel/cachePage.vue'),
        meta: {
          requiresAuth: true,
          keepAlive: true,
          title: 'menu1',
          icon: 'heroicons-outline:menu-alt-2'
        }
      },
      {
        path: 'menu2',
        name: `${moduleName}Menu2`,
        component: ParentLayout,
        redirect: '/multiLevel/menu2',
        meta: {
          requiresAuth: true,
          title: 'menu2',
          icon: 'heroicons-outline:menu-alt-2'
        },
        children: [
          {
            path: 'menu2-1',
            name: `${moduleName}Menu2-1`,
            component: ParentLayout,
            redirect: '/multiLevel/menu2-1/menu2-1-1',
            meta: {
              requiresAuth: true,
              title: 'menu2-1',
              icon: 'heroicons-outline:menu-alt-2'
            },
            children: [
              {
                path: 'menu2-1-1',
                name: `${moduleName}Menu2-1-1`,
                component: () =>
                  import(
                    '@/views/multiLevel/cachePage.vue'
                  ),
                meta: {
                  requiresAuth: true,
                  keepAlive: true,
                  title: 'menu2-1-1',
                  icon: 'heroicons-outline:menu-alt-2'
                }
              },
              {
                path: 'menu2-1-2',
                name: `${moduleName}Menu2-1-2`,
                component: () =>
                  import(
                    '@/views/multiLevel/nonCachePage.vue'
                  ),
                meta: {
                  requiresAuth: true,
                  title: 'menu2-1-2',
                  icon: 'heroicons-outline:menu-alt-2'
                }
              }
            ]
          },
          {
            path: 'menu2-2',
            name: `${moduleName}Menu2-2`,
            component: () =>
              import('@/views/multiLevel/cachePage.vue'),
            meta: {
              requiresAuth: true,
              keepAlive: true,
              title: 'menu2-2',
              icon: 'heroicons-outline:menu-alt-2'
            }
          }
        ]
      }
    ]
  }
]

export default routes
