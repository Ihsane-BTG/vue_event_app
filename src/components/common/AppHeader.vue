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
                    <router-link to="#">
                      Event Details <i class="fa-solid fa-angle-down"></i>
                    </router-link>
                    <ul class="dropdown-padding">
                      <li><router-link to="/event">Agenda</router-link></li>
                      <li><router-link to="/speakers">Speakers</router-link></li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="btn-area">
                <ul>
                  <li><router-link href="#"><i class="fa-brands fa-facebook-f"></i></router-link ></li>
                  <li><router-link href="#"><i class="fa-brands fa-instagram"></i></router-link ></li>
                  <li><router-link  href="#"><i class="fa-brands fa-linkedin-in"></i></router-link ></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- Mobile Header -->
  <div class="mobile-header mobile-haeder5 d-block d-lg-none">
    <div class="container-fluid">
      <div class="col-12">
        <div class="mobile-header-elements">
          <div class="mobile-logo">
            <router-link to="/">
              <img :src="require('@/assets/img/logo/logo1.png')" alt="Mobile Logo" />
            </router-link>
          </div>
          <div class="mobile-nav-icon dots-menu" @click="toggleMobileMenu">
            <i class="fa-solid fa-bars-staggered"></i>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Mobile Sidebar -->
  <div class="mobile-sidebar mobile-sidebar5" :class="{ 'mobile-menu-active': isMenuOpen }">
    <div class="logosicon-area">
      <div class="logos">
        <img :src="require('@/assets/img/logo/logo2.png')" alt="Sidebar Logo" />
      </div>
      <div class="menu-close" @click="toggleMobileMenu">
        <i class="fa-solid fa-xmark"></i>
      </div>
    </div>
    <div class="mobile-nav mobile-nav1">
      <ul class="mobile-nav-list nav-list1">
        <li v-for="(item, index) in menuItems" :key="index" :class="{ 'has-sub': item.submenu, 'hash-has-sub': isHashLink(item.link) }">
          <router-link :to="item.link" :class="{ 'hash-nav': isHashLink(item.link) }">
            {{ item.text }}
          </router-link>
          <span v-if="item.submenu" class="submenu-button" @click="toggleSubmenu(index)">
            <em></em>
          </span>
          <ul v-if="item.submenu" class="sub-menu" :class="{ 'open-sub': openSubmenus[index] }">
            <li v-for="(subItem, subIndex) in item.submenu" :key="subIndex">
              <router-link :to="subItem.link">{{ subItem.text }}</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      isSticky: false,
      isMenuOpen: false,
      openSubmenus: {},
      menuItems: [
        { text: 'Home', link: '/' },
        { text: 'About Event', link: '/about' },
        { 
          text: 'Event Details', 
          link: '#',
          submenu: [
            { text: 'Agenda', link: '/event' },
            { text: 'Speakers', link: '/speakers' }
          ]
        }
      ]
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.handleResize)
    this.menuItems.forEach((item, index) => {
      if (item.submenu) {
        this.$set(this.openSubmenus, index, false)
      }
    })
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleScroll() {
      this.isSticky = window.scrollY > 0
    },
    toggleMobileMenu() {
      this.isMenuOpen = !this.isMenuOpen
      // Toggle body scroll when menu is open
      document.body.style.overflow = this.isMenuOpen ? 'hidden' : 'auto'
    },
    toggleSubmenu(index) {
      this.$set(this.openSubmenus, index, !this.openSubmenus[index])
    },
    isHashLink(link) {
      return link === '#'
    },
    handleResize() {
      if (window.innerWidth > 991) {
        // Close all submenus on desktop view
        for (const key in this.openSubmenus) {
          this.openSubmenus[key] = false
        }
      }
    }
  }
}
</script>

<style scoped>
.mobile-sidebar {
  transform: translateX(100%);
  transition: transform 0.3s ease;
}
.mobile-sidebar.mobile-menu-active {
  transform: translateX(0);
}

/* Submenu styles */
.sub-menu {
  display: none;
  overflow: hidden;
  transition: all 0.3s ease;
}
.sub-menu.open-sub {
  display: block;
}

/* Submenu button styles */
.submenu-button {
  cursor: pointer;
  display: inline-block;
  padding: 0 10px;
}
.submenu-button em {
  display: block;
  width: 10px;
  height: 10px;
  border-left: 2px solid currentColor;
  border-bottom: 2px solid currentColor;
  transform: rotate(-45deg);
  transition: transform 0.3s ease;
}
.submenu-opened .submenu-button em {
  transform: rotate(135deg);
}
</style>