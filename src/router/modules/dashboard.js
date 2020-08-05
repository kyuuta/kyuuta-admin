import { RouteView } from '@/layouts'

const dashboard = [
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: RouteView,
        redirect: '/dashboard/analysis',
        meta: {
            icon: 'dashboard',
            title: 'menu.dashboard',
            permission: ['dashboard']
        },
        children: [
            {
                path: '/dashboard/analysis',
                name: 'Analysis',
                component: () => import('@/views/dashboard/analysis'),
                meta: {
                    title: 'menu.dashboard.analysis',
                    keepAlive: true,
                    permission: ['dashboard']
                }
            },
            {
                path: '/dashboard/monitor',
                name: 'Monitor',
                meta: {
                    title: 'menu.dashboard.monitor',
                    permission: ['dashboard']
                }
            },
            {
                path: '/dashboard/workplace',
                name: 'Workplace',
                meta: {
                    title: 'menu.dashboard.workplace',
                    permission: ['dashboard']
                }
            }
        ]
    }
]

export default dashboard
