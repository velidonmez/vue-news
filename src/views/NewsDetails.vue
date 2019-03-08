<template>
  <div class="container newsdetails">
    <Navbar/>
    <div class="row">
      <News class="col-lg-4"></News>
      <NewsContent :title="news.title" :details="news.details" class="col-lg-8"></NewsContent>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NewsContent from "@/components/NewsContent.vue";
import Navbar from "@/components/Navbar.vue";
import News from "@/components/News.vue";
import news from "@/assets/news.json";
import { watch } from "fs";

export default {
  data() {
    return {
      news: this.fillNewsDetails()
    };
  },
  name: "newsdetails",
  components: {
    NewsContent,
    Navbar,
    News
  },
  methods: {
    fillNewsDetails: function() {
      const id = this.$route.params.newsId;
      return news.find(function(el) {
        return el.id === id;
      });
    }
  },
  watch: {
    $route(to, from) {
      // Put your logic here...
      console.log(this.$route.params.newsId);
      const id = this.$route.params.newsId;
      return news.find(function(el) {
        return el.id === id;
      });
    }
  }
};
</script>
