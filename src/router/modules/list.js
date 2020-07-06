import { RouteView } from '@/layouts'

const list = [
    {
        path: '/list',
        name: 'List',
        component: RouteView,
        redirect: '/list/table-list',
        meta: {
            icon: 'dashboard',
            title: 'List',
            permission: ['table']
        },
        children: [
            {
                path: '/list/table-list',
                name: 'TableList',
                component: () => import('@/views/list/tableList'),
                meta: {
                    title: '查询表格',
                    keepAlive: true,
                    permission: ['table']
                }
            }
        ]
    }
]

export default list
