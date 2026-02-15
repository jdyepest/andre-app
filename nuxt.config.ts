export default defineNuxtConfig({
  srcDir: 'src',
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n'],
  css: ['~/assets/css/main.css', '~/assets/css/landing.css'],
  app: {
    baseURL: '/',
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'preload',
          as: 'style',
          href:
            'https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap&family=Happy+Monkey&display=swap&family=Cormorant+Garamond:wght@400;500;600;700&display=swap&family=Manrope:wght@300;400;500;600;700&display=swap&family=Playfair+Display:wght@500;600;700&display=swap'
        },
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap&family=Happy+Monkey&display=swap&family=Cormorant+Garamond:wght@400;500;600;700&display=swap&family=Manrope:wght@300;400;500;600;700&display=swap&family=Playfair+Display:wght@500;600;700&display=swap'
        }
      ]
    }
  },
  i18n: {
    strategy: 'no_prefix',
    defaultLocale: 'es',
    lazy: true,
    langDir: 'locales',
    locales: [
      { code: 'es', iso: 'es-CO', name: 'Espanol', file: 'es.json' },
      { code: 'en', iso: 'en-US', name: 'English', file: 'en.json' },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      fallbackLocale: 'es',
    },
    vueI18n: './i18n/i18n.config.ts',
    bundle: {
      optimizeTranslationDirective: false,
    },
  },
  nitro: {
    preset: 'static',
  },
  vite: {
    vue: {
      template: {
        // Treat root-absolute URLs (e.g. /assets/...) as public paths
        // and do not try to bundle them.
        transformAssetUrls: {
          includeAbsolute: false,
        },
      },
    },
  },
})
