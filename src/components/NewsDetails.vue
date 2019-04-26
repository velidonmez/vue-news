<template>
  <div>
    <div class="row">
      <Navbar/>
    </div>
    <div class="container news-details">
      <div class="row">
        <div class="col-lg-4 order-1">
          <news :newsSource="newsSource" :category="category"></news>
        </div>
        <div class="col-lg-8 order-0">
          <news-content
            :image="news.image === null ? '' : 'https://demo.haberuskudar.com/uploads/content/images/'+news.image"
            :title="news.title"
            :details="news.post"
          ></news-content>
        </div>
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
      if (data.data.data.length) {
        this.list.push(...data.data.data);
        this.news = this.fillNewsDetails();
        /* console.log("news details list: " + this.news);
        console.log(this.$route.params.newsTitle); */
      }
    });
  },
  /* mounted() {
    this.scroll();
  }, */
  metaInfo() {
    return {
      title: this.news.title ,
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
          content: this.news.image
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
