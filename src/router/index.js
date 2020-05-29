import Vue from 'vue'
import Router from 'vue-router'
// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/*
 *  constantRoutes
 *  a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRouterMap = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/login/index')
    }
]

export const asyncRouets = []

const createRouter = () =>
    new Router({
        scrollBehavior(to, form, savedPosition) {
            if (savedPosition) {
                return savedPosition
            } else {
                const position = {}
                if (to.hash) position.selector = to.hash
                position.x = 0
                position.y = 0
                return position
            }
        },
        routes: constantRouterMap
    })

const router = createRouter()

export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher
}

export default router
