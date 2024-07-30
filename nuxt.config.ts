// https://nuxt.com/docs/api/configuration/nuxt-config
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {NaiveUiResolver} from 'unplugin-vue-components/resolvers'
import {resolve,dirname} from 'node:path'
import {fileURLToPath}  from 'node:url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    modules: ['nuxtjs-naive-ui', '@unocss/nuxt'],
    css: ['animate.css'],
    srcDir: 'src/',
    runtimeConfig:{
        public:{
            sha256_Secret: process.env.NUXT_SHA256_SECRET || 'empty_secret'
        }
    },
    build: {
        transpile:
            process.env.NODE_ENV === 'production'
                ? ['naive-ui', 'vueuc', '@css-render/vue3-ssr', '@juggle/resize-observer']
                : ['@juggle/resize-observer'],
    },
    vite: {
        plugins: [
            AutoImport({
                imports: [
                    {
                        'naive-ui': [
                            'useDialog',
                            'useMessage',
                            'useNotification',
                            'useLoadingBar'
                        ]
                    }
                ],
                dts: true
            }),
            Components({
                dts: true,
                resolvers: [NaiveUiResolver()]
            })
        ],
        ssr: {
            noExternal: ['naive-ui'],
        },
    },
    nitro: {
        preset: 'node-server'
    }
})
