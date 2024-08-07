import { defineStore } from 'pinia'
import { getToken } from './helpers'
import { localStorage } from '@/utils'
import { pwdLogin } from '@/service/api/user'

export interface IUserState {
  token: string
  userName: string
  role: string
}

export const useUserStore = defineStore({
  id: 'UserStore',
  state: (): IUserState => ({
    token: getToken(),
    userName: 'kyuuta',
    role: 'super'
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
    resetUserStore() {
      const { toLogin } = useRouterPush(false)

      this.$reset()
      localStorage.remove('token')

      toLogin()
    },
    async login(loginForm: {
      username: string
      password: string
      code: string
    }) {
      const data = await pwdLogin()
      this.token = data as string
      localStorage.set('token', data)
      await this.handleAfterLogin(data as string)
    },
    async handleAfterLogin(token: string) {
      // const route = useRouteStore()
      const { toLoginRedirect } = useRouterPush(false)

      // await route.initAuthRoute()

      toLoginRedirect()

      window.$notification?.success({
        title: '登录成功',
        content: '测试成功',
        duration: 2000
      })

      return Promise.resolve()
    }
  }
})
