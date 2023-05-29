<template>
  <div ref="tabRef" class="h-full flex items-end pt-4px">
    <component
      :is="TabItem"
      v-for="(item, index) in tabStore.tabs"
      :key="item.fullPath"
      :darkMode="theme.darkMode"
      :primaryColor="theme.themeColor"
      :isActive="tabStore.activeTab === item.fullPath"
      :closable="!(item.name === tabStore.homeTab.name)"
      :class="{
        '!mr-0': index === tabStore.tabs.length - 1
      }"
      @close="tabStore.removeTab(item.fullPath)"
      @click="tabStore.handleClickTab(item.fullPath)"
      @contextmenu="
        handleContextMenu($event, item.fullPath)
      "
    >
      <div class="flex-y-center">
        <SvgIcon
          class="text-20px mx-6px"
          :icon="item.meta?.icon"
          :localIcon="item.meta?.localIcon"
        />
        <span>{{ t(item.meta.title as string) }}</span>
      </div>
    </component>
  </div>

  <ContextMenu
    v-model:visible="dropdownMenu.visible"
    :currentPath="dropdownMenu.currentPath"
    :x="dropdownMenu.x"
    :y="dropdownMenu.y"
  />
</template>

<script lang="ts" setup>
import TabItem from './tabItem.vue'
import ContextMenu from './contextMenu.vue'

const { t } = useI18n()
const theme = useThemeStore()
const tabStore = useTabStore()

const dropdownMenu = reactive({
  visible: false,
  x: 0,
  y: 0,
  currentPath: ''
})
const handleContextMenu = async (
  e: MouseEvent,
  currentPath: string
) => {
  e.preventDefault()
  const { clientX, clientY } = e
  dropdownMenu.visible = false
  Object.assign(dropdownMenu, {
    x: clientX,
    y: clientY,
    currentPath
  })
  await nextTick()
  dropdownMenu.visible = true
}

const emit = defineEmits<{
  (e: 'scroll', clientX: number): void
}>()
const tabRef = ref<HTMLElement>()
const getActiveTabClientX = async () => {
  await nextTick()
  if (tabRef.value) {
    const activeTabElement =
      tabRef.value.children[tabStore.activeTabIndex]
    const { x, width } =
      activeTabElement.getBoundingClientRect()
    const clientX = x + width / 2
    setTimeout(() => {
      emit('scroll', clientX)
    }, 50)
  }
}

watch(
  () => tabStore.activeTabIndex,
  () => {
    getActiveTabClientX()
  },
  {
    immediate: true
  }
)
</script>
