<script setup lang="ts">
import iconLogo from "../icons/iconLogo.vue";
import iconGithub from "../icons/iconGithub.vue";
import iconLinkedIn from "../icons/iconLinkedIn.vue";
import iconMail from "../icons/iconMail.vue";
import { Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css/effect-fade";
</script>

<template>
  <header class="section header !pb-4">
    <iconLogo />
    <h1 class="pt-10 text-3xl font-semibold">
      Hi, I'm <span class="text-primary">Eric</span>!
    </h1>
    <h1 class="pt-1 text-3xl font-semibold">
      I'm a Master of IT student at UNSW.
    </h1>
    <Swiper
      class="py-1 w-full"
      :allowTouchMove="false"
      :spaceBetween="30"
      :effect="'fade'"
      :autoHeight="true"
      :loop="true"
      :modules="[Autoplay, EffectFade]"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }"
      :fadeEffect="{
        crossFade: true,
      }"
    >
      <swiper-slide>
        <h1 class="text-3xl font-semibold">I make stuff for the web.</h1>
      </swiper-slide>
      <swiper-slide>
        <h1 class="text-3xl font-semibold">
          I'm ⅓ of
          <a
            href="https://logicpop.com.au"
            target="_blank"
            rel="noopener noreferrer"
            >logicpop</a
          >.
        </h1>
      </swiper-slide>
      <swiper-slide>
        <h1 class="text-3xl font-semibold">I listen to a lot of electropop.</h1>
      </swiper-slide>
      <swiper-slide>
        <h1 class="text-3xl font-semibold">
          I'm currently working on
          <a
            href="https://github.com/csesoc/Freerooms"
            target="_blank"
            rel="noopener noreferrer"
            >Freerooms</a
          >.
        </h1>
      </swiper-slide>
    </Swiper>
    <div class="pt-8 links flex space-x-4 transition">
      <a
        href="https://github.com/fxlui"
        target="_blank"
        rel="noopener noreferrer"
        alt="my github profile"
        ><iconGithub class="fill-current h-6"
      /></a>
      <a
        href="https://www.linkedin.com/in/eric-liu-439b0121a/"
        target="_blank"
        rel="noopener noreferrer"
        alt="my linkedin profile"
        ><iconLinkedIn class="fill-current h-6"
      /></a>
      <a
        href="mailto:me@fxlui.com"
        target="_blank"
        rel="noopener noreferrer"
        alt="contact me via email"
        ><iconMail class="fill-current h-6"
      /></a>
    </div>
  </header>
</template>

<style scoped></style>
