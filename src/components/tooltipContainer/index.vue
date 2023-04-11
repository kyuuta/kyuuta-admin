<template>
  <div v-if="showTooltip">
    <NTooltip :placement="placement" trigger="hover" arrow-point-to-center>
      <template #trigger>
        <div class="item">
          <slot />
        </div>
      </template>
      <span>{{ tooltip }}</span>
    </NTooltip>
  </div>
  <div v-else class="item">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { PopoverPlacement } from 'naive-ui'

interface Props {
  tooltip?: string
  placement?: PopoverPlacement
}

const props = withDefaults(defineProps<Props>(), {
  tooltip: '',
  placement: 'bottom'
})

const showTooltip = computed(() => Boolean(props.tooltip))
</script>

<style lang="less" scoped>
.item {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 10px;
  min-width: 26px;
  &:hover {
    transition: background-color .3s;
    background-color: rgba(0, 0, 0, .03);
  }
}
</style>