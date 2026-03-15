<template>
    <div>
        <Home />
        <Gallery />
        <ProjectPage />
        <why-us />
        <Customers />
        <Contact />
    </div>
</template>

<script setup>
import Home from '@/components/Home.vue';
import Customers from '../components/Customers.vue';
import ProjectPage from '@/components/About.vue';
import Gallery from '@/components/Gallery.vue';
import WhyUs from '@/components/WhyUs.vue';
import Contact from '@/components/Contact.vue';
</script>
