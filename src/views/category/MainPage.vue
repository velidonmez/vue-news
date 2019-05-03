<template>
  <div>
    <div class="row mx-auto">
      <Navbar @cat-list="fillCatList" />
    </div>
    <div class="container anasayfa">
      <div class="row">
        <p class="w-100"></p>
      </div>
      <NewsCards category="haber" newsSource="//panel.haberuskudar.com/api/contents"></NewsCards>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NewsCards from "@/components/NewsCards.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  name: "anasayfa",
  components: {
    NewsCards,
    Navbar
  },
  data() {
    return {
      list: []
    };
  },
  methods: {
    //get emitted category info from navbar component
    fillCatList(list) {
      this.list = list;
      console.log(this.list);
    }
  }
};
</script>
