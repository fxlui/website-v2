<script setup lang="ts">
import Greeting from "./components/sections/Greeting.vue";
import Projects from "./components/sections/Projects.vue";
import Courses from "./components/sections/Courses.vue";
import Contact from "./components/sections/Contact.vue";
</script>

<template>
  <div class="flex flex-col items-center">
    <Greeting />
    <Projects />
    <Contact />
    <footer class="section !mt-2 pb-2">
      <div class="w-full flex justify-center">
        <p class="opacity-50">
          &copy; 2022 Eric Liu&nbsp;&nbsp;•&nbsp;
          <a
            href="https://old.fxlui.com"
            target="_blank"
            rel="noopener noreferrer"
            alt="GitHub link for Footsteps"
            >Previous Design</a
          >
        </p>
      </div>
    </footer>
  </div>
</template>

<style></style>
