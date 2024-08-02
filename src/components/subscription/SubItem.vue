<script setup lang="ts">
const props = defineProps({
  info:{
    type:Object,
  }
})
</script>

<template>
  <section class="sub-item">
    <img :src="info.logo" alt="item-image">
  </section>
</template>

<style scoped>
.sub-item {

  box-shadow: rgba(0, 0, 0, 0.15) 0 2px 8px;
}
</style>
