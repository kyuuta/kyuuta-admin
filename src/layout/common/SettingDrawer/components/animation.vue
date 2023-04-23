<template>
  <Item title="禁用动画">
    <NSwitch
      :value="animationConfig.visible"
      @update:value="setAnimationStatus"
    />
  </Item>
  <Item title="动画类型">
    <NSelect
      class="w120px"
      :value="animationConfig.mode"
      :options="animationConfig.modeList"
      @update:value="setAnimationMode"
    />
  </Item>
</template>

<script lang="ts" setup>
import Item from './item.vue'
import { storeToRefs } from 'pinia'
import { useThemeStore } from '@/store'

const theme = useThemeStore()
const { animationConfig } = storeToRefs(theme)
const { setAnimationStatus, setAnimationMode } = theme
</script>
