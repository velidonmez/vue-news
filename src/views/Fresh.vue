<template>
  <div class="container new">
    <div class="row">
      <Navbar/>
    </div>
    <div class="row">
      <p class="w-100"></p>
    </div>
    <div class="container">
      <NewsCards category="fresh" newsSource="//hn.algolia.com/api/v1/search_by_date?tags=story"></NewsCards>
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
