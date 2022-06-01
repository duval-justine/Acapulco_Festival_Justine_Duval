<template>
  <div class="relative -mt-[85px] h-[362px] w-full">
    <img class="absolute max-h-[570px] min-h-[362px] w-full object-cover opacity-40" :src="image" alt="" />
    <div class="absolute ml-8 mt-64 flex flex-col items-start justify-start gap-3 lg:mt-64">
      <p class="flex-shrink-0 flex-grow-0 self-stretch text-left font-lato text-2xl font-bold text-Extended/true-gray/50 lg:text-[65px]">
        {{ nom }}
      </p>
      <div class="flex flex-shrink-0 flex-grow-0 items-start justify-start gap-9 self-stretch">
        <div class="relative flex flex-grow items-start justify-start gap-2.5">
          <Calendrier class="lg:h-10 lg:w-10" />
          <p class="flex-shrink-0 flex-grow-0 text-left font-lato text-xs text-Extended/true-gray/50 lg:text-2xl">{{ date }}</p>
        </div>
        <div class="relative flex flex-grow items-start justify-start gap-2.5">
          <ClockIcon class="relative h-5 w-5 flex-shrink-0 flex-grow-0 text-Extended/amber/300 lg:h-10 lg:w-10" />
          <p class="flex-shrink-0 flex-grow-0 text-left font-lato text-xs text-Extended/true-gray/50 lg:text-2xl">{{ heure }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Calendrier from "../components/icons/Calendrier.vue";
import { ClockIcon } from "@heroicons/vue/outline";

export default {
  components: { Calendrier, ClockIcon },
  props: {
    image: String,
    nom: String,
    date: String,
    heure: String,
  },
};
</script>
