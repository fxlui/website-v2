<script setup lang="ts">
import { MasonryGrid } from "@egjs/vue-grid";
import iconReactVue from "..//icons/iconReact.vue";
import iconTypeScriptVue from "..//icons/iconTypeScript.vue";
import iconDesktopVue from "../icons/iconDesktop.vue";
</script>

<template>
  <div class="image">
    <slot name="image"
      ><img
        class="object-cover max-h-[26rem] w-full rounded-md"
        src="@/assets/images/taskhouse.png"
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
    </masonry-grid>
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
  @apply w-full md:w-[calc(50%-6px)] h-auto p-3 rounded-md;
}

.desc-text {
  @apply text-base md:text-lg lg:text-xl font-semibold;
}
</style>
