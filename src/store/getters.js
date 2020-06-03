const getters = {
    layoutConfig: state => state.layoutConfig,
    roles: state => state.user.roles,
    addRouters: state => state.permission.addRouters
}
export default getters
