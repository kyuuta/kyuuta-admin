<template>
  <NMenu
    :collpased="props.collapsed"
    :collapsed-width="60"
    :collapsed-icon-size="22"
    :root-indent="16"
    :value="activeKey"
    :options="routeStore.menu"
    @update:value="name => routerPush({ name })"
  />
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useRouteStore } from '@/store'
import { useRouterPush } from '@/composables'

const route = useRoute()
const routeStore = useRouteStore()
const { routerPush } = useRouterPush()
const props = defineProps(['collapsed'])

const activeKey = computed(() => route.name)
</script>
