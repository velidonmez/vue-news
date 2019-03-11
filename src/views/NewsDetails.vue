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
import newsData from "@/assets/news.json";

export default {
  data() {
    return {
      news: this.fillNewsDetails(),
      id: null
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
      return newsData.find(function(el) {
        return el.id === id;
      });
    }
  },
  watch: {
    $route() {
      // react to route changes...
      const id = this.$route.params.newsId;
      this.news = newsData.find(function(el) {
        return el.id === id;
      });
      console.log(this.$route.params.newsId);
    }
  }
};
</script>
