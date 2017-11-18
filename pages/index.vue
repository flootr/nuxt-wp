<template>
  <div class="main">
    <h1>Hello Headless WordPress</h1>
    <h2>Posts</h2>
    <ul v-if="posts.length > 0">
      <li v-for="post in posts" :key="post.ID">
        <strong>Title: {{ post.title }} </strong>
        <nuxt-link :to="'/posts/' + post.slug">{{ post.title }}</nuxt-link>
      </li>
    </ul>
    <h2>Pages</h2>
    <ul v-if="pages.length > 0">
      <li v-for="page in pages" :key="page.ID">
        <strong>Title: {{ page.title }} </strong>
        <nuxt-link :to="'/pages/' + page.slug">{{ page.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import qs from 'query-string'

export default {
  async asyncData ({ store }) {
    const options = qs.stringify({
      type: 'any',
      fields: ['ID', 'title', 'type', 'slug'].join(',')
    })
    const url = process.env.SITES_API_URI + '/posts?' + options
    const { posts } = await fetch(url).then(res => res.json())

    return {
      posts: posts.filter(post => post.type === 'post'),
      pages: posts.filter(post => post.type === 'page')
    }
  }
}
</script>

<style>

</style>
