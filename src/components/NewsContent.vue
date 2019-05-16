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
        <!-- Your share button code -->
        <div
          class="fb-share-button"
          :data-href="'https://haberuskudar.com/'+slug"
          data-layout="button"
        ></div>
        <a
          :href="'https://twitter.com/intent/tweet?text='+ twitterTitle"
          class="twitter-share-button"
          data-show-count="false"
        >Tweet</a>
      </div>
    </div>
    <!-- <div class="category d-flex mt-3">
      <span>Kategori: </span>
      <span>{{category}}</span>
    </div> -->
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
    category: String
  },
  data() {
    return {
      twitterTitle: ""
    };
  },
  mounted() {
    this.twitterTitle = this.$route.path.replace(/-/gi, " ").replace("/", "");
    let twitterScript = document.createElement("script");
    twitterScript.setAttribute(
      "src",
      "https://platform.twitter.com/widgets.js"
    );
    document.head.appendChild(twitterScript);

    (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
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
