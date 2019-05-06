<template>
  <nav class="col-md-2 d-none d-md-block bg-light sidebar">
    <div class="sidebar-sticky">
      <ul class="nav flex-column" id="v-pills-tab" role="tablist">
        <li v-for="item in menuItems" :key="item.id" class="nav-item">
          <!-- TODO class active for links :class="this.$route.params.menuSlug == item.slug ? 'active' : false" ???-->
          <router-link
            class="nav-link"
            :to="{
              name: 'hakkimizda',
              params: { menuSlug: item.slug }
            }"
          >
            {{ item.title }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    menuItems: {
      type: Array,
      required: true
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
