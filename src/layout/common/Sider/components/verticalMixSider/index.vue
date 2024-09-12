<template>
  <DarkModeContainer
    class="flex z-100 min-h-100vh"
    @mouseleave="reset"
  >
    <div
      :class="[
        'relative',
        'flex',
        'flex-1',
        'flex-col-stretch',
        'h-full',
        {
          'box-shadow': !drawerVisible
        }
      ]"
    >
      <div class="flex-center w-70px h-60px">
        <Logo />
      </div>
      <NScrollbar class="flex-1 px-4px w-70px">
        <MenuItem
          v-for="menu in routeStore.menu"
          :key="menu.name"
          :label="t(menu.meta?.title)"
          :icon="iconRender(menu.meta)"
          :routeName="menu.name"
          :activeRouteName="activeRouteName"
          @click="handleClickMenu(menu)"
        />
      </NScrollbar>
    </div>

    <Drawer
      :visible="drawerVisible"
      :menus="
        getActiveMenuChild(activeRouteName, routeStore.menu)
      "
    />
  </DarkModeContainer>
</template>

<script lang="ts" setup>
import { useBoolean } from '@/hooks'
import Drawer from './drawer.vue'
import MenuItem from './menuItem.vue'
import { Logo } from '@/layout/common'
import { getActiveMenuChild } from '@/utils'
import type {
  RouteRecordRaw,
  RouteRecordNameGeneric
} from 'vue-router'

withDefaults(
  defineProps<{
    hasDrawer?: boolean
  }>(),
  {
    hasDrawer: true
  }
)

const { t } = useI18n()
const route = useRoute()
const routeStore = useRouteStore()
const { iconRender } = useIconRender()

const activeRouteName = ref<RouteRecordNameGeneric>('')
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

const {
  bool: drawerVisible,
  setTrue: openDrawer,
  setFalse: hideDrawer
} = useBoolean()
const theme = useThemeStore()
const { routerPush } = useRouterPush()
const handleClickMenu = (menu: RouteRecordRaw) => {
  const routeName = menu.name as string
  const hasChildren = Boolean(
    menu.children &&
      menu.children.length &&
      !menu.children?.every((item) => item.meta?.hide)
  )
  activeRouteName.value = routeName
  if (hasChildren) {
    openDrawer()
  } else {
    routerPush({ name: routeName })
    theme.setSiderDrawerVisible(false)
    hideDrawer()
  }
}

const reset = () => {
  hideDrawer()
  setActiveParentRouteName()
}

watch(
  () => route.name,
  () => {
    setActiveParentRouteName()
  },
  { immediate: true }
)
</script>
