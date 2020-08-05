import { RouteView } from '@/layouts'

const form = [
    {
        path: '/form',
        name: 'Form',
        component: RouteView,
        redirect: '/form/basic-form',
        meta: {
            icon: 'form',
            title: 'menu.form',
            permission: ['form']
        },
        children: [
            {
                path: '/form/basic-form',
                name: 'BasicForm',
                meta: {
                    title: 'menu.form.basicForm',
                    keepAlive: true,
                    permission: ['form']
                }
            },
            {
                path: '/form/advanced-form',
                name: 'AdvancedForm',
                meta: {
                    title: 'menu.form.advancedForm',
                    permission: ['form']
                }
            },
            {
                path: '/form/step-form',
                name: 'StepForm',
                meta: {
                    title: 'menu.form.stepForm',
                    permission: ['form']
                }
            },
            {
                path: '/form/detail-form',
                name: 'DetailForm',
                meta: {
                    title: 'menu.form.detailForm',
                    permission: ['form']
                }
            }
        ]
    }
]

export default form
