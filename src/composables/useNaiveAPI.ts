import type { ConfigProviderProps } from 'naive-ui'
import { createDiscreteApi, darkTheme, lightTheme } from 'naive-ui'

const themeRef = ref<'light' | 'dark'>('light')
const configProviderPropsRef = computed<ConfigProviderProps>(() => ({
    theme: themeRef.value === 'light' ? lightTheme : darkTheme
}))

const { message, notification, dialog, loadingBar, modal }= createDiscreteApi(
    ['message', 'dialog', 'notification', 'loadingBar', 'modal'],
    {
        configProviderProps: configProviderPropsRef
    }
)
export const naiveMessage = message
export const naiveNotification = notification
export const naiveDialog = dialog
export const naiveLoadingBar = loadingBar
export const naiveModal = modal


