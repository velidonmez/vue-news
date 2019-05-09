<template>
  <div>
    <div class="row mx-auto">
      <Navbar/>
    </div>
    <div class="container bilim-teknoloji">
      <div class="row">
        <p class="w-100"></p>
      </div>
      <NewsCards
        category="bilim-teknoloji-details"
        newsSource="//panel.haberuskudar.com/api/category-contents/bilim-teknoloji"
      ></NewsCards>
    </div>
    <custom-footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import NewsCards from "@/components/NewsCards.vue";
import Navbar from "@/components/Navbar.vue";
import CustomFooter from "@/components/CustomFooter.vue";

export default {
  name: "bilim-teknoloji",
  components: {
    NewsCards,
    Navbar,
    CustomFooter
  }
};
</script>
