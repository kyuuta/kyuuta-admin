<template>
  <NMenu
    :mode="
      theme.layoutMode.includes('vertical')
        ? 'vertical'
        : 'horizontal'
    "
    :collapsed="props.collapsed"
    :collapsedWidth="60"
    :collapsedIconSize="22"
    :rootIndent="16"
    :value="activeKey"
    :options="routeStore.menu"
    @update:value="(name) => routerPush({ name })"
  />
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useRouteStore, useThemeStore } from '@/store'
import { useRouterPush } from '@/composables'

const route = useRoute()
const theme = useThemeStore()
const routeStore = useRouteStore()
const { routerPush } = useRouterPush()
const props = defineProps<{ collapsed: boolean }>()

const activeKey = computed(() => route.name as string)
</script>
