<template>
  <div class="container news-details">
    <div class="row">
      <Navbar/>
    </div>
    <div class="row">
      <div class="col-lg-4 order-1">
        <news :newsSource="newsSource" :category="category"></news>
      </div>
      <div class="col-lg-8 order-0">
        <news-content
          :image="news.image === null ? require('../assets/img/haberusk_placeholder.png') : 'https://demo.haberuskudar.com/uploads/content/images/'+news.image"
          :title="news.title"
          :details="news.post"
        ></news-content>
        <!-- <news-content
          v-for="otherNews in list.filter(item => item.id !== news.id)"
          :key="otherNews.id"
          :image="otherNews.image === null ? require('../assets/img/haberusk_placeholder.png') : 'https://demo.haberuskudar.com/uploads/content/images/'+news.image"
          :title="otherNews.title"
          :details="otherNews.post"
        ></news-content> -->
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import NewsContent from "@/components/NewsContent.vue";
import News from "@/components/News.vue";
import Navbar from "@/components/Navbar.vue";
export default {
  data() {
    return {
      list: [],
      news: {
        title: "Yükleniyor...",
        details: "Yükleniyor...",
        image: null
      }
    };
  },
  name: "newsdetails",
  components: {
    NewsContent,
    Navbar,
    News
  },
  props: {
    newsSource: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    }
  },
  methods: {
    scroll() {
      window.onscroll = () => {
        let bottomOfWindow =
          Math.max(
            window.pageYOffset,
            document.documentElement.scrollTop,
            document.body.scrollTop
          ) +
            window.innerHeight ===
          document.documentElement.offsetHeight;

        if (bottomOfWindow) {
          console.log("bottom");
          //this.scrolledToBottom = true; // replace it with your code
        }
      };
    },
    fillNewsDetails: function() {
      const id = this.$route.params.newsTitle;
      try {
        return this.list.find(function(el) {
          return el.slug == id;
        });
      } catch (error) {
        throw new Error(error);
        this.$router.push("/");
      }
    }
  },
  watch: {
    $route() {
      // react to route changes...
      this.news = this.fillNewsDetails();
    }
  },
  created() {
    const id = this.$route.params.newsTitle;
    axios.get(this.newsSource).then(({ data }) => {
      if (data.data.length) {
        this.list.push(...data.data);
        this.news = this.fillNewsDetails();
        console.log("news details list: " + this.news);
        console.log(this.$route.params.newsTitle);
      }
    });
  },
  mounted() {
    this.scroll();
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
