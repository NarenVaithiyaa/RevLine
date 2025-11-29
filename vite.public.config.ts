import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'RevLine',
        short_name: 'RevLine',
        description: 'RevLine Fitness Community Website',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/images/revline_logo.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/images/revline_logo.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ],
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff'
      }
    })
  ],
  build: {
    outDir: 'dist-public',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
    },
  },
});
