import BasicLayout from '@/layouts/basicLayout'

const dashboard = {
    path: '/dashboard',
    name: 'Dashboard',
    component: BasicLayout,
    redirect: '/dashboard/index',
    meta: {
        title: '主控页'
    },
    children: [
        {
            path: 'index',
            name: 'Index',
            component: () => import('@/views/dashboard/index'),
            meta: { title: '主控页' }
        }
    ]
}

export default dashboard
