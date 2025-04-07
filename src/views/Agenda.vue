<template>
    <div>
        <InnerPageHeader title="Eventt List" breadcrumb="Event List" />
        <EventSection />
        <div class="brands5-section-area sp8">
            <MarqueeContainer />
        </div>
    </div>
</template>

<script>
import EventSection from '@/components/agenda/EventSection.vue';
import InnerPageHeader from '@/components/common/InnerPageHeader.vue';
import MarqueeContainer from '@/components/common/MarqueeContainer.vue';



export default {
    name: 'AboutPage',
    components: {
        InnerPageHeader,
        EventSection,
        MarqueeContainer
    },
}
</script>
