<template>
  <div>
    <div class="row mx-auto">
      <Navbar/>
    </div>
    <div class="container anasayfa">
      <div class="row">
        <p class="w-100"></p>
      </div>
      <NewsCards category="arastirma-inceleme-details" :newsSource="newsSource"></NewsCards>
    </div>
    <custom-footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import NewsCards from "@/components/NewsCards.vue";
import Navbar from "@/components/Navbar.vue";
import CustomFooter from "@/components/CustomFooter.vue";
import axios from "axios";
export default {
  name: "anasayfa",
  components: {
    NewsCards,
    Navbar,
    CustomFooter
  },
  data() {
    return {
      page: null,
      list: [],
      aboutDropdownLinks: [],
      updatedProp: "",
      newsSource: ""
    };
  },
  mounted() {
    this.newsSource =
        "//panel.haberuskudar.com/api/category-contents" + this.$route.path;
  },
  computed: {
    grabContent() {
      this.newsSource =
        "//panel.haberuskudar.com/api/category-contents" + this.$route.path;
    },
    updateContent() {
      let currentCategory = this.$route.path;
      let categoryFound = this.list.find(el => {
        return el.slug == currentCategory;
      });
      return categoryFound.slug;
    }
  },
  watch: {
    $route() {
      // react to route changes...
      console.log(this.$route.path);
      this.newsSource =
        "//panel.haberuskudar.com/api/category-contents" + this.$route.path;
    }
  }
};
</script>
