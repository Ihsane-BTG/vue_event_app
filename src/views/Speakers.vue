<template>
    <div>
        <InnerPageHeader title="Speakers" breadcrumb="Speakers" />
        <TeamSection />
        <div class="brands5-section-area sp8">
            <MarqueeContainer />
        </div>
    </div>
</template>

<script>
import InnerPageHeader from '@/components/common/InnerPageHeader.vue';
import MarqueeContainer from '@/components/common/MarqueeContainer.vue';
import TeamSection from '@/components/speakers/TeamSection.vue';



export default {
    name: 'AboutPage',
    components: {
        InnerPageHeader,
        TeamSection,
        MarqueeContainer
    },
}
</script>
