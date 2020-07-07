<template>
  <div id="app">
    <Header />
    <Footer />
    <transition name="fade" mode="out-in">
      <router-view :key="$route.path" />
    </transition>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "home",
  components: {
    Header,
    Footer
  }
};
</script>
