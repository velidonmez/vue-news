<template>
  <div>
    <div class="row">
      <Navbar/>
    </div>
    <div class="container kultur-sanat">
      <div class="row">
        <p class="w-100"></p>
      </div>
      <NewsCards
        category="kultur-sanat-details"
        newsSource="//demo.haberuskudar.com/api/category-contents/kultur-sanat"
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
