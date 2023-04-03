import { defineStore } from 'pinia'
import { MenuConfig } from '@/config/theme'

type MenuState = Menu.Setting

export const useMenuStore = defineStore({
  id: 'MenuStore',
  state: (): MenuState => MenuConfig,
  actions: {
    setCollapse(collapse: boolean) {
      this.collapse = collapse
    },
    setCollpaseType(type: Menu.MenuCollpaseType) {
      console.log(type)
      this.collpaseType = type
    },
    setCollpasedWidth(width: number) {
      this.collapsedWidth = width
    }
  }
})

