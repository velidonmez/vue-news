<template>
  <article class="newsContent mt-3 pt-3 pr-3">
    <v-lazy-image
      class="img-fluid"
      :src="image === null ? require('@/assets/img/haberusk_placeholder.png') : '/uploads/content/images/' + image"
      :src-placeholder="image === null ? require('@/assets/img/haberusk_placeholder.png') : '/uploads/content/images/thumbs/small/' + image"
    ></v-lazy-image>
    <div class="date d-flex mt-3">
      <p class="card-text">
        <small class="text-time">
          <em>{{ date }}</em>
        </small>
      </p>
      <div class="float-right">
        <social-sharing
          :url="'https://haberuskudar.com/'+slug"
          :title="title"
          :description="explanation"
          inline-template
        >
          <div>
            <span class="content">Paylaş:</span>
            <network network="facebook">
              <i class="fab fa-facebook"></i> Facebook
            </network>
            <network network="twitter">
              <i class="fab fa-twitter"></i> Twitter
            </network>
          </div>
        </social-sharing>
      </div>
    </div>
    <div class="category d-flex mt-3">
      <span class="content">Kategori:</span>
      <router-link class="content" :to="{ name: category.slug }">{{ category.name }}</router-link>
    </div>
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
    details: String,
    date: String,
    slug: String,
    explanation: String,
    category: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.category .content {
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5;
  color: #212529;
  text-align: left;
}
.details img {
  max-width: 100% !important;
}
.v-lazy-image {
  filter: blur(10px);
  transition: filter 0.7s;
}
.v-lazy-image-loaded {
  filter: blur(0);
}
.newsContent .details p img {
  max-width: 100% !important;
  height: auto !important;
}
.newsContent {
  overflow-x: auto;
}
.card-text {
  margin: 0;
}
.text-time {
  color: #ff0000;
  font-weight: 600;
}
.date {
  justify-content: space-between;
}
.fb-share-button {
  top: -6px !important;
  right: 6px !important;
}
</style>
