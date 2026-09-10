<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
const whatsappLink = 'https://wa.me/50672110267'

const links = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#galeria', label: 'Trabajos' },
  { href: '#videos', label: 'En acción' },
  { href: '#contacto', label: 'Contacto' },
]

function closeMenu() {
  isOpen.value = false
}
</script>

<template>
  <header class="fixed top-0 inset-x-0 z-50 bg-sand-50/90 backdrop-blur border-b border-sand-200">
    <div class="max-w-6xl mx-auto px-5 sm:px-8">
      <div class="h-16 flex items-center justify-between">
        <a href="#inicio" class="flex items-baseline gap-1 font-display font-extrabold text-canopy-900" @click="closeMenu">
          <v-img src="/assets/logo.jpg" alt="Logo JAM Jardinería" class="w-10 h-10" />
          <span class="text-xl font-extrabold tracking-tight">JAM</span>
          <span class="text-sm font-medium text-canopy-700">Jardinería</span>
        </a>

        <nav class="hidden md:flex items-center gap-8">
          <a
            v-for="link in links"
            :key="link.href"
            :href="link.href"
            class="text-sm font-medium text-ink/80 hover:text-canopy-800 transition-colors"
          >
            {{ link.label }}
          </a>
        </nav>

        <div class="hidden md:block">
          <a
            :href="whatsappLink"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center gap-2 bg-canopy-700 hover:bg-canopy-800 text-sand-50 text-sm font-semibold px-4 py-2 rounded-full transition-colors"
          >
            <svg viewBox="0 0 24 24" class="w-4 h-4 fill-current" aria-hidden="true">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.34 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.13c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.12.11-1.81-.11-.42-.13-.95-.31-1.65-.6-2.9-1.25-4.79-4.17-4.94-4.36-.14-.19-1.18-1.57-1.18-3 0-1.43.75-2.13 1.02-2.42.26-.29.57-.36.76-.36.19 0 .38 0 .55.01.18.01.41-.07.64.49.24.58.81 2 .88 2.15.07.15.11.32.02.51-.09.19-.14.31-.27.48-.14.17-.29.37-.41.5-.14.14-.28.29-.12.57.16.29.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.22 1.37.28.14.44.12.6-.07.16-.19.68-.79.87-1.06.18-.27.36-.22.61-.13.24.09 1.55.73 1.82.86.27.14.45.2.51.31.07.12.07.66-.17 1.33Z"/>
            </svg>
            WhatsApp
          </a>
        </div>

        <button
          class="md:hidden p-2 text-canopy-900"
          aria-label="Abrir menú"
          @click="isOpen = !isOpen"
        >
          <svg v-if="!isOpen" viewBox="0 0 24 24" class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 7h16M4 12h16M4 17h16" />
          </svg>
          <svg v-else viewBox="0 0 24 24" class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <div v-if="isOpen" class="md:hidden border-t border-sand-200 bg-sand-50">
      <nav class="px-5 py-4 flex flex-col gap-3">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="text-base font-medium text-ink/80"
          @click="closeMenu"
        >
          {{ link.label }}
        </a>
        <a
          :href="whatsappLink"
          target="_blank"
          rel="noopener"
          class="inline-flex justify-center items-center gap-2 bg-canopy-700 text-sand-50 text-sm font-semibold px-4 py-2.5 rounded-full mt-1"
          @click="closeMenu"
        >
          Escribir por WhatsApp
        </a>
      </nav>
    </div>
  </header>
</template>
