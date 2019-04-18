<template>
  <div class="container popular">
    <div class="row">
      <Navbar/>
    </div>
    <div class="row">
      <p class="w-100"></p>
    </div>
    <div class="container">
      <NewsCards category="frontpage" newsSource="//hn.algolia.com/api/v1/search?tags=front_page"></NewsCards>
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
