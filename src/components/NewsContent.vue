<template>
  <article class="newsContent mt-3 pt-3 pr-3">
    <v-lazy-image class="img-fluid" :src="image" alt></v-lazy-image>
    <h1>{{ title }}</h1>
    <div v-html="details" class="details"></div>
  </article>
</template>

<script>
export default {
  name: "NewsContent",
  props: {
    image: String,
    title: String,
    details: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.v-lazy-image {
  filter: blur(10px);
  transition: filter 0.7s;
}
.v-lazy-image-loaded {
  filter: blur(0);
}
.newsContent .details p img {
  max-width: 100%!important;
  height: auto!important;
}
.newsContent{
  overflow-x: auto;
}
</style>
