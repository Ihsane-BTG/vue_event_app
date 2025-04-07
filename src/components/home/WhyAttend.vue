<template>
  <section class="about7-section-area">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="about-header-area heading10">
            <h2 class="text-anime-style-3">Why Attend</h2>
            <div class="space16"></div>
            <p data-aos="fade-left" data-aos-duration="900">
              Discover why leaders from around the globe are joining us.
            </p>
            <div class="space32"></div>

            <div v-for="(point, index) in whyAttendPoints" :key="index">
              <div class="about-auhtor-box" :data-aos="'fade-left'" :data-aos-duration="1000 + index * 100">
                <div class="text">
                  <h4>{{ point.split(':')[0] }}</h4>
                  <div class="space12"></div>
                  <p>{{ point.split(':').slice(1).join(':').trim() }}</p>
                </div>
              </div>
              <div v-if="index !== whyAttendPoints.length - 1" class="space20"></div>
            </div>

            <div class="space32"></div>
            <div class="btn-area1" data-aos="fade-left" data-aos-duration="1200">
              <router-link to="/contact" class="vl-btn7">
                Become an Attendee
                <span><i class="fa-solid fa-arrow-right"></i></span>
              </router-link>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="about-all-images">
            <div class="img1 image-anime">
              <img src="/assets/img/all-images/about/about-img17.png" alt="" />
            </div>
            <div class="img2 image-anime">
              <img src="/assets/img/all-images/about/about-img18.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getHome } from '@/apiService'

const whyAttendPoints = ref([])

onMounted(async () => {
  try {
    const res = await getHome()
    whyAttendPoints.value = res.data.whyAttend?.points || []
  } catch (error) {
    console.error('Failed to load Why Attend points:', error)
  }
})
</script>
