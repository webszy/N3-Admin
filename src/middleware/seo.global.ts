
export default defineNuxtRouteMiddleware((to, from) => {
    if (import.meta.server){return}
    console.log(to)
    const title = to.meta?.meta?.title || to.path.split('/').at(-1)
    useHead({
        title:title+' - N3 Admin'
    })
})
