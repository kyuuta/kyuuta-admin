<template>
  <DarkModeContainer
    :style="{ width: visible || fixed ? '200px' : '0px' }"
    :class="[
      'z-100',
      'left-70px top-0',
      'flex',
      'h-full',
      'border-#efeff5 dark:border-#ffffff17',
      'nowrap-hidden',
      'transition-width duration-300 ease-in-out',
      { 'border-l-1px border-r-1px': visible || fixed },
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
          @click="handleChangeFixed(!fixed)"
        >
          <SvgIcon
            v-if="getIsMobile"
            class="text-#666 text-22px cursor-not-allowed"
            icon="ph:push-pin-fill"
          />
          <template v-else>
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
          </template>
        </div>
      </div>
      <NScrollbar class="flex-1 overflow-hidden">
        <NMenu
          class="menu"
          :value="activeKey"
          :options="menus"
          :indent="14"
          :renderLabel="val => t(val.label as string)"
          @update:value="handleUpdateMenu"
        />
      </NScrollbar>
    </div>
  </DarkModeContainer>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'

defineProps<{
  visible: boolean
  menus: App.GlobalMenuOption[]
}>()

const theme = useThemeStore()
const { getIsMobile } = storeToRefs(theme)

const fixed = ref(false)

const { t } = useI18n()
const route = useRoute()
const { routerPush } = useRouterPush()

const activeKey = computed(
  () =>
    (route.meta?.activeMenu
      ? route.meta.activeMenu
      : route.name) as string
)

const handleChangeFixed = (state: boolean) => {
  if (getIsMobile.value) return
  fixed.value = state
}

const handleUpdateMenu = (key: string) => {
  routerPush({ name: key })
  theme.setSiderDrawerVisible(false)
}
</script>
