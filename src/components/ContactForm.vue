<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  nombre: '',
  telefono: '',
  mensaje: '',
})

const status = ref('idle') // idle | sent

function handleSubmit() {
  const destinatario = 'atencion@jamjardineria.com'
  const asunto = `Solicitud de cotización — ${form.nombre || 'Nuevo contacto'}`
  const cuerpo = [
    `Nombre: ${form.nombre}`,
    `Teléfono: ${form.telefono}`,
    '',
    'Mensaje:',
    form.mensaje,
  ].join('\n')

  const mailtoUrl = `mailto:${destinatario}?subject=${encodeURIComponent(
    asunto
  )}&body=${encodeURIComponent(cuerpo)}`

  window.location.href = mailtoUrl
  status.value = 'sent'
}
</script>

<template>
  <section id="contacto" class="py-20 sm:py-24">
    <div class="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12">
      <div>
        <h2 class="font-display font-extrabold text-3xl sm:text-4xl text-canopy-950">
          Pide tu cotización
        </h2>
        <p class="mt-4 text-ink/70 max-w-md">
          Contanos el tamaño y las condiciones de tu terreno o jardín, y te respondemos con
          una cotización ajustada al trabajo.
        </p>

        <ul class="mt-8 space-y-4 text-sm text-ink/70">
          <li class="flex items-center gap-3">
            <span class="w-9 h-9 rounded-full bg-moss-200 text-canopy-800 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
              </svg>
            </span>
            Bismar Álvarez · 7211-0267 / 8309-4039
          </li>
          <li class="flex items-center gap-3">
            <span class="w-9 h-9 rounded-full bg-moss-200 text-canopy-800 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 4h16v16H4V4Zm0 0 8 8 8-8" />
              </svg>
            </span>
            atencion@jamjardineria.com
          </li>
        </ul>
      </div>

      <form
        class="bg-sand-100 border border-sand-200 rounded-2xl p-7 sm:p-8"
        @submit.prevent="handleSubmit"
      >
        <div class="space-y-5">
          <div>
            <label for="nombre" class="block text-sm font-medium text-ink/80 mb-1.5">Nombre</label>
            <input
              id="nombre"
              v-model="form.nombre"
              type="text"
              required
              placeholder="Tu nombre completo"
              class="w-full rounded-lg border border-sand-200 bg-sand-50 px-4 py-3 text-sm placeholder:text-ink/40"
            />
          </div>

          <div>
            <label for="telefono" class="block text-sm font-medium text-ink/80 mb-1.5">Teléfono</label>
            <input
              id="telefono"
              v-model="form.telefono"
              type="tel"
              required
              placeholder="8888-8888"
              class="w-full rounded-lg border border-sand-200 bg-sand-50 px-4 py-3 text-sm placeholder:text-ink/40"
            />
          </div>

          <div>
            <label for="mensaje" class="block text-sm font-medium text-ink/80 mb-1.5">Mensaje</label>
            <textarea
              id="mensaje"
              v-model="form.mensaje"
              rows="4"
              required
              placeholder="Contanos sobre tu terreno o jardín: tamaño aproximado y qué necesitas"
              class="w-full rounded-lg border border-sand-200 bg-sand-50 px-4 py-3 text-sm placeholder:text-ink/40 resize-none"
            />
          </div>

          <button
            type="submit"
            class="w-full bg-canopy-800 hover:bg-canopy-900 text-sand-50 font-semibold px-6 py-3.5 rounded-full transition-colors"
          >
            Enviar mensaje
          </button>

          <p v-if="status === 'sent'" class="text-sm text-canopy-700 text-center">
            Se abrió tu correo con el mensaje listo para enviar.
          </p>
        </div>
      </form>
    </div>
  </section>
</template>
