<template>
  <div class="about">
    <Header />
    <h1 style="color:black">About</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import cities from "@/cities.js";
import Header from "@/components/Header.vue";
export default {
  name: "about",
  components: {
    Header
  }
};
</script>
