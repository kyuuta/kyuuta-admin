import {
    userLogin,
    getUserInfo
} from '@/api/login'

export default {
    state: {
        token: '',
        name: '',
        avatar: '',
        roles: []
    },

    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token
        },
        SET_NAME: (state, name) => {
            state.name = name
        },
        SET_AVATAR: (state, avatar) => {
            state.avatar = avatar
        },
        SET_ROLES: (state, roles) => {
            state.roles = roles
        },
        SET_INFO: (state, info) => {
            state.info = info
        }
    },

    actions: {
        // 登录
        Login({ commit }, params) {
            return new Promise((resolve, reject) => {
                userLogin(params)
                    .then(res => {
                        localStorage.setItem('token', res.result.token)
                        commit('SET_TOKEN', res.result.token)
                        resolve(res)
                    }).catch(err => {
                        reject(err)
                    })
            })
        },
        // 获取用户信息
        GetUserInfo({ commit }) {
            return new Promise((resolve, reject) => {
                getUserInfo()
                    .then(res => {
                        const result = res.result
                        if (result.role && result.role.permissions.length) {
                            // 页面权限
                            result.role.permissionList = result.role.permissions.map(item => {
                                return item.permissionId
                            })
                            // 页面按钮操作权限
                            result.role.permissions.forEach(item => {
                                if (item.actionEntitySet && item.actionEntitySet.length) {
                                    item.actionList = item.actionEntitySet.map(action => {
                                        return action.action
                                    })
                                }
                            })

                            commit('SET_ROLES', result.role)
                            commit('SET_INFO', result)
                        } else {
                            reject(
                              new Error(
                                'userInfo: roles must be a non-null array !'
                              )
                            )
                        }

                        commit('SET_NAME', result.name)
                        commit('SET_AVATAR', result.avatar)
                        resolve(res)
                    }).catch(err => {
                        reject(err)
                    })
            })
        }
    }
}
