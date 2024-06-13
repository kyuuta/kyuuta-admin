<template>
  <DarkModeContainer
    class="flex-y-center w-full border-b-1px border-#efeff5 dark:border-#ffffff17"
  >
    <div
      ref="bsWrapper"
      class="flex-1 overflow-hidden h-full"
    >
      <BetterScroll
        ref="bsScroll"
        :options="{
          scrollX: true,
          scrollY: false,
          click: false
        }"
      >
        <Tab @scroll="handleScroll" />
      </BetterScroll>
    </div>
  </DarkModeContainer>
</template>

<script lang="ts" setup>
import { PageConfig } from '@/config/page'
import { BetterScroll, Tab } from './components'

const route = useRoute()
const tabStore = useTabStore()

const bsWrapper = ref<HTMLElement>()
const bsScroll = ref<Expose.BetterScroll>()
const { width: bsWrapperWidth, left: bsWrapperLeft } =
  useElementBounding(bsWrapper)

const handleScroll = (clintX: number) => {
  const currentX = clintX - bsWrapperLeft.value
  const deltaX = currentX - bsWrapperWidth.value / 2

  if (bsScroll.value) {
    const { maxScrollX, x: leftX } = bsScroll.value.instance
    const rightX = maxScrollX - leftX
    const update =
      deltaX > 0
        ? Math.max(-deltaX, rightX)
        : Math.min(-deltaX, -leftX)
    bsScroll.value?.instance.scrollBy(update, 0, 300)
  }
}

watch(
  () => route.fullPath,
  () => {
    if (route.name === PageConfig.ERROR_PAGE_NAME) {
      return
    }
    tabStore.addTab(route)
    tabStore.setActiveTab(route.path)
  }
)

const init = () => {
  tabStore.initTabStore(route)
}

onMounted(() => {
  init()
})
</script>
