<template>
  <!-- Header -->
  <header>
    <HeaderRetour />
  </header>
  <!-- Contenus -->
  <main class="bg-Extended/true-gray/900">
    <!-- En tête -->
    <Vignette image="/images/concert_mg.webp" nom="Martin Garrix" date="Samedi 9 juillet 2022" heure="23h30 - 3h00" />
    <!-- Description -->
    <div class="mx-8 md:mx-11 lg:mx-44 lg:mt-60">
      <h3 class="font-lato text-sm text-Extended/true-gray/50 md:text-xl lg:text-2xl">Description :</h3>
      <p class="mt-2 font-lato text-xs text-Extended/true-gray/50 md:text-base lg:text-xl">
        Martin Garrix est un DJ hollandais né en 1996 à Amsterdam. A l’âge de seulement 16 ans il sort son premier titre “Keygen” qui est un
        morceau électro dans un style épuré. En 2013, il sort son single “Animals” qui devient célèbre dans la scène de l’électro.
      </p>
      <RouterLink
        to="/martingarrix"
        class="relative mt-2 flex justify-end font-lato text-xs text-Extended/amber/500 md:text-base lg:text-xl"
      >
        Lire la suite
      </RouterLink>
    </div>
    <!-- Lieu -->
    <div class="mx-8 md:mx-11 lg:mx-44">
      <h3 class="font-lato text-sm text-Extended/true-gray/50 md:text-xl lg:text-2xl">Lieu :</h3>
      <p class="mt-2 font-lato text-xs text-Extended/true-gray/50 md:text-base lg:text-xl">Scène Pul’co Playa - Plage des Ayguades</p>
      <div class="relative mt-2 flex flex-shrink-0 flex-grow-0 items-start justify-start gap-[13px] self-stretch md:hidden">
        <img
          class="h-[138px] w-[147px] flex-shrink-0 flex-grow-0 rounded-[10px] object-cover"
          src="../../public/images/concert_scene1.webp"
          alt=""
        />
        <img
          class="h-[138px] w-[147px] flex-shrink-0 flex-grow-0 rounded-[10px] object-cover"
          src="../../public/images/concert_scene1_carte.webp"
          alt=""
        />
      </div>
      <!-- Ipad -->
      <div class="relative mt-2 hidden flex-shrink-0 flex-grow-0 items-start justify-center gap-16 self-stretch pb-5 md:flex">
        <img
          class="h-[254px] w-[248px] flex-shrink-0 flex-grow-0 rounded-[10px] object-cover"
          src="../../public/images/concert_scene1.webp"
          alt=""
        />
        <img
          class="h-[254px] w-[248px] flex-shrink-0 flex-grow-0 rounded-[10px] object-cover"
          src="../../public/images/concert_scene1_carte.webp"
          alt=""
        />
      </div>
      <!-- Desktop -->
      <div class="relative mt-2 hidden flex-shrink-0 flex-grow-0 items-start justify-center gap-16 self-stretch pb-5 lg:flex">
        <img
          class="h-[310px] w-[330px] flex-shrink-0 flex-grow-0 rounded-[10px] object-cover"
          src="../../public/images/concert_scene1.webp"
          alt=""
        />
        <img
          class="h-[310px] w-[330px] flex-shrink-0 flex-grow-0 rounded-[10px] object-cover"
          src="../../public/images/concert_scene1_carte.webp"
          alt=""
        />
      </div>
    </div>
  </main>
  <footer>
    <Footer />
  </footer>
</template>

<script>
import HeaderRetour from "../components/HeaderRetour.vue";
import Vignette from "../components/VignetteConcert.vue";
import Footer from "../components/Footer.vue";

export default {
  components: { HeaderRetour, Vignette, Footer },
};
</script>
