require('dotenv').config({ silent: true })

module.exports = {
  head: {
    title: 'nuxt-wp',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js app which consumes the WordPress.com REST API' }
    ]
  },
  css: [
    'normalize.css'
  ],
  loading: { color: '#3490DC' },
  build: {
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins: [
    '~/plugins/fetch.js'
  ],
  env: {
    SITES_API_URI: `${process.env.WP_API}/sites/${process.env.WP_SITE}`
  }
}
