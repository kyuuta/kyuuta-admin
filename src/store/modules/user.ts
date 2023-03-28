import { defineStore } from "pinia"
export interface IUserState {
  token: string
  userName: string,
  role: string
}                                

export const useUserStore = defineStore({
  id: 'appUser',
  state: (): IUserState => ({
    token: '',
    userName: 'kyuuta',
    role: 'super'
  }),
  getters: {
    getUserName(): string {
      return this.userName
    }
  },
  actions: {
    setUserName(userName: string) {
      this.userName = userName
    }
  }
})
