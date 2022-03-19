<script setup lang="ts">
const props = defineProps({
  show: Boolean,
});
</script>
<template>
  <vue-final-modal
    v-model="show"
    classes="flex justify-center items-center"
    content-class="relative flex flex-col max-h-full mx-4 p-4 border dark:border-gray-800 rounded bg-white dark:bg-gray-900"
  >
    <span class="mr-8 text-2xl font-bold">
      <slot name="title"></slot>
    </span>
    <div class="flex-grow overflow-y-auto">
      <slot name="body"></slot>
    </div>
    <button class="absolute top-0 right-0 mt-2 mr-2" @click="close">
      close
    </button>
  </vue-final-modal>
</template>
