import { hasIn, update } from 'lodash-es'
import type { App, Directive } from 'vue'

export default function setupPermissionDirective(app: App) {
  const { hasPermission } = usePermissions()

  function updateElVisible(
    el: HTMLElement,
    permission: string | string[]
  ) {
    if (!permission) {
      throw new Error(
        `need roles: like v-permission="['order', 'admin', ...]" or v-permission="'order'"`
      )
    }

    if (!hasPermission(permission)) {
      el.parentElement?.removeChild(el)
    }
  }

  const permissionDirective: Directive<
    HTMLElement,
    string | string[]
  > = {
    mounted(el, binding) {
      updateElVisible(el, binding.value)
    },
    beforeUpdate(el, binding) {
      updateElVisible(el, binding.value)
    }
  }

  app.directive('permission', permissionDirective)
}
