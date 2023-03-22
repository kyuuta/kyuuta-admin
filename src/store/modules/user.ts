import { defineStore } from "pinia"

export interface IUserState {
  userName: string
}                                

export const useUserStore = defineStore({
  id: 'appUser',
  state: (): IUserState => ({
    userName: 'kyuuta',
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
