<template>
  <div id="app">
    <Banner />
    <MainContemt />
  </div>
  <Footer />
</template>

<script lang="ts">
import Banner from "./assets/components/Banner.vue";
import MainContemt from "./assets/components/MainContent.vue";
import Footer from "./assets/components/Footer.vue";
export default {
  components: { Banner, MainContemt, Footer },
};
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
