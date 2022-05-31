<template>
  <div class="relative top-0 z-20">
    <img class="absolute w-full object-cover opacity-50 md:max-h-[450px] lg:max-h-80" src="../../public/images/prog_img1.webp" alt="" />
    <h1 class="absolute mt-16 ml-5 font-concert-one text-3xl text-Extended/true-gray/50">Programmes</h1>
  </div>
  <div class="relative -bottom-52 z-20 ml-5 flex justify-center gap-2 md:-bottom-[385px] lg:-bottom-[330px]">
    <RouterLink to="/progall">
      <button
        class="rounded-lg border-2 border-Extended/amber/500 bg-Extended/true-gray/900 drop-shadow-md"
        :class="{ 'bg-Extended/amber/500': actif }"
      >
        <p class="py-2 px-3 font-lato text-[12px] text-Extended/true-gray/50 drop-shadow-md md:text-base lg:text-lg">All</p>
      </button>
    </RouterLink>
    <RouterLink to="/progjeudi">
      <button
        class="rounded-lg border-2 border-Extended/amber/500 bg-Extended/true-gray/900 drop-shadow-md"
        :class="{ 'bg-Extended/amber/500': actif2 }"
      >
        <p class="py-2 px-3 font-lato text-[12px] text-Extended/true-gray/50 drop-shadow-md md:text-base lg:text-lg">Jeudi</p>
      </button>
    </RouterLink>
    <RouterLink to="/progvendredi">
      <button
        class="rounded-lg border-2 border-Extended/amber/500 bg-Extended/true-gray/900 drop-shadow-md"
        :class="{ 'bg-Extended/amber/500': actif3 }"
      >
        <p class="py-2 px-3 font-lato text-[12px] text-Extended/true-gray/50 drop-shadow-md md:text-base lg:text-lg">Vendredi</p>
      </button>
    </RouterLink>
    <RouterLink to="/">
      <button
        class="rounded-lg border-2 border-Extended/amber/500 bg-Extended/true-gray/900 drop-shadow-md"
        :class="{ 'bg-Extended/amber/500': actif4 }"
      >
        <p class="py-2 px-3 font-lato text-[12px] text-Extended/true-gray/50 drop-shadow-md md:text-base lg:text-lg">Samedi</p>
      </button>
    </RouterLink>
    <RouterLink to="/">
      <button
        class="rounded-lg border-2 border-Extended/amber/500 bg-Extended/true-gray/900 drop-shadow-md"
        :class="{ 'bg-Extended/amber/500': actif5 }"
      >
        <p class="py-2 px-3 font-lato text-[12px] text-Extended/true-gray/50 drop-shadow-md md:text-base lg:text-lg">Dimanche</p>
      </button>
    </RouterLink>

    <!-- <RouterLink to="/progall" >
        <svg
        width="35"
        height="29"
        viewBox="0 0 35 29"
        :fill="couleur"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none">
        <path
        d="M27 1H8C4 2 1.26728 6.54938 1.07809 8.7963C0.851044 14.6037 1.17269 19.858 1.3619 21.7593C2.04304 26.3222 6.77016 27.6543 8 28H27C30.1787 27.1704 33.7162 22.6235 34 20.2037V8.7963C33.5459 2.98889 28.419 1.34568 27 1Z"
        stroke="#F59E0C"></path>
        </svg>
        <div class="-mt-6 ml-2 font-lato text-Extended/true-gray/50 text-[12px]">
            All

        </div>
        </RouterLink> -->
    <!-- <RouterLink to="/progall">
      <svg width="60" height="29" viewBox="0 0 60 29" :fill="couleur2" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path
          d="M50.6376 1H9.63758C3.63748 2.2 1.47087 6.83333 1.13758 9C0.737578 14.6 1.30424 19.6667 1.63758 21.5C2.83758 25.9 7.47091 27.6667 9.63758 28H50.6376C56.2376 27.2 58.6376 22.3333 59.1376 20V9C58.3376 3.4 53.1376 1.33333 50.6376 1Z"
          stroke="#F59E0C"
        ></path>
      </svg>
      <div class="-mt-6 ml-4 font-lato text-[12px] text-Extended/true-gray/50">Jeudi</div>
    </RouterLink>
    <RouterLink to="/progall">
      <svg width="74" height="29" viewBox="0 0 74 29" :fill="couleur3" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path
          d="M63.1297 1H15.1297C9.12964 1 3.62964 1 1.41919 8C0.923811 13.8074 0.800107 17 1.41928 21.2593C2.90541 25.8222 6.12968 28 15.1297 28H57.6297C64.4024 28 70.6297 28.5 73.1297 20.5L72.6297 8.2963C71.6389 2.48889 66.6297 1 63.1297 1Z"
          stroke="#F59E0C"
        ></path>
      </svg>
      <div class="-mt-6 ml-3 font-lato text-[12px] text-Extended/true-gray/50">Vendredi</div>
    </RouterLink>
    <RouterLink to="/progall">
      <svg width="74" height="29" viewBox="0 0 74 29" :fill="couleur4" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path
          d="M63.1297 1H15.1297C9.12964 1 3.62964 1 1.41919 8C0.923811 13.8074 0.800107 17 1.41928 21.2593C2.90541 25.8222 6.12968 28 15.1297 28H57.6297C64.4024 28 70.6297 28.5 73.1297 20.5L72.6297 8.2963C71.6389 2.48889 66.6297 1 63.1297 1Z"
          stroke="#F59E0C"
        ></path>
      </svg>
      <div class="-mt-6 ml-4 font-lato text-[12px] text-Extended/true-gray/50">Samedi</div>
    </RouterLink>
    <RouterLink to="/progall">
      <svg width="74" height="29" viewBox="0 0 74 29" :fill="couleur5" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path
          d="M63.1297 1H15.1297C9.12964 1 3.62964 1 1.41919 8C0.923811 13.8074 0.800107 17 1.41928 21.2593C2.90541 25.8222 6.12968 28 15.1297 28H57.6297C64.4024 28 70.6297 28.5 73.1297 20.5L72.6297 8.2963C71.6389 2.48889 66.6297 1 63.1297 1Z"
          stroke="#F59E0C"
        ></path>
      </svg>
      <div class="-mt-6 ml-3 font-lato text-[12px] text-Extended/true-gray/50">Dimanche</div>
    </RouterLink> -->
  </div>
</template>

<script>
import Bouton from "../components/Bouton.vue";

export default {
  components: { Bouton },
  props: {
    actif: Boolean,
    actif2: Boolean,
    actif3: Boolean,
    actif4: Boolean,
    actif5: Boolean,
  },
};
</script>
