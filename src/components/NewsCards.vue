<template>
  <section class="news">
    <div class="container-fluid">
      <div class="row px-3">
        <div
          v-for="(item, $index) in list"
          :key="$index"
          class="col-md-4 col-sm-6 col-lg-3"
        >
          <div class="card mb-4">
            <router-link
              :to="{
                name: 'news',
                params: { newsId: item.objectID, newsTitle: item.title }
              }"
            >
              <img class="img-fluid" src="../assets/logo.png" alt />
              <div class="card-img-overlay">
                <span class="badge badge-pill badge-danger">{{
                  item._tags[0]
                }}</span>
              </div>
              <div class="card-body p-2">
                <div class="news-title">
                  <h2 class="title-small">
                    <a href="#">{{ item.title }}</a>
                  </h2>
                </div>
                <p class="card-text">
                  <small class="text-time">
                    <em>{{ item.created_at.split("T")[0] }}</em>
                  </small>
                </p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <infinite-loading @infinite="infiniteHandler" spinner="waveDots">
        <div slot="no-more">Liste sonu.</div>
        <div slot="no-results">Sonuç bulunamadı.</div>
      </infinite-loading>
    </div>
  </section>
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
.card {
  float: left;
  width: 100%;
}
.navbar {
  border: medium none;
  float: left;
  margin-bottom: 0px;
  width: 100%;
  border-radius: 0;
}
.title-large {
  font-size: 20px;
  margin: 10px 0 5px;
  line-height: 27px;
  color: #141517;
}
.title-small {
  color: #141517;
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
  margin: 6px 0 0;
}
.title-x-small {
  font-size: 18px;
  margin: 0px;
}
.title-large a,
.title-small a,
.title-x-small a {
  color: inherit;
}
.banner-sec {
  float: left;
  width: 100%;
  background: #ebebeb;
}
.card-block {
  padding: 0 10px 10px;
}
.card-text {
  margin: 0;
}
.text-time {
  color: #ff0000;
  font-weight: 600;
}
</style>
