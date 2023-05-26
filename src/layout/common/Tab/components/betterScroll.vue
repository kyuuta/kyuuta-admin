<template>
  <div ref="bsWrap" class="h-full text-left">
    <div
      ref="bsMain"
      class="inline-block"
      :class="{ 'h-full': !isScrollY }"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import BScroll from '@better-scroll/core'
import type { Options } from '@better-scroll/core'

const props = defineProps<{
  options: Options
}>()

const bsWrap = ref<HTMLElement>()
const instance = ref<BScroll>()
const bsMain = ref<HTMLElement>()
const isScrollY = computed(() =>
  Boolean(props.options.scrollY)
)

const initBetterScroll = () => {
  if (!bsWrap.value) return
  instance.value = new BScroll(bsWrap.value, props.options)
}

// 滚动元素发生变化，刷新BS
const { width: wrapWidth } = useElementSize(bsWrap)
const { width, height } = useElementSize(bsMain)
watch(
  [
    () => wrapWidth.value,
    () => width.value,
    () => height.value
  ],
  () => {
    if (instance.value) {
      instance.value.refresh()
    }
  }
)

onMounted(() => {
  initBetterScroll()
})

defineExpose({ instance })
</script>
