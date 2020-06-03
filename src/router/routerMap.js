import asyncRoutes from './modules/index'
import BasicLayout from '@/layouts/basicLayout'

/*
 *  constantRoutes
 *  a base page that does not have permission requirements
 *  all roles can be accessed
 */

export const constantRouterMap = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "user" */ '@/views/login/index')
    },
    {
        path: '/404',
        component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
    }
]

export const asyncRouterMap = [
    {
        path: '',
        component: BasicLayout,
        redirect: '/dashboard',
        children: [
            ...asyncRoutes
        ]
    }
]
