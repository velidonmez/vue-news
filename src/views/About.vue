<template>
  <div class="container">
    <div class="row">
      <Navbar/>
    </div>
    <div class="about">
      <h1>This is an about page</h1>
    </div>
    <div class="row">
      <p class="w-100"></p>
    </div>
    <div class="container">
      <NewsCards category="frontpage"></NewsCards>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import NewsCards from "@/components/NewsCards.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  name: "frontpage",
  components: {
    NewsCards,
    Navbar
  }
};
</script>
