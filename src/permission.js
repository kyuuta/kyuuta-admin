import store from './store'
import router from './router'
import NProgress from 'nprogress'
import notification from 'ant-design-vue/es/notification'
import '@/components/NProgress/nprogress.less' // progress bar custom style
import confing from '@/config'
import { setDocumentTitle, domTitle } from '@/utils/domUtil'
import { pendingRequestList } from '@/utils/request'
import { i18nRender } from '@/locales'

router.beforeEach((to, from, next) => {
    NProgress.start()

    to.meta && (typeof to.meta.title !== 'undefined' &&
        setDocumentTitle(`${i18nRender(to.meta.title)} - ${domTitle}`)
    )

    // 跳转取消未完成的http请求
    if (pendingRequestList.length) {
        pendingRequestList.forEach(item => {
            item.routeChangeCancel && item.cancel()
        })
    }

    if (localStorage.getItem('token')) {
        if (to.path === confing.loginRoutePath) {
            next({
                path: confing.defaultRoutePath
            })
            NProgress.done()
        } else {
            if (Object.keys(store.getters.roles).length === 0) {
                // 权限
                store
                    .dispatch('GetUserInfo')
                    .then(res => {
                        const roles = res.result && res.result.role
                        store.dispatch('GenerateRoutes', { roles }).then(() => {
                            router.addRoutes(store.getters.addRouters)
                        })
                    })
                    .catch(() => {
                        notification.error({
                            message: '错误',
                            description: '请求用户信息失败，请重试'
                        })
                        // 失败时，获取用户信息失败时，调用登出，来清空历史保留信息
                        // store.dispatch('Logout').then(() => {
                        //     next({ path: loginRoutePath, query: { redirect: to.fullPath }})
                        // })
                        next()
                    })
            } else {
                next()
            }
        }
    } else {
        if (confing.routeWhiteList.includes(to.name)) {
            next()
        } else {
            next({
                path: confing.loginRoutePath,
                query: {
                    redirect: to.fullPath
                }
            })
            NProgress.done()
        }
    }

    next()
})

router.afterEach(() => {
    NProgress.done()
})
