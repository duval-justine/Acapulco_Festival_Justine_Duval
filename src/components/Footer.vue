<template>
  <div class="md:hidden">
    <div class="flex justify-center gap-6 pt-8">
      <Insta />
      <Facebook />
      <Twitter />
      <YouTube />
    </div>
    <div class="mt-8 flex justify-center gap-5 font-lato text-xs text-Extended/true-gray/50">
      <RouterLink to="/festival">Festival</RouterLink>
      <RouterLink to="/mtnlegales">Mentions Légales</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
    </div>
    <div class="flex justify-between">
      <DecoBG />
      <DecoBD />
    </div>
  </div>

  <!-- Footer IPad et Desktop -->
  <div class="hidden md:flex">
    <DecoBG />
    <div class="flex flex-auto flex-row justify-center gap-52">
      <div class="mt-8 flex justify-between gap-12 font-lato text-sm text-Extended/true-gray/50 lg:text-xl">
        <RouterLink to="/festival">Festival</RouterLink>
        <RouterLink to="/mtnlegales">Mentions Légales</RouterLink>
        <RouterLink to="/">Contact</RouterLink>
      </div>

      <div class="flex gap-6 pt-8">
        <Insta />
        <Facebook />
        <Twitter />
        <YouTube />
      </div>
    </div>
    <DecoBD />
  </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import Insta from "../components/icons/Insta.vue";
import Facebook from "../components/icons/Facebook.vue";
import Twitter from "../components/icons/Twitter.vue";
import YouTube from "../components/icons/YouTube.vue";
import DecoBG from "../components/icons/DecoFooterBG.vue";
import DecoBD from "../components/icons/DecoFooterBD.vue";

export default {
  components: { Insta, Facebook, Twitter, YouTube, DecoBG, DecoBD },
};
</script>
