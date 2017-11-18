<template>
  <div class="main">
    <h1>{{ post.title }}</h1>
    <p class="meta">Published by <strong>{{ post.author.name }}</strong></p>
    <div v-html="post.content"></div>
  </div>
</template>

<script>
import qs from 'query-string'

export default {
  async asyncData ({ params }) {
    const options = qs.stringify({
      fields: ['ID', 'title', 'author', 'content'].join(',')
    })
    const post = await fetch(
      process.env.SITES_API_URI + '/posts/slug:' + params.slug + '?' + options
    ).then(res => res.json())

    return { post }
  }
}
</script>

<style scoped>
.meta {
  color: #70818A;
  font-size: 0.875rem;
}
</style>
