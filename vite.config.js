import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  basename: '/vintone/',
  base: '/vintone/',
  plugins: [vue()],
})
