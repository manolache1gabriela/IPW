<template>
	<div
		class="w-full h-[10%] md:fixed z-20 top-0 px-2 md:px-10 py-1 bg-white flex items-center justify-between shadow-md">
		<div class="h-full">
			<a
				class="h-full flex items-center justify-center gap-4 text-gray-400 hover:text-secondary"
				href="/">
				<img
					class="h-full grayscale hover:filter-none"
					src="../assets/logo1.svg"
					alt="company logo" />
				<h1
					class="hidden lg:block text-xl md:text-2xl lg:text-3xl font-semibold">
					Ionut Popa Werken
				</h1>
			</a>
		</div>
		<div class="hidden h-full w-full md:flex items-center justify-end">
			<ul class="flex gap-5 items-center">
				<li
					class="hover:cursor-pointer py-2 text-text text-xl lg:text-2xl hover:text-primary"
					v-for="(link, index) in links"
					:key="index">
					<a :href="'#' + link.toLowerCase()">{{ link }}</a>
				</li>
			</ul>
		</div>
		<div>
			<button
				@click="openMenu"
				class="md:hidden w-8 cursor-pointer">
				<img
					src="../assets/menu.svg"
					alt="menu icon" />
			</button>
		</div>
	</div>
	<div
		class="absolute top-0 min-h-screen z-10 bg-secondary w-full text-4xl flex-col justify-center items-center gap-5 animate-open-menu origin-top"
		:class="open ? 'flex ' : ' hidden '">
		<button class="absolute z-40 top-8 right-8 w-8">
			<img
				@click="closeMenu"
				src="../assets/close.svg"
				alt="menu icon" />
		</button>
		<div class="p-10">
			<ul class="flex flex-col justify-center items-center gap-7">
				<li
					@click="closeMenu"
					class="hover:cursor-pointer text-text text-3xl hover:text-primary"
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

	const links = ref(['Home', 'Portfolio', 'Project', 'Services', 'Contact']);

	let open = ref(false);

	function openMenu() {
		open.value = !open.value;
	}
	function closeMenu() {
		openMenu();
	}
</script>
