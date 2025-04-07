<template>
  <div class="homepage5-body homepage7-body">
    <!-- Background image -->
    <img src="/assets/img/bg/body-bg1.png" alt="" class="body-bg1" id="body-bg1" />
    <!-- Preloader -->
    <PreLoader />
    <!-- Page Progress -->
    <PageProgress />
    <!-- App Header -->
    <AppHeader />

    <!-- Main Content Area -->
    <main>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>


    <!-- Countdown Component -->
    <CountDown />
    <!-- App Footer -->
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/common/AppHeader.vue';
import AppFooter from './components/common/AppFooter.vue';
import CountDown from './components/common/CountDown.vue';
import PreLoader from './components/common/PreLoader.vue';
import PageProgress from './components/common/PageProgress.vue';

export default {
  components: {
    PreLoader,
    PageProgress,
    AppHeader,
    CountDown,
    AppFooter
  },
  data() {
    return {
    }
  },
}
</script>