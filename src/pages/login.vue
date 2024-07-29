<script setup lang="ts">

definePageMeta({
    layout: false,
  });
  //https://plus.naiveadmin.com/login-v4
  const config = useSiteConfig();
  console.log(config);
</script>

<template>
  <main class="flex justify-between w-full h-full">
    <div class="images w-2/5 h-full">
      <h1>{{  }}</h1>
    </div>
    <div class="login-form flex-1"></div>
  </main>
</template>

<style scoped>
.images {
  background: #e9edf7
}
</style>
