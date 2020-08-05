import { RouteView } from '@/layouts'

const profile = [
    {
        path: '/profile',
        name: 'Profile',
        component: RouteView,
        redirect: '/profile/basic',
        meta: {
            icon: 'profile',
            title: '详情页面',
            permission: ['profile']
        },
        children: [
            {
                path: '/profile/basic',
                name: 'BasicProfile',
                meta: {
                    title: '基础详情页',
                    keepAlive: true,
                    permission: ['profile']
                }
            },
            {
                path: '/profile/advanced',
                name: 'AdvancedProfile',
                meta: {
                    title: '高级详情页',
                    permission: ['profile']
                }
            }
        ]
    }
]

export default profile
