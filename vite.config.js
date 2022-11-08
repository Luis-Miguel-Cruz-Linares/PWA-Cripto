import { VitePWA } from 'vite-plugin-pwa'
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VitePWA({
    manifest: {
      name: 'Cotizador de Criptomonedas con VUE, VITE y SASS',
      short_name: 'CriptoCotizador',
      description: 'Cotizador de Criptomonedas hecho con VUE, VITE y SASS',
      theme_color: '#f60de3',
      icons: [
        {
          src: 'logo.svg',
          sizes: '192x192',
          type: 'image/svg'
        },
      ],
    },
})],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }

})

