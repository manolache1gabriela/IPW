<template>
    <section class="py-20 px-4 md:px-12 lg:px-24 w-full">
        <div class="max-w-4xl mx-auto">
            <div
                class="bg-white rounded-none shadow-sm p-12 md:p-16 text-center"
            >
                <!-- Error Number -->
                <div class="mb-8">
                    <h1 class="text-4xl md:text-6xl font-bold text-black mb-4">
                        Pagina niet gevonden
                    </h1>
                    <div class="w-24 h-1 bg-black mx-auto mb-6"></div>
                </div>

                <!-- Error Message -->
                <div class="mb-12">
                    <img
                        src="@/assets/404-error-illustration.webp"
                        alt="404 error illustration"
                        class="w-full max-w-md mx-auto"
                    />
                    <p
                        class="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8"
                    >
                        Sorry, de pagina die je zoekt bestaat niet. Controleer
                        de URL van de startpagina.
                    </p>
                </div>

                <!-- Action Buttons -->
                <div
                    class="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <router-link
                        to="/"
                        class="px-8 py-4 bg-black text-white text-lg font-medium hover:bg-gray-800 transition-colors whitespace-nowrap w-full sm:w-auto"
                    >
                        Startpagina
                    </router-link>
                </div>

                <!-- Additional Help -->
                <div class="mt-12 pt-8 border-t border-gray-200">
                    <p class="text-gray-500 text-sm mb-4">
                        Need immediate assistance?
                    </p>
                    <div
                        class="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm"
                    >
                        <router-link
                            to="/#contact"
                            class="text-black hover:text-gray-700 transition-colors"
                            >Contact</router-link
                        >
                        <span class="text-gray-300 hidden sm:inline">•</span>
                        <router-link
                            to="/diensten"
                            class="text-black hover:text-gray-700 transition-colors"
                            >Diensten</router-link
                        >
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
