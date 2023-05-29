<template>
  <Item :title="t('system.animation')">
    <NSwitch
      :value="animationConfig.visible"
      @update:value="setAnimationStatus"
    />
  </Item>
  <Item :title="t('system.animationMode')">
    <NSelect
      class="w120px"
      :value="animationConfig.mode"
      :options="modeList"
      @update:value="setAnimationMode"
    />
  </Item>
</template>

<script lang="ts" setup>
import Item from './item.vue'
import { storeToRefs } from 'pinia'

const { t } = useI18n()
const theme = useThemeStore()

const modeList: Common.OptionWithKey<Theme.ThemeAnimateMode>[] =
  [
    {
      value: 'zoom-fade',
      label: t('system.animationList.fade')
    },
    {
      value: 'zoom-out',
      label: t('system.animationList.flashing')
    },
    {
      value: 'fade-slide',
      label: t('system.animationList.sliding')
    },
    {
      value: 'fade',
      label: t('system.animationList.subside')
    },
    {
      value: 'fade-bottom',
      label: t('system.animationList.bottomFading')
    },
    {
      value: 'fade-scale',
      label: t('system.animationList.zoomFade')
    }
  ]
const { animationConfig } = storeToRefs(theme)
const { setAnimationStatus, setAnimationMode } = theme
</script>
