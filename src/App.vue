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
<style>
body {
  cursor: none;
}

/* Estilo para la imagen del cursor flotante */
#custom-cursor {
  position: fixed;
  top: 0;
  left: 0;
  width: 48px;
  /* Ajusta el tamaño de tu GIF */
  height: 48px;
  pointer-events: none;
  /* Vital para que no bloquee los clics en los botones */
  transform: translate(-50%, -50%);
  /* Centra la punta del cursor justo en la flecha */
  z-index: 9999;
  /* Asegura que siempre esté por encima de todo */
}
</style>