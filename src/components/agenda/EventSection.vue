<template>
    <div class="event7-section-area event5-section-area" v-if="agenda">
        <div class="container">
            <div class="row">
                <div data-aos="fade-up" data-aos-duration="900">
                    <ul class="nav nav-pills space-margin60" id="pills-tab" role="tablist">
                        <li class="nav-item" v-for="(day, index) in agenda.days" :key="index" role="presentation">
                            <button class="nav-link" :class="{ active: activeTab === index }" @click="activeTab = index"
                                :id="`pills-tab-${index}`" type="button" role="tab">
                                <span class="day">Day {{ index + 1 }}</span>
                                <span class="vl-flex">
                                    <span class="cal">{{ getDayNumber(day.date).padStart(2, '0') }}</span>
                                    <span class="date" v-html="getDateText(day.date)"></span>
                                </span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" role="tabpanel">
                    <div class="tabs-widget-boxarea" data-aos="fade-up" data-aos-duration="800">
                        <div class="col-lg-12" data-aos="fade-up" data-aos-duration="1000">
                            <div class="event-widget-area" v-if="agenda">
                                <div class="row left-spaced"
                                    v-for="(event, eventIndex) in agenda.days[activeTab].events" :key="eventIndex">
                                    <div class="col-lg-12">
                                        <div class="event2-boxarea box1">
                                            <h1 class="active">{{ (eventIndex + 1).toString().padStart(2, '0') }}</h1>
                                            <div class="row align-items-center">
                                                <!-- IMAGE on LEFT for the first event, alternating images for each event -->
                                                <div class="col-lg-6" v-if="eventIndex % 2 === 0">
                                                    <div class="img1 left-spaced">
                                                        <img src="/assets/img/all-images/event/event-img9.png" alt="" />
                                                    </div>
                                                </div>

                                                <!-- TEXT on RIGHT for the first event -->
                                                <div class="col-lg-6">
                                                    <div class="content-area left-spaced">
                                                        <ul>
                                                            <li>
                                                                <a href="#"><img src="/assets/img/icons/clock1.svg"
                                                                        alt="" />{{ event.time }}</a>
                                                            </li>
                                                        </ul>
                                                        <div class="space20"></div>
                                                        <a class="head">{{ event.title }}</a>
                                                        <div class="author-area" v-if="event.sessions && event.sessions.length > 0">
                                                            <div class="autho-name-area">
                                                                <div class="text">
                                                                    <p><strong>Sessions:</strong></p>
                                                                    <p>{{ event.sessions.join(', ') }}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <!-- IMAGE on RIGHT for the second event (alternate order) -->
                                                <div class="col-lg-6" v-if="eventIndex % 2 !== 0">
                                                    <div class="img1 left-spaced">
                                                        <img src="/assets/img/all-images/event/event-img10.png"
                                                            alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="space48"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row" v-if="agenda.overview?.downloadLink">
                <div class="col-lg-12 m-auto">
                    <div class="space60"></div>
                    <div class="btn-area1 text-center">
                        <a :href="agenda.overview.downloadLink" class="vl-btn5 btn2" download><span
                                class="demo">Download Full Agenda</span></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getAgenda } from '@/apiService';

const agenda = ref(null);
const activeTab = ref(0);

onMounted(async () => {
    try {
        const response = await getAgenda();
        agenda.value = response.data;
    } catch (error) {
        console.error('Failed to load agenda:', error);
    }
});

const getDayNumber = (dateStr) => {
    const parts = dateStr.split(' ');
    return parts[1]?.replace(',', '') || '01';
};

const getDateText = (dateStr) => {
    const parts = dateStr.split(' ');
    return `${parts[0]?.toUpperCase()}<br>${parts[2] || ''}`;
};
</script>