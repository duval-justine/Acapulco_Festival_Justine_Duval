<template>
  <!-- Composant Mobile -->
  <div class="relative mt-8 h-[256px] w-[270px] md:hidden">
    <img class="absolute w-full rounded-xl object-cover opacity-80" :src="image" alt="" />
    <div>
      <p class="absolute mt-[214px] ml-3 text-left font-lato text-[10px] font-semibold text-Extended/amber/300">{{ date }}</p>
      <p class="absolute mt-44 ml-3 text-center font-concert-one text-2xl text-Extended/true-gray/50">{{ nom }}</p>
      <div class="absolute">
        <RouterLink :to="lien">
          <button class="mt-[220px] ml-44 rounded-lg bg-Extended/amber/500 drop-shadow-md">
            <p class="py-2 px-3 font-lato text-[12px] text-Extended/true-gray/50 drop-shadow-md">Informations</p>
          </button>
        </RouterLink>
      </div>
    </div>
  </div>

  <!-- Composant Desktop -->
  <div class="group hidden flex-col items-center md:flex">
    <div class="relative">
      <PlusIcon
        class="
          absolute
          top-1/2
          left-1/2
          -ml-6
          -mt-6
          h-12
          w-12
          text-Extended/true-gray/50
          opacity-0
          transition-opacity
          duration-75
          group-hover:opacity-100
        "
      />
      <img class="w-full object-cover hover:opacity-40" :src="image" alt="" />
    </div>
    <h2 class="mt-5 font-concert-one text-3xl text-Extended/true-gray/50">{{ nom }}</h2>
    <p class="mt-5 font-lato text-lg text-Extended/amber/300">{{ date }}</p>
  </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import { PlusIcon } from "@heroicons/vue/outline";

export default {
  components: { PlusIcon },
  props: {
    image: String,
    date: String,
    nom: String,
    lien: {
      type: String,
      default: "/",
    },
  },
};
</script>

