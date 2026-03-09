<template>
  <div class="bg-white text-gray-800">

    <section class="relative w-full overflow-hidden">
      <div class="flex flex-col-reverse md:flex-row items-center justify-end md:justify-between mx-auto h-screen">

        <!-- Left -->
        <div class="flex flex-col justify-center text-center lg:text-left px-6 sm:px-8 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20 lg:w-1/2">

          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Professioneel <span class="text-secondary">tuinonderhoud</span> en tuinaanleg in Antwerpen.
          </h1>

          <div class="w-20 h-1 bg-gradient-to-r from-secondary to-primary my-6 mx-auto lg:mx-0 rounded-full"></div>

          <p class="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            Een verzorgde tuin verhoogt niet alleen de waarde van je woning, maar zorgt ook voor rust en comfort. Wij helpen particulieren en bedrijven met professioneel tu, tuinaa en tu.
          </p>
          <p class="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            Van kleine onderhoudswerken tot volledige tuinprojecten: ons team zorgt voor een resultaat dat perfect aansluit bij jouw wensen.
          </p>

          <div class="flex justify-center lg:justify-start">
            <a href="#contact"
              class="uppercase bg-secondary hover:bg-primary text-white px-8 py-4 rounded-sm font-semibold transition duration-300">
              Vraag vandaag nog een gra
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
          Onze Diensten
        </h2>
        <p class="text-lg text-gray-700 mb-10 leading-relaxed">
          Een mooie tuin vraagt regelmatig onderhoud. Wij nemen dit wekelijks, maandelijks of per seizoen voor onze rekening. Van het snoeien van bomen en struiken tot het bemesten van de grond en het verwijderen van onkruid: wij zorgen ervoor dat jouw tuin er altijd op zijn best uitziet.
        </p>
        <ul class="grid md:grid-cols-2 gap-6 text-lg">
          <li class="flex items-center gap-3 text-gray-700"><span class="text-secondary font-bold text-xl">✔</span> Gras maaien en gazonverzorging</li>
          <li class="flex items-center gap-3 text-gray-700"><span class="text-secondary font-bold text-xl">✔</span> Snoeien van hagen, struiken en bomen</li>
          <li class="flex items-center gap-3 text-gray-700"><span class="text-secondary font-bold text-xl">✔</span> Onkruid verwijderen</li>
          <li class="flex items-center gap-3 text-gray-700"><span class="text-secondary font-bold text-xl">✔</span> Seizoensonderhoud van tuinen</li>
          <li class="flex items-center gap-3 text-gray-700"><span class="text-secondary font-bold text-xl">✔</span> Algemene tuinverzorging</li>
        </ul>

        <p class="text-lg text-gray-700 mt-10 leading-relaxed">
            Wij bieden zowel eenmalig onderhoud als periodieke onderhoudscontracten. Zo kun je zelf kiezen hoe vaak je wilt dat wij jouw tuin verzorgen.
        </p>
      </div>
    </section>

    <!-- PROJECT GALLERY -->
    <section class="py-16 md:py-24 bg-white">
      <div class="mx-auto max-w-screen-2xl px-6 sm:px-8 md:px-12 lg:px-16">
        <div class="mb-8 md:mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Professioneel tuinonderhoud en tuinaanleg in Belgie</h2>
            <div class="w-16 h-1 bg-gradient-to-r from-secondary to-primary rounded-full"></div>
        </div>

        <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">

            <!-- image - start -->
            <div
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="../assets/garden-lights/garden-lights-1.jpeg" loading="lazy" alt="" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>
            </div>
            <!-- image - end -->


            <!-- image - start -->
            <div
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="../assets/garden-lights/garden-lights-3.jpeg" loading="lazy" alt="" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>
            </div>
            <!-- image - end -->

            <!-- image - start -->
            <div
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="../assets/garden-lights/garden-lights-2.jpeg" loading="lazy" alt="" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>
            </div>
            <!-- image - end -->

            <!-- image - start -->
            <div
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="../assets/garden-lights/garden-lights-2.jpeg" loading="lazy" alt="" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>
            </div>
            <!-- image - end -->


            <!-- image - start -->
            <div
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="../assets/garden-lights/garden-lights-5.jpeg" loading="lazy" alt="" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>
            </div>
            <!-- image - end -->


            <!-- image - start -->
            <div
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="../assets/garden-lights/garden-lights-6.jpeg" loading="lazy" alt="" class="absolute inset-0 h-full w-full object-cover object-top transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>
            </div>
            <!-- image - end -->
        </div>
    </div>
<!-- Naast onderhoud bieden wij ook volledige tuinaanleg aan. Of je nu een kleine stadstuin hebt of een grote buitenruimte, wij ontwerpen en realiseren tuinen die perfect aansluiten bij jouw wensen en de stijl van je woning. Van het aanleggen van gazon en borders tot het plaatsen van terrassen, paden en tuinverlichting: wij zorgen voor een tuin waar je jarenlang van kunt genieten. -->
    </section>

    <!-- WHY CHOOSE US -->
    <section class="bg-gray-50 mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-16 md:py-24">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
          Tuinaanleg en tuinonderhoud in Antwerpen: waarom kiezen voor ons?
        </h2>

        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-white p-8 rounded-xl shadow-md transition duration-300 border-l-4 border-secondary">
            <p class="text-lg font-semibold text-gray-800 flex items-start gap-3">
              <span class="text-secondary text-2xl mt-1">✔</span>
              <span>Aanleg van gazons (rollen of zaaien)</span>
            </p>
          </div>
          <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 border-l-4 border-secondary">
            <p class="text-lg font-semibold text-gray-800 flex items-start gap-3">
              <span class="text-secondary text-2xl mt-1">✔</span>
              <span>Terrassen en tuinpaden</span>
            </p>
          </div>
          <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 border-l-4 border-secondary">
            <p class="text-lg font-semibold text-gray-800 flex items-start gap-3">
              <span class="text-secondary text-2xl mt-1">✔</span>
              <span>Beplanting van bloemen, struiken en bomen</span>
            </p>
          </div>
          <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 border-l-4 border-secondary">
            <p class="text-lg font-semibold text-gray-800 flex items-start gap-3">
              <span class="text-secondary text-2xl mt-1">✔</span>
              <span>Plaatsen van hagen en afsluitingen</span>
            </p>
          </div>
          <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 border-l-4 border-secondary">
            <p class="text-lg font-semibold text-gray-800 flex items-start gap-3">
              <span class="text-secondary text-2xl mt-1">✔</span>
              <span>Tuinverlichting</span>
            </p>
          </div>
          <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 border-l-4 border-secondary">
            <p class="text-lg font-semibold text-gray-800 flex items-start gap-3">
              <span class="text-secondary text-2xl mt-1">✔</span>
              <span>Tuinrenovaties</span>
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
import heroImage from '../assets/garden-lights/garden-lights-2.jpeg'
</script>
