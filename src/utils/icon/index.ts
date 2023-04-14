import { h } from 'vue'
import { NIcon } from 'naive-ui'
import type { Component } from 'vue'

/**
 *
 * @param icon
 * @returns component
 */
export function renderIcon(
  icon: Component,
  props: Object = {
    size: '20'
  }
) {
  return () => h(NIcon, props, { default: () => h(icon) })
}
