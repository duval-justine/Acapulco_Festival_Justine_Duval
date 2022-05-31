<template>
    <div class="relative">
        <img class="absolute opacity-50 w-full object-cover" src="../../public/images/prog_img1.webp" alt="">
        <h1 class="absolute mt-16 ml-5  font-concert-one text-Extended/true-gray/50 text-3xl">Programmes</h1>
    </div>
    <div class="mt-40 ml-5 flex gap-2 absolute">
        <RouterLink to="/progall" class="bg-Extended/amber/500 rounded-md drop-shadow-mdpy-2 px-3 font-lato text-Extended/true-gray/50 text-[12px] ">
        All
        </RouterLink>
        <RouterLink to="/progall" class="bg-Extended/amber/500 rounded-md drop-shadow-mdpy-2 px-3 font-lato text-Extended/true-gray/50 text-[12px] ">
        Jeudi
        </RouterLink>
        <RouterLink to="/progall" class="bg-Extended/amber/500 rounded-md drop-shadow-mdpy-2 px-3 font-lato text-Extended/true-gray/50 text-[12px] ">
        Vendredi
        </RouterLink>
        <RouterLink to="/progall" class="bg-Extended/amber/500 rounded-md drop-shadow-mdpy-2 px-3 font-lato text-Extended/true-gray/50 text-[12px] ">
        Samedi
        </RouterLink>
        <RouterLink to="/progall" class="bg-Extended/amber/500 rounded-md drop-shadow-mdpy-2 px-3 font-lato text-Extended/true-gray/50 text-[12px] ">
        Dimanche
        </RouterLink>
    </div>
</template>

<script>
import Bouton from '../components/Bouton.vue'

export default {
    components: {Bouton}, 
    props: {
        
    }
}
</script>
