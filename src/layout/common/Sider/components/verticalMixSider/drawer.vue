<template>
  <DarkModeContainer
    :style="{ width: visible || fixed ? '200px' : '0px' }"
    :class="[
      'z-100',
      'left-70px top-0',
      'flex',
      'h-full',
      'border-r-1px border-#efeff5 dark:border-#ffffff17',
      'nowrap-hidden',
      'transition-width duration-300 ease-in-out',
      { absolute: !fixed }
    ]"
  >
    <div class="flex flex-col w-full">
      <div
        class="h-55px px-10px pt-2px flex-y-center justify-between"
      >
        <div />
        <div
          class="cursor-pointer mt-7px"
          @click="fixed = !fixed"
        >
          <SvgIcon
            v-if="fixed"
            class="text-primary text-22px"
            icon="ph:push-pin-slash-fill"
          />
          <SvgIcon
            v-else
            class="text-primary text-22px"
            icon="ph:push-pin-bold"
          />
        </div>
      </div>
      <NScrollbar class="flex-1 overflow-hidden">
        <NMenu
          class="menu"
          :value="activeKey"
          :options="menus"
          @update:value="handleUpdateMenu"
        />
      </NScrollbar>
    </div>
  </DarkModeContainer>
</template>

<script lang="ts" setup>
defineProps<{
  visible: boolean
  menus: App.GlobalMenuOption[]
}>()

const fixed = ref(false)

const route = useRoute()
const { routerPush } = useRouterPush()

const activeKey = computed(
  () =>
    (route.meta?.activeMenu
      ? route.meta.activeMenu
      : route.name) as string
)

const handleUpdateMenu = (key: string) => {
  routerPush({ name: key })
}
</script>

<style lang="less" scoped>
.menu {
  ::v-deep(.n-menu-item-content) {
    padding-left: 22px !important;
  }
}
</style>
