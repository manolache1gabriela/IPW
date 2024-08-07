<template>
	<div
		class="w-full min-h-[90%] px-5 md:px-10 xl:p-20 flex justify-center items-center relative flex-col gap-8">
		<div
			class="absolute top-[-4%]"
			id="portfolio"></div>
		<h3 class="text-4xl font-semibold capitalize drop-shadow">
			Latest projects
		</h3>
		<div class="w-16 h-2 bg-secondary"></div>
		<div
			class="columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 [&>div:not(:first-child)]:mt-5 lg:[&>div:not(:first-child)]:mt-8"
			:class="showAll ? '' : 'max-h-screen overflow-hidden'">
			<div
				v-for="(project, index) in projects"
				:key="index"
				class="relative">
				<div
					class="bg-black opacity-0 hover:opacity-60 w-full h-full z-10 absolute flex justify-center items-center cursor-pointer"
					@click="openModal(project.id)">
					<img
						src="../assets/magnifier.svg"
						alt="magnifier icon"
						class="w-16" />
				</div>
				<img
					class="rounded aspect-auto"
					:src="projects[index].thumbnail"
					alt="project image" />
			</div>
		</div>
		<button
			@click="viewAllPhotos"
			v-if="projects.length > 8"
			class="text-secondary uppercase font-semibold border-4 border-secondary hover:border-primary hover:text-text text-xl px-14 py-3">
			{{ showAll ? 'view less' : 'view all' }}
		</button>
		<ProjectModal
			@modal-closed="
				showModal = false;
				currentProject = null;
			"
			:showModal="showModal"
			:currentProject="currentProject"
			:projects="projects" />
	</div>
</template>
<script setup>
	import ProjectModal from './ProjectModal.vue';
	import { ref } from 'vue';
	import projects from '../assets/gallery-projects.json';

	let showAll = ref(false);
	function viewAllPhotos() {
		showAll.value = !showAll.value;
		if (!showAll.value) {
			window.location = '#portfolio';
		}
	}

	let showModal = ref(false);
	let currentProject = ref(null);
	function openModal(id) {
		showModal.value = true;
		currentProject.value = id;
	}
</script>
