// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT for GitHub Pages under a subpath:
  base: '/ShigersPage/',

  // Optional: stricter asset handling / path behavior
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
  publicDir: 'src', // srcディレクトリをビルド時にコピー
})

