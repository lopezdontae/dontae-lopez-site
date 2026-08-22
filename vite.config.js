import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          return id.includes('/node_modules/three/') ? 'three' : undefined
        },
      }
    }
  }
})
