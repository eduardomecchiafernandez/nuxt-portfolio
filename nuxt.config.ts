// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  // Static site generation
  ssr: true,
  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true,
      routes: ['/', '/birthday']
    }
  },

  // Global CSS
  css: ['~/assets/css/global.scss'],

  // Modules
  modules: ['@nuxtjs/google-fonts'],

  // Google Fonts configuration - no external CDN links needed
  googleFonts: {
    families: {
      Inter: [300, 400, 500, 600, 700, 800],
      'Space+Grotesk': [400, 500, 600, 700]
    },
    display: 'swap',
    prefetch: true,
    preconnect: true,
    preload: true
  },

  // App configuration
  app: {
    head: {
      title: 'Eduardo M.F. | Software Engineer',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Eduardo Mecchia Fernandez - Full Stack Software Engineer passionate about crafting fast, accessible, and intuitive web experiences.' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#000000' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  // Vite configuration for optimal Three.js bundling
  vite: {
    optimizeDeps: {
      include: ['three']
    },
    build: {
      // Chunk Three.js separately for better caching
      rollupOptions: {
        output: {
          manualChunks: {
            three: ['three']
          }
        }
      }
    }
  },

  // TypeScript configuration
  typescript: {
    strict: true
  }
})
