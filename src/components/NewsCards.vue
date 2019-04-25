<template>
  <section class="news">
    <div class="container">
      <div class="row">
        <h3 class="cat-title">
          {{this.$route.name == 'haber' ? 'Anasayfa'
          :this.$route.name == 'arastirma-inceleme' ? 'Araştırma-İnceleme'
          :this.$route.name == 'bilim-teknoloji' ? 'Bilim-Teknoloji'
          :this.$route.name == 'kultur-sanat' ? 'Kültür-Sanat'
          :this.$route.name == 'medya-iletisim' ? 'Medya-İletişim'
          :this.$route.name == 'saglik' ? 'Sağlık'
          :this.$route.name == 'spor' ? 'Spor'
          :this.$route.name == 'universite' ? 'Üniversite'
          : 'Güncel Haberler'}}
        </h3>
      </div>
      <div class="row px-3">
        <div
          v-for="(item, $index) in list"
          :key="$index"
          class="col-xs-6 col-md-4 col-sm-6 col-lg-3"
        >
          <div class="card mb-4">
            <router-link
              :to="{
                name: category,
                params: { newsId: item.id.toString(), newsTitle: item.slug }
              }"
            >
              <!-- todo: find a suitable image for null values -->
              <div class="img-container">
                <img
                  class="img-thumbnail"
                  :src="item.image === null ? require('@/assets/img/haberusk_placeholder.png') : 'https://demo.haberuskudar.com/uploads/content/images/'+item.image"
                >
              </div>
              <div class="card-img-overlay">
                <span class="badge badge-pill cat-notif">
                  {{
                  item.category.name
                  }}
                </span>
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
export default {
  data() {
    return {
      currentPage: this.$route.name,
      page: 1,
      list: []
    };
  },
  name: "NewsCards",
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
            console.log(this.list);
            $state.loaded();
          } else {
            $state.complete();
          }
        });
    },
    scrollToTop: function() {
      document.documentElement.scrollTop = 0;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.cat-title {
  margin-left: 30px;
}
.cat-notif {
  vertical-align: middle;
  margin-left: -15px;
  margin-top: -35px;
  color: #fff;
  background-color: #004c4c;
}
.img-container {
  height: 8em;
  overflow: hidden;
}
.card {
  float: left;
  width: 100%;
  height: 16em;
  overflow: hidden;
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
