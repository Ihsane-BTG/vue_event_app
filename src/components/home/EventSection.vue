<template>
  <div class="event5-section-area">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 m-auto">
          <div class="event2-header heading8 text-center space-margin80">
            <h5>Event Schedule</h5>
            <div class="space32"></div>
            <h2 class="text-anime-style-3">Digital event <span>lists</span></h2>
          </div>
        </div>
      </div>

      <div class="row left-spaced">
        <div class="col-lg-12" data-aos="fade-up" data-aos-duration="1000">
          <div class="event-widget-area">
            <div class="row">
              <div class="col-lg-12" data-aos="fade-up" data-aos-duration="1000">
                <div class="event-widget-area">
                  <div class="row">
                    <div class="col-lg-10 m-auto">
                      <div v-for="(event, index) in firstDayEvents" :key="index">
                        <div class="event2-boxarea box1">
                          <h1>{{ index + 1 }}</h1>
                          <div class="row align-items-center">
                            <!-- TEXT -->
                            <div :class="['col-lg-6', index % 2 === 0 ? '' : 'order-lg-2']">
                              <div class="content-area left-spaced">
                                <ul>
                                  <li>
                                    <a href="#"><img src="/assets/img/icons/clock1.svg" alt="" />{{ event.time }}</a>
                                  </li>
                                </ul>
                                <div class="space20"></div>
                                <a class="head">{{ event.title }}</a>
                              </div>
                            </div>

                            <!-- IMAGE -->
                            <div :class="['col-lg-6', index % 2 === 0 ? '' : 'order-lg-1']">
                              <div class="img1 left-spaced">
                                <img src="/assets/img/all-images/event/event-img10.png" alt="" />
                              </div>
                            </div>
                          </div>
                        </div>

                        <!-- Space between items -->
                        <div v-if="index < firstDayEvents.length - 1" class="space48"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-12 m-auto">
          <div class="space60"></div>
          <div class="btn-area1 text-center">
            <router-link to="/agenda" class="vl-btn5 btn2"><span class="demo">View More</span></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAgenda } from "@/apiService";

export default {
  data() {
    return {
      firstDayEvents: [],
    };
  },
  methods: {
    async fetchEvents() {
      try {
        const response = await getAgenda();
        const events = response.data.days[0].events;

        this.firstDayEvents = events.slice(0, 2);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    },
  },
  created() {
    this.fetchEvents();
  },
};
</script>