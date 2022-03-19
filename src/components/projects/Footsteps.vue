<script setup lang="ts">
import iconGithubVue from "..//icons/iconGithub.vue";
import iconMobileVue from "..//icons/iconMobile.vue";
import iconReactVue from "..//icons/iconReact.vue";
</script>

<template>
  <div class="project image">
    <slot name="image"
      ><img
        class="object-cover max-h-[26rem] w-full rounded-md"
        src="@/assets/images/footsteps.png"
    /></slot>
  </div>
  <div class="project text mt-4 w-full">
    <div class="item background title">
      <h3 class="card-title">Project</h3>
      <p class="desc-text">Footsteps (MVP)</p>
    </div>
    <div class="item background desc">
      <h3 class="card-title">Description</h3>
      <p class="desc-text">
        Footsteps aims to link a student's schooling experience with relevant
        industry mentors who will guide them through their studies and decision
        on future career choices.
      </p>
    </div>
    <div class="item background date">
      <h3 class="card-title">Date</h3>
      <p class="desc-text">Jul 2021</p>
    </div>
    <div class="item background roles">
      <h3 class="card-title">My Roles</h3>
      <div class="flex flex-wrap space-x-2 mt-1">
        <div class="role-pill group background-elevated">
          <span class="">Design</span>
        </div>
        <div class="role-pill group background-elevated">
          <span class="">Technical</span>
        </div>
      </div>
    </div>
    <div class="item background recognition">
      <h3 class="card-title">Recognition</h3>
      <p class="desc-text">
        UNSW CSESoc Flagship Hackathon 2021 -
        <a
          href="https://youtu.be/-Ruo8NlrkCo?list=PLtdbwEd-4QWExTxke9BRnkbHv2zXX-_qT&t=335"
          target="_blank"
          rel="noopener noreferrer"
          >Prospa Beginner's Prize</a
        >
      </p>
    </div>
    <div class="item background platforms">
      <h3 class="card-title">Platforms</h3>
      <div class="icons">
        <iconMobileVue class="icon" />
      </div>
    </div>
    <div class="item background technology">
      <h3 class="card-title">Technology</h3>
      <div class="icons">
        <iconReactVue class="icon" />
        <p class="desc-text">React Native</p>
      </div>
    </div>
    <div class="item background links">
      <h3 class="card-title">Links</h3>
      <div class="icons">
        <a
          href="https://github.com/zijizhu/footsteps"
          target="_blank"
          rel="noopener noreferrer"
          alt="GitHub link for Footsteps"
        >
          <iconGithubVue class="icon"
        /></a>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
