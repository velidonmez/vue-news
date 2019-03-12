<template>
  <div class="container newsdetails">
    <Navbar/>
    <div class="row">
      <div class="col-lg-4">
        <div class="news">
          <ul class="news-list">
            <li v-for="(item, $index) in list" :key="$index" class="news-item">
              <span class="score">{{ item.points }}</span>
              <router-link :to="{name:'news', params: {newsId:item.objectID}}">
                <span class="title">{{ item.title }}</span>
              </router-link>
              <br>
              <span class="meta">
                <span class="by">
                  by
                  {{ item.author }} |
                </span>
                <span class="time">{{ item.created_at.split("T")[0] }} |</span>
              </span>
              <span class="label">{{ item._tags[0] }}</span>
            </li>
            <infinite-loading @infinite="infiniteHandler"></infinite-loading>
          </ul>
        </div>
      </div>
      <NewsContent :title="list[0].title" :details="list[0].title" class="col-lg-8"></NewsContent>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import NewsContent from "@/components/NewsContent.vue";
import Navbar from "@/components/Navbar.vue";
import newsData from "@/assets/news.json";
const api = "//hn.algolia.com/api/v1/search_by_date?tags=story";
export default {
  data() {
    return {
      page: 0,
      list: [],
      news: this.fillNewsDetails(),
      id: null
    };
  },
  name: "newsdetails",
  components: {
    NewsContent,
    Navbar
  },
  methods: {
    infiniteHandler($state) {
      axios
        .get(api, {
          params: {
            page: this.page
          }
        })
        .then(({ data }) => {
          if (data.hits.length) {
            this.page += 1;
            this.list.push(...data.hits);
            console.log(this.list[0].title);
            $state.loaded();
          } else {
            $state.complete();
          }
        });
    },
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
