<template>
	<div
		class="w-full h-[10%] fixed z-20 top-0 px-10 py-5 bg-white flex items-center justify-between shadow-sm">
		<div class="h-full">
			<a
				class="h-full"
				href="/">
				<img
					class="h-full grayscale hover:filter-none"
					src="../assets/logo1.svg"
					alt="company logo" />
			</a>
		</div>
		<div class="h-full flex items-center">
			<ul class="flex gap-5 items-center">
				<li
					class="hover:cursor-pointer py-2 text-text text-2xl hover:text-primary"
					v-for="(link, index) in links"
					:key="index">
					<a :href="'#' + link.toLowerCase()">{{ link }}</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup>
	import { ref } from 'vue';

	const links = ref(['Home', 'Project', 'Gallery', 'Contact']);
</script>
