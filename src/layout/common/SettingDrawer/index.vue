<template>
  <NDrawer v-model:show="modalVisible" :defaultWidth="350">
    <NDrawerContent
      :title="t('system.projectConfiguration')"
      :nativeScrollbar="false"
    >
      <div class="drawer">
        <NDivider titlePlacement="center">{{
          t('system.theme')
        }}</NDivider>
        <Theme />

        <NDivider titlePlacement="center">
          {{ t('system.systemTheme') }}
        </NDivider>
        <ThemeColor />

        <NDivider titlePlacement="center">
          {{ t('system.layoutMode') }}
        </NDivider>
        <LayoutMode />

        <NDivider titlePlacement="center">
          {{ t('system.interfaceFeatures') }}
        </NDivider>
        <Interface />

        <NDivider titlePlacement="center">
          {{ t('system.menuRelated') }}
        </NDivider>
        <MenuSetting />

        <NDivider titlePlacement="center">
          {{ t('system.animation') }}
        </NDivider>
        <Animation />

        <NDivider titlePlacement="center">
          {{ t('system.themeConfiguration') }}
        </NDivider>
        <Operations />
      </div>
    </NDrawerContent>
  </NDrawer>
</template>

<script lang="ts" setup>
import {
  Animation,
  Interface,
  LayoutMode,
  Theme,
  ThemeColor,
  MenuSetting,
  Operations
} from './components/index'

const { t } = useI18n()
const props = defineProps<{ visible: boolean }>()
const emit = defineEmits<{
  (e: 'update:visible', visible: boolean): void
}>()
const { modalVisible } = useModalState(props, emit)
</script>

<style lang="less" scoped>
.drawer {
  .n-divider:not(.n-divider--vertical) {
    margin: 10px 0;
  }
}
</style>
