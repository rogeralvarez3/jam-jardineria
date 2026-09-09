<script setup>
import NavBar from '@/components/NavBar.vue'
import HeroSection from '@/components/HeroSection.vue'
import ServicesSection from '@/components/ServicesSection.vue'
import GalleryCarousel from '@/components/GalleryCarousel.vue'
import VideoSection from '@/components/VideoSection.vue'
import ContactForm from '@/components/ContactForm.vue'
import FooterSection from '@/components/FooterSection.vue'
</script>

<template>
  <div class="min-h-screen bg-sand-50">
    <NavBar />
    <main>
      <HeroSection />
      <ServicesSection />
      <GalleryCarousel />
      <VideoSection />
      <ContactForm />
    </main>
    <FooterSection />
  </div>
</template>
