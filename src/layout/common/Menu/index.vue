<template>
  <NMenu
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
    @update:value="(name) => routerPush({ name })"
    @update:expanded-keys="(keys) => (expandedKeys = keys)"
  />
</template>

<script lang="ts" setup>
import { ref, watch, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useRouteStore, useThemeStore } from '@/store'
import { useRouterPush } from '@/composables'
import {
  getActiveKeyPathsOfMenus,
  getActiveMenuChild
} from '@/utils'

defineProps<{
  collapsed: boolean
  mode: 'vertical' | 'horizontal'
}>()

const route = useRoute()
const theme = useThemeStore()
const routeStore = useRouteStore()
const { routerPush } = useRouterPush()

const expandedKeys = ref<string[]>([])
const activeRouteName = computed(() => route.name as string)

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
