import Vue from 'vue'
import Router from 'vue-router'
import {
    constantRouterMap
} from './routerMap'

// hack router push callback
const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

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
