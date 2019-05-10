<template>
  <div>
    <div class="row mx-auto">
      <Navbar/>
    </div>
    <div class="container news-details">
      <div class="row mx-auto">
        <news class="col-lg-4 order-1" :newsSource="newsSource" :category="category"></news>
        <news-content
          class="col-lg-8 order-0"
          :image="news.image === null ? require('@/assets/img/haberusk_placeholder.png') : '/uploads/content/images/'+news.image"
          :title="news.title"
          :details="news.post"
        ></news-content>
      </div>
    </div>
    <custom-footer class="d-none d-sm-none d-md-none d-lg-block"/>
  </div>
</template>
<script>
import axios from "axios";
import NewsContent from "@/components/NewsContent.vue";
import News from "@/components/News.vue";
import Navbar from "@/components/Navbar.vue";
import CustomFooter from "@/components/CustomFooter.vue";
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
    News,
    CustomFooter
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
      const apiUrl = "https://panel.haberuskudar.com/api/content-detail/" + id;
      await axios
        .get(apiUrl)
        .then(({ data }) => {
          if (data.hasOwnProperty("data")) {
            this.news = data.data;
          } else {
            this.$router.push("/404/not-found");
          }
        })
        .catch(err => {
          this.$router.push("/");
        });
    }
  },
  watch: {
    $route() {
      // react to route changes...
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
      title: this.news.title || "Haber Üsküdar",
      link: [
        { rel: "canonical", href: "https://haberuskudar.com"+this.$route.path }
      ],
      meta: [
        {
          name: "description",
          content: this.news.explanation
        },
        {
          property: "article:publisher",
          content: "https://www.facebook.com/UskudarUniversitesi/"
        },
        {
          property: "og:site_name",
          content: "Üsküdar Üniversitesi"
        },
        {
          property: "og:title",
          content: "Haber Üsküdar - " + this.news.title
        },
        {
          property: "og:url",
          content: this.$route.fullPath
        },
        {
          property: "og:image",
          content: this.news.image || ""
        },
        {
          property: "og:type",
          content: "article"
        }
      ]
    };
  }
};
</script>
