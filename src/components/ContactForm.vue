<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  nombre: '',
  telefono: '',
  mensaje: '',
})

// Clave de Web3Forms: se obtiene gratis en https://web3forms.com registrando
// atencion@jamjardineria.com como correo de destino. Se coloca en un archivo
// .env (ver .env.example) como VITE_WEB3FORMS_KEY, nunca directo en el código.
const accessKey = import.meta.env.VITE_WEB3FORMS_KEY

const status = ref('idle') // idle | sending | sent | error

async function handleSubmit() {
  if (!accessKey) {
    status.value = 'error'
    return
  }

  status.value = 'sending'

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `Solicitud de cotización — ${form.nombre || 'Nuevo contacto'}`,
        from_name: 'Formulario JAM Jardinería',
        name: form.nombre,
        telefono: form.telefono,
        mensaje: form.mensaje,
      }),
    })

    const result = await response.json()

    if (result.success) {
      status.value = 'sent'
      form.nombre = ''
      form.telefono = ''
      form.mensaje = ''
    } else {
      status.value = 'error'
    }
  } catch (error) {
    status.value = 'error'
  }
}

// Enlace de respaldo por si el visitante prefiere escribir desde su propio correo.
const mailtoFallback = 'mailto:atencion@jamjardineria.com'
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
            :disabled="status === 'sending'"
            class="w-full bg-canopy-800 hover:bg-canopy-900 disabled:opacity-60 disabled:cursor-not-allowed text-sand-50 font-semibold px-6 py-3.5 rounded-full transition-colors"
          >
            {{ status === 'sending' ? 'Enviando…' : 'Enviar mensaje' }}
          </button>

          <p v-if="status === 'sent'" class="text-sm text-canopy-700 text-center">
            Mensaje enviado. Te contactaremos pronto.
          </p>
          <p v-else-if="status === 'error'" class="text-sm text-center text-clay-700">
            No se pudo enviar el mensaje. Escríbenos directo a
            <a :href="mailtoFallback" class="underline">atencion@jamjardineria.com</a>
            o por
            <a href="https://wa.me/50672110267" target="_blank" rel="noopener" class="underline">WhatsApp</a>.
          </p>
        </div>
      </form>
    </div>
  </section>
</template>
