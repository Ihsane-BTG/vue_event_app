<template>
    <div>
        <InnerPageHeader title="About Event" breadcrumb="About Us" />
        <HeroSection />
        <div class="brands5-section-area sp8">
            <MarqueeContainer />
        </div>
    </div>
</template>

<script>
import HeroSection from '@/components/about/HeroSection.vue';
import InnerPageHeader from '@/components/common/InnerPageHeader.vue';
import MarqueeContainer from '@/components/common/MarqueeContainer.vue';



export default {
    name: 'AboutPage',
    components: {
        InnerPageHeader,
        HeroSection,
        MarqueeContainer
    },
}
</script>
