<template>
  <header class="float-left w-100">
    <div class="small-top float-left w-100">
      <div class="container-fluid">
        <div class="row px-3">
          <div class="col-lg-4 date-sec">
            <div id="Date" class="mt-1">Tue, 2 April 2019</div>
          </div>
          <div class="col-lg-3 ml-auto">
            <div class="social-icon">
              <a href="#" class="fab fa-facebook"></a>
              <a href="#" class="fab fa-twitter"></a>
              <a href="#" class="fab fa-google-plus"></a>
              <a href="#" class="fab fa-linkedin"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="top-head left">
      <div class="container-fluid">
        <div class="row px-3">
          <div class="col-md-6 col-lg-4 pt-2 m-auto">
            <router-link to="/">
              <h1 class="text-center">
                News
                <small>Get the latest News</small>
              </h1>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <section class="top-nav">
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
            <li :class="{ active: this.$route.path === '/' }" class="nav-item">
              <router-link class="nav-link" to="/">Popüler</router-link>
            </li>
            <li :class="{ active: this.$route.path === '/fresh' }" class="nav-item">
              <router-link class="nav-link" to="/fresh">Güncel</router-link>
            </li>
            <li :class="{ active: this.$route.path === '/about' }" class="nav-item">
              <router-link class="nav-link" to="/about">Hakkında</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Sports</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Tech</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Health</a>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  </header>
  <!-- <header class="header">
    <nav class="inner col-lg-8 mx-auto">
      <router-link to="/">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAIAAADYYG7QAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4JpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3RDBBRDcwNDU4NEMxMUU2ODdFNjg5OTYwMjlGNjQ0QSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1NTU3NUVGQUEyRDIxMUU2ODlEMUJBMUE3RTYxMkU1OSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1NTU3NUVGOUEyRDIxMUU2ODlEMUJBMUE3RTYxMkU1OSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjE2NTUwMDE5LTVjNjQtNGRiNy1iNjhjLTQ1ZWIxYzkxM2FiYiIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmJlZDc4OTczLWViM2ItMTE3OS04YzQyLWNlMTYwYmQ0NTQ1NSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv38lU4AAAMkSURBVHja7FnbSxRRGP+N666upqUECWK+mUqbmxbRQ4QmFEFQmtZDEPQcvfQ/9BL1WO920SyCjJCIyC5iXsmVMjVB8pbVqnhBc2dm+84azHzjbszsupPBfA8L8ztnzvzmu/zON2elcDiMrWQp2GK25QilsqvQKmB/BCW408SvkZC8iptVCE7CJdlHhjI4LQNXXyE7bwMhGguOYWba4LXkmgp43VCVGCFzeQRgM6FUj1NlDiGH0L9T6r/YWqRE9aapa7RiXuOIC/CY2gVMEyqrRnqWdqmE8PE55FAUTsQmKxdFRxk4N47RHkFrcwjRFnf4Ig5dYOCNSgy0CT8Z7Bdw4hJqrzOw6TIGe+DdrBwiN7y5bQQP1BmDiEhQKDTlZxm4PIvuJng2MalprZFOTAYYuO8UsjOMnGSgoBSFFQwMtOBH0Ey8rHhoRUHnPQbmFKDoCEJ8Jl2WnUYKz4T3Dear2fREclJvc6Rh0llFPfMQxStdQnktm/NtCEPvTMbLCiF656kxfH7JQN9J5GRpnMg9hT4U+Nmc7kYshyAlQxjViPP1Rl3VnkpNciiB/DWQdGsqa+hphDtJSk1uH2jFwjSvtXotXhku7K9hoyNvMT6cNEI0d34RfY8ZWHocuTlQ1uPlR/5eNtrRINyWxL2MSrfzLkO27URJtWBDnEQ665Jl6ScCT82nc1yEyPmjXRj/wKN2LhKvVPjPMLz/CYJzJuUnXkL0/quq0Uklx7A9E7vLkFfM5edOHM2E9TvISX0PEVrREO8OFFcJCdDb9CeMtFuNV1yEhCB9xeALBlZdQXkdQ7ruY1mGZAOh9Qrv4IJEeZ3v0+1oJD8PLFV7YoQoENQMzU/FnDDchokvNhISgrSEvkcxJ5CgKzb31H8EKVpPuvgdgWdxpHNihIQg9WIiEGWovwWz81blx3pPvVGQZBWt13DwvHHo9a1ETgcSuJW66Y5mtDdHWdIT/zFTYicd7ti64Hy5OoQcQlGrTFVEJ6/a+HzxODkWIUkcJ3gz7T70TM+EpLUpku6/jjAWZqDI+uGkGz2dPpuydyHFtZGQk9T/BaHfAgwAytLfbeiDo+IAAAAASUVORK5CYII="
          alt="logo"
          class="logo"
        >
      </router-link>
      <router-link to="/">Popüler</router-link>
      <router-link to="/fresh">Güncel</router-link>
      <router-link to="/about">Hakkında</router-link>
    </nav>
  </header>-->
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      page: null
    };
  },
  updated() {
    this.$nextTick(function() {
      // Code that will run only after the
      // entire view has been rendered
      this.$emit("newsCategory", this.category);
      console.log(this.category);
    });
  },
  watch: {
    $route() {
      // react to route changes...
      this.page = this.$route.path;
      console.log(this.$route.path);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
header {
  float: left;
  width: 100%;
}
.small-top {
  border-bottom: 1px solid #2b2b2b;
  float: left;
  width: 100%;
  background: #000;
}
.small-top .social-icon {
  float: right;
}
.small-top .social-icon a {
  border-left: 1px solid #2b2b2b;
  color: #ca1b1b;
  float: left;
  padding: 6px 13px;
}
.small-top .social-icon a:last-child {
  border-right: 1px solid #2b2b2b;
}
.small-top .social-icon a:hover {
  color: #fd3a13;
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
  background-color: #141517;
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
</style>
