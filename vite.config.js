import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:8000',                // Requests starting with /api will be sent to http://localhost:8000.
        changeOrigin: true,                             // Default - for avoiding CORS issues
        rewrite: (path) => path.replace(/^\/api/, '')   // Replace /api (using regex) with empty string before sending to target server
      }                                                        //Ex. (/api/jobs) remove--> (/jobs) forward to server---> http://localhost:8000/jobs
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
