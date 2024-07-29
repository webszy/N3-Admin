// https://nuxt.com/docs/api/configuration/nuxt-config
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {NaiveUiResolver} from 'unplugin-vue-components/resolvers'

export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    modules: ['nuxtjs-naive-ui', '@unocss/nuxt'],
    css: ['animate.css'],
    srcDir: 'src/',
    alias: {
        '@config': '/src/config'
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
                ]
            }),
            Components({

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
