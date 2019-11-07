<template>
  <div>
    <div class="row mx-auto">
      <Navbar />
    </div>
    <div class="container news-details">
      <div class="row mx-auto">
        <news class="col-lg-4 order-1" :newsSource="newsSource" :category="category"></news>
        <news-content
          class="col-lg-8 order-0"
          :image="news.image"
          :title="news.title"
          :details="news.post"
          :date="news.created_at"
          :slug="news.slug"
          :detailCategory="news.category"
          :explanation="news.explanation"
        ></news-content>
      </div>
    </div>
    <custom-footer class="d-none d-sm-none d-md-none d-lg-block" />
    <script v-html="jsonld" type="application/ld+json"></script>
  </div>
</template>
<script>
import axios from "axios";
import NewsContent from "@/components/NewsContent.vue";
import News from "@/components/News.vue";
import Navbar from "@/components/Navbar.vue";
import CustomFooter from "@/components/CustomFooter.vue";
import moment from "moment";
export default {
  data() {
    return {
      list: [],
      news: {
        title: "Yükleniyor...",
        details: "Yükleniyor...",
        image: null,
        category: { slug: "" }
      },
      jsonld: {}
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
            this.news.created_at = moment(this.news.created_at).format(
              "DD.MM.YYYY HH:mm"
            );
          } else {
            this.$router.push("/404/not-found");
          }
        })
        .catch(() => {
          this.$router.push("/");
        });
    },
    fillJSON: function() {
      const jsonld = {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": "https://google.com/article"
        },
        headline: this.news.title,
        image: [this.news.image],
        datePublished: this.news.created_at,
        dateModified: this.news.updated_at,
        author: {
          "@type": "Person",
          name: "Üsküdar Üniversitesi"
        },
        publisher: {
          "@type": "Organization",
          name: "Üsküdar Üniversitesi",
          logo: {
            "@type": "ImageObject",
            url: "https://uskudar.edu.tr/assets/v2/dist/img/logo.svg"
          }
        },
        description: this.news.explanation
      };
      this.jsonld = jsonld;
    }
  },
  watch: {
    $route() {
      // react to route changes...
      /*TODO: fix meta and jsonld error*/
      this.news = this.fillNewsDetails();
      this.fillJSON();
    }
  },
  async mounted() {
    await this.fillNewsDetails();
    this.fillJSON();
    console.log(this.news);
    //this.scroll();
  },
  metaInfo() {
    return {
      title: this.news.title || "Haber Üsküdar",
      link: [
        {
          rel: "canonical",
          href: "https://haberuskudar.com/" + this.news.slug
        },
        {
          rel: "amphtml",
          href: "https://amp.haberuskudar.com/" + this.news.slug
        }
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
          content:
            "https://m.media-amazon.com/images/G/01/imdb/images-ANDW73HA/imdb_fb_logo._CB1542065250_.png"
        },
        {
          property: "og:type",
          content: "article"
        },
        {
          property: "og:description",
          content: this.news.explanation
        }
      ]
    };
  }
};
</script>
<style scoped>
.news-details {
  margin-top: 180px;
}
</style>
