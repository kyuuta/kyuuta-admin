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
          <NIcon
            v-if="fixed"
            size="22"
            class="text-primary"
            :component="PinOff20Filled"
          />
          <NIcon
            v-else
            size="22"
            class="text-primary"
            :component="Pin20Regular"
          />
        </div>
      </div>
      <NScrollbar class="flex-1 overflow-hidden">
        <NMenu
          :value="activeKey"
          :options="menus"
          @update:value="handleUpdateMenu"
        />
      </NScrollbar>
    </div>
  </DarkModeContainer>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useRouterPush } from '@/composables'
import {
  Pin20Regular,
  PinOff20Filled
} from '@vicons/fluent'

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
