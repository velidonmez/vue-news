<template>
  <header class="float-left w-100">
    <div class="small-top float-left w-100">
      <div class="container-fluid">
        <div class="row px-3">
          <div class="col-lg-4 date-sec">
            <div id="Date" class="mt-1"></div>
          </div>
          <div class="col-lg-3 ml-auto">
            <div class="social-icon">
              <a
                target="_blank"
                href="https://www.facebook.com/uskudaruniversitesi"
                class="fab fa-facebook"
              ></a>
              <a
                target="_blank"
                href="https://twitter.com/uskudaruni"
                class="fab fa-twitter"
              ></a>
              <a
                target="_blank"
                href="https://instagram.com/uskudaruni"
                class="fab fa-instagram"
              ></a>
              <a
                target="_blank"
                href="https://www.youtube.com/user/uskudaruniversitesi"
                class="fab fa-youtube"
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="top-head">
      <div class="container-fluid">
        <div class="row">
          <div class="col">
            <router-link to="/">
              <img
                src="../assets/img/haberuskudarlogo.png"
                alt="logo"
                class="mx-auto d-block img-fluid nav-logo"
              />
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <section class="container top-nav">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse" id="navbarSupportedContent" style>
          <ul class="nav navbar-nav m-auto">
            <li v-for="cat in list" :key="cat.id" class="nav-item">
              <router-link class="nav-link" :to="{ name: cat.slug }">{{
                cat.name
              }}</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  </header>
</template>

<script>
import axios from "axios";
export default {
  name: "Navbar",
  data() {
    return {
      page: null,
      categories: [],
      list: []
    };
  },
  updated() {
    this.$nextTick(function() {
      // Code that will run only after the
      // entire view has been rendered
      this.$emit("newsCategory", this.category);
      //console.log(this.category);
    });
  },
  watch: {
    $route() {
      // react to route changes...
      this.page = this.$route.path;
      console.log(this.$route.path);
    }
  },
  mounted() {
    const api = "https://demo.haberuskudar.com/api/content-categories";
    axios
      .get(api)
      .then(data => {
        if (data.data.data) {
          this.list.push(
            {
              id: 0,
              slug: "anasayfa",
              name: "Ana Sayfa"
            },
            ...data.data.data
          );
        }
      })
      .catch(e => {
        throw new Error(e);
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nav-logo {
  width: 500px;
}
header {
  float: left;
  width: 100%;
}
.small-top {
  float: left;
  width: 100%;
  background: #004c4c;
}
.small-top .social-icon {
  float: right;
}
.small-top .social-icon a {
  color: #66b2b2;
  float: left;
  padding: 6px 13px;
}
.small-top .social-icon a:hover {
  color: #b2d8d8;
  text-decoration: none;
}
.small-top .date-sec {
  font-size: 13px;
  font-weight: 600;
  float: left;
  margin-top: 4px;
  color: #898989;
}

.top-head {
  background-color: #fff;
  float: left;
  height: 85px;
  width: 100%;
}
.top-head h1 {
  color: #fff;
  font-size: 2em;
  font-weight: 400;
}
.top-nav {
  background: #fff;
  padding: 0;
  border-bottom: 1px solid #dbdbdb;
}
.top-nav .nav-link {
  padding-bottom: 0.7rem;
  padding-top: 0.7rem;
}
.top-nav .navbar-nav .nav-item + .nav-item {
  margin-left: 0;
}
.top-nav li a {
  color: #141517;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 700;
  padding: 0 10px;
  border-bottom: 2px solid #fff;
}
.top-nav li a:hover,
.top-nav li a:focus,
.top-nav li.active a {
  color: #141517;
  border-bottom: 2px solid #fd3a13;
}
.top-nav .form-control {
  border-color: #fff;
}
.navbar-toggle {
  background: #fff;
}
.navbar-toggle .icon-bar {
  background: #0a2e61;
}
.navbar-brand {
  display: none;
}
.card-img-overlay {
  padding-left: 1em !important;
  padding-top: 0.5em !important;
}
</style>
