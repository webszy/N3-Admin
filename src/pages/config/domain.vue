<script setup lang="ts">

definePageMeta({
  name: 'DomainConfig',
  meta: {
    title: 'Domain Config',
  }
})
useFetch('/api/domain/1/10',{
  method: 'GET',
  query: {
    name:'xxx',
    url:'xxx.com'
  }
})
</script>

<template>
<NDataTable />
</template>

<style scoped>

</style>
