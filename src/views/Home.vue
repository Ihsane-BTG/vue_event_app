<template>
    <div>
        <HeroSection />
        <WhyAttend />
        <div class="brands5-section-area sp2">
            <MarqueeContainer />
        </div>
        <EventSection />
    </div>
</template>

<script>
import MarqueeContainer from '@/components/common/MarqueeContainer.vue';
import EventSection from '@/components/home/EventSection.vue';
import HeroSection from '@/components/home/HeroSection.vue'
import WhyAttend from '@/components/home/WhyAttend.vue';

export default {
    name: 'HomePage',
    components: {
        HeroSection,
        WhyAttend,
        MarqueeContainer,
        EventSection
    },
}
</script>
