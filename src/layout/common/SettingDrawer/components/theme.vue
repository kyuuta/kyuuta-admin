<template>
  <Item class="dark-mode">
    <NSwitch
      size="large"
      :value="themeStore.getDarkMode"
      :railStyle="switchStyle"
      :checked-value="false"
      :unchecked-value="true"
      @update:value="themeStore.setDarkMode"
    >
      <template #checked>
        <NIcon
          size="20"
          color="rgb(250,140,53)"
          :component="WeatherSunny24Filled"
        />
      </template>
      <template #unchecked>
        <NIcon
          size="20"
          color="rgb(255, 217, 59)"
          :component="WeatherMoon24Filled"
        />
      </template>  
    </NSwitch>
  </Item>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Item from './item.vue'
import {
  WeatherSunny24Filled,
  WeatherMoon24Filled
} from '@vicons/fluent'
import { useThemeStore } from '@/store'

const themeStore = useThemeStore()

const switchStyle = ({ 
  focused,
  checked 
}: { 
  focused: boolean,
  checked: boolean
}) => {
  return {
    background: checked ? "#e8f2fc" : "#000e1c"
  }
}

const mode = ref(false)
</script>

<style lang="less" scoped>
.dark-mode {
  display: flex;
  justify-content: center;
}
</style>

