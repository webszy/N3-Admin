<script setup lang="ts">

import SubItem from "~/components/subscription/SubItem.vue";

definePageMeta({
  name: 'DomainConfig',
  meta: {
    title: 'Subscription Config',
  }
})
const info = ref({})
</script>

<template>
  <div class="container">
    <h1>Subscription Config</h1>
    <SubItem :info="info"/>
  </div>
</template>

<style scoped>

</style>
