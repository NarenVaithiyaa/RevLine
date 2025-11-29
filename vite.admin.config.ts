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
        name: 'RevLine Admin',
        short_name: 'RevLine Admin',
        description: 'RevLine Admin Dashboard',
        theme_color: '#111827',
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
        background_color: '#111827'
      }
    })
  ],
  build: {
    outDir: 'dist-admin',
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, 'admin.html'),
      },
    },
  },
});
