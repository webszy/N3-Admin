
export default defineNuxtRouteMiddleware((to, from) => {
    if (import.meta.server){return}
    console.log(to)
   if(!localStorage.getItem('token') && to.path!=='/login') {
       return navigateTo('/login')
   }
})
