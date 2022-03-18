<script setup lang="ts"></script>

<template>
  <div class="course background">
    <div>
      <h1 class="code"><slot name="code"></slot></h1>
      <h1 class="title"><slot name="title"></slot></h1>
      <p class="desc">
        <slot name="desc"></slot>
      </p>
    </div>

    <h3 class="mark"><slot name="mark"></slot></h3>
  </div>
</template>

<style lang="postcss" scoped>
.course {
  @apply flex flex-col justify-between p-4 rounded-lg shadow-md shadow-neutral-200 dark:shadow-none dark:bg-neutral-800 space-y-1 hover:shadow-xl dark:hover:shadow-none dark:hover:bg-black transition-all;
}

.code {
  @apply font-medium text-base;
}

.title {
  @apply font-semibold text-xl;
}

.desc {
  @apply py-1;
}

.mark {
  @apply font-medium opacity-60;
}
</style>
