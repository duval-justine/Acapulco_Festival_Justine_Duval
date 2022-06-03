<template>
  <div class="mx-11 flex justify-center">
    <div class="mt-[90px] h-[190px] w-[287px] rounded-16xl bg-Extended/amber/300 lg:h-[379.2px] lg:w-[572.79px]">
      <div class="ml-8 mt-[15px] flex flex-col gap-4 lg:mt-14">
        <a href="https://www.instagram.com/martingarrix/?hl=fr"><Insta class="h-5 w-5 lg:h-10 lg:w-10" /></a>
        <a href="https://twitter.com/MartinGarrix"><Twitter class="h-5 w-5 lg:h-10 lg:w-10" /></a>
        <a href="https://www.facebook.com/martin.garrix"><Facebook class="h-5 w-5 lg:h-10 lg:w-10" /></a>
        <a href="https://www.youtube.com/channel/UC5H_KXkPbEsGs0tFt8R35mA"><YouTube class="h-5 w-5 lg:h-10 lg:w-10" /></a>
        <a href="https://martingarrix.com/"><LinkIcon class="h-5 w-5 text-Extended/true-gray/50 lg:h-10 lg:w-10" /></a>
      </div>
      <img
        class="absolute -mt-[225px] ml-5 h-[237px] w-[267px] lg:ml-[40px] lg:-mt-[413px] lg:h-[473px] lg:w-[532.87px]"
        src="/images/martin_garrix.png"
        alt=""
      />
    </div>
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
