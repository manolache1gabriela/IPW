<template>
	<div class="w-full h-[90%] flex relative">
		<div
			class="absolute top-[-11.1%]"
			id="contact"></div>
		<div class="w-1/2 bg-secondary flex flex-col justify-center gap-10 px-40">
			<h4 class="text-white text-5xl font-semibold drop-shadow">Contact us</h4>
			<div class="w-16 h-2 bg-white"></div>
			<form
				action="post"
				class="h-1/3 grid grid-cols-2 grid-rows-4 gap-6">
				<input
					type="text"
					placeholder="Name"
					class="col-span-1 row-span-1 px-4 py-2" />
				<input
					type="email"
					placeholder="Email"
					class="col-span-1 row-span-1 px-4 py-2" />
				<textarea
					name="message"
					id="email-body"
					cols="30"
					rows="10"
					placeholder="Message"
					class="col-span-2 row-span-2 px-4 py-4"></textarea>
				<button
					class="mt-4 w-fit text-white uppercase font-semibold border-4 border-white hover:border-text hover:text-text text-lg col-start-2 py-2 px-8 place-self-end"
					type="submit">
					Send message
				</button>
			</form>
		</div>
		<div class="w-1/2 bg-text flex flex-col justify-center items-center">
			<div class="w-1/2 h-[20%] flex justify-evenly items-center">
				<a
					v-for="(icon, index) in socialIcons"
					:key="index"
					:href="icon.link"
					target="_blank">
					<img
						:class="'w-' + icon.width"
						:src="icon.src"
						:alt="icon.alt" />
				</a>
			</div>
			<div class="w-full h-[80%] bg-white py-20 px-28 flex flex-col gap-8">
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
			width: 8,
			link: 'https://www.facebook.com/popa.ionutsiraluca',
		},
		{
			name: 'whatsapp icon',
			src: './assets/whatsapp.svg',
			alt: 'whatsapp icon',
			width: 10,
			link: "https://wa.me/741502544?text=I'm%20interested%20in%20your%20work.%20Call%20me!",
		},
		{
			name: 'tik tok icon',
			src: './assets/tiktok.svg',
			alt: 'tik tok icon',
			width: 9,
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
			text: 'ionutp0126@gmail.com',
			width: 7,
			link: 'mailto:ionutp0126@gmail.com',
		},
	];
</script>
