import { constantRouterMap, asyncRouterMap } from '@/router/routerMap'

/**
 * 若修改过滤条件 请改此处
 * 目前是若该路由的permission写了多个 只要有一项权限没有拥有则过滤
 * 可改为some调整逻辑 拥有某一个权限即不过滤
 *
 * @param {Array} permission 用户权限列表
 * @param {Object} route 路由信息
 * @returns {Boolean} 是否应该过滤
 */
function hasPermission(permission, route) {
    if (route.meta && route.meta.permission) {
        return route.meta.permission.every(permissionId => {
            return permission.includes(permissionId)
        })
    }
    return true
}

/**
 * 过滤路由表
 *
 * @param {Array} routerMap 需要过滤的路由菜单
 * @param {Object} roles 用户权限信息
 * @returns {Array} 过滤后的路由表
 */
function filterAsyncRouter(routerMap, roles) {
    const accessedRouters = routerMap.filter(route => {
        if (hasPermission(roles.permissionList, route)) {
            if (route.children && route.children.length) {
                route.children = filterAsyncRouter(route.children, roles)
            }
            return true
        }
        return false
    })
    return accessedRouters
}

export default {
    state: {
        routers: constantRouterMap,
        addRouters: []
    },

    mutations: {
        SET_ROUTERS: (state, routers) => {
            state.addRouters = routers
            state.routers = constantRouterMap.concat(routers)
        }
    },

    actions: {
        GenerateRoutes({ commit }, data) {
            return new Promise(resolve => {
                const { roles } = data
                const accessedRouters = filterAsyncRouter(asyncRouterMap, roles)
                commit('SET_ROUTERS', accessedRouters)
                resolve()
            })
        }
    }
}
