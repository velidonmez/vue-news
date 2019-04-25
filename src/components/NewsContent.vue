<template>
  <article class="newsContent mt-3 p-4">
    <img class="img-fluid" :src="image" alt>
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
<style scoped lang="scss">
.newsContent .details img {
  max-width: 100%;
  height: auto;
}
</style>
