import { BasicLayout } from '@/layout'
import type { RouteRecordRaw } from 'vue-router'

const routeName = 'Document'

const routes: RouteRecordRaw[] = [
  {
    path: '/document',
    name: routeName,
    redirect: '/document/vue',
    component: BasicLayout,
    meta: {
      title: 'routes.document.index',
      icon: 'line-md:document-list',
      order: 3
    },
    children: [
      {
        path: 'vue',
        name: `${routeName}Vue`,
        component: () =>
          import('@/views/document/vue/index.vue'),
        meta: {
          requiresAuth: true,
          title: 'routes.document.vue',
          icon: 'vscode-icons:file-type-vue'
        }
      },
      {
        path: 'vite',
        name: `${routeName}Vite`,
        component: () =>
          import('@/views/document/vite/index.vue'),
        meta: {
          requiresAuth: true,
          title: 'routes.document.vite',
          icon: 'vscode-icons:file-type-vite'
        }
      },
      {
        path: 'naive',
        name: `${routeName}Naive`,
        component: () =>
          import('@/views/document/naive/index.vue'),
        meta: {
          requiresAuth: true,
          title: 'routes.document.naive',
          icon: 'logos:naiveui'
        }
      },
      {
        path: 'iconify',
        name: `${routeName}Iconify`,
        component: () =>
          import('@/views/document/iconify/index.vue'),
        meta: {
          requiresAuth: true,
          title: 'Iconify',
          icon: 'line-md:iconify1'
        }
      }
    ]
  }
]

export default routes
