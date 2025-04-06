<template>
  <div class="homepage5-body homepage7-body">
    <img src="@/assets/img/bg/body-bg1.png" alt="" class="body-bg1" id="body-bg1" />
    <AppHeader />
    <HeroSection />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader.vue';
import AppFooter from './components/common/AppFooter.vue';
import HeroSection from './components/home/HeroSection.vue';

export default {
  components: {
    AppHeader,
    AppFooter,
    HeroSection
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