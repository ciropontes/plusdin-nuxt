export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'plusdin-nuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', href: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
    ],
    script: [
      {
        src: "https://securepubads.g.doubleclick.net/tag/js/gpt.js",
        async: true
      },
      {
        src: "https://assets.etus.digital/dxp/prebid.min.js",
        async: true
      },
      // {
      //   src: "https://assets.etus.digital/dxp/wrapper-config-plusdin.min.js",
      // },
      {
        innerHTML: `window.dxp_wrapper_config = {
        gamId: "21842055933",
        domainId: "plusdin",
        enableInterstitial: true,
        disableRebid: true,
        bidders: {
            rtbHouse: {
                publisherId: 'PEXnfYA4MgLhwxYxuHIA',
                bidfloor: null,
            },
            appNexus: {
                /*plusdin-all*/
                placementId: 20780217,
                reserve: null,
            },
            appNexus: {
                /*Plusdin-house*/
                placementId: 21016090,
                reserve: null,
            },
            verizon: {
                dcn: '8a9695df0177775d76226959092401fb',
                pos: '8a96985001777781761c880dd0a20157',
            },
        },
        adInserter: {
            marginDesktop: '100% 0px',
            marginMobile: '200% 0px',
            containerContentAds: [
              '.card-ranking-list'
            ],
            containerSidebarAds: [
            ],
            afterElements: [
                { id: '.container.container-main', position: 'anchor'},
               // { id: '.card-ranking-list .card-container', position: 'content', ignoreAdsNear: true, ignoreTagsNear: true},
            ],
            beforeElements: [
            ],
            beforeInsideElements: [
            ],
        }
    }`, type: 'text/javascript', charset: 'utf-8'
      },
      {
        src: "https://assets.etus.digital/dxp/wrapper.min.js",
      }
    ],
    __dangerouslyDisableSanitizers: ['script']
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],


  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    'nuxt-vue-material',
    '@nuxtjs/axios',
  ],
  vueMaterial: {
    theme: 'default'
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
