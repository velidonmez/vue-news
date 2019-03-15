<template>
  <div class="container-fluid home">
    <Navbar />
    <div class="row">
      <News class="col-lg-8 mx-auto"></News>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import News from "@/components/News.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  name: "home",
  components: {
    News,
    Navbar
  }
};
</script>

<style scoped>
  .home .row {height: auto}
</style>

