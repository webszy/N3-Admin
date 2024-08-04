
export default defineNuxtRouteMiddleware((to, from) => {
    if (import.meta.server){return}
    const title = to.meta?.title || to.path.split('/').at(-1)

    useHead({
        title:title+' - N3 Admin'
    })
})
