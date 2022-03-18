<script setup lang="ts">
import DegreeCard from "../DegreeCard.vue";
import CourseCard from "../CourseCard.vue";
import degrees from "../../degree.json";

interface Course {
  code: string;
  title: string;
  desc: string;
  mark: string;
}

interface Degree {
  title: string;
  school: string;
  date: string;
  results: string;
  courses: Course[];
}
</script>

<template>
  <div class="courses section" id="education">
    <div class="section-width pb-6">
      <h3 class="text-xl font-medium">
        <a class="!no-underline" href="#education">Education</a>
      </h3>
      <p class="text-lg font-normal opacity-90">My academic highlights</p>
    </div>
    <div class="w-full space-y-6">
      <DegreeCard v-for="degree in degrees">
        <template v-slot:title>{{ degree.title }}</template>
        <template v-slot:school>{{ degree.school }}</template>
        <template v-slot:date>{{ degree.date }}</template>
        <template v-slot:results>{{ degree.results }}</template>
        <template v-slot:courses>
          <CourseCard v-for="course in degree.courses">
            <template v-slot:code>{{ course.code }}</template>
            <template v-slot:title>{{ course.title }}</template>
            <template v-slot:desc>{{ course.desc }}</template>
            <template v-slot:mark>{{ course.mark }}</template>
          </CourseCard>
        </template>
      </DegreeCard>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
