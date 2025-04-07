<template>
    <div class="others5-section-area sp7">
        <div class="container">
            <div class="row">
                <div class="col-lg-9 m-auto">
                    <div class="heading8 text-center space-margin80">
                        <h5>Our Event Countdown</h5>
                        <div class="space32"></div>
                        <h2>Event <span>Countdown</span></h2>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-3 col-md-6">
                    <div class="cta-counter-box">
                        <img src="assets/img/elements/elements23.png" alt="" class="elements23 keyframe5" />
                        <h2><span id="days" class="time-value">{{ format(countdown.daysRemaining) }}<span>DAYS</span></span>
                        </h2>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="cta-counter-box">
                        <img src="assets/img/elements/elements23.png" alt="" class="elements23 keyframe5" />
                        <h2><span id="hours" class="time-value">{{ format(countdown.hoursRemaining) }}<span>Hours</span></span>
                        </h2>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="cta-counter-box">
                        <img src="assets/img/elements/elements23.png" alt="" class="elements23 keyframe5" />
                        <h2><span id="minutes" class="time-value">{{ format(countdown.minutesRemaining)
                        }}<span>Minutes</span></span> </h2>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="cta-counter-box">
                        <img src="assets/img/elements/elements23.png" alt="" class="elements23 keyframe5" />
                        <h2><span id="seconds" class="time-value">{{ format(countdown.secondsRemaining)
                        }}<span>Seconds</span></span></h2>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-12 m-auto">
                    <div class="space60"></div>
                    <div class="btn-area1 text-center">
                        <a href="contact.html" class="vl-btn5 btn2"><span class="demo">Reserve Seat</span></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getCountdown } from '@/apiService';

export default {
    data() {
        return {
            countdown: {
                daysRemaining: 0,
                hoursRemaining: 0,
                minutesRemaining: 0,
                secondsRemaining: 0,
                targetDate: new Date(),
            },
        };
    },
    methods: {
        format(value) {
            return String(value).padStart(2, '0');
        },
        async fetchCountdown() {
            try {
                const response = await getCountdown();
                const countdownData = response.data;

                this.countdown.targetDate = new Date(countdownData.targetDate);
                this.countdown.daysRemaining = countdownData.daysRemaining;
                this.countdown.hoursRemaining = countdownData.hoursRemaining;
                this.countdown.minutesRemaining = countdownData.minutesRemaining;
                this.countdown.secondsRemaining = countdownData.secondsRemaining;

                this.startCountdown();
            } catch (error) {
                console.error('Error fetching countdown:', error);
            }
        },
        startCountdown() {
            var countdownFunction = setInterval(() => {
                var now = new Date().getTime();
                var distance = this.countdown.targetDate - now;

                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);

                this.countdown.daysRemaining = days;
                this.countdown.hoursRemaining = hours;
                this.countdown.minutesRemaining = minutes;
                this.countdown.secondsRemaining = seconds;

                if (distance < 0) {
                    clearInterval(countdownFunction);
                    this.countdown.daysRemaining = 0;
                    this.countdown.hoursRemaining = 0;
                    this.countdown.minutesRemaining = 0;
                    this.countdown.secondsRemaining = 0;
                    alert("Countdown Ended");
                }
            }, 1000);
        },
    },
    created() {
        this.fetchCountdown();
    },
};
</script>