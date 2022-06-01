<template>
  <div class="bg-Extended/amber/500">
    <div class="flex justify-end">
      <RouterLink to="/">
        <XIcon class="mr-6 h-[57px] w-[57px] pt-6 text-Extended/true-gray/50" />
      </RouterLink>
    </div>
    <div class="mx-6 mt-[200px] flex flex-col items-center">
      <h1 class="mb-4 text-center font-lato text-3xl font-normal text-Extended/true-gray/50">Nous avons bien reçu votre message !</h1>
      <Line />
      <p class="mt-4 pb-[500px] text-center font-lato text-sm font-light text-Extended/true-gray/50 lg:pb-[800px]">
        Votre demande sera traitée dans les plus brefs délais. sera traité dans les plus brefs délai.
      </p>
    </div>
  </div>
</template>

<script>
import { XIcon } from "@heroicons/vue/outline";
import Line from "../components/icons/Line.vue";

export default {
  components: { XIcon, Line },
};
</script>
