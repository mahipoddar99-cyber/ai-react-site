import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import pwa from '@astrojs/pwa';

export default defineConfig({
  integrations: [
    react(),
    tailwind(),
    sitemap(),
    pwa({
      mode: 'production',
      base: '/',
      scope: '/',
      includeAppleIcon: true,
      includeAppleSplashScreen: true,
      includeAppleStatusBarStyle: 'black-translucent',
      includeWasmInitialization: true,
      manifest: {
        name: 'Eco-Friendly Products',
        short_name: 'EcoProducts',
        description: 'Sustainable eco-friendly products marketplace',
        theme_color: '#2563EB',
        background_color: '#ffffff',
        display: 'minimal-ui',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: '/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any',
          },
        ],
      },
    }),
  ],
  site: 'https://eco-products.example.com',
  output: 'static',
  build: {
    format: 'file',
  },
});