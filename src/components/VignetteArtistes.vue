<template>
  <!-- Mobile -->
  <div>
    <img class="absolute mx-28 mt-2 h-[136px] w-60 object-cover" :src="image" alt="" />
    <div class="absolute ml-3 mt-24 flex flex-col items-start justify-start gap-[7px]">
      <p class="flex-shrink-0 flex-grow-0 font-concert-one text-3xl text-Extended/true-gray/50 md:text-4xl">{{ nom }}</p>
      <div class="relative flex flex-shrink-0 flex-grow-0 items-center justify-start gap-[157px] self-stretch">
        <p class="flex-shrink-0 flex-grow-0 text-left text-[12px] text-Extended/amber/300 md:text-xs">{{ date }}</p>
        <div div class="-mt-3 flex-shrink-0 flex-grow-0">
          <RouterLink :to="lien">
            <button
              class="border-1 rounded-2xl border-Extended/amber/500 bg-Extended/true-gray/900 drop-shadow-md"
              :class="{ 'bg-Extended/amber/500': actif }"
            >
              <p class="py-2 px-3 font-lato text-[12px] text-Extended/true-gray/50 drop-shadow-md md:text-xs">En savoir plus</p>
            </button>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bouton from "../components/Bouton.vue";

export default {
  components: { Bouton },
  props: {
    image: String,
    nom: String,
    date: String,
    actif: Boolean,
    lien: {
      type: String,
      default: "/",
    },
  },
};
</script>
