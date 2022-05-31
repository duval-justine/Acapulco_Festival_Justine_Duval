<template>
    <div class="bg-Extended/true-gray/900">
        <img class="w-full object-cover" :src="image" alt="">
        <p class="py-2 font-lato text-Extended/true-gray/50 text-sm text-center drop-shadow-md md:text-xl">{{texte}}</p>
    </div>
</template>

<script>
export default {
  props: {
    image: String, 
    texte: String,
  }
}
</script>
