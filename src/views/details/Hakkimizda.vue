<template>
  <div>
    <div class="row mx-auto">
      <Navbar @about-list="fillList"/>
    </div>
    <div class="container">
      <div class="row">
        <side-menu :menuItems="list"/>
        <main class="col-md-9 ml-sm-auto col-lg-10 px-4">
          <div class="tab-content" id="v-pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="v-pills-home"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
            >
              <h2>Section title</h2>
              <p>
                <strong>Genel Yayın Yönetmeni</strong>
                <br>A.Furkan Tarhan -
                <a
                  href="mailto:furkan.tarhan@uskudar.edu.tr"
                >furkan.tarhan@uskudar.edu.tr</a>
                <br>
                <strong>Genel İçerik Editörü – Redaksiyon</strong>
                <br>Zeynep Güçlücan -
                <a
                  href="mailto:haber.rapor@uskudar.edu.tr"
                >zeynep.guclucan@uskudar.edu.tr</a>
                <br>
                <strong>Haber Editörü</strong>
                <br>Zeynep Güçlücan -
                <a
                  href="mailto:haber.rapor@uskudar.edu.tr"
                >zeynep.guclucan@uskudar.edu.tr</a>
                <br>
                <strong>Yayın Danışmanları</strong>
                <br>A.Furkan Tarhan -
                <a
                  href="mailto:furkan.tarhan@uskudar.edu.tr"
                >furkan.tarhan@uskudar.edu.tr</a>
                <br>Simge Yıldırım Yurga -
                <a
                  href="mailto:simge.yildirimyurga@uskudar.edu.tr"
                >simge.yildirimyurga@uskudar.edu.tr</a>
                <br>Tahsin Aksu -
                <a href="mailto:tahsin.aksu@uskudar.edu.tr">tahsin.aksu@uskudar.edu.tr</a>
                <br>
                <strong>Reklam</strong>
                <br>
                <strong>Yazılım ve Sistem Yönetimi</strong>
                <br>Üsküdar Üniversitesi Yazılım Teknojileri Ekibi
                <br>Yazılım Uzmanı Sinan Postacı -
                <a
                  href="http://sinan.postaci@uskudar.edu.tr"
                >sinan.postaci@uskudar.edu.tr</a>
                <br>Sitedeki tüm harici linkler ayrı bir sayfada açılır
                <br>E-psikiyatri harici linklerin sorumluluğu sitemize ait değildir...
              </p>
            </div>
            <div
              class="tab-pane fade"
              id="v-pills-profile"
              role="tabpanel"
              aria-labelledby="v-pills-profile-tab"
            >
              <h1 class="text-left">İletişim</h1>
              <p>test</p>
            </div>
            <div
              class="tab-pane fade"
              id="v-pills-messages"
              role="tabpanel"
              aria-labelledby="v-pills-messages-tab"
            >
              <h1 class="text-left">Hakkımızda</h1>
              <p>test</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import SideMenu from "@/components/SideMenu.vue";
export default {
  components: {
    Navbar,
    SideMenu
  },
  data() {
    return {
      list: []
    };
  },
  methods: {
    //get emitted category info from navbar component
    fillList(list) {
      this.list = list;
    }
  }
};
</script>
<style scoped>
.tab-content {
  padding: 48px 0 0;
}
.sidebar {
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  padding: 48px 0 0;
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);
}
.sidebar-sticky {
  position: -webkit-sticky;
  position: sticky;
}
.nav {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
.sidebar .nav-link.active {
  color: #fd3a13;
}

.sidebar .nav-link {
  font-weight: 500;
  color: #333;
}
.nav-link {
  display: block;
  padding: 0.5rem 1rem;
}
</style>
