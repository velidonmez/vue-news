<template>
  <div>
    <div class="row mx-auto">
      <Navbar/>
    </div>
    <div class="container anasayfa">
      <div class="row">
        <p class="w-100"></p>
      </div>
      <NewsCards category="haber" newsSource="//panel.haberuskudar.com/api/contents"></NewsCards>
    </div>
    <custom-footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import NewsCards from "@/components/NewsCards.vue";
import Navbar from "@/components/Navbar.vue";
import CustomFooter from "@/components/CustomFooter.vue";
import axios from "axios";
export default {
  name: "anasayfa",
  components: {
    NewsCards,
    Navbar,
    CustomFooter
  }
};
</script>
