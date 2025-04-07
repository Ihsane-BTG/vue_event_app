<template>
  <div class="marquee-container">
    <div class="marquee-content" id="marquee-content">
      <span class="marquee-item" v-for="(item, index) in marqueeItems" :key="index">
        <img src="assets/img/elements/elements32.png" alt="" />
        {{ item }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      marqueeItems: [
        'conferences',
        'DIGITAL',
        'EXPERIENCE',
        'EVENT',
        'conferences',
        'DIGITAL',
        'EXPERIENCE',
        'EVENT',
        'conferences',
        'DIGITAL',
        'EXPERIENCE',
        'EVENT',
      ]
    };
  },
  mounted() {
    this.startMarquee();
  },
  methods: {
    startMarquee() {
      const marqueeContent = document.getElementById("marquee-content");
      let marqueeWidth = marqueeContent.scrollWidth;
      let currentPos = 0;

      const scrollMarquee = () => {
        currentPos -= 1;
        if (currentPos <= -marqueeWidth) {
          currentPos = 0;
        }
        marqueeContent.style.transform = `translateX(${currentPos}px)`;
      };

      setInterval(scrollMarquee, 20);
    }
  }
};
</script>