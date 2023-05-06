import type { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import unocss from '@unocss/vite'
import html from './html'

import unplugin from './unplugin'

export function setupVitePlugins(
  viteEnv: ImportMetaEnv
): (PluginOption | PluginOption[])[] {
  const plugins = [
    vue(),
    vueJsx(),
    html(viteEnv),
    ...unplugin(viteEnv),
    unocss()
  ]
  return plugins
}
