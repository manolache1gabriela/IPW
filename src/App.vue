<script setup>
	import Home from './components/Home.vue';
	import ProjectPage from './components/ProjectPage.vue';
	import Navbar from './components/Navbar.vue';
	import Footer from './components/Footer.vue';
</script>

<template>
	<div class="w-full h-screen font-rubik relative">
		<Navbar />
		<Home />
		<ProjectPage />
		<Footer />
	</div>
</template>
