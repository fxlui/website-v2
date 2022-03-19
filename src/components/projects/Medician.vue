<script setup lang="ts">
import iconAndroidVue from "..//icons/iconAndroid.vue";
import iconAppleVue from "..//icons/iconApple.vue";
import iconAppStoreVue from "..//icons/iconAppStore.vue";
import iconGithubVue from "..//icons/iconGithub.vue";
import iconMobileVue from "..//icons/iconMobile.vue";
import iconReactVue from "..//icons/iconReact.vue";
import iconTypeScriptVue from "..//icons/iconTypeScript.vue";
</script>

<template>
  <div class="project image">
    <slot name="image"
      ><img
        class="object-cover max-h-[26rem] w-full rounded-md"
        src="@/assets/images/medician.png"
    /></slot>
  </div>
  <div class="project text mt-4 w-full">
    <div class="item background title">
      <h3 class="card-title">Project</h3>
      <p class="desc-text">Medician</p>
    </div>
    <div class="item background desc">
      <h3 class="card-title">Description</h3>
      <p class="desc-text">
        Medician is a cross-platform mobile app for tracking PROs (Patient
        Reported Outcomes). Users are able to track their symptoms, get
        notifications for medications, exercises, and appointments.
      </p>
    </div>
    <div class="item background date">
      <h3 class="card-title">Date</h3>
      <p class="desc-text">Oct 2021</p>
    </div>
    <div class="item background roles">
      <h3 class="card-title">My Roles</h3>
      <div class="flex flex-wrap space-x-1 mt-1">
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
        UNSW
        <a
          href="https://www.facebook.com/events/184882760245206/?active_tab=discussion"
          target="_blank"
          rel="noopener noreferrer"
          >CSESoc Projects Competition</a
        >
        3rd Prize
      </p>
    </div>
    <div class="item background platforms">
      <h3 class="card-title">Platforms</h3>
      <div class="icons">
        <iconMobileVue class="icon" />
        <iconAppleVue class="icon" />
        <iconAndroidVue class="icon" />
      </div>
    </div>
    <div class="item background technology">
      <h3 class="card-title">Technology</h3>
      <div class="icons">
        <iconReactVue class="icon" />
        <iconTypeScriptVue class="icon" />
        <p class="desc-text">React Native</p>
      </div>
    </div>
    <div class="item background links">
      <h3 class="card-title">Links</h3>
      <div class="icons">
        <a
          href="https://apps.apple.com/au/app/id1584595040"
          target="_blank"
          rel="noopener noreferrer"
          alt="App Store link for Medician"
          ><iconAppStoreVue class="icon"
        /></a>
        <a
          href="https://github.com/fxlui/medician"
          target="_blank"
          rel="noopener noreferrer"
          alt="GitHub link for Medician"
        >
          <iconGithubVue class="icon"
        /></a>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
