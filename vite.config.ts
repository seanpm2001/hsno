// vite config
import { defineConfig } from 'vite'
// hsno & plugin config
// import { config as hsnoConfig } from './hsno.config'
// import { config as imagetoolsConfig } from './src/hsno/config/imagetools.config'
import { config as pwaConfig } from './src/hsno/config/pwa.config'
// vite plugins
// import { imagetools } from 'vite-imagetools'
import { qwikCity } from '@builder.io/qwik-city/vite'
import { qwikVite } from '@builder.io/qwik/optimizer'
// import { qwikSpeakInline } from 'qwik-speak/inline'
import { partytownVite } from '@builder.io/partytown/utils'
import { VitePWA } from 'vite-plugin-pwa'
import tsconfigPaths from 'vite-tsconfig-paths'
// mdx plugins
// import remarkMdxImages from 'remark-mdx-images'
// utils
import { resolve } from 'node:path'

export default defineConfig({
  plugins: [
    // imagetools(imagetoolsConfig),
    qwikCity(),
    qwikVite(),
    // qwikSpeakInline({
    //   assetsPath: './src/hsno/i18n',
    //   supportedLangs: hsnoConfig.i18n.supportedLocales.map(({ lang }) => lang),
    //   defaultLang: hsnoConfig.i18n.defaultLocale.lang
    // }),
    partytownVite({ dest: resolve('public', '~partytown') }),
    VitePWA(pwaConfig),
    tsconfigPaths()
  ],
  preview: {
    headers: {
      'Cache-Control': 'public, max-age=600'
    }
  }
})
