<template>
  <news-details category="fresh" newsSource="//hn.algolia.com/api/v1/search_by_date?tags=story"/>
</template>

<script>
import NewsDetails from "@/components/NewsDetails.vue";

export default {
  components: {
    NewsDetails
  }
}
</script>
