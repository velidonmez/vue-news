<template>
  <div class="news">
    <ul class="news-list">
      <li v-for="item in list"
      :key="item.id" class="news-item">
        <span class="score">{{ item.score }}</span>
        <router-link :key="details" :to="{name:'news', params: {newsId:item.id}}">
          <span class="title">{{ item.title }}</span>
        </router-link>
        <br>
        <span class="meta">
          <span class="by">
            by
            {{ item.by }} |
          </span>
          <span class="time">{{ item.time }} |</span>
        </span>
        <span class="label">{{ item.type }}</span>
      </li>
    </ul>
  </div>
  <infinite-loading @infinite="infiniteHandler"></infinite-loading>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading';
import axios from 'axios';
import news from "@/assets/news.json";

export default {
  data() {
    return {
      page: 1,
      list: [],
      news: news
    };
  },
  components: {
    InfiniteLoading,
  },
  name: "News",
  props: {
    msg: String
  },
  methods: {
    infiniteHandler($state) {
      axios.get(api, {
        params: {
          page: this.page,
        },
      }).then(({ data }) => {
        if (data.hits.length) {
          this.page += 1;
          this.list.push(...data.hits);
          $state.loaded();
        } else {
          $state.complete();
        }
      });
    },
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
