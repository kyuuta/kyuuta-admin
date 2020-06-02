export default {
    /**
     * @description token在Cookie中存储的天数，默认1天
     */
    cookieExpires: 1,
    /**
     * @description api请求超时时间
     */
    requestTimeOut: 15000,
    /**
     * @description api请求基础路径
     */
    baseUrl: {
        // easymock
        // dev: 'https://www.easy-mock.com/mock/5ed3df0a3432d25bb5ec4a6b/kyuuta-admin',
        // pro: 'https://www.easy-mock.com/mock/5ed3df0a3432d25bb5ec4a6b/kyuuta-admin'
        // mock
        dev: '/api',
        pro: '/api'
    },
    /**
     * @description 默认打开的首页的路由name值，默认为home
     */
    homeName: 'home',
    /**
     * @description 路由白名单 以路由name判断
     */
    routeWhiteList: ['Login']
}
