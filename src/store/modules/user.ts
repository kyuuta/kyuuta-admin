import { defineStore } from "pinia"
import { store } from '@/store'

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

// Need to be used outside the setup
export function useUserStoreWidthOut() {
  return useUserStore(store);
}
