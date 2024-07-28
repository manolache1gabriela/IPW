<script setup>
	import Home from './components/Home.vue';
	import ProjectPage from './components/ProjectPage.vue';
	import Portfolio from './components/Portfolio.vue';
	import Navbar from './components/Navbar.vue';
	import Footer from './components/Footer.vue';
</script>

<template>
	<div class="w-full h-full font-rubik relative">
		<div
			class="absolute top-[-10%]"
			id="home"></div>
		<Navbar />
		<Home />
		<ProjectPage />
		<Portfolio />
		<Footer />
	</div>
</template>
