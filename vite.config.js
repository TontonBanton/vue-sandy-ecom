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

        // target -  requests starting with /api will be sent to backend http://localhost:8000.
        // rewrite - replace '/api' (using regex) with empty string before sending to target server
        //ex. '/api/jobs'-->'/jobs' ---> http://localhost:8000/jobs
        target: 'http://localhost:8000',
        rewrite: (path) => path.replace(/^\/api/, ''),

        changeOrigin: true,  //For avoiding CORS issues
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
