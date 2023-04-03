import { storeToRefs } from 'pinia'
import { useMenuStore } from '@/store'

export function useMenu() {
  const menuStore = useMenuStore()

  const { 
    setCollapse,
    setCollpaseType,
    setCollpasedWidth
  } = menuStore

  const {
    collapse,
    collpaseType,
    collapsedWidth
  } = storeToRefs(menuStore)

  return {
    collapse,
    collpaseType,
    collapsedWidth,
    setCollapse,
    setCollpaseType,
    setCollpasedWidth
  }
}
