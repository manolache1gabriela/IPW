<template>
	<div class="w-full relative bg-gray-100">
		<div class="absolute top-[-13%]" id="mogelijkheden"></div>
		<div class="w-full container mx-auto md:flex justify-center items-center">
			<div class="w-full min-h-fit md:flex justify-evenly items-center px-6 py-[10%] gap-10">
				<div
					class="w-full md:w-1/3 min-h-fit md:h-full mb-10 md:mb-0 flex flex-col items-start justify-start gap-5 md:gap-10">
					<div class="flex flex-col justify-center gap-5 md:gap-10">
						<h4 class="text-3xl md:text-4xl font-semibold">
							Waarom zou u voor ons kiezen?
						</h4>
						<div class="w-16 h-1 bg-gradient-to-r from-secondary to-primary rounded-full"></div>
					</div>
					<p class="text-md md:text-lg font-light">
						Dankzij onze veelzijdigheid en brede expertise kunnen we elk project
						van begin tot eind succesvol begeleiden. We zorgen voor een vlotte
						uitvoering, ongeacht de complexiteit van de opdracht.
					</p>
					<button class="w-fit">
						<a href="#contact"
							class="text-secondary uppercase font-semibold border-4 border-secondary hover:border-primary hover:text-text text-base lg:text-lg px-6 md:px-4 lg:px-12 py-2 lg:py-4">
							Vraag offerte
						</a>
					</button>
				</div>
				<div
					class="w-full md:w-2/3 md:px-10 flex flex-col justify-evenly">
					<details
						v-for="(service, index) in services"
						:key="index"
						class="select-none min-h-fit border-b-2 border-gray-50 py-4">
						<summary
							class="list-none cursor-pointer flex items-center justify-between font-semibold text-lg">
							{{ service.summary }}
							<div class="w-6 h-6 rounded-full ml-1 bg-open-button"></div>
						</summary>
						<p class="mt-4">{{ service.details }}</p>
					</details>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
	import { ref } from 'vue';

	const services = ref([
		{
			summary: 'Expertise',
			details:
				'Met jarenlange ervaring en diepgaande kennis in diverse vakgebieden leveren wij hoogwaardig werk. Ons team bestaat uit vakmensen die elke opdracht met precisie en toewijding uitvoeren. We blijven continu innoveren om onze klanten de beste oplossingen te bieden.',
		},
		{
			summary: 'Kwalitatieve materialen',
			details:
				'Wij werken uitsluitend met materialen van topkwaliteit om duurzame en betrouwbare resultaten te garanderen. Elk project, groot of klein, verdient de beste basis om lang mee te gaan. Door te investeren in kwaliteit, zorgen we voor tevreden klanten.',
		},
		{
			summary: 'Professioneel gereedschap',
			details:
				'Bij IPW maken we gebruik van geavanceerd en professioneel gereedschap om elk project efficiënt en nauwkeurig uit te voeren. Dit stelt ons in staat om hoge standaarden te handhaven en elk detail tot in de puntjes af te werken. Onze uitrusting is een cruciaal onderdeel van ons vakmanschap.',
		},
		{
			summary: 'Punctualiteit',
			details:
				'Bij IPW hechten we veel waarde aan stiptheid en het nakomen van afspraken. We zorgen ervoor dat elk project op tijd wordt opgeleverd, zoals afgesproken. Punctualiteit is voor ons een teken van respect en professionaliteit tegenover onze klanten.',
		},
	]);
</script>
<style>
	details[open] summary div {
		background-image: url('../assets/close-details.svg');
	}
	@media (min-width: 1440px) {
		.logo-bg {
			background-image: url('../assets/logo1.svg');
			background-size: 90%;
			background-blend-mode: luminosity;
			background-position: bottom 140% right -250%;
			background-repeat: no-repeat;
		}
	}
</style>
