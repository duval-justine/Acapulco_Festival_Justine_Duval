<template>
  <div class="md:hidden">
    <div class="flex max-h-10 flex-row justify-between py-3">
      <a href="javascript:history.back()"><ArrowLeftIcon class="relative z-30 ml-8 mt-4 w-10 text-Extended/true-gray/50" /></a>
      <RouterLink to="/">
        <Logo class="relative -left-[150px] z-30" />
      </RouterLink>
      <button
        class="absolute top-0 right-0 z-50 text-xl"
        aria-haspopup="true"
        aria-controls="menu"
        :aria-expanded="menuOuvert"
        @click="menuOuvert = !menuOuvert"
      >
        <div>
          <MenuIcon v-if="!menuOuvert" class="mt-4 mr-8 w-10 text-Extended/true-gray/50" />
          <XIcon v-else class="mt-4 mr-8 w-10 text-Extended/true-gray/50" />
        </div>
        <span class="sr-only">Menu</span>
      </button>
    </div>
    <div
      id="menu"
      class="
        fixed
        inset-0
        z-50
        h-full
        translate-x-full
        bg-Extended/true-gray/900
        motion-safe:transition-transform motion-safe:duration-1000
      "
      v-if="menuOuvert"
      :class="{ 'translate-x-0': menuOuvert }"
    >
      <div>
        <DecoBD />
      </div>
      <nav>
        <ul class="flex flex-col gap-10 text-center font-concert-one text-3xl text-Extended/true-gray/50">
          <RouterLink :class="{ ' motion-safe:animate-[Depart_0.05s_cubic-bezier(.5,.5,.5,.5)]': menuOuvert }" to="/">Accueil</RouterLink>
          <RouterLink :class="{ ' motion-safe:animate-[Depart_0.1s_cubic-bezier(.5,.5,.5,.5)]': menuOuvert }" to="/progall"
            >Programmes</RouterLink
          >
          <RouterLink :class="{ ' motion-safe:animate-[Depart_0.2s_cubic-bezier(.5,.5,.5,.5)]': menuOuvert }" to="/artistes"
            >Artistes</RouterLink
          >
          <RouterLink :class="{ ' motion-safe:animate-[Depart_0.3s_cubic-bezier(.5,.5,.5,.5)]': menuOuvert }" to="/festival"
            >Festival</RouterLink
          >
          <RouterLink :class="{ ' motion-safe:animate-[Depart_0.4s_cubic-bezier(.5,.5,.5,.5)]': menuOuvert }" to="/contact"
            >Contact</RouterLink
          >
          <RouterLink :class="{ ' motion-safe:animate-[Depart_0.4s_cubic-bezier(.5,.5,.5,.5)]': menuOuvert }" to="/connexion"
            >Connexion</RouterLink
          >
        </ul>
      </nav>
      <div>
        <DecoHG class="ml-auto" />
      </div>
    </div>
  </div>
  <div class="relative z-30 mx-8 hidden justify-between pt-5 md:flex">
    <RouterLink to="/">
      <Logo class="relative z-30 ml-8" />
    </RouterLink>
    <div
      class="
        relative
        flex flex-shrink-0 flex-grow-0
        items-center
        justify-start
        gap-16
        font-lato
        text-base
        font-semibold
        text-Extended/true-gray/50
      "
    >
      <RouterLink class="lg:text-lg lg:hover:text-Extended/amber/500" to="/progall">Programmation</RouterLink>
      <RouterLink class="lg:text-lg lg:hover:text-Extended/amber/500" to="/artistes">Artistes</RouterLink>
      <RouterLink class="lg:text-lg lg:hover:text-Extended/amber/500" to="/festival">Festival</RouterLink>
      <RouterLink class="lg:text-lg lg:hover:text-Extended/amber/500" to="/contact">Contact</RouterLink>
      <RouterLink class="lg:text-lg lg:hover:text-Extended/amber/500" to="/connexion">Connexion</RouterLink>
    </div>
  </div>
</template>

<script>
import Logo from "./icons/LogoFestival.vue";
import DecoHG from "./icons/DecoHG.vue";
import DecoBD from "./icons/DecoBD.vue";
import { MenuIcon, XIcon, ArrowLeftIcon } from "@heroicons/vue/outline";

export default {
  components: { Logo, MenuIcon, XIcon, ArrowLeftIcon, DecoHG, DecoBD },

  data() {
    return {
      menuOuvert: false,
    };
  },
  beforeMount() {
    this.$router.afterEach(() => (this.menuOuvert = false));
  },
};
</script>
