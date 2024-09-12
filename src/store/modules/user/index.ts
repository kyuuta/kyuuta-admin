import { defineStore } from 'pinia'
import { getToken } from './helpers'
import { localStorage } from '@/utils'
import { pwdLogin, getUserDetail } from '@/service/api/user'

export interface IUserState {
  token: string
  userName: string
  userInfo?: Auth.UserInfo
}

export const useUserStore = defineStore({
  id: 'UserStore',
  state: (): IUserState => ({
    token: getToken(),
    userName: 'kyuuta',
    userInfo: undefined
  }),
  getters: {
    isLogin(state): boolean {
      return Boolean(state.token)
    },
    getToken(): string {
      return this.token
    }
  },
  actions: {
    setToken(token: string) {
      this.token = token
      localStorage.set('token', token)
    },
    async login(loginForm: {
      username: string
      password: string
      code: string
    }) {
      try {
        const response = await pwdLogin()
        this.setToken(response as string)
        await this.handleAfterLogin(response as string)
        return Promise.resolve(response)
      } catch (e) {
        return Promise.reject(e)
      }
    },
    async handleAfterLogin(token: string) {
      const route = useRouteStore()
      const { toLoginRedirect } = useRouterPush(false)

      await this.getUserInfo()
      await route.initAuthRoute()

      toLoginRedirect()

      window.$notification?.success({
        title: '登录成功',
        content: `${this.userName},欢迎登录!`,
        duration: 2000
      })

      return Promise.resolve()
    },
    getUserInfo() {
      return new Promise((resolve, reject) => {
        getUserDetail()
          .then((res) => {
            this.userInfo = res
            this.userName = res.name
            resolve(res)
          })
          .catch((e) => {
            reject(e)
          })
      })
    },
    resetUserStore() {
      const { toLogin } = useRouterPush(false)

      this.$reset()
      localStorage.remove('token')

      toLogin()
    }
  }
})
