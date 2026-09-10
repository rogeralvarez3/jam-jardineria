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
- Formulario de contacto: envía el mensaje directamente por email a
  `atencion@jamjardineria.com` usando Web3Forms (sin necesitar un backend
  propio). Ver instrucciones de activación abajo.
- Footer: Bismar Álvarez · +506 7211-0267 / +506 8309-4039 · atencion@jamjardineria.com

## Activar el envío real de correos (una sola vez)

El formulario usa **Web3Forms**, un servicio gratuito que recibe el envío
desde el navegador del visitante y lo reenvía por email. No requiere
servidor propio ni tarjeta de crédito.

1. Entra a **https://web3forms.com** y crea una cuenta gratuita usando
   `atencion@jamjardineria.com` como correo de destino.
2. Copia el **Access Key** que te genera.
3. En la raíz del proyecto, copia `.env.example` como `.env`:
   ```bash
   cp .env.example .env
   ```
4. Abre `.env` y pega tu access key:
   ```
   VITE_WEB3FORMS_KEY=tu_access_key_real
   ```
5. Reinicia `npm run dev` (o vuelve a hacer `npm run build` si ya está
   en producción). Las variables `VITE_*` solo se leen al iniciar/compilar.

Con esto, cada envío del formulario llega directo a
`atencion@jamjardineria.com`. Si por algún motivo el envío falla (sin
internet, clave inválida, etc.), el formulario muestra un mensaje con un
enlace directo a correo y a WhatsApp como respaldo, para que el visitante
nunca se quede sin poder contactarte.

**Importante:** el archivo `.env` no debe subirse a git ni compartirse
públicamente — ya está excluido en `.gitignore`. Si despliegas en Netlify,
Vercel u otro hosting, configura `VITE_WEB3FORMS_KEY` como variable de
entorno del proyecto en el panel de esa plataforma (no dentro del código).

## Notas técnicas

- `import.meta.glob` para imágenes: `eager: true, import: 'default'`.
- `import.meta.glob` para videos: `eager: true, query: '?url', import: 'default'`
  (equivalente moderno de `as: 'url'`, que fue removido en Vite 5).
- Paleta y tipografía definidas como tokens en `tailwind.config.js`
  (familia `canopy` para verdes, `sand` para neutros, `clay` para acentos tierra).
- Tipografías: Montserrat (`font-display`) para títulos, Inter (`font-body`)
  para texto, cargadas vía Google Fonts en `index.html`.
