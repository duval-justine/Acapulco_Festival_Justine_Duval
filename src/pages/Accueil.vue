<template>
  <!-- Faire le carrousel Desktop -->

  <main class="bg-Extended/true-gray/900">
    <Header class="relative z-10" />
    <img
      class="-mt-[85px] max-h-[812px] min-h-[812px] w-full object-cover"
      src="/images/acc_fond.webp"
      alt="Image de la plage lors du Festival"
    />
    <div class="flex flex-col items-center">
      <h1 class="absolute -mt-[600px] font-concert-one text-5xl text-Extended/true-gray/50 md:text-7xl lg:text-9xl">Acapul'co</h1>
      <h2 class="absolute -mt-[500px] font-concert-one text-3xl text-Extended/true-gray/50 md:text-4xl lg:-mt-[460px] lg:text-6xl">
        Festival
      </h2>
      <a href="#down">
        <ChevronDownIcon class="-mt-[100px] h-16 w-16 text-Extended/true-gray/50" />
      </a>
    </div>
    <div class="bg-Extended/amber/500 pt-14" id="down">
      <!-- Carrousel au format mobile -->
      <div id="carouselExampleSlidesOnly" class="slide carousel relative md:hidden lg:hidden" data-bs-ride="carousel">
        <div class="carousel-inner relative w-full overflow-hidden">
          <div class="carousel-item active relative float-left w-full">
            <VignetteCarrousel class="block w-full" image="/images/acc_carrousel1.webp" texte="Samedi 9 juillet" />
          </div>
          <div class="carousel-item relative float-left w-full">
            <VignetteCarrousel class="block w-full" image="/images/acc_carrousel2.webp" texte="Vendredi 8 & Samedi 9 juillet" />
          </div>
          <div class="carousel-item relative float-left w-full">
            <VignetteCarrousel class="block w-full" image="/images/acc_carrousel3.webp" texte="Jeudi 7 juillet" />
          </div>
          <div class="carousel-item relative float-left w-full">
            <VignetteCarrousel class="block w-full" image="/images/acc_carrousel4.webp" texte="Samedi 9 & Dimanche 10 juillet" />
          </div>
          <div class="carousel-item relative float-left w-full">
            <VignetteCarrousel class="block w-full" image="/images/acc_carrousel5.webp" texte="Jeudi 7 & Samedi 9 juillet" />
          </div>
        </div>
      </div>
      <!-- Carrousel au format Tablette  -->
      <div id="carouselExampleControls" class="slide carousel relative hidden md:flex" data-bs-ride="carousel">
        <div class="carousel-inner relative w-full overflow-hidden">
          <div class="carousel-item active relative float-left w-full">
            <VignetteCarrousel class="block w-full" image="/images/acc_carrousel1.webp" texte="Samedi 9 juillet" />
          </div>
          <div class="carousel-item relative float-left w-full">
            <VignetteCarrousel class="block w-full" image="/images/acc_carrousel2.webp" texte="Vendredi 8 & Samedi 9 juillet" />
          </div>
          <div class="carousel-item relative float-left w-full">
            <VignetteCarrousel class="block w-full" image="/images/acc_carrousel3.webp" texte="Jeudi 7 juillet" />
          </div>
          <div class="carousel-item relative float-left w-full">
            <VignetteCarrousel class="block w-full" image="/images/acc_carrousel4.webp" texte="Samedi 9 & Dimanche 10 juillet" />
          </div>
          <div class="carousel-item relative float-left w-full">
            <VignetteCarrousel class="block w-full" image="/images/acc_carrousel5.webp" texte="Jeudi 7 & Samedi 9 juillet" />
          </div>
        </div>
        <button
          class="
            carousel-control-prev
            absolute
            top-0
            bottom-0
            left-0
            flex
            items-center
            justify-center
            border-0
            p-0
            text-center
            hover:no-underline hover:outline-none
            focus:no-underline focus:outline-none
          "
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
          <span class="visually-hidden">Avant</span>
        </button>
        <button
          class="
            carousel-control-next
            absolute
            top-0
            bottom-0
            right-0
            flex
            items-center
            justify-center
            border-0
            p-0
            text-center
            hover:no-underline hover:outline-none
            focus:no-underline focus:outline-none
          "
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
          <span class="visually-hidden">Après</span>
        </button>
      </div>
      <!-- Carrousel au format Desktop -->

      <!-- Bouton Programme -->
      <RouterLink to="/progall" class="w-full">
        <p class="py-3 text-center font-lato text-xl text-Extended/true-gray/50 drop-shadow-md md:text-2xl">Toute la programmation</p>
      </RouterLink>
    </div>

    <!-- Texte d'intro sur le festival -->
    <div class="md:hidden">
      <p class="mx-8 mt-16 mb-8 font-lato text-sm text-Extended/true-gray/50">
        Le Jeudi 7 juillet 2022, le festival Acapul’co vous ouvre ses portes pour vous offrir un Festival grandiose ! Venez en famille ou
        entre amis pour s’amuser et vivre des moments inoubliables. Le festival propose cette année, une édition sur 4 jours avec une
        programmation de 23 artistes du monde entier. Qu’attendez vous ? Que la fête commence !
      </p>
      <Bouton class="mr-5 flex justify-end" texte="En savoir plus sur le Festival" lien="/festival" actif />
    </div>

    <div class="hidden flex-row gap-[50px] md:flex lg:gap-[106px]">
      <img
        class="mt-[75px] ml-14 h-[386px] w-[506px] rounded-17xl object-cover"
        src="/images/acc_into.webp"
        alt="Image de personne qui font la fête"
      />
      <div class="flex flex-col gap-8">
        <p class="mt-28 mr-2 font-lato text-xl text-Extended/true-gray/50 lg:mr-36">
          Le Jeudi 7 juillet 2022, le festival Acapul’co vous ouvre ses portes pour vous offrir un Festival grandiose ! Venez en famille ou
          entre amis pour s’amuser et vivre des moments inoubliables. Le festival propose cette année, une édition sur 4 jours avec une
          programmation de 23 artistes du monde entier. Qu’attendez vous ? Que la fête commence !
        </p>
        <Bouton class="mr-[50px] flex justify-end lg:mr-[135px]" texte="En savoir plus sur le Festival" lien="/festival" actif />
      </div>
    </div>

    <!-- Séparation -->
    <div class="hidden justify-between md:flex">
      <div class="mt-10 lg:mt-20">
        <Line />
      </div>
      <Line class="mt-10" />
    </div>

    <!-- Images et Contenus de Présentation -->
    <div class="md:hidden">
      <img class="w-full object-cover px-11 py-20" src="/images/acc_scene.webp" alt="Image de la Scène Pulco Playa" />
      <p class="mx-24 my-6 text-center font-lato text-[12px] text-Extended/true-gray/50">
        Deux grandes scènes pour vous offir le plus beau des spectacles.
      </p>
      <img class="w-full object-cover px-11 py-6" src="/images/acc_concert.webp" alt="Image lors d'un concert" />
      <p class="mx-24 my-6 text-center font-lato text-[12px] text-Extended/true-gray/50">
        Plongez dans un monde imaginaire, parcourez nos nombreux stands...
      </p>
      <img class="w-full object-cover px-11 py-6" src="/images/acc_feux.webp" alt="Image des feux d'artifices" />
      <p class="mx-24 my-6 text-center font-lato text-[12px] text-Extended/true-gray/50">
        ... et venez découvrir les surprises qui vous attendent.
      </p>
    </div>

    <div class="mt-32 hidden flex-col items-center gap-14 md:flex">
      <div class="mx-10 flex flex-row gap-[25px] lg:gap-[103px]">
        <img
          class="h-[219px] w-[357px] rounded-17xl object-cover lg:h-[319px] lg:w-[519px]"
          src="/images/acc_scene.webp"
          alt="Image de la Scène Pulco Playa"
        />
        <p class="mx-24 mt-28 font-lato text-xl text-Extended/true-gray/50">
          Deux grandes scènes pour vous offir le plus beau des spectacles.
        </p>
      </div>
      <div class="mx-10 flex flex-row gap-[25px] lg:gap-[103px]">
        <p class="mx-24 mt-28 font-lato text-xl text-Extended/true-gray/50">
          Plongez dans un monde imaginaire, parcourez nos nombreux stands...
        </p>
        <img
          class="h-[219px] w-[357px] rounded-17xl object-cover lg:h-[319px] lg:w-[519px]"
          src="/images/acc_concert.webp"
          alt="Image lors d'un concert"
        />
      </div>
      <div class="mx-10 flex flex-row gap-[25px] lg:gap-[103px]">
        <img
          class="h-[219px] w-[357px] rounded-17xl object-cover lg:h-[319px] lg:w-[519px]"
          src="/images/acc_feux.webp"
          alt="Image des feux d'artifices"
        />
        <p class="mx-24 mt-28 font-lato text-xl text-Extended/true-gray/50">... et venez découvrir les surprises qui vous attendent.</p>
      </div>
    </div>

    <!-- Séparation -->
    <div class="hidden justify-between md:flex">
      <div class="mt-10 lg:mt-20">
        <Line />
      </div>
      <Line class="mt-10" />
    </div>

    <!-- Partie sur le formulaire de contact -->
    <div>
      <h4 class="ml-11 mt-12 font-lato text-sm text-Extended/true-gray/50 drop-shadow-xl md:mx-60 md:text-3xl lg:ml-[373px]">
        Une question ?
      </h4>
      <div class="md:hidden">
        <p class="mx-11 mt-4 font-lato text-[12px] text-Extended/true-gray/50">
          Vous avez une question ou vous désirez nous faire part d’une suggestion ? N’hésitez pas à laisser votre message dans ce formulaire
          de contact.
        </p>
        <Bouton class="mt-6 mr-5 flex justify-end pb-12" texte="Formulaire de Contact" lien="/" actif />
      </div>
      <div class="hidden flex-col md:flex">
        <p class="mx-60 mt-8 font-lato text-base text-Extended/true-gray/50 lg:mx-[373px] lg:text-xl">
          Vous avez une question ou vous désirez nous faire part d’une suggestion ? N’hésitez pas à laisser votre message dans ce formulaire
          de contact.
        </p>
        <Bouton class="mt-6 mr-[323px] flex justify-end pb-5" texte="Formulaire de Contact" lien="/contact" actif />
      </div>
    </div>
  </main>

  <!-- Footer -->
  <footer class="bg-Extended/true-gray/900">
    <Footer />
  </footer>
</template>

<script>
import Header from "../components/Header.vue";
import VignetteCarrousel from "../components/CarrouselAcc.vue";
import Bouton from "../components/Bouton.vue";
import Line from "../components/icons/Line2.vue";
import Footer from "../components/Footer.vue";
import { ChevronDownIcon } from "@heroicons/vue/outline";
export default {
  components: { Header, Bouton, VignetteCarrousel, Footer, Line, ChevronDownIcon },
};
</script>
