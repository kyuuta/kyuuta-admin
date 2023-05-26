<template>
  <NPopover
    trigger="hover"
    style="padding: 0; border-radius: 6px"
  >
    <template #trigger>
      <TooltipContainer>
        <SvgIcon
          class="text-22px"
          icon="iconoir:language"
        />
      </TooltipContainer>
    </template>
    <DarkModeContainer class="p-6px rd-6px">
      <div
        v-for="lang in availableLocales"
        :key="lang"
        :class="[
          'defaultHoverBg flex-y-center py-10px px-8px cursor-pointer',
          {
            '!bg-primary_active': locale === lang
          }
        ]"
        @click="loadLanguageAsync(lang)"
      >
        <component :is="dict[lang].icon" class="mr-10px" />
        <span class="text-14px">{{
          dict[lang].title
        }}</span>
      </div>
    </DarkModeContainer>
  </NPopover>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import {
  availableLocales,
  loadLanguageAsync
} from '@/plugins/i18n'

const { locale } = useI18n()
const { iconRender } = useIconRender()

interface Dict {
  [key: string]: {
    title: string
    icon: () => import('vue').VNodeChild
  }
}

const dict: Dict = {
  'zh-cn': {
    title: '中文 (Chinese)',
    icon: iconRender({
      icon: 'circle-flags:cn',
      fontSize: 24
    })
  },
  en: {
    title: 'English (UK)',
    icon: iconRender({
      icon: 'circle-flags:uk',
      fontSize: 24
    })
  }
}
</script>
