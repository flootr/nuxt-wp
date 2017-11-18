<template>
  <div>
    <navigation></navigation>
    <nuxt/>
  </div>
</template>

<script>
import navigation from '../components/navigation.vue'

export default {
  components: {
    navigation
  }
}
</script>


<style>
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

p, li {
  line-height: 1.5;
}

a {
  color: #3490DC;
}

a:hover, a:active, a:visited {
  color: #103D60;
}

.main {
  margin-top: 12px;
  margin-bottom: 12px;
  padding-left: 8px;
  padding-right: 8px;
}
</style>
