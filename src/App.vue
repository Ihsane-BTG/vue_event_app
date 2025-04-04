<template>
  <div class="homepage5-body homepage7-body">
    <img src="@/assets/img/bg/body-bg1.png" alt="" class="body-bg1" id="body-bg1" />
    <AppHeader />
  </div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader.vue'

export default {
  components: {
    AppHeader
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