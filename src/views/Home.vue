<template>
  <div class="home">
    <Header />
    <Main />
  </div>
</template>

<script>
// @ is an alias to /src
import cities from "@/cities.js";
import Header from "@/components/Header.vue";
import Main from "@/components/Main.vue";
export default {
  name: "home",
  components: {
    Header,
    Main
  }
};
</script>
