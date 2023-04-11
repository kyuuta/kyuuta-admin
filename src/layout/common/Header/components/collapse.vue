<template>
  <div 
    :style="{
      paddingLeft: menuConfig.collapseType !== 'header'
        ? '20px'
        : null
    }"
  >
    <TooltipContainer
      v-if="menuConfig.collapseType === 'header'"
      @click="setCollapse(!menuConfig.collapse)"
    >
      <NIcon
        v-if="menuConfig.collapse"
        size="22"
        :component="MenuUnfoldOutlined"
      />
      <NIcon
        v-else
        size="22"
        :component="MenuFoldOutlined"
      />
    </TooltipContainer>
  </div>
</template>

<script lang="ts" setup>
import { useThemeStore } from '@/store'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@vicons/antd'

const { menuConfig, setCollapse } = useThemeStore()
</script>