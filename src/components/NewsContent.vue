<template>
  <article class="newsContent mt-3 pt-3 pr-3">
    <SVG-filter-image class="img-fluid" :src="image" alt></SVG-filter-image>
    <h1>{{ title }}</h1>
    <div v-html="details" class="details"></div>
  </article>
</template>

<script>
import SVGFilterImage from "./SVGFilterImage";
export default {
  name: "NewsContent",
  props: {
    image: String,
    title: String,
    details: String
  },
  components: {
    SVGFilterImage
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.newsContent .details p img {
  max-width: 100%!important;
  height: auto!important;
}
.newsContent{
  overflow-x: auto;
}
</style>
