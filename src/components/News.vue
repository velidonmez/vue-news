<template>
  <div class="news d-flex flex-column">
    <div class="wrapper">
      <ul class="news-list">
        <li
          v-for="(item, $index) in list"
          :key="$index"
          class="news-item"
          @click="scrollToTop"
        >
          <span class="score"><img class="img-thumbnail rounded mx-auto d-block" src="https://via.placeholder.com/150" alt /></span>
          <router-link
            :to="{
              name: 'news',
              params: { newsId: item.objectID, newsTitle: item.title }
            }"
          >
            <span class="title">{{ item.title }}</span>
          </router-link>
          <br />
          <span class="meta">
            <span class="by">
              by
              {{ item.author }} |
            </span>
            <span class="time">{{ item.created_at.split("T")[0] }} |</span>
          </span>
          <span class="label">{{ item._tags[0] }}</span>
        </li>
        <infinite-loading @infinite="infiniteHandler" spinner="waveDots">
          <div slot="no-more">Liste sonu.</div>
          <div slot="no-results">Sonuç bulunamadı.</div>
        </infinite-loading>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from "axios";
//import news from "@/assets/news.json";
const newListed = "//hn.algolia.com/api/v1/search_by_date?tags=story";
const popular = "//hn.algolia.com/api/v1/search?tags=front_page";
let api = popular;
export default {
  data() {
    return {
      currentPage: this.$route.path,
      page: 0,
      list: []
    };
  },
  name: "News",
  props: {
    category: String
  },
  methods: {
    scrollToTop: function() {
      document.documentElement.scrollTop = 0;
    },
    infiniteHandler($state) {
      if (this.currentPage === "/") {
        api = popular;
      } else if (this.currentPage === "/fresh") {
        api = newListed;
      }
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
            $state.loaded();
          } else {
            $state.complete();
          }
        });
    }
  },
  updated: function() {
    this.$nextTick(function() {
      // Code that will run only after the
      // entire view has been rendered
      this.$emit("getNewsList", this.list);
      console.log(this.list.length);
    });
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
  left: 0;
  width: 80px;
  text-align: center;
}
.news-item .meta,
.news-item .host {
  font-size: 0.85em;
  color: #828282;
}
</style>
