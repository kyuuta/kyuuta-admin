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
      <NScrollbar class="flex-1 overflow-hidden">
        <MenuItem
          v-for="menu in routeStore.firstDegreeMenus"
          :key="menu.routeName"
          :label="menu.label"
          :icon="menu.icon"
          :routeName="menu.routeName"
          :activeRouteName="activeRouteName"
          @click="
            handleClickMenu(
              menu.routeName,
              menu.hasChildren as boolean
            )
          "
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
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useRouteStore } from '@/store'
import { useBoolean } from '@/hooks'
import { useRouterPush } from '@/composables'
import Drawer from './drawer.vue'
import MenuItem from './menuItem.vue'
import { Logo } from '@/layout/common'
import { getActiveMenuChild } from '@/utils'

withDefaults(
  defineProps<{
    hasDrawer?: boolean
  }>(),
  {
    hasDrawer: true
  }
)

const route = useRoute()
const routeStore = useRouteStore()

const activeRouteName = ref('')
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