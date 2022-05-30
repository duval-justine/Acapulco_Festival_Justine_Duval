<template>
<RouterLink class="bg-Extended/amber/500 rounded-lg drop-shadow-md" :to="lien">
    <p class="py-2 px-3 font-lato text-Extended/true-gray/50 text-[12px] drop-shadow-md">{{texte}}</p>
<RouterLink />
</template>
<script>
import { RouterLink, RouterView } from "vue-router";

export default {
  props: {
    texte: String,
    lien:{
      type: String,
      default:"/"
    },
  }
}
</script>
