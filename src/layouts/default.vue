<script setup lang="ts">

</script>

<template>
  <main class="container w-full h-full flex flex-col justify-between items-center">
    <header class="head w-full  bg-gray-100">header</header>
    <div class="w-full flex-1 px-2 box-border overflow-y-auto scroll-smooth">
      <NuxtPage />
    </div>
    <footer class="foot w-full bg-gray-100">footer</footer>
  </main>
</template>
<style>

</style>
<style scoped>
.head,.foot {
  height: 50px;
}
</style>
