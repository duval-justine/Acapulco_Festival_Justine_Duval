<template>
  <div class="relative mx-11 flex justify-center">
    <div class="absolute mt-[90px] h-[190px] w-[287px] rounded-16xl bg-Extended/amber/300"></div>
    <div class="absolute ml-8 mt-[105px] flex flex-col gap-4">
      <a href="https://www.instagram.com/martingarrix/?hl=fr"><Insta class="h-5 w-5" /></a>
      <a href="https://twitter.com/MartinGarrix"><Twitter class="h-5 w-5" /></a>
      <a href="https://www.facebook.com/martin.garrix"><Facebook class="h-5 w-5" /></a>
      <a href="https://www.youtube.com/channel/UC5H_KXkPbEsGs0tFt8R35mA"><YouTube class="h-5 w-5" /></a>
      <a href="https://martingarrix.com/"><LinkIcon class="h-5 w-5 text-Extended/true-gray/50" /></a>
    </div>
    <img class="absolute ml-4 mt-10" src="../../public/images/martin_garrix.png" alt="" />
  </div>
</template>

<script>
import Insta from "../components/icons/Insta.vue";
import Twitter from "../components/icons/Twitter.vue";
import Facebook from "../components/icons/Facebook.vue";
import YouTube from "../components/icons/YouTube.vue";
import { LinkIcon } from "@heroicons/vue/outline";

export default {
  components: { Insta, Twitter, Facebook, YouTube, LinkIcon },
};
</script>
