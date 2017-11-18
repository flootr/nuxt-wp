<template>
  <div class="main">
    <h1>{{ page.title }}</h1>
    <div v-html="page.content"></div>
  </div>
</template>

<script>
import qs from 'query-string'

export default {
  async asyncData ({ params }) {
    const options = qs.stringify({
      fields: ['ID', 'title', 'content'].join(',')
    })
    const page = await fetch(
      process.env.SITES_API_URI + '/posts/slug:' + params.slug + '?' + options
    ).then(res => res.json())

    return { page }
  }
}
</script>

<style scoped>

</style>
