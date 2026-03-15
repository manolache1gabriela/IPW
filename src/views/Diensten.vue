<!-- <style scoped>
.scroll-container {
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
}

.scroll-section {
  height: 100vh;
  scroll-snap-align: start;
}
</style> -->

<template>

    <!-- Main scroll container -->
    <div class="scroll-container h-screen overflow-y-auto md:snap-y md:snap-mandatory scroll-smooth">
        <!-- Section 1 -->
        <section class="scroll-section relative min-h-screen md:h-screen md:snap-start flex flex-col md:flex-row">
            <!-- Left content -->
            <div class="w-full md:w-1/2 min-h-[50vh] md:h-full relative overflow-hidden group shine-effect">
                <img src="../assets/tobogan/tobogan-1.jpeg"
                     alt="Tuinspeelplaatsen en sierhekken op maat in Antwerpen"
                     class="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1" />
                <div class="absolute inset-0 bg-gradient-to-r from-neutral-950/70 to-neutral-950/50 transition-opacity duration-500 group-hover:opacity-0"></div>
            </div>
            <!-- Right content -->
            <div class="w-full md:w-1/2 min-h-[50vh] md:h-full flex items-center justify-center p-8">
                <div class="max-w-lg float-animation">
                    <span class="text-neutral-400 tracking-wider text-sm font-mono">01 / Veilige en duurzame speelzones voor elke tuin</span>
                    <h2 class="mt-4 text-4xl md:text-5xl font-bold leading-none bg-gradient-to-r from-gray-900 to-secondary bg-clip-text text-transparent">Speelplaatsen</h2>
                    <p class="mt-6 text-neutral-400 text-lg leading-relaxed">Transformeer uw achtertuin in een magisch speelparadijs waar kinderen sorgeloos kunnen genieten. Veilige, duurzame en creatieve speeltoestellen die jaren plezier bieden.</p>
                    <RouterLink
                        to="/garden-playgrounds-antwerp" class="inline-block mt-8 px-6 py-3 bg-secondary rounded-sm text-sm font-medium transition-all duration-300 hover:bg-primary text-white">
                        Ontdek meer →
                    </RouterLink>
                </div>
            </div>
        </section>

        <!-- Section 2 -->
        <section class="scroll-section relative min-h-screen md:h-screen md:snap-start flex flex-col-reverse md:flex-row">
            <!-- Right content -->
            <div class="w-full md:w-1/2 min-h-[50vh] md:h-full flex items-center justify-center p-8">
                <div class="max-w-lg float-animation">
                    <span class="text-neutral-400 tracking-wider text-sm font-mono">02 / Professionele aanleg en onderhoud van uw tuin</span>
                    <h2 class="mt-4 text-4xl md:text-5xl font-bold leading-none bg-gradient-to-r from-gray-900 to-secondary bg-clip-text text-transparent">Tuinonderhoud en tuinaanleg</h2>
                    <p class="mt-6 text-neutral-400 text-lg leading-relaxed">Wij zorgen voor een verzorgde en functionele tuin, het hele jaar door. Van het reinigen en opruimen van tuinen tot volledige tuinaanleg op maat.
                    Wij plaatsen gazon, leggen nieuwe beplanting aan en installeren professionele tuinverlichting voor extra sfeer en veiligheid.</p>
                    <RouterLink
                        to="/garden-landscaping-antwerp" class="inline-block mt-8 px-6 py-3 bg-secondary rounded-sm text-sm font-medium transition-all duration-300 hover:bg-primary text-white">
                        Ontdek meer →
                    </RouterLink>
                </div>
            </div>
            <!-- Left content -->
            <div class="w-full md:w-1/2 min-h-[50vh] md:h-full relative overflow-hidden group shine-effect">
                <img src="../assets/garden-lights/garden-lights-1.jpeg"
                     alt="Tuinonderhoud en tuinaanleg"
                     class="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1" />
                <div class="absolute inset-0 bg-gradient-to-l from-neutral-950/70 to-neutral-950/50 transition-opacity duration-500 group-hover:opacity-0"></div>
            </div>
        </section>


        <!-- Section 3 -->
        <section class="scroll-section relative min-h-screen md:h-screen md:snap-start flex flex-col md:flex-row">
            <!-- Left content -->
            <div class="w-full md:w-1/2 min-h-[50vh] md:h-full relative overflow-hidden group shine-effect">
                <img src="../assets/garden-fence/garden-fence-1.jpeg"
                     alt="Tuinafsluitingen en sierhekken"
                     class="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1" />
                <div class="absolute inset-0 bg-gradient-to-r from-neutral-950/70 to-neutral-950/50 transition-opacity duration-500 group-hover:opacity-0"></div>
            </div>
            <!-- Right content -->
            <div class="w-full md:w-1/2 min-h-[50vh] md:h-full flex items-center justify-center p-8">
                <div class="max-w-lg float-animation">
                    <span class="text-neutral-400 tracking-wider text-sm font-mono">03 / Sterke en stijlvolle afsluitingen voor uw eigendom</span>
                    <h2 class="mt-4 text-4xl md:text-5xl font-bold leading-none bg-gradient-to-r from-gray-900 to-secondary bg-clip-text text-transparent">Tuinafsluitingen</h2>
                    <p class="mt-6 text-neutral-400 text-lg leading-relaxed">Sterke, elegante afsluitingen die uw tuin beschermen en fraaier maken. Van moderne tot klassieke stijlen, wij bieden duurzame oplossingen die jarenlang meegaan.</p>
                    <RouterLink
                        to="/garden-fencing-antwerp" class="inline-block mt-8 px-6 py-3 bg-secondary rounded-sm text-sm font-medium transition-all duration-300 hover:bg-primary text-white">
                        Ontdek meer →
                    </RouterLink>
                </div>
            </div>
        </section>

        <!-- Section 4 -->
        <section class="scroll-section relative min-h-screen md:h-screen md:snap-start flex flex-col-reverse md:flex-row">
            <!-- Right content -->
            <div class="w-full md:w-1/2 min-h-[50vh] md:h-full flex items-center justify-center p-8">
                <div class="max-w-lg float-animation">
                    <span class="text-neutral-400 tracking-wider text-sm font-mono">04 / Snel en veilig slopen en verwijderen</span>
                    <h2 class="mt-4 text-4xl md:text-5xl font-bold leading-none bg-gradient-to-r from-gray-900 to-secondary bg-clip-text text-transparent">Sloop en opruimwerken</h2>
                    <p class="mt-6 text-neutral-400 text-lg leading-relaxed">Wij voeren kleine en middelgrote sloopwerken professioneel en veilig uit. Van het afbreken van oude terrassen, tuinhuizen en betonconstructies tot het volledig verwijderen van verhardingen en tuinelementen.</p>
                    <RouterLink
                        to="/sloopwerk-antwerp" class="inline-block mt-8 px-6 py-3 bg-secondary rounded-sm text-sm font-medium transition-all duration-300 hover:bg-primary text-white">
                        Ontdek meer →
                    </RouterLink>
                </div>
            </div>
            <!-- Left content -->
            <div class="w-full md:w-1/2 min-h-[50vh] md:h-full relative overflow-hidden group shine-effect">
                <img src="../assets/excavator/excavator-1.png"
                     alt="Sloopwerkzaamheden, verwijderingen"
                     class="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1" />
                <div class="absolute inset-0 bg-gradient-to-l from-neutral-950/70 to-neutral-950/50 transition-opacity duration-500 group-hover:opacity-0"></div>
            </div>
        </section>
    </div>

    <Contact/>
</template>

<script setup>
import Contact from '@/components/Contact.vue'
</script>
