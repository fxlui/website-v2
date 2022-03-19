<script setup lang="ts">
import iconReactVue from "..//icons/iconReact.vue";
import iconTypeScriptVue from "..//icons/iconTypeScript.vue";
import iconDesktopVue from "../icons/iconDesktop.vue";
</script>

<template>
  <div class="project image">
    <slot name="project image"
      ><img
        class="object-cover max-h-[26rem] w-full rounded-md"
        src="@/assets/images/taskhouse.png"
    /></slot>
  </div>
  <div class="project text mt-4 w-full">
    <div class="item background title">
      <h3 class="card-title">Project</h3>
      <p class="desc-text">TaskHouse</p>
    </div>
    <div class="item background desc">
      <h3 class="card-title">Description</h3>
      <p class="desc-text">
        TaskHouse is an audio platform for teams to communicate the state of
        their tasks, by speaking with their collaborators through a
        user-friendly interface.
      </p>
    </div>
    <div class="item background date">
      <h3 class="card-title">Date</h3>
      <p class="desc-text">Aug 2021</p>
    </div>
    <div class="item background roles">
      <h3 class="card-title">My Roles</h3>
      <div class="flex flex-wrap space-x-2 mt-1">
        <div class="role-pill group background-elevated">
          <span class="">Product</span>
        </div>
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
        COMP3900 Capstone Project - High Distinction (93/100)
      </p>
    </div>
    <div class="item background platforms">
      <h3 class="card-title">Platforms</h3>
      <div class="icons">
        <iconDesktopVue class="icon" />
      </div>
    </div>
    <div class="item background technology">
      <h3 class="card-title">Technology</h3>
      <div class="icons">
        <iconReactVue class="icon" />
        <iconTypeScriptVue class="icon" />
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
