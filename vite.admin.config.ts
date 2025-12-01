import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg', 'images/admin_logo.png'],
      manifest: {
        name: 'RevLine Admin',
        short_name: 'RevLine Admin',
        description: 'RevLine Admin Dashboard',
        theme_color: '#111827',
        icons: [
          {
            src: '/images/admin_logo.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/images/admin_logo.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/images/admin_logo.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: '/images/admin_logo.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ],
        start_url: '/',
        display: 'standalone',
        background_color: '#111827',
        scope: '/',
        orientation: 'portrait'
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,jpeg}'],
        cleanupOutdatedCaches: true,
        clientsClaim: true,
        skipWaiting: true,
        maximumFileSizeToCacheInBytes: 5000000
      },
      devOptions: {
        enabled: true
      }
    }),
    {
      name: 'rename-admin-html',
      enforce: 'post',
      generateBundle(_, bundle) {
        if (bundle['admin.html']) {
          bundle['index.html'] = bundle['admin.html'];
          bundle['index.html'].fileName = 'index.html';
          delete bundle['admin.html'];
        }
      },
    }
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
