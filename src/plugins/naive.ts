import type { App } from 'vue'

import {
  // carete naive ui
  create,
  // components
  NIcon,
  NMenu,
  NAvatar,
  NButton,
  NDrawer,
  NSelect,
  NSwitch,
  NDivider,
  NTooltip,
  NDropdown,
  NColorPicker,
  NInputNumber,
  NDrawerContent,
  NLoadingBarProvider,

  // Layout
  NLayout,
  NLayoutHeader,
  NLayoutContent,
  NLayoutFooter,
  NLayoutSider,

  // Prompt
  NConfigProvider,
  NDialogProvider,
  NNotificationProvider,
  NMessageProvider,
} from 'naive-ui'

const naive = create({
  components: [
    create,
    // components
    NIcon,
    NMenu,
    NAvatar,
    NButton,
    NDrawer,
    NSelect,
    NSwitch,
    NDivider,
    NTooltip,
    NDropdown,
    NColorPicker,
    NInputNumber,
    NDrawerContent,
    NLoadingBarProvider,
  
    // Layout
    NLayout,
    NLayoutHeader,
    NLayoutContent,
    NLayoutFooter,
    NLayoutSider,
  
    // Prompt
    NConfigProvider,
    NDialogProvider,
    NNotificationProvider,
    NMessageProvider,
  ]
})

export function setupNaive(app: App<Element>) {
  app.use(naive)
}