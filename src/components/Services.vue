<template>
	<div class="w-full min-h-fit md:h-[90%] relative my-5">
		<div
			class="absolute top-[-11.1%]"
			id="mogelijkheden"></div>
		<div class="w-full h-full md:flex justify-center items-center">
			<div
				class="w-full lg:w-2/3 h-full md:flex justify-evenly items-center py-[8%] gap-10">
				<div
					class="w-full md:w-1/3 md:h-full px-5 py-5 flex flex-col items-start justify-start gap-5 md:gap-10">
					<div class="flex flex-col justify-center gap-5 md:gap-10">
						<h4 class="text-3xl md:text-5xl font-semibold">
							Waarom zou u voor ons kiezen?
						</h4>
						<div class="w-16 h-2 bg-secondary"></div>
					</div>
					<p class="text-md md:text-lg font-light">
						Dankzij onze veelzijdigheid en brede expertise kunnen we elk project
						van begin tot eind succesvol begeleiden. We zorgen voor een vlotte
						uitvoering, ongeacht de complexiteit van de opdracht.
					</p>
					<button class="w-fit">
						<a
							href="#contact"
							class="text-secondary uppercase font-semibold border-4 border-secondary hover:border-primary hover:text-text text-lg lg:text-xl px-6 lg:px-12 py-1 lg:py-2">
							Neem contact op
						</a>
					</button>
				</div>
				<div
					class="w-full md:w-2/3 min-h-fit md:h-full bg-gray-100 px-10 py-8 flex flex-col justify-evenly">
					<details
						v-for="(service, index) in services"
						:key="index"
						class="select-none border-b-2 border-white">
						<summary
							class="list-none cursor-pointer flex items-center justify-between font-semibold text-lg mb-4">
							{{ service.summary }}
							<div class="w-6 h-6 rounded-full ml-1 bg-open-button"></div>
						</summary>
						<p>{{ service.details }}</p>
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
				'Wij werken uitsluitend met materialen van topkwaliteit om duurzame en betrouwbare resultaten te garanderen. Elk project, groot of klein, verdient de beste basis om lang mee te gaan. Door te investeren in kwaliteit, zorgen we voor tevreden klanten en langdurige resultaten.',
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
</style>
