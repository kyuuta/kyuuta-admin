<template>
  <div v-if="showTooltip">
    <NTooltip
      :placement="placement"
      trigger="hover"
      arrowPointToCenter
    >
      <template #trigger>
        <div :class="itemClass">
          <slot />
        </div>
      </template>
      <span>{{ tooltip }}</span>
    </NTooltip>
  </div>
  <div v-else :class="itemClass">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { PopoverPlacement } from 'naive-ui'

defineOptions({ name: 'TooltipContainer' })

const itemClass = [
  'cursor-pointer',
  'flex-center',
  'min-w-26px',
  'h-full',
  'px-10px',
  'defaultHoverBg'
]

const props = withDefaults(
  defineProps<{
    tooltip?: string
    placement?: PopoverPlacement
  }>(),
  {
    tooltip: '',
    placement: 'bottom'
  }
)

const showTooltip = computed(() => Boolean(props.tooltip))
</script>
