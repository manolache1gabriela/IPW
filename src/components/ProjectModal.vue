<template>
	<div
		v-show="currentProject"
		class="absolute top-0 left-0 w-full h-full flex justify-center items-center">
		<dialog
			class="w-full md:w-3/4 h-3/4 z-10 backdrop:bg-black backdrop:opacity-80"
			ref="dialog"
			@close="closeModal()">
			<div
				v-if="currentProject"
				class="md:flex w-full h-full justify-center items-center relative">
				<button
					class="absolute z-40 top-0 right-0 w-8 bg-white/40 backdrop-blur-sm"
					@click="closeModal">
					<img
						src="../assets/close.svg"
						alt="close icon" />
				</button>
				<div
					class="w-full h-1/2 md:h-full md:flex justify-center items-center select-none">
					<div
						class="w-full h-full bg-cover bg-center"
						:style="`background-image: url('${currentProject.images[imageIndex]}')`"></div>
				</div>
				<div
					class="w-full md:w-2/5 max-h-[40vh] md:max-h-none md:h-full overflow-y-scroll text-center py-3 md:pt-7 lg:p-8 text-text font-light flex flex-col-reverse md:flex-col gap-6 items-center">
					<div
						class="flex flex-col justify-center items-center gap-4 md:gap-6 md:mt-6">
						<h1
							class="text-secondary text-lg md:text-2xl lg:text-4xl font-semibold">
							{{ currentProject.title }}
						</h1>
						<p class="px-3 text-justify">
							{{ currentProject.description }}
						</p>
					</div>
					<div class="w-full flex justify-evenly items-center">
						<button
							@click="changeImage('minus')"
							:disabled="imageIndex < 1"
							class="disabled:invisible">
							<img
								src="../assets/left.svg"
								alt="arrow left"
								class="w-6 md:w-8" />
						</button>
						<button
							@click="changeImage('plus')"
							:disabled="imageIndex === currentProject.images.length - 1"
							class="disabled:invisible">
							<img
								class="w-6 md:w-8"
								src="../assets/right.svg"
								alt="arrow right" />
						</button>
					</div>
				</div>
				<!-- <div class="h-full w-full flex justify-center items-center gap-4"></div> -->
			</div>
		</dialog>
	</div>
</template>
<script setup>
	import { computed, ref, watch } from 'vue';

	let props = defineProps(['showModal', 'currentProject', 'projects']);

	let dialog = ref(null);
	let imageIndex = ref(0);

	watch(
		() => props.showModal,
		(newValue) => {
			if (newValue && props.currentProject !== undefined) {
				dialog.value.showModal();
			}
		}
	);
	let emit = defineEmits(['modalClosed']);

	function closeModal() {
		dialog.value.close();
		emit('modalClosed');
		imageIndex.value = 0;
	}
	let currentProject = computed(() => {
		return props.projects.filter(
			(project) => project.id === props.currentProject
		)[0];
	});

	function changeImage(changeType, max = 4) {
		if (imageIndex.value > max) {
			imageIndex.value = 0;
		}
		if (changeType === 'plus') {
			imageIndex.value += 1;
		}
		if (changeType === 'minus') {
			imageIndex.value -= 1;
		}
	}
</script>
