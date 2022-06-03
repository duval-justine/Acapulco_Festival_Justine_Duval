<template>
  <div class="bg-Extended/true-gray/900">
    <img class="w-full object-cover lg:max-h-[550px]" :src="image" alt="" />
    <p class="py-2 text-center font-lato text-sm text-Extended/true-gray/50 drop-shadow-md md:text-xl">{{ texte }}</p>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    texte: String,
  },
};
</script>
