import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, './index.html'),
        hotels: resolve(__dirname, './src/assets/Pages/Hotels.jsx'),
        aboutus: resolve(__dirname, './src/assets/Pages/aboutus.jsx'),
        gallery: resolve(__dirname, './src/assets/Pages/gallery.jsx'),
        news: resolve(__dirname, './src/assets/Pages/news.jsx'),
        contact: resolve(__dirname, './src/assets/Pages/contact.jsx'),
      },
    },
    outDir: 'dist', // Custom build directory, 'dist' is the default
  },
});
