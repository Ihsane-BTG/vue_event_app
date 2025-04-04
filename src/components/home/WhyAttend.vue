<template>
    <div class="about7-section-area">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="about-header-area heading10">
              <h2 class="text-anime-style-3">Transforming the Global Economic Landscape</h2>
              <div class="space16"></div>
              <p data-aos="fade-left" data-aos-duration="900">
                Our mission at Economy Event is to drive meaningful dialogue, foster collaboration, 
                and spark innovative solutions for sustainable economic.
              </p>
              <div class="space32"></div>
              
              <div class="about-auhtor-box" data-aos="fade-left" data-aos-duration="1000">
                <div class="icons">
                  <img src="@/assets/img/icons/about-icon1.svg" alt="">
                </div>
                <div class="text">
                  <router-link href="#">Collaborating for Economic Impact</router-link>
                  <div class="space12"></div>
                  <p>This event brings together economists, business leaders, policymakers, and innovators from around the globe.</p>
                </div>
              </div>
              
              <div class="space20"></div>
              
              <div class="about-auhtor-box" data-aos="fade-left" data-aos-duration="1100">
                <div class="icons">
                  <img src="@/assets/img/icons/about-icon2.svg" alt="">
                </div>
                <div class="text">
                  <router-link href="#">Where Ideas Shape the Economy</router-link>
                  <div class="space12"></div>
                  <p>With a focus on topics such as global trade, financial technology, sustainable development, and policy.</p>
                </div>
              </div>
              
              <div class="space32"></div>
              
              <div class="btn-area1" data-aos="fade-left" data-aos-duration="1200">
                <router-link to="/contact" class="vl-btn7">
                  Become an Attendee <span><i class="fa-solid fa-arrow-right"></i></span>
                </router-link>
              </div>
            </div>
          </div>
          
          <div class="col-lg-6">
            <div class="about-all-images">
              <div class="img1 image-anime reveal">
                <img src="@/assets/img/all-images/about/about-img17.png" alt="">
              </div>
              <div class="img2 image-anime reveal">
                <img src="@/assets/img/all-images/about/about-img18.png" alt="">
              </div>
              <div class="arrow-btn">
                <router-link href="#">
                  <div class="content">
                    <h6 class="circle rotateme">Build Success Brand .</h6>
                  </div>
                  <img src="@/assets/img/icons/arrow1.svg" alt="" class="arrow1">
                </router-link>
              </div>
              <img src="@/assets/img/elements/elements37.png" alt="" class="elements37">
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
  
<script setup>
  import { onMounted } from 'vue'
  
  onMounted(() => {
    // Initialize animation for reveal elements
    const reveals = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    }, { threshold: 0.1 })
  
    reveals.forEach(reveal => {
      observer.observe(reveal)
    })
  })
  </script>