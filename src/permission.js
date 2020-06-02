import store from './store'
import router from './router'
import NProgress from 'nprogress'
import '@/components/NProgress/nprogress.less' // progress bar custom style
import config from '@/config'
import {
    pendingRequestList
} from '@/utils/request'

const loginRoutePath = '/login'
const defaultRoutePath = '/dashboard'

router.beforeEach((to, from, next) => {
    NProgress.start()

    // 跳转取消未完成的http请求
    if (pendingRequestList.length) {
        pendingRequestList.forEach(item => {
            item.routeChangeCancel && item.cancel()
        })
    }

    if (localStorage.getItem('token')) {
        if (to.path === loginRoutePath) {
            next({
                path: defaultRoutePath
            })
            NProgress.done()
        } else {
            // 权限
            store
                .dispatch('GetUserInfo')
                .then(res => {
                    console.log(res)
                })
                .catch(err => {
                    console.log(err)
                })
                .finally(() => {
                    next()
                })
        }
    } else {
        if (config.routeWhiteList.includes(to.name)) {
            next()
        } else {
            next({
                path: loginRoutePath,
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
