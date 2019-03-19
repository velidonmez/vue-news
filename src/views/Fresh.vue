<template>
  <div class="container-fluid new">
    <Navbar />
    <div class="row">
      <p class="w-100"></p>
    </div>
    <div class="row">
      <News category="fresh" class="col-lg-8 mx-auto"></News>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import News from "@/components/News.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  name: "fresh",
  components: {
    News,
    Navbar
  }
};
</script>
