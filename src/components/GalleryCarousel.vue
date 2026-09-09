<script setup>
import { ref, computed } from 'vue'

// Carga dinámica de todas las imágenes en src/assets/images (jpg, jpeg, png).
// Vite resuelve esto en build time; basta con dejar imágenes en esa carpeta.
const modules = import.meta.glob('@/assets/images/*.{jpg,jpeg,png}', {
  eager: true,
  import: 'default',
})

const images = computed(() =>
  Object.entries(modules)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([path, url]) => ({
      url,
      alt: path.split('/').pop().replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' '),
    }))
)

const activeIndex = ref(0)
const total = computed(() => images.value.length)

function next() {
  if (total.value === 0) return
  activeIndex.value = activeIndex.value === total.value - 1 ? 0 : activeIndex.value + 1
}

function prev() {
  if (total.value === 0) return
  activeIndex.value = activeIndex.value === 0 ? total.value - 1 : activeIndex.value - 1
}

function goTo(index) {
  activeIndex.value = index
}
</script>

<template>
  <section id="galeria" class="py-20 sm:py-24">
    <div class="max-w-6xl mx-auto px-5 sm:px-8">
      <div class="flex items-end justify-between flex-wrap gap-4">
        <div class="max-w-xl">
          <h2 class="font-display font-extrabold text-3xl sm:text-4xl text-canopy-950">
            Trabajos terminados
          </h2>
          <p class="mt-4 text-ink/70">
            Un recorrido por los terrenos que hemos limpiado, sembrado y mantenido.
          </p>
        </div>

        <div v-if="total > 1" class="flex items-center gap-3">
          <button
            type="button"
            aria-label="Imagen anterior"
            class="w-11 h-11 rounded-full border border-sand-200 flex items-center justify-center text-canopy-900 hover:bg-sand-100 transition-colors"
            @click="prev"
          >
            <svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Imagen siguiente"
            class="w-11 h-11 rounded-full border border-sand-200 flex items-center justify-center text-canopy-900 hover:bg-sand-100 transition-colors"
            @click="next"
          >
            <svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div v-if="total > 0" class="mt-10">
        <div class="relative rounded-2xl overflow-hidden border border-sand-200 bg-sand-100 aspect-[16/10] sm:aspect-[16/8]">
          <img
            v-for="(image, index) in images"
            :key="image.url"
            :src="image.url"
            :alt="image.alt"
            class="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
            :class="index === activeIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'"
          />
        </div>

        <div class="mt-5 flex items-center justify-center gap-2">
          <button
            v-for="(image, index) in images"
            :key="image.url + '-dot'"
            type="button"
            :aria-label="`Ir a la imagen ${index + 1}`"
            class="h-2.5 rounded-full transition-all"
            :class="index === activeIndex ? 'w-7 bg-canopy-800' : 'w-2.5 bg-sand-200 hover:bg-moss-400'"
            @click="goTo(index)"
          />
        </div>
      </div>

      <p v-else class="mt-10 text-sm text-ink/50">
        Agrega fotos a <code class="bg-sand-100 px-1.5 py-0.5 rounded">src/assets/images</code>
        para que aparezcan aquí automáticamente.
      </p>
    </div>
  </section>
</template>
