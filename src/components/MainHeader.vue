<template>
    <header>
      <div class="header-area homepage5 homepage7 header header-sticky d-none d-lg-block" id="header">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="header-elements">
                <div class="site-logo">
                  <router-link to="/"><img src="@/assets/img/logo/logo2.png" alt="Eventify" /></router-link>
                </div>
                <nav class="main-menu">
                  <ul>
                    <li><router-link to="/">Home</router-link></li>
                    <li><router-link to="/about">About Event</router-link></li>
                    <li class="dropdown">
                      <router-link to="#">Event Details <i class="fa-solid fa-angle-down"></i></router-link>
                      <ul class="dropdown-padding">
                        <li><router-link to="/event">Agenda</router-link></li>
                        <li><router-link to="/event-schedule">Speakers</router-link></li>
                      </ul>
                    </li>
                  </ul>
                </nav>
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </template>
  
  <script>
  
  export default {
    components: {
    }
  }
  </script>