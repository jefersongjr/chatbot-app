import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  server: {
    proxy: {
      '/api': {
        target: 'https://http.msging.net',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
},
  },
})
