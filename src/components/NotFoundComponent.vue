<template>
  <div>
    <div class="row">
      <Navbar/>
    </div>
    <div class="page-wrap d-flex flex-row align-items-center">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-12 text-center">
            <span class="display-1 d-block">404</span>
            <div class="mb-4 lead">Aradığınız Sayfa Bulunamadı.</div>
            <a href="/" class="btn btn-link">Ana Sayfa</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
export default {
  data() {
    return {};
  },
  name: "NotFoundPage",
  components: {
    Navbar
  },
  metaInfo() {
    return {
      title: "Sayfa Bulunamadı",
      meta: [
        {
          name: "description",
          content: "Aradığınız Sayfa Bulunamadı"
        },
        {
          property: "article:publisher",
          content: "https://www.facebook.com/UskudarUniversitesi/"
        },
        {
          property: "og:site_name",
          content: "Üsküdar Üniversitesi"
        },
        {
          property: "og:title",
          content: "Haber Üsküdar - Sayfa Bulunamadı"
        },
        {
          name: "robots",
          content: "noindex"
        }
      ]
    };
  }
};
</script>
<style scoped>

.page-wrap {
  min-height: 50vh;
}
</style>
