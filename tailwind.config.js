import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set base to '/' for username.github.io sites
  // Or '/repo-name/' for project sites (e.g., '/portfolio/')
  base: '/michael-portfolio',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
