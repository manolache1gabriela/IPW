<script setup>
	import Home from './components/Home.vue';
	import ProjectPage from './components/ProjectPage.vue';
	import Contact from './components/Contact.vue';
	import Gallery from './components/Gallery.vue';
	import Services from './components/Services.vue';
	import Navbar from './components/Navbar.vue';
</script>

<template>
	<div class="w-full h-full font-rubik relative">
		<div
			class="absolute top-[-10%]"
			id="home"></div>
		<Navbar />
		<Home />
		<Gallery />
		<ProjectPage />
		<Services />
		<Contact />
	</div>
</template>
