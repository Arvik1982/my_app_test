import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"https://github.com/Arvik1982/my_app_test/",
  plugins: [react()],
})
