<template>
  <article class="newsContent mt-3 p-4">
    <img class="img-fluid" :src="image" alt="">
    <h1>{{ title }}</h1>
    <p>{{ details }}</p>
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
<style scoped lang="scss"></style>
