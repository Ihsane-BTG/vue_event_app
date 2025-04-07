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
                  <img src="/assets/img/logo/logo2.png" alt="Site Logo" />
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
                      <li><router-link to="/agenda">Agenda</router-link></li>
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

  <!-- Mobile Header -->
	<div class="mobile-header mobile-haeder5 d-block d-lg-none">
		<div class="container-fluid">
			<div class="col-12">
				<div class="mobile-header-elements">
					<div class="mobile-logo">
						<router-link to="/"><img src="/assets/img/logo/logo1.png" alt="" /></router-link>
					</div>
					<div class="mobile-nav-icon dots-menu">
						<i class="fa-solid fa-bars-staggered"></i>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="mobile-sidebar mobile-sidebar5">
		<div class="logosicon-area">
			<div class="logos">
				<img src="/assets/img/logo/logo2.png" alt="" />
			</div>
			<div class="menu-close">
				<i class="fa-solid fa-xmark"></i>
			</div>
		</div>
		<div class="mobile-nav mobile-nav1">
			<ul class="mobile-nav-list nav-list1">
				<li><router-link to="/">Home</router-link></li>
				<li><router-link to="/about">About Event</router-link></li>
				<li>
					<a href="features.html">Event Details</a>
					<ul class="sub-menu">
						<li><router-link to="/agenda">Agenda</router-link></li>
						<li><router-link to="/speakers">Speakers</router-link></li>
					</ul>
				</li>
			</ul>
			<div class="allmobilesection">
				<div class="single-footer">
					<div class="footer1-contact-info">
						<div class="single-footer">
							<h3>Social Links</h3>
							<div class="social-links-mobile-menu">
								<ul>
									<li>
										<a href="#"><i class="fa-brands fa-facebook-f"></i></a>
									</li>
									<li>
										<a href="#"><i class="fa-brands fa-instagram"></i></a>
									</li>
									<li>
										<a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
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
