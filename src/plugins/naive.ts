import type { App } from 'vue'

import {
  // carete naive ui
  create,
  // components
  NCard,
  NIcon,
  NMenu,
  NSpin,
  NAffix,
  NEmpty,
  NInput,
  NModal,
  NSpace,
  NAvatar,
  NButton,
  NDrawer,
  NSelect,
  NSwitch,
  NDivider,
  NTooltip,
  NDropdown,
  NDataTable,
  NScrollbar,
  NBreadcrumb,
  NBreadcrumbItem,
  NColorPicker,
  NInputNumber,
  NDrawerContent,

  // Layout
  NLayout,
  NLayoutHeader,
  NLayoutContent,
  NLayoutFooter,
  NLayoutSider,

  // Prompt
  NConfigProvider,
  NDialogProvider,
  NLoadingBarProvider,
  NNotificationProvider,
  NMessageProvider
  // NGlobalStyle
} from 'naive-ui'

const naive = create({
  components: [
    create,
    // components
    NCard,
    NIcon,
    NMenu,
    NSpin,
    NAffix,
    NEmpty,
    NInput,
    NModal,
    NSpace,
    NAvatar,
    NButton,
    NDrawer,
    NSelect,
    NSwitch,
    NDivider,
    NTooltip,
    NDropdown,
    NDataTable,
    NScrollbar,
    NBreadcrumb,
    NBreadcrumbItem,
    NColorPicker,
    NInputNumber,
    NDrawerContent,

    // Layout
    NLayout,
    NLayoutHeader,
    NLayoutContent,
    NLayoutFooter,
    NLayoutSider,

    // Prompt
    NConfigProvider,
    NDialogProvider,
    NLoadingBarProvider,
    NNotificationProvider,
    NMessageProvider

    // NGlobalStyle
  ]
})

export default function setupNaive(app: App<Element>) {
  app.use(naive)
}
