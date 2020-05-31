const dashboard = [
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '主控页' }
    }
]

export default dashboard
