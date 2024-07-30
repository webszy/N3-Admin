<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <NButton size="large" type="success" @click="router.push('/config/domain')">域名管理</NButton>
</template>

<style scoped>

</style>
