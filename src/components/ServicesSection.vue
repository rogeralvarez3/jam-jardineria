<script setup>
const services = [
  {
    title: 'Chapea de lotes baldíos',
    description:
      'Eliminamos maleza alta y crecida en terrenos baldíos con cortadora de césped tipo guadaña, dejando el lote limpio y accesible.',
    icon: 'scythe',
  },
  {
    title: 'Mantenimiento de áreas verdes',
    description:
      'Corte, borde y limpieza periódica para que el zacate y las zonas verdes se mantengan parejos durante todo el año.',
    icon: 'lawn',
  },
  {
    title: 'Siembra de zacate',
    description:
      'Instalación de zacate para casas, condominios y residenciales, desde la preparación del suelo hasta el resultado final.',
    icon: 'sprout',
  },
  {
    title: 'Decoración de jardín',
    description:
      'Diseño y mantenimiento de jardines con plantas ornamentales, bordes de piedra y senderos que le dan carácter a tu espacio.',
    icon: 'leaf',
  },
]
</script>

<template>
  <section id="servicios" class="bg-sand-100 py-20 sm:py-24">
    <div class="max-w-6xl mx-auto px-5 sm:px-8">
      <div class="max-w-xl">
        <h2 class="font-display font-extrabold text-3xl sm:text-4xl text-canopy-950">
          Nuestros servicios
        </h2>
        <p class="mt-4 text-ink/70">
          Trabajos de pequeña y gran escala, con cotizaciones ajustadas al área y a las
          condiciones reales de cada terreno.
        </p>
      </div>

      <div class="mt-12 grid sm:grid-cols-2 gap-6">
        <div
          v-for="service in services"
          :key="service.title"
          class="bg-sand-50 border border-sand-200 rounded-2xl p-7"
        >
          <div class="w-11 h-11 rounded-full bg-canopy-800 text-sand-50 flex items-center justify-center">
            <svg
              v-if="service.icon === 'scythe'"
              viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 20l7-7M11 13a5 5 0 1 0 5-8 8 8 0 0 0-5 8Z" />
            </svg>
            <svg
              v-else-if="service.icon === 'lawn'"
              viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 20c1-4 1-8 0-12M9 20c1-5 1-10 0-16M14 20c1-4 1-8 0-12M19 20c1-5 1-10 0-16" />
            </svg>
            <svg
              v-else-if="service.icon === 'sprout'"
              viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 21V10m0 0c0-3.5-2.5-6-6-6 0 3.5 2.5 6 6 6Zm0 0c0-3.5 2.5-6 6-6 0 3.5-2.5 6-6 6Z" />
            </svg>
            <svg
              v-else
              viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M20 4c-9 0-16 5-16 14 9 0 16-5 16-14ZM10 18c1-4 4-7 8-9" />
            </svg>
          </div>
          <h3 class="mt-5 font-display font-bold text-lg text-canopy-950">
            {{ service.title }}
          </h3>
          <p class="mt-2 text-sm text-ink/65 leading-relaxed">
            {{ service.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
