<template>
  <news-details category="popular" newsSource="//hn.algolia.com/api/v1/search?tags=front_page"/>
</template>

<script>
import NewsDetails from "@/components/NewsDetails.vue";

export default {
  components: {
    NewsDetails
  }
}
</script>

