<template>
	<div class="w-full md:h-[90vh] lg:flex justify-center items-center relative  bg-gray-100">
		<div class="absolute top-[-11.1%]" id="overons"></div>
		<ImgComparisonSlider class="lg:w-1/2 focus:outline-none">
			<!-- eslint-disable -->
			<img slot="first" class='md:min-h-[90vh]' src="../assets/IMG_61.jpg" />
			<img slot="second" class='md:min-h-[90vh]' src="../assets/IMG_66.jpg"/>
			<!-- eslint-enable -->
		</ImgComparisonSlider>
		<div class="flex flex-col items-center lg:w-1/2 h-full md:h-[90vh]">
			<div
				class="container mx-auto w-full md:h-4/5 flex flex-col items-start justify-center gap-6 md:gap-8 lg:gap-12 text-gray-900 py-8 px-6 md:px-8 lg:px-12">
				<h2
					class="text-3xl md:text-4xl font-semibold drop-shadow leading-tight">
					<span class="xl:border-b-4 border-secondary pb-2">Over</span>
					ons
				</h2>
				<div
					class="flex flex-col gap-6 md:grid grid-cols-2 md:gap-6 lg:gap-10 text-base md:text-sm lg:text-base leading-relaxed">
					<div class="space-y-2">
						<h3 class="font-bold text-lg text-secondary">Klantgericht</h3>
						<p class="text-gray-700">
							Wij luisteren naar de wensen van onze klanten en bieden oplossingen
							op maat. Uw tevredenheid is onze hoogste prioriteit, en we werken
							nauw met u samen om uw visie te realiseren. Elke stap in het proces
							is gericht op het behalen van een resultaat dat aan uw verwachtingen
							voldoet.
						</p>
					</div>
					<div class="space-y-2">
						<h3 class="font-bold text-lg text-secondary">Doelgericht & Doeltreffend</h3>
						<p class="text-gray-700">
							IPW werkt efficiënt en resultaatgericht om uw projecten tijdig en
							binnen budget af te ronden. We zetten ons in om elke opdracht snel
							en effectief uit te voeren, zonder concessies te doen aan de
							kwaliteit. Onze aanpak is altijd gericht op het behalen van uw
							doelen.
						</p>
					</div>
				</div>
			</div>
			<div class="w-full h-1/5 bg-gray-900 lg:flex justify-center hidden">
				<div
					class="w-1/2 bg-secondary text-white flex flex-col items-center justify-between md:justify-center gap-2 py-6">
					<h2 class="text-4xl md:text-5xl lg:text-6xl font-bold">75</h2>
					<h4 class="text-md md:text-base text-center font-semibold uppercase tracking-wide">
						tevreden klanten
					</h4>
				</div>
				<div
					class="w-1/2 text-white flex flex-col items-center justify-between md:justify-center gap-2 py-6">
					<h2 class="text-4xl md:text-5xl lg:text-6xl font-bold">100+</h2>
					<h4 class="text-base md:text-lg text-center font-semibold uppercase tracking-wide">
						Afgeronde projecten
					</h4>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { ImgComparisonSlider } from '@img-comparison-slider/vue';

export default {
  name: 'ExampleComponent',
  components: {
    ImgComparisonSlider,
  },
};
</script>
