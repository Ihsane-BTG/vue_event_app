<template>
	<div class="attent1-section-area choose-section-area about7-section-area event5-section-area">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="tab-container">
						<div class="row align-items-center">
							<!-- Tab Content -->
							<div class="col-lg-8 order-lg-1 order-3">
								<div class="tab-content about-header-area" id="tab-content">
									<!-- Tab 1: Our Mission -->
									<div class="tab-pane fade show active" id="tab1" role="tabpanel">
										<div class="choose-widget-boxarea about-auhtor-box">
											<div class="space24"></div>
											<div class="content-area text">
												<h4>Our Mission</h4>
												<div class="space18"></div>
												<p>{{ about.mission }}</p>
												<div class="space24"></div>
											</div>
										</div>
									</div>
									<!-- Tab 2: Who We Are -->
									<div class="tab-pane fade" id="tab2" role="tabpanel">
										<div class="choose-widget-boxarea about-auhtor-box">
											<div class="space24"></div>
											<div class="content-area text">
												<h4>Who We Are</h4>
												<div class="space18"></div>
												<p>{{ about.whoWeAre.description }}</p>
												<div class="space16 btn-area1 text-center"></div>
												<a :href="about.whoWeAre.link.url" class="vl-btn5 btn2">
													<span class="demo">{{about.whoWeAre.link.text }}</span></a>
												<div class="space24"></div>
											</div>
										</div>
									</div>
									<!-- Tab 3: Segments -->
									<div class="tab-pane fade" id="tab3" role="tabpanel">
										<div class="choose-widget-boxarea about-auhtor-box">
											<div class="space24"></div>
											<div class="content-area text">
												<h4>Event Segments</h4>
												<div class="space18"></div>
												<div v-for="(segment, index) in about.segments" :key="index"
													class="segment">
													<h5>{{ segment.title }}</h5>
													<p>{{ segment.description }}</p>
													<p v-if="segment.format"><strong>Format:</strong> {{
														segment.format }}</p>
													<ul v-if="segment.tracks && segment.tracks.length">
														<li v-for="(track, idx) in segment.tracks" :key="idx">{{
															track }}</li>
													</ul>
													<div class="space16"></div>
												</div>
												<div class="space24"></div>
											</div>
										</div>
									</div>
									<!-- Tab 4: Code of Conduct -->
									<div class="tab-pane fade" id="tab4" role="tabpanel">
										<div class="choose-widget-boxarea about-auhtor-box">
											<div class="space24"></div>
											<div class="content-area text">
												<h4>Code of Conduct</h4>
												<div class="space18"></div>
												<p>{{ about.codeOfConduct }}</p>
												<div class="space24"></div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-lg-1 order-lg-2 order-2"></div>
							<div class="col-lg-3 order-lg-3 order-1">
								<ul class="nav flex-column nav-pills" id="tab-navigation" role="tablist"
									aria-orientation="vertical">
									<li class="nav-item">
										<a class="nav-link link1 active" id="tab1-tab" data-bs-toggle="pill"
											href="#tab1" role="tab" aria-controls="tab1" aria-selected="true">
											<svg class="svg1" xmlns="http://www.w3.org/2000/svg" width="29" height="75"
												viewBox="0 0 29 75" fill="none">
												<path
													d="M0.946169 36.2765C0.388977 36.997 0.388978 38.003 0.94617 38.7235L29 75L29 0L0.946169 36.2765Z"
													fill="white" fill-opacity="0.2" />
											</svg>

											<svg class="svg2" xmlns="http://www.w3.org/2000/svg" width="29" height="75"
												viewBox="0 0 29 75" fill="none">
												<path
													d="M0.946169 36.2765C0.388977 36.997 0.388978 38.003 0.94617 38.7235L29 75L29 0L0.946169 36.2765Z"
													fill="url(#paint0_linear_2700_2802)" />
												<defs>
													<linearGradient id="paint0_linear_2700_2802" x1="0" y1="0"
														x2="50.4562" y2="19.5097" gradientUnits="userSpaceOnUse">
														<stop stop-color="#022859" />
														<stop offset="1" stop-color="#022859" />
													</linearGradient>
												</defs>
											</svg>
											Our Mission
											<span>Our mission statement</span>
										</a>
									</li>
									<li class="nav-item">
										<a class="nav-link" id="tab2-tab" data-bs-toggle="pill" href="#tab2" role="tab"
											aria-controls="tab2" aria-selected="false">
											<svg class="svg1" xmlns="http://www.w3.org/2000/svg" width="29" height="75"
												viewBox="0 0 29 75" fill="none">
												<path
													d="M0.946169 36.2765C0.388977 36.997 0.388978 38.003 0.94617 38.7235L29 75L29 0L0.946169 36.2765Z"
													fill="white" fill-opacity="0.2" />
											</svg>

											<svg class="svg2" xmlns="http://www.w3.org/2000/svg" width="29" height="75"
												viewBox="0 0 29 75" fill="none">
												<path
													d="M0.946169 36.2765C0.388977 36.997 0.388978 38.003 0.94617 38.7235L29 75L29 0L0.946169 36.2765Z"
													fill="url(#paint0_linear_2700_2802)" />
												<defs>
													<linearGradient id="paint0_linear_2700_2802" x1="0" y1="0"
														x2="50.4562" y2="19.5097" gradientUnits="userSpaceOnUse">
														<stop stop-color="#022859" />
														<stop offset="1" stop-color="#022859" />
													</linearGradient>
												</defs>
											</svg>
											Who We Are
											<span>Learn about us</span>
										</a>
									</li>
									<li class="nav-item">
										<a class="nav-link" id="tab3-tab" data-bs-toggle="pill" href="#tab3" role="tab"
											aria-controls="tab3" aria-selected="false">
											<svg class="svg1" xmlns="http://www.w3.org/2000/svg" width="29" height="75"
												viewBox="0 0 29 75" fill="none">
												<path
													d="M0.946169 36.2765C0.388977 36.997 0.388978 38.003 0.94617 38.7235L29 75L29 0L0.946169 36.2765Z"
													fill="white" fill-opacity="0.2" />
											</svg>

											<svg class="svg2" xmlns="http://www.w3.org/2000/svg" width="29" height="75"
												viewBox="0 0 29 75" fill="none">
												<path
													d="M0.946169 36.2765C0.388977 36.997 0.388978 38.003 0.94617 38.7235L29 75L29 0L0.946169 36.2765Z"
													fill="url(#paint0_linear_2700_2802)" />
												<defs>
													<linearGradient id="paint0_linear_2700_2802" x1="0" y1="0"
														x2="50.4562" y2="19.5097" gradientUnits="userSpaceOnUse">
														<stop stop-color="#022859" />
														<stop offset="1" stop-color="#022859" />
													</linearGradient>
												</defs>
											</svg>
											Segments
											<span>Our event segments</span>
										</a>
									</li>
									<li class="nav-item">
										<a class="nav-link" id="tab4-tab" data-bs-toggle="pill" href="#tab4"
											role="tab" aria-controls="tab4" aria-selected="false">
											<svg class="svg1" xmlns="http://www.w3.org/2000/svg" width="29" height="75"
												viewBox="0 0 29 75" fill="none">
												<path
													d="M0.946169 36.2765C0.388977 36.997 0.388978 38.003 0.94617 38.7235L29 75L29 0L0.946169 36.2765Z"
													fill="white" fill-opacity="0.2" />
											</svg>
											<svg class="svg2" xmlns="http://www.w3.org/2000/svg" width="29" height="75"
												viewBox="0 0 29 75" fill="none">
												<path
													d="M0.946169 36.2765C0.388977 36.997 0.388978 38.003 0.94617 38.7235L29 75L29 0L0.946169 36.2765Z"
													fill="url(#paint0_linear_2700_2802)" />
												<defs>
													<linearGradient id="paint0_linear_2700_2802" x1="0" y1="0"
														x2="50.4562" y2="19.5097" gradientUnits="userSpaceOnUse">
														<stop stop-color="#022859" />
														<stop offset="1" stop-color="#022859" />
													</linearGradient>
												</defs>
											</svg>
											Code of Conduct
											<span>Our rules and policies</span>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { getAbout } from '@/apiService';

export default {
	data() {
		return {
			about: {
				mission: '',
				whoWeAre: {
					description: '',
					link: {
						text: '',
						url: ''
					}
				},
				segments: [],
				codeOfConduct: ''
			}
		};
	},
	methods: {
		async fetchAbout() {
			try {
				const response = await getAbout();
				const aboutData = response.data;
				this.about.mission = aboutData.mission;
				this.about.whoWeAre = aboutData.whoWeAre;
				this.about.segments = aboutData.segments;
				this.about.codeOfConduct = aboutData.codeOfConduct;
			} catch (error) {
				console.error('Error fetching about data:', error);
			}
		}
	},
	created() {
		this.fetchAbout();
	}
};
</script>