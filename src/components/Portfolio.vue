<script setup>
	import ProjectCard from './ProjectCard.vue';
</script>

<template>
	<div
		class="w-full min-h-[95%] py-12 bg-white flex flex-col justify-center items-center gap-8 relative">
		<div
			class="absolute top-[-6%]"
			id="portfolio"></div>

		<div class="w-3/5 h-2/3 flex justify-center flex-wrap items-center gap-16">
			<ProjectCard />
			<ProjectCard />
			<ProjectCard />
		</div>
	</div>
</template>
