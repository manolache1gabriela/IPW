<template>
	<div class="w-full h-[90%] relative">
		<div
			class="absolute top-[-11.1%]"
			id="services"></div>
		<div class="w-full h-full flex justify-center items-center">
			<div class="w-2/3 h-full flex justify-evenly items-center py-[8%] gap-10">
				<div
					class="w-1/3 h-full flex flex-col items-start justify-start gap-10">
					<div class="flex flex-col justify-center gap-10">
						<h4 class="text-5xl font-semibold">
							Let's build something together
						</h4>
						<div class="w-16 h-2 bg-secondary"></div>
					</div>
					<p class="text-lg font-light">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, iste
						provident dolores, suscipit obcaecati incidunt dolorem harum
						nostrum, nisi perferendis.
					</p>
					<button class="w-fit">
						<a
							href="#contact"
							class="text-secondary uppercase font-semibold border-4 border-secondary hover:border-primary hover:text-text text-xl px-12 py-2">
							get in touch
						</a>
					</button>
				</div>
				<div
					class="w-2/3 h-full bg-gray-100 px-10 py-8 flex flex-col justify-evenly">
					<details
						v-for="(service, index) in services"
						:key="index"
						class="select-none border-b-2 border-white">
						<summary
							class="list-none cursor-pointer flex items-center justify-between font-semibold text-lg mb-4">
							{{ service.summary }}
							<div class="w-6 h-6 rounded-full bg-open-button"></div>
						</summary>
						<ul class="font-light flex justify-evenly flex-wrap">
							<li
								class="list-disc"
								v-for="(detail, index) in service.details"
								:key="index">
								{{ detail }}
							</li>
						</ul>
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
			summary: 'Multi-inzetbaar',
			details: ['Grondwerken', 'Tuinbouw', 'Renovatie', 'Afbraak', 'Transport'],
		},
		{
			summary: 'Kwaliteit',
			details: [
				'Jarenlange ervaring & expertise',
				'Kwalitatieve materialen',
				'Professioneel gereedschap',
			],
		},
		{
			summary: 'Klantgericht',
			details: [
				' Noden en verwachtingen formuleren',
				'Prioriteiten stellen',
				'Heldere communicatie bewaken',
				'Vertrouwen creëren',
			],
		},
		{
			summary: ' Doelgericht & Doeltreffend',
			details: [
				'Helder doel formuleren',
				'Plan van aanpak opstellen',
				'Punctualiteit',
			],
		},
	]);
</script>
<style>
	details[open] summary div {
		background-image: url('../assets/close-details.svg');
	}
</style>
