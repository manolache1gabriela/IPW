<template>
	<div class="w-full min-h-fit md:h-[90%] md:flex relative">
		<div
			class="absolute top-[-11.1%]"
			id="contact"></div>
		<div
			class="w-full md:w-1/2 bg-secondary flex flex-col justify-center gap-10 py-5 md:py-0 px-5 lg:px-5 xl:px-40">
			<h4 class="text-white text-5xl font-semibold drop-shadow">Contact us</h4>
			<div class="w-16 h-2 bg-white"></div>
			<form
				action="post"
				class="lg:h-1/3 flex flex-col lg:grid grid-cols-2 grid-rows-4 gap-4 md:gap-6">
				<input
					type="text"
					placeholder="Name"
					class="col-span-1 w-full row-span-1 px-4 py-2" />
				<input
					type="email"
					placeholder="Email"
					class="col-span-1 w-full row-span-1 px-4 py-2" />
				<textarea
					name="message"
					id="email-body"
					cols="30"
					rows="10"
					placeholder="Message"
					class="col-span-2 w-full row-span-2 px-4 py-4"></textarea>
				<button
					class="mt-4 w-fit text-white uppercase font-semibold border-4 border-white hover:border-text hover:text-text text-md md:text-lg col-start-2 py-2 px-4 md:px-8 md:place-self-end"
					type="submit">
					Send message
				</button>
			</form>
		</div>
		<div
			class="w-full md:w-1/2 bg-text flex flex-col justify-center items-center">
			<div
				class="w-full lg:w-1/2 py-5 md:py-0 md:h-[20%] flex justify-evenly xl:justify-between items-center">
				<a
					v-for="(icon, index) in socialIcons"
					:key="index"
					:href="icon.link"
					target="_blank">
					<img
						class="w-7 md:w-10"
						:src="icon.src"
						:alt="icon.alt" />
				</a>
			</div>
			<div
				class="logo-bg w-full md:h-[80%] bg-white md:pt-20 px-5 py-5 lg:pl-10 xl:pl-28 flex flex-col items-start gap-2 xl:relative md:gap-8">
				<div
					v-for="(icon, index) in contactIcons"
					:key="index"
					class="flex items-center justify-start gap-6">
					<img
						:class="'w-' + icon.width"
						:src="icon.src"
						:alt="icon.alt" />
					<a
						:href="icon.link"
						target="_blank"
						class="hover:text-secondary"
						>{{ icon.text }}</a
					>
				</div>
				<div
					class="w-48 lg:hidden xl:w-1/2 h-48 xl:h-1/2 bg-logo-image md:mt-10 lg:mt-0 bg-contain bg-no-repeat xl:absolute bottom-0 right-0 self-center xl:self-end bg-right"></div>
			</div>
		</div>
	</div>
</template>
<script setup>
	const socialIcons = [
		{
			name: 'facebook icon',
			src: './assets/facebook.svg',
			alt: 'facebook icon',
			link: 'https://www.facebook.com/profile.php?id=61563783506446',
		},
		{
			name: 'instagram icon',
			src: './assets/instagram.svg',
			alt: 'instagram icon',
			link: 'https://www.instagram.com/ipwerken',
		},
		{
			name: 'whatsapp icon',
			src: './assets/whatsapp.svg',
			alt: 'whatsapp icon',
			link: "https://wa.me/32467864650?text=I'm%20interested%20in%20your%20work.%20Call%20me!",
		},
		{
			name: 'tik tok icon',
			src: './assets/tiktok.svg',
			alt: 'tik tok icon',
			link: 'https://www.facebook.com/popa.ionutsiraluca',
		},
	];
	const contactIcons = [
		{
			name: 'location icon',
			src: './assets/location.svg',
			alt: 'location icon',
			text: 'Hofstraat 17 Dessel',
			width: 6,
			link: 'https://maps.app.goo.gl/HUGGdNKN6ofzAhTd9',
		},
		{
			name: 'phone icon',
			src: './assets/phone.svg',
			alt: 'phone icon',
			text: '+32 467 86 46 50',
			width: 6,
			link: 'tel:+32 467 86 46 50',
		},
		{
			name: 'mail icon',
			src: './assets/mail.svg',
			alt: 'mail icon',
			text: 'info@ipw.be',
			width: 8,
			link: 'mailto:info@ipw.be',
		},
	];
</script>

<style>
	@media (min-width: 1024px) {
		.logo-bg {
			background-image: url('../assets/logo1.svg');
			background-size: 95%;
			background-blend-mode: luminosity;
			background-position: 600% -25%;
			background-repeat: no-repeat;
		}
	}
</style>
