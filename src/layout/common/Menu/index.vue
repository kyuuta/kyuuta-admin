<template>
  <NMenu
    key-field="name"
    :mode="mode"
    :collapsed="collapsed"
    :collapsedWidth="60"
    :collapsedIconSize="22"
    :rootIndent="14"
    :indent="20"
    :expandedKeys="expandedKeys"
    :value="activeRouteName"
    :options="
      theme.layoutMode === 'horizontal-mix'
        ? getActiveMenuChild(
            activeRouteName,
            routeStore.menu
          )
        : routeStore.menu
    "
    :renderIcon="(menu: RouteRecordRaw) => iconRender(menu.meta)()"
    :renderLabel="(menu: RouteRecordRaw) => t(menu.meta?.title)"
    @update:value="menuClick"
    @update:expanded-keys="(keys: Array<string>) => (expandedKeys = keys)"
  />
</template>

<script lang="ts" setup>
import type { RouteRecordRaw } from 'vue-router'
import {
  getActiveKeyPathsOfMenus,
  getActiveMenuChild
} from '@/utils'

defineProps<{
  collapsed: boolean
  mode: 'vertical' | 'horizontal'
}>()

const { t } = useI18n()
const route = useRoute()
const theme = useThemeStore()
const routeStore = useRouteStore()
const { routerPush } = useRouterPush()
const { iconRender } = useIconRender()

const expandedKeys = ref<string[]>([])
const activeRouteName = computed(
  () =>
    (route.meta?.activeMenu
      ? route.meta.activeMenu
      : route.name) as string
)
const menuClick = (name: string) => {
  routerPush({ name })
  theme.setSiderDrawerVisible(false)
}

watch(
  () => route.name,
  () => {
    expandedKeys.value = getActiveKeyPathsOfMenus(
      activeRouteName.value,
      routeStore.menu
    ).concat(
      theme.menuConfig.accordion ? [] : expandedKeys.value
    )
  },
  { immediate: true }
)
</script>
