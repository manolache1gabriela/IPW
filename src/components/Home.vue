<template>
	<div class="md:w-full md:h-full flex flex-col lg:flex-row">
		<div class="w-full h-full lg:w-3/4 bg-hero-image bg-cover bg-bottom">
			<div
				class="w-full h-full md:py-20 bg-black bg-opacity-80 flex justify-center items-center">
				<div
					class="flex flex-col justify-center items-start gap-10 w-full h-full md:w-4/5 md:h-2/3 px-4">
					<h1
						class="text-4xl md:text-6xl lg:text-8xl font-semibold text-white border-l-[12px] border-secondary py-3 pl-4 md:pl-10">
						Visie
					</h1>
					<p class="text-white text-lg md:text-xl lg:text-2xl w-full">
						Bij IPW staan kwaliteit, vakmanschap en klanttevredenheid centraal
						in alles wat we doen. We bieden een breed scala aan diensten,
						waaronder grondwerken, tuinbouw, renovatie, afbraak en transport,
						waarbij we elke opdracht met de grootste zorg uitvoeren.
						<!-- <span class="block text-base md:text-lg lg:text-xl mt-2">
							Ons doel is om duurzame, efficiënte en esthetische oplossingen te
							leveren die aan al uw verwachtingen voldoen.
						</span> -->
					</p>
					<a
						href="#mogelijkheden"
						class="uppercase font-semibold bg-secondary hover:bg-primary text-white text-md md:text-xl px-7 md:px-14 py-2 md:py-3">
						Bekijk ons werk
					</a>
				</div>
			</div>
		</div>
		<div
			class="w-full lg:w-1/4 bg-secondary flex flex-col justify-between lg:justify-evenly items-start md:items-center lg:items-start px-5 lg:px-16 gap-5 py-5 xl:py-28">
			<h2
				class="text-text text-2xl md:text-3xl lg:text-5xl font-semibold drop-shadow animate-fade-left animate-duration-500 animate-ease-in">
				Onze diensten
			</h2>
			<div
				class="md:flex lg:flex-col lg:h-2/3 items-start justify-between md:justify-center lg:justify-between md:gap-3 lg:gap-5">
				<div
					v-for="(constructionIcon, index) in constructionIcons"
					:key="index"
					class="flex w-full mt-2 md:mt-0 items-center gap-6 md:gap-3 lg:gap-6 animate-fade-left animate-delay-1000 animate-duration-500 animate-ease-in"
					:class="`animate-delay-[${constructionIcon.delay}ms]`">
					<img :src="constructionIcon.path" />
					<div class="flex flex-col justify-center items-start gap-2">
						<h3
							class="text-xl md:text-2xl lg:text-3xl text-text font-semibold capitalize">
							{{ constructionIcon.title }}
						</h3>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { ref } from 'vue';

	const constructionIcons = ref([
		{
			path: '../assets/svg1.svg',
			title: 'grondwerken tot tuinbouw',
			description: 'Lorem ipsum dolor sit amet consectetur.',
			delay: '1000',
		},
		{
			path: '../assets/svg2.svg',
			title: 'renovatie',
			description: 'Lorem ipsum dolor sit amet consectetur.',
			delay: '1500',
		},
		{
			path: '../assets/svg3.svg',
			title: 'afbraak',
			description: 'Lorem ipsum dolor sit amet consectetur.',
			delay: '2000',
		},
		{
			path: '../assets/svg3.svg',
			title: 'transport',
			description: 'Lorem ipsum dolor sit amet consectetur.',
			delay: '2000',
		},
	]);
</script>
