<template>
  <div class="container news-details">
    <div class="row">
      <Navbar/>
    </div>
    <div class="row">
      <news category="details" class="col-lg-4 order-1" @getNewsList="newsToData"></news>
      <news-content
        class="col-lg-8 order-0"
        image="https://via.placeholder.com/750x422"
        :title="news.title"
        details="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam molestiae inventore dolorem porro sunt perferendis et dicta dolores alias nihil est assumenda voluptates, praesentium fugit earum odio laudantium sapiente distinctio.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam molestiae inventore dolorem porro sunt perferendis et dicta dolores alias nihil est assumenda voluptates, praesentium fugit earum odio laudantium sapiente distinctio."
      ></news-content>
    </div>
    <v-footer class="fixed-bottom"/>
  </div>
</template>

<script>
import NewsContent from "@/components/NewsContent.vue";
import News from "@/components/News.vue";
import Navbar from "@/components/Navbar.vue";
import VFooter from "@/components/VFooter.vue";
export default {
  data() {
    return {
      list: [],
      news: {
        title: "Yükleniyor...",
        details: "Yükleniyor..."
      }
    };
  },
  name: "newsdetails",
  components: {
    NewsContent,
    Navbar,
    News,
    VFooter
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
      return (
        this.list.find(function(el) {
          return el.objectID === id;
        }) || this.$router.push("/")
      );
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
/deep/ .wrapper ul {
  height: calc(100vh - 100px);
  overflow-y: auto;
}
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
