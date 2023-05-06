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
        <SvgIcon
          class="text-20px"
          color="rgb(250,140,53)"
          icon="line-md:moon-filled-alt-to-sunny-filled-loop-transition"
        />
      </template>
      <template #unchecked>
        <SvgIcon
          class="text-20px"
          color="rgb(255, 217, 59)"
          icon="line-md:sunny-filled-loop-to-moon-alt-filled-loop-transition"
        />
      </template>
    </NSwitch>
  </Item>
</template>

<script lang="ts" setup>
import Item from './item.vue'
import { useThemeStore } from '@/store'
const themeStore = useThemeStore()

const switchStyle = ({ checked }: { checked: boolean }) => {
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
