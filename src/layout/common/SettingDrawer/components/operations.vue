<template>
  <Item class="operations">
    <NButton type="warning" @click="resetThemeStore">
      {{ t('system.resetTheme') }}
    </NButton>
  </Item>
</template>

<script lang="ts" setup>
import Item from './item.vue'

const { t } = useI18n()
const { resetThemeStore } = useThemeStore()
</script>

<style lang="less" scoped>
.operations {
  ::v-deep(.drawer-item-content) {
    flex: auto;
  }
  ::v-deep(.n-button) {
    width: 100%;
  }
}
</style>
