/**
 * @property {Number} cookieExpires    - token在Cookie中存储的天数，默认1天
 * @property {Number} requestTimeOut   - api请求超时时间
 * @property {String} baseUrl          - axios请求的baseUrl dev开发 pro为生产
 * @property {Array}  routeWhiteList   - 路由白名单 以路由name判断
 * @property {String} loginRoutePath   - 登录页面的路由path
 * @property {String} defaultRoutePath - 默认打开的首页的路由path
 * @property {String} title            - 项目默认title
 */
export default {
    baseUrl: {
        // easymock
        // dev: 'https://www.easy-mock.com/mock/5ed3df0a3432d25bb5ec4a6b/kyuuta-admin',
        // pro: 'https://www.easy-mock.com/mock/5ed3df0a3432d25bb5ec4a6b/kyuuta-admin'
        // mock
        dev: '/api',
        pro: '/api'
    },
    title: 'KYUUTA Admin',
    cookieExpires: 1,
    requestTimeOut: 15000,
    routeWhiteList: ['Login'],
    loginRoutePath: '/login',
    defaultRoutePath: '/dashboard'
}
