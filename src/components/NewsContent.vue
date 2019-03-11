<template>
  <article class="newsContent">
    <h1>{{ title }}</h1>
    <p>{{ details }}</p>
  </article>
</template>

<script>
export default {
  name: "NewsContent",
  props: {
    title: String,
    details: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
