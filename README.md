# JAM Jardinería — Landing Page

Landing page (SPA) en **Vue 3 (Composition API) + Vite + Tailwind CSS**, sin TypeScript.

## Instalación

```bash
npm install
npm run dev
```

Abre `http://localhost:5173`.

## Build de producción

```bash
npm run build
npm run preview
```

## Estructura

```
src/
  assets/
    images/     ← fotos para la galería (antes/después, trabajos terminados)
    videos/     ← videos .mp4 para la sección "En acción"
  components/
    NavBar.vue
    HeroSection.vue
    ServicesSection.vue
    GalleryCarousel.vue
    VideoSection.vue
    ContactForm.vue
    FooterSection.vue
  App.vue
  main.js
  style.css
```

## Cómo agregar fotos y videos

- **Fotos**: copia archivos `.jpg`, `.jpeg` o `.png` dentro de `src/assets/images/`.
  El carrusel de la sección "Trabajos terminados" los detecta automáticamente
  (usa `import.meta.glob`, no hay que tocar código). El orden sigue el nombre
  de archivo, así que puedes prefijar con números (`01-antes.jpg`, `02-despues.jpg`)
  para controlar el orden.
- **Videos**: copia archivos `.mp4` dentro de `src/assets/videos/`. Aparecen
  automáticamente en la sección "Nuestro trabajo en acción".

El repositorio ya incluye fotos reales de ejemplo (provistas por el cliente)
para que la demo se vea completa desde el primer `npm run dev`. Puedes
reemplazarlas o agregar más cuando quieras.

## Contacto configurado

- WhatsApp: `https://wa.me/50672110267` (botón en navbar y footer)
- Formulario de contacto: al enviar, abre el cliente de correo del usuario
  con un mensaje pre-armado dirigido a `atencion@jamjardineria.com`.
- Footer: Bismar Álvarez · +506 7211-0267 / +506 8309-4039 · atencion@jamjardineria.com

## Notas técnicas

- `import.meta.glob` para imágenes: `eager: true, import: 'default'`.
- `import.meta.glob` para videos: `eager: true, query: '?url', import: 'default'`
  (equivalente moderno de `as: 'url'`, que fue removido en Vite 5).
- Paleta y tipografía definidas como tokens en `tailwind.config.js`
  (familia `canopy` para verdes, `sand` para neutros, `clay` para acentos tierra).
- Tipografías: Montserrat (`font-display`) para títulos, Inter (`font-body`)
  para texto, cargadas vía Google Fonts en `index.html`.
