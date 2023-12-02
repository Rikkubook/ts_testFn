
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    // Add Vitest options here
    globals: true,
    environment: 'jsdom',
    coverage: {
      reporter: ['text', 'html'],
    },
  },
})
