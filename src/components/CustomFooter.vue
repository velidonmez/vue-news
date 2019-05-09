<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-sm-6 text-left">
          <small>© 2019 HABER ÜSKÜDAR / Her Hakkı Saklıdır.</small>
        </div>
        <div class="col-sm-6 text-right">
          <small>
            <small>YAZILIM VE PLANLAMA BİRİMİ</small>
            <!-- <a href="mailto:yazilimekibi@uskudar.edu.tr">yazilimekibi@uskudar.edu.tr</a> -->
          </small>
        </div>
      </div>
    </div>
  </footer>
</template>
<style scoped>
.footer {
  background: #004c4c;
  padding: 13px;
  color: #fff;
  margin-top: 73px;
}
.footer a,
.footer a:hover,
.footer a:active {
  text-decoration: none;
  color: #fff;
}
</style>
<script>
export default {
  props: {
    about: {
      type: Array
    }
  }
};
</script>

