<script setup lang="ts">
import { MasonryGrid } from "@egjs/vue-grid";
import iconAndroidVue from "@/components/icons/iconAndroid.vue";
import iconAppleVue from "@/components/icons/iconApple.vue";
import iconAppStoreVue from "@/components/icons/iconAppStore.vue";
import iconGithubVue from "@/components/icons/iconGithub.vue";
import iconMobileVue from "@/components/icons/iconMobile.vue";
import iconReactVue from "@/components/icons/iconReact.vue";
import iconTypeScriptVue from "@/components/icons/iconTypeScript.vue";
</script>

<template>
  <div class="image">
    <slot name="image"
      ><img
        class="object-cover max-h-96 w-full rounded-md"
        src="@/assets/images/medician.png"
    /></slot>
  </div>
  <div class="text mt-3 w-full">
    <masonry-grid
      class="container"
      :gap="10"
      :align="'center'"
      :defaultDirection="'end'"
    >
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
        <div class="flex flex-wrap space-x-2 mt-1">
          <div class="role-pill group background-elevated">
            <span class="transition-colors group-hover:text-white"
              >Product</span
            >
          </div>
          <div class="role-pill group background-elevated">
            <span class="transition-colors group-hover:text-white">Design</span>
          </div>
          <div class="role-pill group background-elevated">
            <span class="transition-colors group-hover:text-white"
              >Technical</span
            >
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
    </masonry-grid>
    <div class="modal-body">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.card-title {
  @apply font-medium opacity-60 dark:font-normal dark:opacity-70;
}
.role-pill {
  @apply p-2 rounded-md text-sm w-auto font-semibold hover:bg-primary hover:px-3 transition-all;
}
.icons {
  @apply flex space-x-2 pl-1 py-2 items-center;
}
.icon {
  @apply h-6 w-6 fill-current;
}
.item {
  @apply w-full md:w-[calc(50%-6px)] h-auto p-3  rounded-md;
}

.desc-text {
  @apply text-base md:text-lg lg:text-xl font-semibold;
}
</style>
