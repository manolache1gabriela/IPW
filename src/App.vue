<script setup>
	import Home from './components/Home.vue';
	import ProjectPage from './components/ProjectPage.vue';
	import Gallery from './components/Gallery.vue';
	import Services from './components/Services.vue';
	import Navbar from './components/Navbar.vue';
</script>

<template>
	<Navbar />

	<div class="w-full h-full font-rubik relative">
		<div
			class="absolute top-[-10%]"
			id="visie"></div>
		<Home />
		<Gallery />
		<ProjectPage />
		<Services />
	</div>
</template>
