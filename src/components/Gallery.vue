<template>
	<div class="w-full h-[90%]">
		<img
			v-for="project in projects"
			:key="project"
			:src="projects[0].image"
			alt="" />
	</div>
</template>
<script setup>
	import projects from '../assets/gallery-projects.json';
</script>
