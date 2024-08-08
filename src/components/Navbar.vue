<template>
	<div
		class="w-full h-[10%] fixed z-20 top-0 px-2 md:px-10 py-1 bg-white flex items-center justify-between shadow-md">
		<div class="h-full">
			<a
				class="h-full flex items-center justify-center gap-4 text-gray-400 hover:text-secondary"
				href="/">
				<img
					class="h-full grayscale hover:filter-none"
					src="../assets/logo1.svg"
					alt="company logo" />
				<h1 class="text-xl md:text-3xl font-semibold">Ionut Popa Werk</h1>
			</a>
		</div>
		<div class="hidden h-full md:flex items-center">
			<ul class="flex gap-5 items-center">
				<li
					class="hover:cursor-pointer py-2 text-text text-2xl hover:text-primary"
					v-for="(link, index) in links"
					:key="index">
					<a :href="'#' + link.toLowerCase()">{{ link }}</a>
				</li>
			</ul>
		</div>
		<div class="md:hidden">-</div>
	</div>
</template>

<script setup>
	import { ref } from 'vue';

	const links = ref(['Home', 'Project', 'Portfolio', 'Services', 'Contact']);
</script>
