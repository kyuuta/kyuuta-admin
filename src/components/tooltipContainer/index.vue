<template>
  <div v-if="showTooltip">
    <NTooltip
      :placement="placement"
      trigger="hover"
      arrowPointToCenter
    >
      <template #trigger>
        <div
          class="item hover:bg-#ececed hover:dark-bg-#2d2d30"
        >
          <slot />
        </div>
      </template>
      <span>{{ tooltip }}</span>
    </NTooltip>
  </div>
  <div
    v-else
    class="item hover:bg-#ececed hover:dark-bg-#2d2d30"
  >
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
  transition: background-color 0.3s;
  // &:hover {
  //   transition: background-color 0.3s;
  // background-color: rgba(0, 0, 0, 0.03);
  // }
}
</style>
