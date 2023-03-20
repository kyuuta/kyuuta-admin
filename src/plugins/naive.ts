import type { App } from 'vue'

import {
  // carete naive ui
  create,
  // components
  NConfigProvider,
  NDialogProvider,
  NNotificationProvider,
  NMessageProvider,
  NLayout,
  NLayoutHeader,
  NLayoutContent,
  NLayoutFooter,
  NLayoutSider,
  NButton,
  NMenu,
  NSwitch
} from 'naive-ui'

const naive = create({
  components: [
    create,
    NConfigProvider,
    NDialogProvider,
    NNotificationProvider,
    NMessageProvider,
    NLayout,
    NLayoutHeader,
    NLayoutContent,
    NLayoutFooter,
    NLayoutSider,
    NButton,
    NMenu,
    NSwitch
  ]
})

export function setupNaive(app: App<Element>) {
  app.use(naive)
}