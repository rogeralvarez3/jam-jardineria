<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer class="bg-canopy-950 text-sand-100">
    <div class="max-w-6xl mx-auto px-5 sm:px-8 py-12 grid sm:grid-cols-3 gap-10">
      <div>
        <p class="font-display font-extrabold text-xl text-sand-50">JAM Jardinería</p>
        <p class="mt-3 text-sm text-sand-100/60 max-w-xs">
          Limpieza de terrenos, instalación de zacate y mantenimiento de áreas verdes en
          Costa Rica.
        </p>
      </div>

      <div>
        <p class="text-sm font-semibold text-sand-50 mb-3">Contacto</p>
        <ul class="space-y-2 text-sm text-sand-100/70">
          <li>Bismar Álvarez</li>
          <li>
            <a href="tel:+50672110267" class="hover:text-sand-50 transition-colors">+506 7211-0267</a>
          </li>
          <li>
            <a href="tel:+50683094039" class="hover:text-sand-50 transition-colors">+506 8309-4039</a>
          </li>
          <li>
            <a href="mailto:atencion@jamjardineria.com" class="hover:text-sand-50 transition-colors">
              atencion@jamjardineria.com
            </a>
          </li>
        </ul>
      </div>

      <div>
        <p class="text-sm font-semibold text-sand-50 mb-3">Escríbenos</p>
        <a
          href="https://wa.me/50672110267"
          target="_blank"
          rel="noopener"
          class="inline-flex items-center gap-2 bg-canopy-700 hover:bg-canopy-600 text-sand-50 text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
        >
          Chatear por WhatsApp
        </a>
      </div>
    </div>

    <div class="border-t border-canopy-800">
      <p class="max-w-6xl mx-auto px-5 sm:px-8 py-5 text-xs text-sand-100/50">
        © {{ year }} JAM Jardinería. Todos los derechos reservados.
      </p>
    </div>
  </footer>
</template>
