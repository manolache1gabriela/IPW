<template>
	<div class="w-full h-[90%] flex mt-[5%]">
		<div class="w-3/4 bg-hero-image bg-cover bg-bottom">
			<div
				class="w-full h-full bg-gradient-to-r from-black/90 to-secondary/100 from-80% flex justify-center items-center">
				<div
					class="flex flex-col justify-center items-start gap-10 w-4/5 h-2/3 px-4">
					<h1
						class="text-8xl font-semibold text-white border-l-[12px] border-secondary py-3 pl-10">
						Constructions
					</h1>
					<p class="text-white text-2xl w-full">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit.
						Consequatur mollitia fugit explicabo placeat assumenda vero delectus
						voluptas, voluptatibus est distinctio.
					</p>
					<a
						href="#project"
						class="uppercase font-semibold bg-secondary hover:bg-primary text-white text-xl px-14 py-3">
						View our work
					</a>
				</div>
			</div>
		</div>
		<div
			class="w-1/4 bg-secondary flex flex-col justify-between items-start px-16 py-28"
			id="service">
			<h2
				class="text-text text-5xl font-semibold drop-shadow animate-fade-left animate-duration-500 animate-delay-500 animate-ease-in">
				Our Services
			</h2>
			<div
				class="flex justify-center items-center gap-6 animate-fade-left animate-duration-500 animate-delay-1000 animate-ease-in">
				<img src="../assets/svg1.svg" />
				<div class="flex flex-col justify-center items-start gap-2">
					<h3 class="text-2xl text-text font-semibold">
						Building Construction
					</h3>
					<p class="text-xl text-white">
						Lorem ipsum dolor sit amet consectetur.
					</p>
				</div>
			</div>
			<div
				class="flex justify-center items-center gap-6 animate-fade-left animate-duration-500 animate-delay-[1500ms] animate-ease-in">
				<img src="../assets/svg2.svg" />
				<div class="flex flex-col justify-center items-start gap-2">
					<h3 class="text-2xl text-text font-semibold">Foundation Work</h3>
					<p class="text-xl text-white">
						Lorem ipsum dolor sit amet consectetur.
					</p>
				</div>
			</div>
			<div
				class="flex w-full justify-center items-center gap-6 animate-fade-left animate-duration-500 animate-delay-[2000ms] animate-ease-in">
				<img src="../assets/svg3.svg" />
				<div class="flex flex-col justify-center items-start gap-2">
					<h3 class="text-2xl text-text font-semibold">Site Management</h3>
					<p class="text-xl text-white">
						Lorem ipsum dolor sit amet consectetur.
					</p>
				</div>
			</div>
		</div>
	</div>
</template>
<style>
	#service {
		box-shadow: rgba(47, 181, 178) 0px 0px 400px,
			rgba(47, 181, 178) 0px -12px 200px, rgba(47, 181, 178) 0px 4px 200px,
			rgba(47, 181, 178) 0px 12px 200px, rgba(47, 181, 178) 0px -3px 200px;
	}
</style>
