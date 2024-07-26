<template>
  <div class="w-full h-[12%] px-10 py-3 bg-[#f0f1f1] flex items-center justify-between shadow-customNavShadow">
    <div class="h-full">
      <img class="h-full" src='../assets/logo1.svg' alt="company logo">
    </div>
    <div class="h-full flex items-center">
      <ul class="flex gap-5 items-center">
        <li class="hover:cursor-pointer px-4 py-2 text-[#1F1F1F]" v-for="(link,index) in links" :key="index">
          <a :href="'#' + link.toLowerCase()">{{link}}</a></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";


const links = ref([
  'Project', 'Portfolio', 'Services', 'Contact', 'About','Home',
])

</script>