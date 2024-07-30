<script setup lang="ts">

import AppMenu from "~/layouts/components/AppMenu.vue";
import AppHeader from "~/layouts/components/AppHeader.vue";
import AppFooter from "~/layouts/components/AppFooter.vue";
</script>

<template>
  <main class="container w-full h-full flex flex-col justify-between items-center">
    <AppHeader />
    <div class="app-content w-full flex-1 px-2 box-border overflow-y-auto scroll-smooth">
      <n-layout has-sider class="h-full">
        <n-layout-sider
            collapse-mode="transform"
            :collapsed-width="60"
            :width="180"
            show-trigger="bar"
            content-style="padding: 24px;"
            bordered
            class="h-full"
        >
          <AppMenu />
        </n-layout-sider>
        <n-layout-content content-style="padding: 10px;">
          <NuxtPage />
        </n-layout-content>
      </n-layout>
    </div>
    <AppFooter />
  </main>
</template>
<style>

</style>
<style scoped>
.head,.foot {
  height: 50px;
}
</style>
