import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base URL cho GitHub Pages - thay 'front-end-demo' bằng tên repo của bạn
  base: '/front-end-demo/',
})
