<template>
    <div class="md:hidden">
        <div class="pt-8 flex gap-6 justify-center">
            <Insta/>
            <Facebook/>
            <Twitter/>
            <YouTube/>
        </div>
        <div class="mt-8 flex gap-5 justify-center font-lato text-Extended/true-gray/50 text-xs">
            <RouterLink to="/festival">Festival</RouterLink>
            <RouterLink to="/mtnlegales">Mentions Légales</RouterLink>
            <RouterLink to="/">Contact</RouterLink>
        </div>
        <div class=" flex justify-between">
            <DecoBG />
            <DecoBD />
        </div>
    </div>

    <!-- Footer IPad et Desktop -->
    <div class="hidden md:flex">
        <DecoBG />
        <div class="flex flex-row justify-center flex-auto gap-52">
            <div class="mt-8 flex justify-between font-lato text-Extended/true-gray/50 text-sm lg:text-xl">
                <RouterLink to="/festival">Festival</RouterLink>
                <RouterLink to="/mtnlegales">Mentions Légales</RouterLink>
                <RouterLink to="/">Contact</RouterLink>
            </div>
            
            <div class="pt-8 flex gap-6">
                <Insta/>
                <Facebook/>
                <Twitter/>
                <YouTube/>
            </div>
        </div>
        <DecoBD />
    </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import Insta from '../components/icons/Insta.vue'
import Facebook from '../components/icons/Facebook.vue'
import Twitter from '../components/icons/Twitter.vue'
import YouTube from '../components/icons/YouTube.vue'
import DecoBG from '../components/icons/DecoFooterBG.vue'
import DecoBD from '../components/icons/DecoFooterBD.vue'

export default {
    components: {Insta, Facebook, Twitter, YouTube, DecoBG, DecoBD}
}
</script>
