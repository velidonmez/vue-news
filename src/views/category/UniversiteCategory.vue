<template>
  <div>
    <div class="row mx-auto">
      <Navbar/>
    </div>
    <div class="container universite">
      <div class="row">
        <p class="w-100"></p>
      </div>
      <NewsCards
        category="universite-details"
        newsSource="//panel.haberuskudar.com/api/category-contents/universite"
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
