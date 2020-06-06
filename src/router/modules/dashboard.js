const dashboard = [
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/index'),
        meta: {
            title: 'Dashboard',
            permission: ['dashboard']
        }
    }
]

export default dashboard
