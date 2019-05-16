<template>
  <div>
    <div class="row mx-auto">
      <Navbar/>
    </div>
    <div class="container yasam">
      <gcse:searchbox></gcse:searchbox>
      <gcse:searchresults></gcse:searchresults>
    </div>

    <custom-footer/>
  </div>
</template>

<script>
import NewsCards from "@/components/NewsCards.vue";
import Navbar from "@/components/Navbar.vue";
import CustomFooter from "@/components/CustomFooter.vue";

export default {
  name: "arama",
  components: {
    NewsCards,
    Navbar,
    CustomFooter
  },
  created() {
    (function() {
      var cx = "014726956206410030649:t8cinleklew";
      var gcse = document.createElement("script");
      gcse.type = "text/javascript";
      gcse.async = true;
      gcse.src = "https://cse.google.com/cse.js?cx=" + cx;
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(gcse, s);
    })();
  }
};
</script>
