<script lang="ts" setup>

</script>
<template>
  <n-config-provider
      class="w-full h-full"
      :inline-theme-disabled="true"
  >
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
  </n-config-provider>
</template>
<style>
@import "vfonts/Roboto.css";
@import '@unocss/reset/normalize.css';
html, body, #__nuxt {
  width: 100%;
  height: 100%;
}

body {
  margin: 0;
  padding: 0;
}

</style>
<style scoped>
 html:deep(.n-input .n-input__input-el::placeholder){
   -webkit-text-fill-color: transparent !important;
   opacity: 1;
   color:#9ca3af;
   font-size: 18px;
 }
 html:deep(.n-input .n-input__input-el::-internal-input-suggested){
   color:#9ca3af;
   background: transparent;
 }
</style>
