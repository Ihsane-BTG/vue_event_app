<template>
	<div class="hero7-section-area attent1-section-area">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="tab-container">
						<div class="row">
							<div class="col-lg-6 order-lg-2 order-1 text-center text-lg-start">
								<div class="heading-area sp5">
									<h1>{{ hero.title }}</h1>
									<p>{{ hero.tagline }}</p>
									<p>{{ hero.edition }}</p>
									<div class="space16"></div>
									<div class="btn-area1">
										<a href="#" class="vl-btn5 btn2"><img class="icn-light"
												src="/assets/img/icons/clock1.svg" alt="" /> {{ hero.date }}
											| </a>
										<a href="#" class="vl-btn5 btn2"><img class="icn-light"
												src="/assets/img/icons/location1.svg" alt="" /> {{ hero.location }}
										</a>
									</div>
									<div class="space16"></div>
									<div class="btn-area1">
										<a :href="hero.cta.link" class="vl-btn7">{{ hero.cta.text }}</a>
									</div>
								</div>
							</div>
							<div class="col-lg-6 order-lg-1 order-2 text-center">
								<div class="tab-content" id="tab-content">
									<div class="about3-images">
										<div class="img1" data-aos="zoom-in" data-aos-duration="1000">
											<img src="/assets/img/all-images/hero/hero-img9.png" alt=""
												class="img-fluid mx-auto">
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-4">

				</div>
				<div class="col-lg-7">
					<div class="timer-btn-area">
						<div class="timer">
							<div class="time-box">
								<span id="days" class="time-value">{{ format(countdown.daysRemaining)
									}}<span>Days</span></span>
								<br>
							</div>
							<div class="space14"></div>
							<div class="time-box">
								<span id="hours" class="time-value">{{ format(countdown.hoursRemaining)
								}}<span>Hours</span></span>
								<br>
							</div>
							<div class="space14"></div>
							<div class="time-box">
								<span id="minutes" class="time-value">{{ format(countdown.minutesRemaining)
								}}<span>Minutes</span></span>
								<br>
							</div>
							<div class="space14"></div>
							<div class="time-box box2">
								<span id="seconds" class="time-value">{{ format(countdown.secondsRemaining)
								}}<span>Seconds</span></span>
								<br>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { getCountdown } from '@/apiService';
import { getHome } from '@/apiService';

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
			hero: {
				title: '',
				tagline: '',
				edition: '',
				date: '',
				location: '',
				cta: {
					text: '',
					link: '',
				},
			},
		};
	},
	methods: {
		async fetchHeroData() {
			try {
				const response = await getHome();
				const heroData = response.data.hero;

				this.hero.title = heroData.title;
				this.hero.tagline = heroData.tagline;
				this.hero.edition = heroData.edition;
				this.hero.date = heroData.date;
				this.hero.location = heroData.location;
				this.hero.cta.text = heroData.cta.text;
				this.hero.cta.link = heroData.cta.link;
			} catch (error) {
				console.error('Error fetching hero data:', error);
			}
		},
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
		this.fetchHeroData();
		this.fetchCountdown();
	},
};
</script>