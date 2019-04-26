<template>
  <div>
    <div class="row">
      <Navbar/>
    </div>
    <div class="container news-details">
      <div class="row">
        
          <news class="col-lg-4 order-1" :newsSource="newsSource" :category="category"></news>
        
          <news-content class="col-lg-8 order-0"
            :image="news.image === null ? require('@/assets/img/haberusk_placeholder.png') : 'https://demo.haberuskudar.com/uploads/content/images/'+news.image"
            :title="news.title"
            :details="news.post"
          ></news-content>
        
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
    //fire an event when scroll to bottom
    /* scroll() {
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
    }, */
    fillNewsDetails: async function() {
      const id = this.$route.params.newsTitle;
      const apiUrl = "https://demo.haberuskudar.com/api/content-detail/" + id;
      //console.log(apiUrl);
      //console.log(this.$route.params.newsId);
      await axios
        .get(apiUrl)
        .then(({ data }) => {
          if (data) {
            this.news = data.data;
            //this.news = this.fillNewsDetails();
            //console.log(this.news);
            //console.log(this.$route.params.newsTitle);
          } else {
            this.$router.push("/");
          }
        })
        .catch(err => {
          console.log(err);
          this.$router.push("/");
        });
    }
  },
  watch: {
    $route() {
      // react to route changes...
      //console.log(this.$route.params.newsId);
      this.news = this.fillNewsDetails();
    }
  },
  created() {
    this.fillNewsDetails();
  },
  /* mounted() {
    this.scroll();
  }, */
  metaInfo() {
    return {
      title: this.news.title || 'Haber Üsküdar',
      meta: [
        {
          name: 'description',
          content: this.news.explanation
        },
        {
          property: 'article:publisher',
          content: 'https://www.facebook.com/UskudarUniversitesi/'
        },
        {
          property: 'og:site_name',
          content: 'Üsküdar Üniversitesi'
        },
        {
          property: 'og:title',
          content: 'Haber Üsküdar - ' + this.news.title
        },
        {
          property: 'og:url',
          content: this.$route.fullpath
        },
        {
          property: 'og:image',
          content: this.news.image || ''
        },
        {
          property: 'og:type',
          content: 'article'
        }
      ]
    }
  }
};
</script>
