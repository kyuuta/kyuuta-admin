<template>
  <DarkModeContainer
    class="flex z-100 min-h-100vh"
    @mouseleave="hideDrawer"
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
      <NScrollbar class="flex-1 overflow-hidden">
        <MenuItem
          v-for="menu in firstDegreeMenus"
          :key="menu.routeName"
          :label="menu.label"
          :icon="menu.icon"
          :routeName="menu.routeName"
          :activeRouteName="activeRouteName"
          @click="
            handleClickMenu(
              menu.routeName,
              menu.hasChildren
            )
          "
        />
      </NScrollbar>
    </div>

    <Drawer
      :visible="drawerVisible"
      :menus="childrenMenus"
    />
  </DarkModeContainer>
</template>

<script lang="ts" setup>
import { ref, watch, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useRouteStore } from '@/store'
import { useBoolean } from '@/hooks'
import { useRouterPush } from '@/composables'
import Drawer from './drawer.vue'
import MenuItem from './menuItem.vue'
import { Logo } from '@/layout/common'

const route = useRoute()
const routeStore = useRouteStore()

const firstDegreeMenus = computed(() =>
  routeStore.menu.map((item) => {
    const { routeName, label } = item
    const icon = item?.icon
    const hasChildren = Boolean(
      item.children && item.children.length
    )
    return {
      routeName,
      label,
      icon,
      hasChildren
    }
  })
)

const activeRouteName = ref('')
const setActiveParentRouteName = () => {
  firstDegreeMenus.value.some((item) => {
    const activeName = route.name as string
    const flag = activeName.includes(item.routeName)
    if (flag) {
      activeRouteName.value = item.routeName
    }
    return flag
  })
}
const childrenMenus = computed(() => {
  const menus: App.GlobalMenuOption[] = []
  routeStore.menu.some((item) => {
    const flag =
      item.routeName === activeRouteName.value &&
      Boolean(item.children?.length)
    if (flag) {
      menus.push(...(item.children || []))
    }
    return flag
  })
  return menus
})

const {
  bool: drawerVisible,
  setTrue: openDrawer,
  setFalse: hideDrawer
} = useBoolean()
const { routerPush } = useRouterPush()
const handleClickMenu = (
  routeName: string,
  hasChildren: boolean
) => {
  activeRouteName.value = routeName
  if (hasChildren) {
    openDrawer()
  } else {
    routerPush({ name: routeName })
  }
}

watch(
  () => route.name,
  () => {
    setActiveParentRouteName()
  },
  { immediate: true }
)
</script>
