
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
        title: 'Ayurveda Quiz',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Ayurveda Quiz' },
        ],
        link: [
            { rel: 'icon', type: 'image/png', href: '/icon.png' },
            {
                rel: 'stylesheet',
                type: 'text/css',
                href:
                    'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.3/css/uikit.min.css',
            },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css?family=Questrial',
            },
        ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
