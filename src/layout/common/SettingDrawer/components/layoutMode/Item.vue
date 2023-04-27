<template>
  <div
    class="border-2px rounded-6px cursor-pointer hover:border-primary box-shadow"
    :class="[
      checked ? 'border-primary' : 'border-transparent'
    ]"
  >
    <NTooltip
      :placement="props.placement"
      trigger="hover"
      arrowPointToCenter
    >
      <template #trigger>
        <div
          class="flex gap-6px w-96px h-72px p-6px rd-4px"
        >
          <slot />
        </div>
      </template>
      <span>{{ label }}</span>
    </NTooltip>
  </div>
</template>

<script lang="ts" setup>
import type { PopoverPlacement } from 'naive-ui'

interface Props {
  /** 提示文案 */
  label: string
  /** 是否选中 */
  checked: boolean
  /** Tooltip定位位置 */
  placement: PopoverPlacement
}

const props = defineProps<Props>()
</script>

<style lang="less" scoped>
.box-shadow {
  box-shadow: 0 1px 2.5px #0000002e;
}
</style>
