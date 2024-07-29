export default defineNuxtRouteMiddleware((to, from) => {
    if (process.server){return}
   if(!localStorage.getItem('token') && to.path!=='/login') {
       return navigateTo('/login')
   }
})