<template>
  <div class="container anasayfa">
    <div class="row">
      <Navbar/>
    </div>
    <div class="row">
      <p class="w-100"></p>
    </div>
    <div class="container">
      <NewsCards category="haber" newsSource="//demo.haberuskudar.com/api/contents"></NewsCards>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NewsCards from "@/components/NewsCards.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  name: "anasayfa",
  components: {
    NewsCards,
    Navbar
  }
};
</script>
