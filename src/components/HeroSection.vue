<script setup>
import heroImage from '@/assets/images/hero-antes-despues.jpg'
</script>

<template>
  <section id="inicio" class="relative pt-16">
    <div class="max-w-6xl mx-auto px-5 sm:px-8 py-14 sm:py-20 grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <p class="text-canopy-700 font-semibold text-sm mb-4">
          Chapea, siembra de zacate y jardinería en el Valle Central
        </p>
        <h1 class="font-display font-extrabold text-4xl sm:text-5xl leading-[1.08] text-canopy-950">
          Transformamos terrenos en espacios limpios y aprovechables
        </h1>
        <p class="mt-6 text-lg text-ink/70 max-w-md">
          JAM Jardinería limpia lotes baldíos, siembra zacate y mantiene áreas verdes de
          casas, condominios y empresas en Costa Rica. Cotizamos según el área y las
          condiciones reales de tu terreno.
        </p>
        <div class="mt-8 flex flex-wrap gap-4">
          <a
            href="#galeria"
            class="inline-flex items-center justify-center bg-canopy-800 hover:bg-canopy-900 text-sand-50 font-semibold px-6 py-3.5 rounded-full transition-colors"
          >
            Ver trabajos realizados
          </a>
          <a
            href="#contacto"
            class="inline-flex items-center justify-center border border-canopy-800 text-canopy-800 hover:bg-canopy-800 hover:text-sand-50 font-semibold px-6 py-3.5 rounded-full transition-colors"
          >
            Pedir cotización
          </a>
        </div>

        <dl class="mt-12 grid grid-cols-3 gap-6 max-w-md">
          <div>
            <dt class="font-display font-extrabold text-2xl text-canopy-800">100%</dt>
            <dd class="text-sm text-ink/60">compromiso en cada servicio</dd>
          </div>
          <div>
            <dt class="font-display font-extrabold text-2xl text-canopy-800">Hogares</dt>
            <dd class="text-sm text-ink/60">y condominios</dd>
          </div>
          <div>
            <dt class="font-display font-extrabold text-2xl text-canopy-800">Cotización</dt>
            <dd class="text-sm text-ink/60">según tu terreno</dd>
          </div>
        </dl>
      </div>

      <div class="relative">
        <div class="rounded-2xl overflow-hidden shadow-soft border border-sand-200">
          <img
            :src="heroImage"
            alt="Transformación de un terreno lleno de maleza a un jardín con zacate y palmeras, antes y después del trabajo de JAM Jardinería"
            class="w-full h-full object-cover"
          />
        </div>
        <div
          class="hidden sm:block absolute -bottom-6 -left-6 bg-canopy-900 text-sand-50 rounded-xl px-5 py-4 shadow-soft max-w-[220px]"
        >
          <p class="font-display font-bold text-sm">Antes y después reales</p>
          <p class="text-xs text-sand-100/80 mt-1">
            Cada trabajo se entrega limpio, parejo y listo para disfrutar.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
