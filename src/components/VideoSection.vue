<script setup>
import { computed } from 'vue'

// Carga dinámica de todos los videos en src/assets/videos.
// Nota: en Vite 5 la opción `as: 'url'` fue reemplazada por `query: '?url', import: 'default'`.
// El resultado es el mismo: un mapa de ruta -> URL final del archivo.
const modules = import.meta.glob('@/assets/videos/*.mp4', {
  eager: true,
  query: '?url',
  import: 'default',
})

const videos = computed(() =>
  Object.entries(modules)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([path, url]) => ({
      url,
      title: path
        .split('/')
        .pop()
        .replace(/\.[^/.]+$/, '')
        .replace(/[-_]/g, ' '),
    }))
)
</script>

<template>
  <section id="videos" class="bg-canopy-950 py-20 sm:py-24">
    <div class="max-w-6xl mx-auto px-5 sm:px-8">
      <div class="max-w-xl">
        <h2 class="font-display font-extrabold text-3xl sm:text-4xl text-sand-50">
          Nuestro trabajo en acción
        </h2>
        <p class="mt-4 text-sand-100/70">
          Videos reales de chapea y mantenimiento, tomados directamente en campo.
        </p>
      </div>

      <div v-if="videos.length > 0" class="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="video in videos"
          :key="video.url"
          class="rounded-xl overflow-hidden border border-canopy-800 bg-canopy-900"
        >
          <video :src="video.url" controls preload="metadata" class="w-full h-56 object-cover bg-black">
            Tu navegador no puede reproducir este video.
          </video>
          <p class="px-4 py-3 text-sm text-sand-100/80 capitalize">{{ video.title }}</p>
        </div>
      </div>

      <p v-else class="mt-12 text-sm text-sand-100/50">
        Agrega archivos .mp4 a <code class="bg-canopy-900 px-1.5 py-0.5 rounded">src/assets/videos</code>
        para que aparezcan aquí automáticamente.
      </p>
    </div>
  </section>
</template>
