<template>
  <div class="flex-y-center">
    <MenuItem
      v-for="menu in routeStore.menu"
      :key="menu.name"
      mode="horizontal"
      :label="menu.meta?.title || ''"
      :icon="
        iconRender({
          icon: menu.meta?.icon,
          localIcon: menu.meta?.localIcon
        })
      "
      :routeName="menu.name"
      :activeRouteName="activeRouteName"
      @click="handleClickMenu(menu)"
    />
  </div>
</template>

<script lang="ts" setup>
import type {
  RouteRecordRaw,
  RouteRecordNameGeneric
} from 'vue-router'
import MenuItem from '../Sider/components/verticalMixSider/menuItem.vue'

const route = useRoute()
const routeStore = useRouteStore()
const { routerPush } = useRouterPush()
const { iconRender } = useIconRender()
const activeRouteName = ref<RouteRecordNameGeneric>('')

const handleClickMenu = (menu: RouteRecordRaw) => {
  if (menu.redirect) {
    routerPush({ path: menu.redirect as string })
  } else {
    console.warn(
      '请设置一级路由的重定向路由地址, Please set the redirect route address for the primary route!'
    )
  }
}

const setActiveParentRouteName = () => {
  routeStore.menu.some((item: RouteRecordRaw) => {
    const activeName = route.name as string
    const flag = activeName.includes(item.name as string)
    if (flag) {
      activeRouteName.value = item.name
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
