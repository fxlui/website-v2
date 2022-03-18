<script setup lang="ts"></script>

<template>
  <div class="degree background-elevated">
    <div class="info">
      <h1 class="title"><slot name="title"></slot></h1>
      <h3 class="school"><slot name="school"></slot></h3>
      <h3 class="date"><slot name="date"></slot></h3>
      <h3 class="results"><slot name="results"></slot></h3>
    </div>
    <div class="courses">
      <slot name="courses"></slot>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.degree {
  @apply w-full p-5 lg:p-6 rounded-xl flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:space-x-8;
}

.info {
  @apply max-w-xs space-y-1;
  flex: 3;
}

.info .title {
  @apply font-semibold text-xl lg:max-w-[12rem];
}

.info .school,
.date,
.results {
  @apply opacity-60;
}

.courses {
  @apply grid grid-cols-1 xl:grid-cols-2 gap-4;
  flex: 7;
}
</style>
