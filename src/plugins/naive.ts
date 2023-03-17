import type { App } from 'vue'

import {
  // carete naive ui
  create,
  // components
  NButton,
  NConfigProvider,
  NNotificationProvider,
  NMessageProvider,
  NDialogProvider
} from 'naive-ui'

const naive = create({
  components: [
    NButton,
    NConfigProvider,
    NNotificationProvider,
    NMessageProvider,
    NDialogProvider
  ]
})

export function setupNaive(app: App<Element>) {
  app.use(naive)
}