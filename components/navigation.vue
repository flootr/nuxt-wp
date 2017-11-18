<template>
  <nav>
    <ul class="nav-list">
      <li>
        <nuxt-link to="/" class="nav-link">Home</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.nav-list {
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: inline-flex;
}

.nav-link {
  display: block;
  padding: 8px 12px;
}
</style>
