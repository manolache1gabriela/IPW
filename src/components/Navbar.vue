<template>
	<div
		class="w-full h-[10%] md:sticky z-20 top-0 px-2 md:px-10 py-1 bg-white flex items-center justify-between shadow-md">
		<div class="h-full">
			<a
				class="h-full w-full flex items-center justify-center gap-4 text-gray-400 hover:text-secondary"
				href="/">
				<img
					class="h-full grayscale hover:filter-none"
					src="../assets/logo1.svg"
					alt="company logo" />
				<h1
					class="hidden w-full lg:block text-xl md:text-2xl lg:text-3xl font-semibold">
					IP Werken
				</h1>
			</a>
		</div>
		<div class="hidden h-full md:flex items-center">
			<ul class="flex gap-5 items-center">
				<li
					class="hover:cursor-pointer py-2 text-gray-400 text-xl lg:text-2xl hover:text-secondary font-semibold"
					v-for="(link, index) in links"
					:key="index">
					<a :href="'#' + link.toLowerCase().split(' ').join('')">{{ link }}</a>
				</li>
			</ul>
		</div>
		<div class="md:hidden">
			<button
				@click="openMenu"
				class="w-8 cursor-pointer">
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
					<a :href="'#' + link.toLowerCase().split(' ').join('')">{{ link }}</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup>
	import { ref } from 'vue';

	const links = ref([
		'Thuis',
		'Portefeuille',
		'Over Ons ',
		'Mogelijkheden',
		'Contact',
	]);

	let open = ref(false);

	function openMenu() {
		open.value = !open.value;
	}
	function closeMenu() {
		openMenu();
	}
</script>
