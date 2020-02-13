import path from 'path'
// import NuxtConfiguration from '@nuxt/config'
import StylelintPlugin from 'stylelint-webpack-plugin'

module.exports = {
  mode: 'universal',

  buildModules: ['@nuxt/typescript-build'],

  typescript: {
    typeCheck: true,
  },

  /*
   ** Headers of the page
   */
  head: {
    title: 'nuxt ts web',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src:
          'https://cdn.polyfill.io/v2/polyfill.js?features=IntersectionObserver,es6,es7',
        type: 'text/javascript',
      },
    ],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /**
   * Global CSS
   */
  css: ['swiper/css/swiper.css'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    // add lazyload component
    '~plugins/vue-lazyload.client.js',
    // add swiper component
    '~plugins/vue-swiper.client.js',
    // add page name to store
    '~plugins/routerOption.js',
    // add gsap plugins
    '~plugins/gsap.client.js',
    {
      src: '~plugins/exStore',
      ssr: true,
    },
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/pwa',
    'nuxt-user-agent',
    '@bazzite/nuxt-optimized-images',
    'nuxt-mq',
    'nuxt-webfontloader',
    [
      '@uto-usui/nuxt-google-gtag',
      {
        id: 'UA-xxxxxxxxx',
        config: {
          send_page_view: true,
          custom_map: {
            dimension12: 'myCategory',
          },
        },
      },
    ],
  ],

  /**
   * import common scss variable and functions
   */
  styleResources: {
    scss: [
      '~/assets/sass/foundation/variable/_variable.scss',
      '~/assets/sass/foundation/mixin/_mixin.scss',
    ],
  },

  /**
   * media query breakpoint
   *
   * doc
   * : https://github.com/AlexandreBonaventure/vue-mq
   *
   * css break points
   * /assets/sass/foundation/variable/_breakpoint.scss
   */
  mq: {
    defaultBreakpoint: 'default',
    breakpoints: {
      mobile: 0,
      tablet: 768,
      desktop: 1024,
      widescreen: 1200,
      fullhd: 1680,
    },
  },

  /**
   * import font style sheet
   *
   * google or adobe
   */
  webfontloader: {
    google: {
      families: ['Montserrat:900&display=swap'],
    },
  },

  /**
   * @bazzite/nuxt-optimized-images
   *
   * doc
   * : https://www.bazzite.com/docs/nuxt-optimized-images/
   */
  optimizedImages: {
    optimizeImages: true,
  },

  router: {
    base: process.env.SITE_BASE ? process.env.SITE_BASE : '/',
  },

  /*
   ** Build configuration
   */
  build: {
    splitChunks: {
      layouts: true,
    },

    terser: {
      terserOptions: {
        // disable console on prod
        compress: { drop_console: true },
      },
    },

    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
        config.plugins.push(
          new StylelintPlugin({
            files: ['**/*.vue'],
          }),
        )
      }
      // import alias
      config.resolve.alias.Sass = path.resolve(__dirname, './assets/sass/')
      config.resolve.alias.Js = path.resolve(__dirname, './assets/js/')
      config.resolve.alias.Images = path.resolve(__dirname, './assets/images/')
      config.resolve.alias['~'] = path.resolve(__dirname)
      config.resolve.alias['@'] = path.resolve(__dirname)
    },

    /**
     * css prefix
     */
    postcss: {
      preset: {
        // IE grid support
        autoprefixer: {
          grid: 'autoplace',
        },
      },
    },
    plugins: [
      // your components directory clean-up
      // new UnusedFilesWebpackPlugin({
      //   patterns: ['components/**/*.vue', 'components/**/*.js'],
      // }),
    ],
  },

  /**
   * PWA workbox setting
   *
   * doc
   * : https://pwa.nuxtjs.org/
   * : https://developers.google.com/web/tools/workbox/guides/get-started
   */
  workbox: {
    // ios safari video support
    cachingExtensions: '~/plugins/workbox-range-request.js',
    runtimeCaching: [
      // google fonts
      {
        urlPattern: 'https://fonts.googleapis.com/.*',
        handler: 'cacheFirst',
        method: 'GET',
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } },
      },
      {
        urlPattern: 'https://fonts.gstatic.com/.*',
        handler: 'cacheFirst',
        method: 'GET',
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } },
      },
    ],
  },

  manifest: {
    name: 'YOUR APP',
    lang: 'ja',
    start_url: '/',
    display: 'standalone',
  },
}
