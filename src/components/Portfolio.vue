<script setup>
	import ProjectCard from './ProjectCard.vue';
</script>

<template>
	<div
		class="w-full min-h-[95%] py-12 bg-white flex flex-col justify-center items-center gap-8 relative">
		<div
			class="absolute top-[-6%]"
			id="portfolio"></div>
		<h3 class="text-4xl font-semibold capitalize">Latest projects</h3>
		<div class="w-16 h-2 bg-secondary"></div>
		<div class="w-3/5 h-2/3 flex justify-center flex-wrap items-center gap-16">
			<ProjectCard />
			<ProjectCard />
			<ProjectCard />
		</div>
		<a
			href="#contact"
			class="text-secondary uppercase font-semibold border-4 border-secondary hover:border-primary hover:text-text text-xl px-14 py-3">
			view all
		</a>
	</div>
</template>
