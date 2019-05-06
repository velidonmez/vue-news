<template>
  <div>
    <div class="row mx-auto">
      <Navbar @about-list="fillListAndContent"/>
    </div>
    <div class="container">
      <div class="row">
        <side-menu :menuItems="list"/>
        <main class="col-md-9 ml-sm-auto col-lg-10 px-4">
          <div class="tab-content">
            <div
              class="tab-pane fade show active"
              id="v-pills-home"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
            >
              <h2>{{currentPageContent.title}}</h2>
              <div v-html="currentPageContent.post" class="details"></div>
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
      list: [],
      currentPageContent: {}
    };
  },
  methods: {
    //get emitted category info from navbar component
    fillListAndContent(list) {
      this.list = list;
      const currSlug = this.$route.params.menuSlug;
      this.currentPageContent = this.list.find(el => {
        return currSlug == el.slug ? el.id : 0
      });
    }
  },
  watch: {
    $route() {
      // react to route changes...
      //console.log(this.$route.params.newsId);
      const currSlug = this.$route.params.menuSlug;
      this.currentPageContent = this.list.find(el => {
        return currSlug == el.slug ? el.id : 0
      });
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
