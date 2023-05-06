import { RouteRecordRaw } from 'vue-router'
import { BasicLayout } from '@/layout'

const routeName = 'Document'

const routes: RouteRecordRaw[] = [
  {
    path: '/document',
    name: routeName,
    redirect: '/document/vue',
    component: BasicLayout,
    meta: {
      title: '文档',
      icon: 'line-md:document-list'
    },
    children: [
      {
        path: 'vue',
        name: `${routeName}Vue`,
        component: () =>
          import('@/views/document/vue/index.vue'),
        meta: {
          requiresAuth: true,
          title: 'Vue文档',
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
          title: 'Vite文档',
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
          title: 'NaiveUI文档',
          icon: 'logos:naiveui'
        }
      }
    ]
  }
]

export default routes
