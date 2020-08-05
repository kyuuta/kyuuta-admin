import { RouteView } from '@/layouts'

const list = [
    {
        path: '/list',
        name: 'List',
        component: RouteView,
        redirect: '/list/table-list',
        meta: {
            icon: 'table',
            title: '列表页面',
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
            },
            {
                path: '/list/basic-list',
                name: 'BasicList',
                meta: {
                    title: '标准列表',
                    permission: ['table']
                }
            },
            {
                path: '/list/card-list',
                name: 'CardList',
                meta: {
                    title: '卡片列表',
                    permission: ['table']
                }
            },
            {
                path: '/list/search',
                name: 'SearchList',
                meta: {
                    title: '搜索列表',
                    permission: ['table']
                },
                component: RouteView,
                redirect: '/list/search/article',
                children: [
                    {
                        path: '/list/search/article',
                        name: 'Article',
                        meta: {
                            title: '搜索列表-文章',
                            permission: ['table']
                        }
                    },
                    {
                        path: '/list/search/project',
                        name: 'Project',
                        meta: {
                            title: '搜索列表-项目',
                            permission: ['table']
                        }
                    },
                    {
                        path: '/list/search/application',
                        name: 'Application',
                        meta: {
                            title: '搜索列表-应用',
                            permission: ['table']
                        }
                    }
                ]
            }
        ]
    }
]

export default list
