<template>
  <NLayoutSider
    :native-scrollbar="false"
    bordered
    collapse-mode="width"
    :collapsed-width="64"
    :width="collapsedWidth"
    :collapsed="collapse"
    :show-trigger="['bar','arrow-circle'].includes(collpaseType) ? collpaseType : false"
    @update:collapsed="setCollapse"
  >
    <AsideMenu :collapsed="collapse"/>
  </NLayoutSider>
</template>

<script lang="ts" setup>
import AsideMenu from '../Menu/index'
import { useMenu } from '@/hooks/menu'

const {
  collapse,
  collpaseType,
  collapsedWidth,
  setCollapse
} = useMenu()
</script>
