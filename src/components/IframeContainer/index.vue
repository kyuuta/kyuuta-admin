<template>
  <DarkModeContainer class="flex-auto flex-center">
    <NSpin :show="!loaded" class="spin">
      <iframe
        class="wh-full"
        :style="{ visibility: loaded ? 'unset' : 'hidden' }"
        :src="src"
        @load="loaded = true"
      />
      <template #description>{{ loadingText }}</template>
    </NSpin>
  </DarkModeContainer>
</template>

<script lang="ts" setup>
defineOptions({ name: 'IframeContainer' })

const loaded = ref(false)

withDefaults(
  defineProps<{
    /** iframe地址 */
    src: string
    /** 加载提示文案 */
    loadingText?: string
  }>(),
  {
    loadingText: '加载中...'
  }
)
</script>

<style lang="less" scoped>
.spin {
  width: 100%;
  height: 100%;
  ::v-deep(.n-spin-content) {
    height: 100%;
  }
}
</style>
