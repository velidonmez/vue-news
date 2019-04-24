<template>
  <div>
    <div class="row">
      <Navbar/>
    </div>
    <div class="container medya-iletisim">
      <div class="row">
        <p class="w-100"></p>
      </div>
      <NewsCards
        category="medya-iletisim-details"
        newsSource="//demo.haberuskudar.com/api/category-contents/medya-iletisim"
      ></NewsCards>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import NewsCards from "@/components/NewsCards.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  name: "fresh",
  components: {
    NewsCards,
    Navbar
  }
};
</script>
