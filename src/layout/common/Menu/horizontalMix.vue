<template>
  <div class="flex-y-center">
    <MenuItem
      v-for="menu in routeStore.firstDegreeMenus"
      :key="menu.routeName"
      mode="horizontal"
      :label="menu.label"
      :icon="menu.icon"
      :routeName="menu.routeName"
      :activeRouteName="activeRouteName"
      @click="handleClickMenu(menu)"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useRouteStore } from '@/store'
import { useRouterPush } from '@/composables'

import MenuItem from '../Sider/components/verticalMixSider/menuItem.vue'

const route = useRoute()
const routeStore = useRouteStore()
const { routerPush } = useRouterPush()
const activeRouteName = ref('')

const handleClickMenu = (menu: App.GlobalMenuOption) => {
  if (menu.redirect) {
    routerPush({ path: menu.redirect })
  } else {
    console.warn(
      '请设置一级路由的重定向路由地址, Please set the redirect route address for the primary route!'
    )
  }
}

const setActiveParentRouteName = () => {
  routeStore.firstDegreeMenus.some((item) => {
    const activeName = route.name as string
    const flag = activeName.includes(item.routeName)
    if (flag) {
      activeRouteName.value = item.routeName
    }
    return flag
  })
}

watch(
  () => route.name,
  () => {
    setActiveParentRouteName()
  },
  { immediate: true }
)
</script>
