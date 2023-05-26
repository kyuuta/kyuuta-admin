import path from 'node:path'
import VueMacros from 'unplugin-vue-macros/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { getSrcPath } from '../utils'
import VueI18n from '@intlify/unplugin-vue-i18n/vite'

export default function unplugin(viteEnv: ImportMetaEnv) {
  const { VITE_ICON_PREFFIX, VITE_ICON_LOCAL_PREFFIX } =
    viteEnv

  const srcPath = getSrcPath()
  const localIconPath = `${srcPath}/assets/svg`

  const collectionName = VITE_ICON_LOCAL_PREFFIX.replace(
    `${VITE_ICON_PREFFIX}-`,
    ''
  )

  return [
    VueMacros({}),
    Icons({
      compiler: 'vue3',
      customCollections: {
        [collectionName]: FileSystemIconLoader(
          localIconPath,
          (svg) =>
            svg.replace(
              /^<svg\s/,
              '<svg width="1em" height="1em" '
            )
        )
      },
      scale: 1,
      defaultClass: 'inline-block'
    }),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      dts: 'src/typings/auto-imports.d.ts',
      imports: [
        'vue',
        'vue-router',
        'vue-i18n',
        '@vueuse/core'
      ],
      dirs: ['src/composables', 'src/store/**'],
      vueTemplate: true
    }),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      dts: 'src/typings/components.d.ts',
      types: [
        {
          from: 'vue-router',
          names: ['RouterLink', 'RouterView']
        }
      ],
      resolvers: [
        NaiveUiResolver(),
        IconsResolver({
          customCollections: [collectionName],
          componentPrefix: VITE_ICON_PREFFIX
        })
      ]
    }),

    // https://github.com/vbenjs/vite-plugin-svg-icons
    createSvgIconsPlugin({
      iconDirs: [localIconPath],
      symbolId: `${VITE_ICON_LOCAL_PREFFIX}-[dir]-[name]`,
      inject: 'body-first',
      customDomId: '__SVG_ICON_LOCAL__'
    }),

    // https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      fullInstall: true,
      include: [path.resolve(__dirname, '../../locales/**')]
    })
  ]
}
