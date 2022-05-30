<template>
  <RouterLink to="/">{{name}}</RouterLink>
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
</script>
