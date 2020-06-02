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
                        console.log(err)
                        reject(err)
                    })
            })
        },
        // 获取用户信息
        GetUserInfo({ commit }) {
            console.log('store/getuserInfo')
            return new Promise((resolve, reject) => {
                getUserInfo()
                    .then(res => {
                        // roles
                        // info
                        resolve(res)
                    }).catch(err => {
                        reject(err)
                    })
            })
        }
    }
}
