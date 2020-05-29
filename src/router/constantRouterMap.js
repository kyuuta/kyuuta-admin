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
    }
]
