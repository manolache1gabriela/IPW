<template>
<div class="w-full min-h-screen md:h-[87vh] md:flex relative">
    <div class="absolute top-[-10%]" id="contact"></div>
    <div
        class="w-full md:w-1/2 bg-secondary flex flex-col justify-center gap-10 py-5 md:py-0 px-5 lg:px-24"
    >
        <h4 class="text-white text-5xl font-semibold drop-shadow">
            Contacteer Ons
        </h4>
        <div class="w-16 h-2 bg-white"></div>
        <form
            autocomplete="on"
            name="contact"
            method="post"
            data-netlify="true"
            class="lg:h-1/3 flex flex-col lg:grid grid-cols-2 grid-rows-4 gap-4 md:gap-6"
        >
            <input
                required
                type="text"
                maxlength="100"
                minlength="3"
                name="name"
                placeholder="Naam"
                class="col-span-1 w-full row-span-1 px-4 py-2"
            />
            <input
                required
                type="email"
                name="email"
                placeholder="Email"
                class="col-span-1 w-full row-span-1 px-4 py-2"
            />
            <textarea
                required
                name="message"
                id="email-body"
                maxlength="1000"
                cols="30"
                rows="10"
                placeholder="Bericht"
                class="col-span-2 w-full row-span-2 px-4 py-4"
            ></textarea>
            <div class="lg:col-span-2 flex justify-end">
                <button
                    class="inline-block whitespace-nowrap rounded-sm text-white uppercase font-semibold border-4 border-white hover:border-text text-center text-md md:text-lg py-2 px-8"
                    type="submit"
                >
                    Stuur bericht
                </button>
            </div>
        </form>
    </div>
    <div
        class="w-full md:w-1/2 bg-text flex md:flex-col justify-between items-center"
    >
        <div
            class="w-full flex flex-col md:flex-row justify-between items-center px-10 lg:px-16 m-auto gap-8"
        >
            <a
                href="https://www.facebook.com/profile.php?id=61563783506446"
                target="_blank"
            >
                <img
                    class="w-7 md:w-10"
                    src="@/assets/facebook.svg"
                    alt="facebook icon"
                />
            </a>
            <a
                href="https://www.instagram.com/ipwerken"
                target="_blank"
            >
                <img
                    class="w-7 md:w-10"
                    src="@/assets/instagram.svg"
                    alt="instagram icon"
                />
            </a>
            <a
                href="https://wa.me/32467864650?text=I'm%20interested%20in%20your%20work.%20Call%20me!"
                target="_blank"
            >
                <img
                    class="w-7 md:w-10"
                    src="@/assets/whatsapp.svg"
                    alt="whatsapp icon"
                />
            </a>
            <a
                href="https://www.facebook.com/profile.php?id=61563783506446"
                target="_blank"
            >
                <img
                    class="w-7 md:w-10"
                    src="@/assets/tiktok.svg"
                    alt="facebook icon"
                />
            </a>
        </div>
        <div
            class="logo-bg w-full flex flex-col items-start md:h-[80%] bg-white md:pt-20 px-5 py-5 lg:pl-10 xl:pl-28 gap-2 xl:relative md:gap-8"
        >
            <div class="flex items-center justify-start gap-6">
                <img
                    class="w-6"
                    src="@/assets/location.svg"
                    alt="location icon"
                />
                <a
                    href="https://maps.app.goo.gl/HUGGdNKN6ofzAhTd9"
                    target="_blank"
                    class="hover:text-secondary"
                    >Hofstraat 17 Dessel</a
                >
            </div>
            <div class="flex items-center justify-start gap-6">
                <img
                    class="w-6"
                    src="@/assets/phone.svg"
                    alt="phone icon"
                />
                <a
                    href="tel:+32 467 86 46 50"
                    class="hover:text-secondary"
                    >+32 467 86 46 50</a
                >
            </div>
            <div class="flex items-center justify-start gap-6">
                <img
                    class="w-8"
                    src="@/assets/mail.svg"
                    alt="mail icon"
                />
                <a
                    href="mailto:info@ipwerken.be"
                    class="hover:text-secondary"
                    >info@ipwerken.be</a
                >
            </div>
            <div
                class="w-48 lg:hidden xl:w-1/2 h-48 xl:h-full bg-logo-image md:mt-10 lg:mt-0 bg-contain bg-no-repeat xl:absolute self-center xl:self-end bg-right"
            ></div>
        </div>
    </div>
</div>
</template>
