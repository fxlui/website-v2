<script setup lang="ts">
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import Modal from "../Modal.vue";
import ProjectCard from "../ProjectCard.vue";
import GitHubCard from "../GitHubCard.vue";

import MedicianImage from "@/assets/images/medician.png";
import Medician from "../projects/Medician.vue";
import TaskhouseImage from "@/assets/images/taskhouse.png";
import Taskhouse from "../projects/Taskhouse.vue";
import FootstepsImage from "@/assets/images/footsteps.png";
import Footsteps from "../projects/Footsteps.vue";

const showModal = ref(false);
const activeProject = ref("");

const setModal = (id: string) => {
  activeProject.value = id;
  showModal.value = true;
  const html = document.querySelector("html");
  html?.classList.add("modal-open");
};

const closeModal = () => {
  showModal.value = false;
  const html = document.querySelector("html");
  html?.classList.remove("modal-open");
};
</script>

<template>
  <Teleport to="body">
    <Modal :show="showModal" @close="closeModal()">
      <template v-slot:body>
        <Medician v-if="activeProject === 'medician'" />
        <Taskhouse v-if="activeProject === 'taskhouse'" />
        <Footsteps v-if="activeProject === 'footsteps'" />
      </template>
    </Modal>
  </Teleport>
  <div class="projects section-grey !pb-0">
    <div class="section-width pb-6">
      <h3 class="text-xl font-medium">Projects</h3>
      <p class="text-lg font-normal">Some projects I've worked on</p>
    </div>
    <div class="w-full pb-5">
      <Swiper
        class="slider last:pr-36"
        :pagination="{
          clickable: true,
        }"
        :modules="[Pagination]"
        :slides-per-view="1"
        :space-between="30"
        :breakpoints="{
          450: {
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
      >
        <swiper-slide
          ><ProjectCard
            title="Medician"
            :image="MedicianImage"
            @clicked="setModal('medician')"
        /></swiper-slide>
        <swiper-slide
          ><ProjectCard
            title="TaskHouse"
            :image="TaskhouseImage"
            @clicked="setModal('taskhouse')"
        /></swiper-slide>
        <swiper-slide
          ><ProjectCard
            title="Footsteps"
            :image="FootstepsImage"
            @clicked="setModal('footsteps')"
        /></swiper-slide>
        <swiper-slide><GitHubCard /></swiper-slide>
      </Swiper>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
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

.swiper-slide {
  @apply transition-all;
}

.swiper-slide-next,
.swiper-slide-prev {
  @apply opacity-75 scale-95;
}

@media only screen and (min-width: 768px) {
  .slider {
    padding-left: calc(((8 / 4) / 12) * 100vw);
  }
}
</style>
