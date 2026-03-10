<template>
  <div class="bg-white text-gray-800">

    <section class="relative w-full overflow-hidden">
      <div class="flex flex-col-reverse md:flex-row items-center justify-end md:justify-between mx-auto h-screen">

        <!-- Left -->
        <div class="flex flex-col justify-center text-center lg:text-left px-6 sm:px-8 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20 lg:w-1/2">

          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span class="text-secondary">Tuinspeelplaatsen</span> en sierhekken in Antwerpen.
          </h1>

          <div class="w-20 h-1 bg-gradient-to-r from-secondary to-primary my-6 mx-auto lg:mx-0 rounded-full"></div>

          <p class="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            Wil je je tuin in Antwerpen omvormen tot een veilige speelruimte voor kinderen of ben je op zoek naar een stijlvol sierhek rond je woning? Wij ontwerpen, leveren en plaatsen duurzame tuinspeelplaatsen en sierhekken op maat.
          </p>

          <div class="flex justify-center lg:justify-start">
            <a href="#contact"
              class="uppercase bg-secondary hover:bg-primary text-white px-8 py-4 rounded-sm font-semibold transition duration-300">
              Vraag gratis offerte
            </a>
          </div>
        </div>

        <!-- Right Background Image -->
        <div
          class="w-full lg:w-1/2 h-1/2 md:h-screen bg-cover bg-center"
          :style="{ backgroundImage: `url(${heroImage})` }"
        >
        </div>

      </div>
    </section>

    <!-- INTRO -->
    <section class="bg-gray-50 mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-16 md:py-24">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
          Speelplaatsen voor elke tuin in Antwerpen
        </h2>
        <p class="text-lg text-gray-700 mb-10 leading-relaxed">
          Een goede speelplaats in de tuin geeft kinderen ruimte om te bewegen, ontdekken en spelen. Wij bouwen tuinspeelplaatsen die passen bij de grootte van je tuin en de leeftijd van de kinderen.
        </p>
        <ul class="grid md:grid-cols-2 gap-6 text-lg">
          <li class="flex items-center gap-3 text-gray-700"><span class="text-secondary font-bold text-xl">✔</span> houten speeltoestellen</li>
          <li class="flex items-center gap-3 text-gray-700"><span class="text-secondary font-bold text-xl">✔</span> schommels en glijbanen</li>
          <li class="flex items-center gap-3 text-gray-700"><span class="text-secondary font-bold text-xl">✔</span> klimrekken</li>
          <li class="flex items-center gap-3 text-gray-700"><span class="text-secondary font-bold text-xl">✔</span> zandbakken</li>
          <li class="flex items-center gap-3 text-gray-700"><span class="text-secondary font-bold text-xl">✔</span> combinatiespeeltoestellen</li>
        </ul>
      </div>
    </section>

    <!-- PROJECT GALLERY -->
    <section class="py-16 md:py-24 bg-white">
      <div class="mx-auto max-w-screen-2xl px-6 sm:px-8 md:px-12 lg:px-16">
        <div class="mb-8 md:mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Galerij</h2>
            <div class="w-16 h-1 bg-gradient-to-r from-secondary to-primary rounded-full"></div>
        </div>

        <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">

            <!-- image - start -->
            <div
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="../assets/tobogan/tobogan-1.jpeg" loading="lazy" alt="" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>
            </div>
            <!-- image - end -->


            <!-- image - start -->
            <div
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="../assets/tobogan/tobogan-3.jpeg" loading="lazy" alt="" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>
            </div>
            <!-- image - end -->


            <!-- image - start -->
            <div
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="../assets/tobogan/tobogan-4.jpeg" loading="lazy" alt="" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>
            </div>
            <!-- image - end -->

            <!-- image - start -->
            <div
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <img src="../assets/tobogan/tobogan-5.jpeg" loading="lazy" alt="" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>
            </div>
            <!-- image - end -->

            <!-- image - start -->
            <div
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="../assets/tobogan/tobogan-2.jpeg" loading="lazy" alt="" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>
            </div>
            <!-- image - end -->

            <!-- image - start -->
            <div
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="../assets/tobogan/tobogan-6.jpeg" loading="lazy" alt="" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>
            </div>
            <!-- image - end -->

            <!-- image - start -->
            <div
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="../assets/tobogan/tobogan-9.jpeg" loading="lazy" alt="" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>
            </div>
            <!-- image - end -->


            <!-- image - start -->
            <div
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="../assets/tobogan/tobogan-10.jpeg" loading="lazy" alt="" class="absolute inset-0 h-full w-full object-cover object-top transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>
            </div>
            <!-- image - end -->

            <!-- image - start -->
            <div
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="../assets/tobogan/tobogan-8.jpeg" loading="lazy" alt="" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>
            </div>
            <!-- image - end -->

            <!-- image - start -->
            <div
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <img src="../assets/tobogan/tobogan-7.jpeg" loading="lazy" alt="" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>
            </div>
            <!-- image - end -->

            <!-- image - start -->
            <div
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="../assets/tobogan/balansuar-2.jpg" loading="lazy" alt="" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>
            </div>
            <!-- image - end -->


            <!-- image - start -->
            <div
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="../assets/tobogan/balansuar-1.jpg" loading="lazy" alt="" class="absolute inset-0 h-full w-full object-cover object-top transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>
            </div>
            <!-- image - end -->

        </div>
    </div>
    </section>

    <!-- WHY CHOOSE US -->
    <section class="bg-gray-50 mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-16 md:py-24">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
          Waarom kiezen voor ons in Antwerpen?
        </h2>

        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-white p-8 rounded-xl shadow-md transition duration-300 border-l-4 border-secondary">
            <p class="text-lg font-semibold text-gray-800 flex items-start gap-3">
              <span class="text-secondary text-2xl mt-1">✔</span>
              <span>advies op maat voor jouw tuin</span>
            </p>
          </div>
          <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 border-l-4 border-secondary">
            <p class="text-lg font-semibold text-gray-800 flex items-start gap-3">
              <span class="text-secondary text-2xl mt-1">✔</span>
              <span>sterke en duurzame materialen</span>
            </p>
          </div>
          <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 border-l-4 border-secondary">
            <p class="text-lg font-semibold text-gray-800 flex items-start gap-3">
              <span class="text-secondary text-2xl mt-1">✔</span>
              <span>professionele plaatsing</span>
            </p>
          </div>
          <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 border-l-4 border-secondary">
            <p class="text-lg font-semibold text-gray-800 flex items-start gap-3">
              <span class="text-secondary text-2xl mt-1">✔</span>
              <span>duidelijke prijsopgave vooraf</span>
            </p>
          </div>
        </div>
      </div>
    </section>

    <Process/>
  </div>
</template>

<script setup>
import Process from '@/components/Process.vue'
import heroImage from '../assets/tobogan/tobogan-1.jpeg'
</script>
