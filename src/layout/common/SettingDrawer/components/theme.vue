<template>
  <Item class="dark-mode">
    <NSwitch
      size="large"
      :value="themeStore.darkMode"
      :railStyle="switchStyle"
      :checkedValue="false"
      :uncheckedValue="true"
      @update:value="themeStore.setDarkMode"
    >
      <template #checked>
        <NIcon size="20" color="rgb(250,140,53)" :component="WeatherSunny24Filled" />
      </template>
      <template #unchecked>
        <NIcon size="20" color="rgb(255, 217, 59)" :component="WeatherMoon24Filled" />
      </template>
    </NSwitch>
  </Item>
</template>

<script lang="ts" setup>
import Item from './item.vue'
import { useThemeStore } from '@/store'
import { WeatherSunny24Filled, WeatherMoon24Filled } from '@vicons/fluent'

const themeStore = useThemeStore()

const switchStyle = ({ focused, checked }: { focused: boolean; checked: boolean }) => {
  return {
    background: checked ? '#e8f2fc' : '#000e1c'
  }
}
</script>

<style lang="less" scoped>
.dark-mode {
  display: flex;
  justify-content: center;
}
</style>
