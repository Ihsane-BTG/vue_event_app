<template>
  <div class="homepage5-body homepage7-body">
    <img src="@/assets/img/bg/body-bg1.png" alt="" class="body-bg1" id="body-bg1" />
    
    <MainHeader />
    
    <main>
      <HeroSection />
      <WhyAttend />
    </main>
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue'
import HeroSection from '@/components/HeroSection.vue'
import WhyAttend from '@/components/WhyAttend.vue'

export default {
  components: {
    MainHeader,
    HeroSection,
    WhyAttend
  },
  data() {
    return {
    }
  },
  mounted() {
    // Initialize AOS and other plugins here if needed
  }
}
</script>