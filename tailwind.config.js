/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js}'
  ],
  theme: {
    extend: {
      colors: {
        // Paleta JAM Jardinería — tonos de follaje real, no verde "SaaS"
        canopy: {
          950: '#0E2B1F', // sombra profunda de follaje
          900: '#123A28',
          800: '#1B4F35',
          700: '#256B45', // verde esmeralda principal
          600: '#337F53',
          500: '#4C9968', // verde hoja activo
        },
        moss: {
          400: '#8FB89A',
          300: '#B7D2BE',
          200: '#DCE9DE',
        },
        clay: {
          700: '#7A5236', // tierra / macetas de barro
          500: '#A9754F',
        },
        sand: {
          50: '#FAF8F2',  // crudo, no el beige clonado F4F1EA
          100: '#F2EFE4',
          200: '#E7E2D2',
        },
        ink: '#1C2620',
      },
      fontFamily: {
        display: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 12px 30px -12px rgba(14, 43, 31, 0.25)',
      },
    },
  },
  plugins: [],
}
