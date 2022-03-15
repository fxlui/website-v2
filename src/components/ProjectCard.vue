<script setup lang="ts">
const props = defineProps({
  title: String,
  image: String,
});
</script>

<template>
  <div
    class="rounded-xl relative w-full h-80 group bg-cover project"
    :style="{ 'background-image': 'url(' + image + ')' }"
  >
    <div
      class="transition-all absolute bottom-0 py-4 group-hover:py-6 px-6 group-hover:px-7 w-full rounded-b-xl backdrop-blur bg-white/80 dark:bg-black/70"
    >
      <p class="text-lg font-semibold group-hover:text-xl transition-all">
        {{ props.title }}
      </p>
    </div>
  </div>
</template>

<style scoped></style>
