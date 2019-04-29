<template>
  <news-details category="haber" newsSource="//panel.haberuskudar.com/api/contents"/>
</template>

<script>
import NewsDetails from "@/components/NewsDetails.vue";

export default {
  components: {
    NewsDetails
  }
}
</script>

