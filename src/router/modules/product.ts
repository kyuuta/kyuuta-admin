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
      title: '商品',
      icon: 'icon-park-outline:ad-product'
    },
    children: [
      {
        path: 'index',
        name: `${routeName}Index`,
        component: () =>
          import('@/views/product/index.vue'),
        meta: {
          requiresAuth: true,
          title: '商品列表',
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
          title: '商品详情',
          icon: 'icon-park-outline:ad-product'
        }
      }
    ]
  }
]

export default routes
