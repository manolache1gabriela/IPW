<template>
	<div class="absolute top-[-10%]" id="visie"></div>
	<div class="md:w-full md:h-[90vh] flex flex-col lg:flex-row">
		<div
			class="w-full h-[90%] md:h-[75%] lg:h-full lg:w-3/4 bg-hero-image bg-cover bg-center">
			<div
				class="w-full h-full py-10 md:py-25 bg-black bg-opacity-60 flex justify-center items-center">
				<div
					class="container mx-auto flex flex-col justify-center items-start gap-8 md:gap-10 w-full h-full md:w-4/5 md:h-2/3 px-5">
					<!-- added hero copy and call to action -->
					<h1 class="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
						Tuinaanleg Antwerpen – van grondwerken tot volledige tuinaanleg
					</h1>

					<p class="hidden md:block text-white text-lg md:text-xl lg:text-2xl w-full leading-relaxed">
						Bij IPW staan kwaliteit, vakmanschap en klanttevredenheid centraal
						in alles wat we doen. We bieden een breed scala aan diensten,
						waaronder grondwerken, tuinbouw, renovatie, afbraak en transport,
						waarbij we elke opdracht met de grootste zorg uitvoeren.
					</p>

					<p class="text-secondary text-lg md:text-xl lg:text-2xl w-full font-semibold">
						– Eigen machines. Duidelijke afspraken. Sterke tuinen.
					</p>

					<a href="#contact" class="uppercase bg-secondary hover:bg-primary text-white font-semibold px-8 py-4  rounded-sm transition duration-300 inline-block">
						Vraag gratis offerte
					</a>
				</div>
			</div>
		</div>
		<div
			class="w-full md:h-[22%] lg:h-full lg:w-1/4 bg-secondary flex flex-col justify-center lg:justify-evenly items-start md:items-center lg:items-start px-6 sm:px-8 lg:px-12 gap-6 lg:gap-8 py-8 lg:py-16">
			<h2
				class="text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold drop-shadow animate-fade-left animate-duration-500 animate-ease-in">
				Onze diensten
			</h2>
			<div
				class="container mx-auto md:flex lg:flex-col lg:h-2/3 items-start md:items-center lg:items-start justify-between md:justify-center lg:justify-between md:gap-8 lg:gap-6 w-full">
				<div
					v-for="(constructionIcon, index) in constructionIcons"
					:key="index"
					class="flex w-full mt-2 md:mt-0 items-center gap-6 md:gap-4 lg:gap-6 animate-fade-left animate-delay-1000 animate-duration-500 animate-ease-in"
					:class="`animate-delay-[${constructionIcon.delay}ms]`">
					<img
						class="md:h-12 xl:h-16 flex-shrink-0"
						:src="constructionIcon.path" />
					<div class="flex flex-col justify-center items-start gap-2">
						<h3
							class="text-lg md:text-base lg:text-2xl xl:text-3xl text-white font-bold capitalize leading-tight">
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
			path: '../assets/gardening.svg',
			title: 'grondwerken tot tuinbouw',
			delay: '1000',
		},
		{
			path: '../assets/renovations.svg',
			title: 'renovatie',
			delay: '1500',
		},
		{
			path: '../assets/rubbish.svg',
			title: 'afbraak',
			delay: '2000',
		},
		{
			path: '../assets/delivery.svg',
			title: 'transport',
			delay: '2000',
		},
	]);
</script>
