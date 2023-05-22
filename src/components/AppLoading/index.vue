<template>
  <div
    class="fixed flex-col left-0 top-0 wh-full flex-center"
  >
    <div class="loading color-primary">
      <div />
      <div />
      <div />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ThemeConfig } from '@/config/theme'
import { localStorage, getRgbOfColor } from '@/utils'

function addThemeColorCssVars() {
  const defaultColor = ThemeConfig.themeColor
  const themeColor =
    localStorage.get('themeSettings').themeColor ||
    defaultColor

  const { r, g, b } = getRgbOfColor(themeColor)

  const cssVars = `--primary-color: ${r},${g},${b}`
  document.documentElement.style.cssText = cssVars
}

addThemeColorCssVars()
</script>

<style lang="less" scoped>
.loading,
.loading > div {
  position: relative;
  box-sizing: border-box;
}
.loading > div {
  display: inline-block;
  float: none;
  background-color: currentColor;
  border: 0 solid currentColor;
}

.loading {
  width: 80px;
  height: 80px;
}

.loading > div {
  position: absolute;
  top: 0;
  left: 0;
  width: 80px;
  height: 80px;
  background: transparent;
  border-width: 2px;
  border-radius: 100%;
  opacity: 0;
  animation: ball-scale-ripple-multiple 2s 0s infinite
    cubic-bezier(0.21, 0.53, 0.56, 0.8);
}

.loading > div:nth-child(1) {
  animation-delay: 0s;
}

.loading > div:nth-child(2) {
  animation-delay: 0.25s;
}

.loading > div:nth-child(3) {
  animation-delay: 0.5s;
}

@keyframes ball-scale-ripple-multiple {
  0% {
    opacity: 1;
    transform: scale(0.1);
  }

  70% {
    opacity: 0.5;
    transform: scale(1);
  }

  95% {
    opacity: 0;
  }
}
</style>
