<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <NButton size="large" type="success" @click="router.push('/config/subscription')">订阅管理</NButton>
</template>

<style scoped>

</style>
