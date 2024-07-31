<script setup lang="ts">

definePageMeta({
  name: 'DomainConfig',
  meta: {
    title: 'Domain Config',
  }
})
useFetch('/api/manager/subscription/1/10',{
  method: 'GET',
  query: {
    name:'xxx',
    url:'xxx.com'
  }
})
</script>

<template>

</template>

<style scoped>

</style>
