<template>
  <TooltipContainer tooltip="刷新" @click="reloadPage()">
    <SvgIcon class="text-24px" icon="eva:refresh-outline" />
  </TooltipContainer>
</template>

<script lang="ts" setup>
const { reloadPage } = useAppStore()
</script>
