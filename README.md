# nuxt-wp

> Nuxt.js app which consumes the WordPress.com REST API

## Build Setup

You need to provide a `.env` file containing the following configuration parameters:

```
WP_API=https://public-api.wordpress.com/rest/v1.1
WP_SITE=<your-wordpress.com-site>
```

Now you can use one of the following npm scripts to start this application:

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

## Notice

This project is inspired by [postlight/headless-wp-starter](https://github.com/postlight/headless-wp-starter). Except it doesn't ship with a WordPress backend but leverages the WordPress.com REST API for convenience.

**Check it out on https://nuxt-wp.now.sh**
