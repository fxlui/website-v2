<script setup lang="ts">
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import Medician from "../projects/Medician.vue";

// Import Swiper styles
import "swiper/css";

const onSwiper = (swiper: any) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log("slide change");
};
</script>

<template>
  <div class="projects section-grey">
    <div class="section-width pb-6">
      <h3 class="text-xl font-medium">Projects</h3>
      <p class="pt-1 text-lg font-normal">Some projects lorem ipsum</p>
    </div>
    <div class="w-full">
      <Swiper
        class="slider last:pr-36"
        :watchSlidesProgress="true"
        :slides-per-view="1"
        :space-between="30"
        :breakpoints="{
          320: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 1.2,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 1.4,
            spaceBetween: 30,
          },
        }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide><medician /></swiper-slide>
        <swiper-slide><Medician /></swiper-slide>
      </Swiper>
    </div>
  </div>
</template>

<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.slider::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.slider {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  padding-left: calc(((6 / 4) / 12) * 100vw);
}

@media only screen and (min-width: 768px) {
  .slider {
    padding-left: calc(((8 / 4) / 12) * 100vw);
  }
}
</style>
