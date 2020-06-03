const dashboard = [
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/index'),
        meta: {
            title: '主控页',
            permission: ['dashboard']
        }
    }
]

export default dashboard
