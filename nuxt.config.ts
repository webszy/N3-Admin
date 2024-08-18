// https://nuxt.com/docs/api/configuration/nuxt-config
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {NaiveUiResolver,VarletUIResolver} from 'unplugin-vue-components/resolvers'
import {dirname} from 'node:path'
import {fileURLToPath}  from 'node:url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
export default defineNuxtConfig({
    app: {
        head: {
            title:'N3-Admin-Template',
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
        }
    },
    nitro: {
        preset: 'node-server',
        experimental:{
            openAPI: {
                ui: {
                    scalar:{
                        theme: 'purple'
                    }
                },
                meta: {
                    title: 'N3-Admin API',
                    description: 'N3 Admin Is All In One Stack Project Build By Nuxt + Naive UI + NoSql DataBase',
                    version: '1.0'
                }
            }
        }
    },
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    modules: ['nuxtjs-naive-ui', '@unocss/nuxt', "@varlet/nuxt"],
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
                ? ['naive-ui', 'vueuc', '@css-nbvcxz/vue3-ssr', '@juggle/resize-observer']
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
                resolvers: [NaiveUiResolver(),VarletUIResolver()]
            })
        ],
        ssr: {
            noExternal: ['naive-ui'],
        },
    }
})
