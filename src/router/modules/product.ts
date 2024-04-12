import { RouteRecordRaw } from 'vue-router'
import { BasicLayout } from '@/layout'

const routeName = 'Product'

const routes: RouteRecordRaw[] = [
  {
    path: '/product',
    name: routeName,
    redirect: '/product/index',
    component: BasicLayout,
    meta: {
      title: 'routes.product.index',
      icon: 'icon-park-outline:ad-product',
      order: 2
    },
    children: [
      {
        path: 'index',
        name: `${routeName}Index`,
        component: () =>
          import('@/views/product/index.vue'),
        meta: {
          requiresAuth: true,
          title: 'routes.product.list',
          icon: 'streamline:shopping-bag-hand-bag-1-shopping-bag-purse-goods-item-products'
        }
      },
      {
        path: 'detail',
        name: `${routeName}Detail`,
        component: () =>
          import('@/views/product/detail/index.vue'),
        meta: {
          requiresAuth: true,
          title: 'routes.product.detail',
          icon: 'icon-park-outline:ad-product'
        }
      }
    ]
  }
]

export default routes
