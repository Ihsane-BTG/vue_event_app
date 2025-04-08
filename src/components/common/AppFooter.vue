<template>
	<div class="footer7-sertion-area">
		<div class="container">
			<div class="row">
				<div class="col-lg-5 col-md-12">
					<div class="footer-logo-area">
						<img src="/assets/img/logo/logo2.png" alt="">
						<div class="space16"></div>
						<p>{{ hero.title }}</p>
						<p>{{ hero.tagline }}</p>
						<div class="space24"></div>
						<ul>
							<li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
							<li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
							<li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
						</ul>
					</div>
				</div>

				<div class="col-lg-4 col-md-6">
					<div class="link-content2">
						<h3>Quick Links</h3>
						<ul>
							<li><router-link to="/about">About Us</router-link></li>
							<li><router-link to="/agenda">Event Listing</router-link></li>
							<li><router-link to="/contact">Contact Us</router-link></li>
						</ul>
					</div>
				</div>

				<div class="col-lg-3 col-md-6">
					<div class="link-content2">
						<h3>Contact Us</h3>
						<ul>
							<li><a href="tel:+11234567890"><img src="/assets/img/icons/phn1.svg" alt="">+1 123 456
									7890</a></li>
							<li><a href="#"><img src="/assets/img/icons/location1.svg" alt="">{{ hero.location }}
								</a></li>
							<li><a href="#"> <img src="/assets/img/icons/world1.svg" alt="">eventifyevent.com</a></li>
						</ul>
					</div>
				</div>
			</div>
			<div class="space60"></div>
			<div class="row">
				<div class="col-lg-12">
					<div class="copyright">
						<p>&copy; Copyright 2024 -Eventify. All Right Reserved</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { getHome } from '@/apiService';

export default {
	data() {
		return {
			hero: {
				title: '',
				tagline: '',
				location: ''
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
				this.hero.location = heroData.location;
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		}
	},
	created() {
		this.fetchHeroData();
	},
};
</script>