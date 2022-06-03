<template>
  <header>
    <HeaderRetour />
  </header>
  <main>
    <div class="mx-8">
      <Vignette />
      <div class="flex flex-col items-center">
        <h1 class="mt-7 font-concert-one text-3xl text-Extended/true-gray/50 lg:text-5xl">Martin Garrix</h1>
        <h4 class="font-lato text-[12px] text-Extended/amber/500 lg:text-xl">Pul’co Playa - Samedi 9 juillet</h4>
      </div>
      <p class="mt-6 font-lato text-xs text-Extended/true-gray/50 lg:mx-24 lg:text-lg">
        Martin Garrix est un DJ hollandais né en 1996 à Amsterdam. A l’âge de seulement 16 ans il sort son premier titre “Keygen” qui est un
        morceau électro dans un style épuré. En 2013, il sort son single “Animals” qui devient célèbre dans la scène de l’électro.
      </p>
      <p class="mt-2 font-lato text-xs text-Extended/true-gray/50 lg:mx-24 lg:text-lg">
        Martin Garrix est connu dans le monde entier pour ses singles, et il participe à de nombreux festivals en proposant des spectacles à
        couper le souffle qui sont inoubliables !
      </p>
      <div>
        <h2 class="mt-14 font-lato text-base text-Extended/true-gray/50 lg:mx-24 lg:text-lg">Quelques images :</h2>
        <div class="mt-2 flex w-full snap-x gap-9 overflow-x-auto pb-5 md:hidden">
          <div class="shrink-0 snap-center first:pl-5 last:pr-5">
            <img class="max-h-[222px] w-full object-cover" src="../../public/images/mg1.png" alt="Photographie de Martin Garrix" />
          </div>
          <div class="shrink-0 snap-center first:pl-5 last:pr-5">
            <img class="max-h-[222px] w-full object-cover" src="../../public/images/mg2.png" alt="Concert vue de la scène" />
          </div>
          <div class="shrink-0 snap-center first:pl-5 last:pr-5">
            <img
              class="max-h-[222px] w-full object-cover"
              src="../../public/images/mg3.png"
              alt="Concert vue de la scène avec Martin Garrix de face"
            />
          </div>
          <div class="shrink-0 snap-center first:pl-5 last:pr-5">
            <img
              class="max-h-[222px] w-full object-cover"
              src="../../public/images/mg4.png"
              alt="Concert vue de la scène avec Martin Garrix de face"
            />
          </div>
          <div class="shrink-0 snap-center first:pl-5 last:pr-5">
            <img class="max-h-[222px] w-full object-cover" src="../../public/images/mg5.png" alt="Concert vue de la scène" />
          </div>
          <div class="shrink-0 snap-center first:pl-5 last:pr-5">
            <img class="max-h-[222px] w-full object-cover" src="../../public/images/mg6.png" alt="Identité Visuelle" />
          </div>
        </div>
        <!-- Format Desktop -->
        <div class="mx-24 hidden md:grid">
          <div class="grid grid-cols-[repeat(auto-fit,minmax(223px,1fr))] items-center justify-between gap-4">
            <img
              class="max-h-[300px] w-full object-cover lg:max-h-[377.04px]"
              src="../../public/images/mg1.png"
              alt="Photographie de Martin Garrix"
            />
            <img
              class="max-h-[300px] w-full object-cover lg:max-h-[377.04px]"
              src="../../public/images/mg2.png"
              alt="Concert vue de la scène"
            />
            <img
              class="max-h-[300px] w-full object-cover lg:max-h-[377.04px]"
              src="../../public/images/mg3.png"
              alt="Concert vue de la scène avec Martin Garrix de face"
            />
            <img
              class="max-h-[300px] w-full object-cover lg:max-h-[377.04px]"
              src="../../public/images/mg4.png"
              alt="Concert vue de la scène avec Martin Garrix de face"
            />
            <img
              class="max-h-[300px] w-full object-cover lg:max-h-[377.04px]"
              src="../../public/images/mg5.png"
              alt="Concert vue de la scène"
            />
            <img class="max-h-[300px] w-full object-cover lg:max-h-[377.04px]" src="../../public/images/mg6.png" alt="Identité Visuelle" />
          </div>
        </div>
      </div>
    </div>
  </main>
  <footer>
    <Footer />
  </footer>
</template>

<script>
import HeaderRetour from "../components/HeaderRetour.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Vignette from "../components/VignetteArtiste.vue";

export default {
  components: { HeaderRetour, Header, Footer, Vignette },
};
</script>
