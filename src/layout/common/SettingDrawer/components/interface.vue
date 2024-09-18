<template>
  <Item :title="t('system.followSystemTheme')">
    <NSwitch
      :value="theme.followOSTheme"
      @update:value="setAutoFollowThemeMode"
    />
  </Item>
  <Item :title="t('system.scrollMode')">
    <NSwitch
      :value="theme.getScrollMode"
      :railStyle="switchStyle"
      checkedValue="content"
      uncheckedValue="main"
      @update:value="setScrollMode"
    >
      <template #checked>{{
        t('system.scrollModeContent')
      }}</template>
      <template #unchecked>{{
        t('system.scrollModeGlobal')
      }}</template>
    </NSwitch>
  </Item>
  <Item :title="t('system.header')">
    <NSwitch
      :value="headerConfig.visible"
      @update:value="setHeaderVisible"
    />
  </Item>
  <Item :title="t('system.headerHeight')">
    <NInputNumber
      class="w120px text-center"
      :step="10"
      :max="300"
      :value="headerConfig.height"
      buttonPlacement="both"
      @update:value="(height) => setHeaderHeight(height)"
    />
  </Item>
  <Item :title="t('system.footer')">
    <NSwitch
      :value="footerConfig.visible"
      @update:value="setFooterVisible"
    />
  </Item>
  <Item :title="t('system.footerHeight')">
    <NInputNumber
      class="w120px text-center"
      :step="10"
      :max="300"
      :value="footerConfig.height"
      buttonPlacement="both"
      @update:value="(height) => setFooterHeight(height)"
    />
  </Item>
  <Item :title="t('system.fixedFooter')">
    <NSwitch
      :value="footerConfig.fixed"
      :disabled="theme.getScrollMode === 'main'"
      @update:value="setFooterFixed"
    />
  </Item>
</template>

<script lang="ts" setup>
import type { CSSProperties } from 'vue'
import Item from './item.vue'
import { storeToRefs } from 'pinia'

const { t } = useI18n()
const theme = useThemeStore()
const {
  setScrollMode,
  setHeaderVisible,
  setHeaderHeight,
  setFooterVisible,
  setFooterHeight,
  setFooterFixed,
  setAutoFollowThemeMode
} = theme
const { headerConfig, footerConfig } = storeToRefs(theme)

const switchStyle = ({ checked }: { checked: boolean }) => {
  const style: CSSProperties = {}
  if (checked) {
    style.background = '#1890ff'
    style.boxShadow = '0 0 0 2px rgba(24, 144, 255, .2)'
  } else {
    style.background = '#8a2be2'
    style.boxShadow = '0 0 0 2px rgba(138, 43, 226, .2)'
  }
  return style
}
</script>
