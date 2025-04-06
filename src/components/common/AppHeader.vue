<template>
  <!-- Desktop Header -->
  <header class="d-none d-lg-block ">
    <div class="header-area homepage5 homepage7 header header-sticky" :class="{ 'sticky': isSticky }" id="header">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="header-elements">
              <div class="site-logo">
                <router-link to="/">
                  <img src="@/assets/img/logo/logo2.png" alt="Site Logo" />
                </router-link>
              </div>
              <div class="main-menu">
                <ul>
                  <li><router-link to="/">Home</router-link></li>
                  <li><router-link to="/about">About Event</router-link></li>
                  <li class="dropdown">
                    <a href="#">
                      Event Details <i class="fa-solid fa-angle-down"></i>
                    </a>
                    <ul class="dropdown-padding">
                      <li><router-link to="/event">Agenda</router-link></li>
                      <li><router-link to="/speakers">Speakers</router-link></li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="btn-area">
                <ul>
                  <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                  <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                  <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      isSticky: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.isSticky = window.scrollY > 0
    }
  }
}
</script>
