<script setup lang="ts">
import iconGithubVue from "./icons/iconGithub.vue";
</script>

<template>
  <a
    class="flex flex-col justify-center items-center text-center bg-neutral-200 dark:bg-neutral-800 rounded-xl relative w-full h-80 group bg-cover project hover:cursor-pointer"
    href="https://github.com/fxlui"
    target="_blank"
    rel="noopener noreferrer"
  >
    <iconGithubVue class="mb-4 h-6 w-6 fill-current" />
    <span class="max-w-[7rem] md:max-w-xl">More projects on GitHub</span>
  </a>
</template>

<style scoped></style>
