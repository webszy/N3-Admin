import { defineConfig,presetUno } from 'unocss'
import { presetVarlet } from '@varlet/preset-unocss'

export default defineConfig({
    // ...UnoCSS options
    presets: [presetUno(), presetVarlet()]

})
