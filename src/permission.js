import router from './router'
import NProgress from 'nprogress'
import '@/components/NProgress/nprogress.less' // progress bar custom style
import config from '@/config'
import {
    pendingRequestList
} from '@/utils/request'

router.beforeEach((to, from, next) => {
    NProgress.start()

    if (pendingRequestList.length) {
        pendingRequestList.forEach(item => {
            item.routeChangeCancel && item.cancel()
        })
    }

    if (config.routeWhiteList.includes(to.name)) {
        next()
    }

    next()
})

router.afterEach(() => {
    NProgress.done()
})
