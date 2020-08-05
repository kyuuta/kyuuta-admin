const getters = {
    lang: state => state.layoutConfig.lang,
    roles: state => state.user.roles,
    layoutConfig: state => state.layoutConfig,
    cachePage: state => state.config.cachePage,
    addRouters: state => state.permission.addRouters
}
export default getters
