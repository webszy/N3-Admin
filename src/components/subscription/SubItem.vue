<script setup lang="ts">
enum ESubServiceLogo{
  EMPTY = 'default',
  WESTCN = 'westCN',

}
interface IProps {
  logo:ESubServiceLogo
}
const props = withDefaults(defineProps<IProps>(),{
  logo:ESubServiceLogo.EMPTY
})
</script>

<template>
  <section class="sub-item">
    <img :src="props.logo" alt="item-image">
  </section>
</template>

<style scoped>
.sub-item {

  box-shadow: rgba(0, 0, 0, 0.15) 0 2px 8px;
}
</style>
