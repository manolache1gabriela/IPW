<template>
  <div class="w-full lg:sticky z-20 top-0 px-6 md:px-10 lg:px-16 py-1 bg-white flex items-center justify-between border-b border-gray-100">

    <!-- Logo -->
    <div class="flex items-center gap-3">
      <RouterLink to="/" class="flex items-center gap-3 text-secondary hover:text-primary transition duration-300">
        <img class="shrink-0 h-16 md:h-20" src="../assets/logo1.svg" alt="IP Werken logo" />
        <h1 class="hidden xl:block text-lg md:text-xl lg:text-2xl font-bold">
          IP Werken
        </h1>
      </RouterLink>
    </div>

    <!-- Desktop Navigation -->
    <div class="hidden lg:flex items-center">

      <ul class="flex gap-8 md:gap-6 items-center text-lg font-semibold">
        <li>
          <RouterLink to="/" class="text-gray-700 hover:text-secondary transition duration-300" active-class="text-secondary">
            Visie
          </RouterLink>
        </li>

        <li>
          <RouterLink
              to="/diensten" class="text-gray-600 hover:text-secondary transition duration-300 font-semibold flex items-center gap-1" active-class="text-secondary">
            Diensten
          </RouterLink>
        </li>

        <!-- Home Sections Anchors -->
        <li>
          <RouterLink to="/#projecten" class="text-gray-600 hover:text-secondary transition duration-300">
            Projecten
          </RouterLink>
        </li>

        <li>
          <RouterLink to="/#overons" class="text-gray-600 hover:text-secondary transition duration-300">
            Over Ons
          </RouterLink>
        </li>

        <li>
          <RouterLink to="/#mogelijkheden" class="text-gray-600 hover:text-secondary transition duration-300">
            Mogelijkheden
          </RouterLink>
        </li>

        <li>
          <RouterLink to="/#onze-klanten" class="text-gray-600 hover:text-secondary transition duration-300">
            Onze Klanten
          </RouterLink>
        </li>

        <li>
          <RouterLink to="/#contact" class="text-gray-600 hover:text-secondary transition duration-300">
            Contact
          </RouterLink>
        </li>




		<li>
			<!-- Contact Info -->
			<div class="flex flex-col gap-2 items-start">
				<a href="tel:+32467864650" class="text-secondary hover:text-primary transition duration-300 text-base flex items-center gap-2">
				<img class="h-5 w-5" src="../assets/phone.svg" alt="phone icon" />
				+32 467 86 46 50
				</a>

				<a href="mailto:info@ipwerken.be" class="text-secondary hover:text-primary transition duration-300 text-base flex items-center gap-2">
				<img class="h-5 w-5" src="../assets/mail.svg" alt="mail icon" />
				info@ipwerken.be
				</a>
			</div>
		</li>
      </ul>

    </div>

    <!-- Mobile Menu Button -->
    <div class="lg:hidden">
      <button @click="open = true" class="w-8 h-8 hover:opacity-70 transition duration-300">
        <img src="../assets/menu.svg" alt="menu icon" />
      </button>
    </div>
  </div>

  <!-- Mobile Menu -->
  <div
    class="fixed inset-0 top-0 min-h-screen z-10 bg-secondary w-full text-3xl flex-col justify-center items-center gap-6 text-white animate-open-menu"
    :class="open ? 'flex' : 'hidden'"
  >
    <button class="absolute top-8 right-8 w-8 h-8 hover:opacity-70 transition duration-300" @click="open = false">
      <img src="../assets/close.svg" alt="close icon" />
    </button>

    <!-- Home Sections Anchors -->
    <RouterLink to="/#visie" @click="open = false" active-class="underline">Visie</RouterLink>
    <RouterLink to="/Diensten" @click="open = false" active-class="underline">Diensten</RouterLink>
    <RouterLink to="/#projecten" @click="open = false">Projecten</RouterLink>
    <RouterLink to="/#overons" @click="open = false">Over Ons</RouterLink>
    <RouterLink to="/#mogelijkheden" @click="open = false">Mogelijkheden</RouterLink>
    <RouterLink to="/#contact" @click="open = false">Contact</RouterLink>

    <!-- Phone -->
    <a href="tel:+32467864650" class="mt-6 text-2xl text-white  border-4 border-white px-6 py-2">
      Tel: +32 467 86 46 50
    </a>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const open = ref(false) // mobile menu
</script>
