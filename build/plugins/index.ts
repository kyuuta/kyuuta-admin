import type { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import progress from 'vite-plugin-progress'
import unocss from '@unocss/vite'
import html from './html'
import compress from './compress'
import visualizer from './visualizer'
import unplugin from './unplugin'

export function setupVitePlugins(
  viteEnv: ImportMetaEnv
): (PluginOption | PluginOption[])[] {
  const { VITE_VISUALIZER = 'N', VITE_COMPRESS = 'N' } =
    viteEnv

  const plugins = [
    vue(),
    vueJsx(),
    html(viteEnv),
    ...unplugin(viteEnv),

    // https://github.com/antfu/unocss
    // see uno.config.ts for config
    unocss(),
    progress()
  ]

  if (VITE_VISUALIZER === 'Y') {
    plugins.push(visualizer as PluginOption)
  }

  if (VITE_COMPRESS === 'Y') {
    plugins.push(compress(viteEnv))
  }

  return plugins
}
