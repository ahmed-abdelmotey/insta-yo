<template>
  <div id="app">
    <div class="l-header">
      <Header />
    </div>
    <router-view />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss">
  /* entry point for app styles */
  @import './assets/styles/main';
</style>
