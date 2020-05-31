import router from './router'
import NProgress from 'nprogress'
import '@/components/NProgress/nprogress.less' // progress bar custom style
import config from '@/config'

router.beforeEach((to, from, next) => {
    NProgress.start()

    if (config.routeWhiteList.includes(to.name)) {
        next()
    }

    next()
})

router.afterEach(() => {
    NProgress.done()
})
