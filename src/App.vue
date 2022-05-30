<template>
  <nav>
    <h4 class="text-xl">
      <MenuIcon class="inline-block h-5 w-5 text-blue-500" />
      menu (dans <code class="font-mono">/src/App.vue</code>)
    </h4>
    <ul>
      <li>
        <router-link class="text-red-600 underline" to="/">
          lien vers
          <code class="font-mono">/src/pages/index.vue</code>
        </router-link>
      </li>
    </ul>
  </nav>

  <!-- Affiche les pages -->
  <router-view class="m-2 border-2 p-2" />
</template>

<script>
import { MenuIcon } from "@heroicons/vue/solid";

export default {
  name: "App",
  components: { MenuIcon },
};
</script>
