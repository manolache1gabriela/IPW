<template>
  <div class="bg-white text-gray-800">

    <section class="relative w-full overflow-hidden">
      <div class="flex flex-col-reverse md:flex-row items-center justify-end md:justify-between mx-auto h-screen">

        <!-- Left -->
        <div class="flex flex-col justify-center text-center lg:text-left px-6 sm:px-8 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20 lg:w-1/2">

          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span class="text-secondary">Sloopwerkzaamheden</span>, verwijderingen en terreinontwikkeling in Antwerpen
          </h1>

          <div class="w-20 h-1 bg-gradient-to-r from-secondary to-primary my-6 mx-auto lg:mx-0 rounded-full"></div>

          <p class="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            Bij renovatie, herinrichting of volledige afbraak begint alles met professioneel sloopwerk. Onze diensten voor sloopwerkzaamheden en verwijderingen zijn ontworpen om gebouwen, constructies en materialen veilig, gecontroleerd en efficiënt te verwijderen.
          </p>
          <p class="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            Wij zorgen ervoor dat elk project correct wordt voorbereid voor de volgende fase, of dat nu renovatie, nieuwbouw of terreinontwikkeling is.
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
          Professionele sloopdiensten voor een schone start
        </h2>
        <p class="text-lg text-gray-700 mb-10 leading-relaxed">
          Demolition requires more than just demolishing a structure. It requires careful planning, safe working practices, and respect for the environment. Our team performs both selective and complete demolition work for residential, commercial, and industrial projects.
        </p>
        <ul class="grid md:grid-cols-2 gap-6 text-lg">
          <li class="flex items-center gap-3 text-gray-700"><span class="text-secondary font-bold text-xl">✔</span> Selectieve sloop van gebouwen en constructies</li>
          <li class="flex items-center gap-3 text-gray-700"><span class="text-secondary font-bold text-xl">✔</span> Verwijderen van binnenstructuren zoals muren, vloeren en plafonds</li>
          <li class="flex items-center gap-3 text-gray-700"><span class="text-secondary font-bold text-xl">✔</span> Afbraak van garages, bijgebouwen en industriële installaties</li>
          <li class="flex items-center gap-3 text-gray-700"><span class="text-secondary font-bold text-xl">✔</span> Verwijderen van oude installaties en technische systemen</li>
          <li class="flex items-center gap-3 text-gray-700"><span class="text-secondary font-bold text-xl">✔</span> Ontmanteling van commerciële en industriële ruimtes</li>
          <li class="flex items-center gap-3 text-gray-700"><span class="text-secondary font-bold text-xl">✔</span> Opruimen en afvoeren van sloopafval</li>
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
                <img src="../assets/demolari/demolari-3.jpeg" loading="lazy" alt="" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>
            </div>
            <!-- image - end -->


            <!-- image - start -->
            <div
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="../assets/demolari/demolari-4.jpeg" loading="lazy" alt="" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>
            </div>
            <!-- image - end -->


            <!-- image - start -->
            <div
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="../assets/demolari/demolari-5.jpeg" loading="lazy" alt="" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>
            </div>
            <!-- image - end -->

            <!-- image - start -->
            <div
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <img src="../assets/demolari/demolari-2.jpg" loading="lazy" alt="" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>
            </div>
            <!-- image - end -->

            <!-- image - start -->
            <div
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="../assets/demolari/demolari-7.jpeg" loading="lazy" alt="" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>
            </div>
            <!-- image - end -->


            <!-- image - start -->
            <div
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="../assets/demolari/demolari-6.jpeg" loading="lazy" alt="" class="absolute inset-0 h-full w-full object-cover object-top transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>
            </div>
            <!-- image - end -->

            <!-- image - start -->
            <div
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="../assets/demolari/demolari-13.jpeg" loading="lazy" alt="" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>
            </div>
            <!-- image - end -->

            <!-- image - start -->
            <div
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="../assets/demolari/demolari-12.jpeg" loading="lazy" alt="" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

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
          Veiligheid en regelgeving staan voorop
        </h2>

        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-white p-8 rounded-xl shadow-md transition duration-300 border-l-4 border-secondary">
            <p class="text-lg font-semibold text-gray-800 flex items-start gap-3">
              <span class="text-secondary text-2xl mt-1">✔</span>
              <span>veilige werkmethodes</span>
            </p>
          </div>
          <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 border-l-4 border-secondary">
            <p class="text-lg font-semibold text-gray-800 flex items-start gap-3">
              <span class="text-secondary text-2xl mt-1">✔</span>
              <span>correcte afvalverwerking</span>
            </p>
          </div>
          <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 border-l-4 border-secondary">
            <p class="text-lg font-semibold text-gray-800 flex items-start gap-3">
              <span class="text-secondary text-2xl mt-1">✔</span>
              <span>bescherming van omliggende gebouwen</span>
            </p>
          </div>
          <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 border-l-4 border-secondary">
            <p class="text-lg font-semibold text-gray-800 flex items-start gap-3">
              <span class="text-secondary text-2xl mt-1">✔</span>
              <span>minimale impact op de omgeving</span>
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
import heroImage from '../assets/demolari/demolari-1.jpg'
</script>
