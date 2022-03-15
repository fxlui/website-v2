<script setup lang="ts">
import iconLogo from "../icons/iconLogo.vue";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/autoplay";
</script>

<template>
  <header class="section header">
    <iconLogo />
    <h1 class="pt-10 text-3xl font-semibold">
      Hi, I'm <span class="text-primary">Eric</span>!
    </h1>
    <h1 class="pt-1 text-3xl font-semibold">
      I'm a Master of IT student at UNSW.
    </h1>
    <Swiper
      :autoHeight="true"
      :space-between="20"
      :slidesPerView="1"
      :direction="'vertical'"
      :loop="true"
      :modules="[Autoplay]"
      :autoplay="{
        delay: 2250,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }"
    >
      <swiper-slide>
        <h1 class="text-3xl font-semibold">I make stuff for the web.</h1>
      </swiper-slide>
      <swiper-slide>
        <h1 class="text-3xl font-semibold">
          I'm 1/3 of
          <a
            href="https://logicpop.com.au"
            target="_blank"
            rel="noopener noreferrer"
            >logicpop</a
          >.
        </h1>
      </swiper-slide>
    </Swiper>
  </header>
</template>

<style scoped></style>
