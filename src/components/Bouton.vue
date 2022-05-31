<template>
<RouterLink :to="lien" >
  <button class=" bg-Extended/true-gray/900 border-2 border-Extended/amber/500 rounded-lg drop-shadow-md" :class="{'bg-Extended/amber/500':actif}">
    <p class="py-2 px-3 font-lato text-Extended/true-gray/50 text-[12px] drop-shadow-md md:text-base lg:text-lg">{{texte}}</p>
  </button>
</RouterLink>
</template>
<script>
import { RouterLink, RouterView } from "vue-router";

export default {
  props: {
    texte: String,
    actif: Boolean,
    lien:{
      type: String,
      default:"/"
    },
  }
}
</script>
