<template>
  <TooltipContainer
    :tooltip="t('system.search')"
    @click="searchVisible = true"
  >
    <SvgIcon icon="line-md:search" class="text-21px" />
  </TooltipContainer>
  <SearchModal v-model:visible="searchVisible" />
</template>

<script lang="ts" setup>
import SearchModal from './searchModal.vue'

const { t } = useI18n()
const searchVisible = ref<boolean>(false)
</script>
