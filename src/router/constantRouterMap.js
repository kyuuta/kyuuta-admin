import asyncRoutes from './modules/index'
import BasicLayout from '@/layouts/basicLayout'

/*
 *  constantRoutes
 *  a base page that does not have permission requirements
 *  all roles can be accessed
 */

export default [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/login/index')
    },
    {
        path: '',
        component: BasicLayout,
        redirect: '/dashboard',
        children: [
            ...asyncRoutes
        ]
    }
]
