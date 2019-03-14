<template>
  <div class="container newsdetails">
    <Navbar/>
    <div class="row">
      <news class="col-lg-4" @getNewsList="newsToData"></news>
      <news-content class="col-lg-8" :title="news.title" :details="news.title"></news-content>
    </div>
  </div>
</template>

<script>
import NewsContent from "@/components/NewsContent.vue";
import News from "@/components/News.vue";
import Navbar from "@/components/Navbar.vue";
export default {
  data() {
    return {
      list: [],
      news: {
        title: "loading..."
      }
    };
  },
  name: "newsdetails",
  components: {
    NewsContent,
    Navbar,
    News
  },
  methods: {
    newsToData: function(list) {
      try {
        this.list = list;
        this.news = this.fillNewsDetails();
      } catch (error) {
        throw new Error(error);
      }
    },
    fillNewsDetails: function() {
      const id = this.$route.params.newsId;
      return this.list.find(function(el) {
        return el.objectID === id;
      }) || this.$router.push("/");
    }
  },
  watch: {
    $route() {
      // react to route changes...
      this.news = this.fillNewsDetails();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.news-list {
  position: absolute;
  margin: 30px 0;
  width: 100%;
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}
.news-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.news-item {
  background-color: #fff;
  padding: 20px 30px 20px 80px;
  border-bottom: 1px solid #eee;
  position: relative;
  line-height: 20px;
}
.news-item .score {
  color: #f60;
  font-size: 1.1em;
  font-weight: 700;
  position: absolute;
  top: 50%;
  left: 0;
  width: 80px;
  text-align: center;
  margin-top: -10px;
}
.news-item .meta,
.news-item .host {
  font-size: 0.85em;
  color: #828282;
}
</style>
