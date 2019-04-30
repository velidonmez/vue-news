<template>
  <div class="news d-flex flex-column">
    <div class="wrapper">
      <ul class="news-list .disable-scrollbars">
        <li v-for="(item, $index) in list" :key="$index" class="news-item" @click="scrollToTop">
          <span class="score">
            <img
              class="img-thumbnail rounded mx-auto d-block"
              :src="item.image === null || item.image === undefined ? require('@/assets/img/haberusk_placeholder.png') : 'https://panel.haberuskudar.com/uploads/content/images/'+item.image"
            />
          </span>
          <router-link
            :to="{
              name: category,
              params: { newsId: item.id, newsTitle: item.slug }
            }"
          >
            <span class="title">{{ item.title }}</span>
          </router-link>
          <p class="w-100"></p>
          <span class="meta">
            <span class="time"><timeago :datetime="item.created_at" :auto-update="60"></timeago></span>
          </span>
          <span class="time"> | {{ item.category.name }}</span>
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
export default {
  data() {
    return {
      page: 1,
      list: []
    };
  },
  name: "News",
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
    scrollToTop: function() {
      document.documentElement.scrollTop = 0;
    },
    infiniteHandler($state) {
      axios
        .get(this.newsSource, {
          params: {
            page: this.page
          }
        })
        .then(({ data }) => {
          if (data.data.data.length) {
            this.page += 1;
            this.list.push(...data.data.data);
            //console.log(this.list);
            $state.loaded();
          } else {
            $state.complete();
          }
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper ul {
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
.news-item .meta,
.news-item .host {
  font-size: 0.85em;
  color: #828282;
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
</style>
