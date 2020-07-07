<template>
  <div class="home">
    <Main />
  </div>
</template>

<script>
// @ is an alias to /src
import cities from "@/cities.js";
import Main from "@/components/Main.vue";
export default {
  name: "home",
  components: {
    Main
  }
};
</script>
