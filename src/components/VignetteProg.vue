<template>
    <!-- Composant Mobile -->
    <div class="mt-8 w-[270px] h-[256px] relative md:hidden">
        <img class="absolute opacity-80 w-full object-cover rounded-xl" :src="image" alt="">
        <div>
            <p class="absolute mt-[214px] ml-3 text-[10px] font-lato font-semibold text-left text-Extended/amber/300 ">{{date}}</p>
            <p class="absolute mt-44 ml-3 text-2xl font-concert-one text-Extended/true-gray/50 text-center">{{nom}}</p>
            <div class="absolute">
                <RouterLink :to="lien" >
                    <button class="mt-[220px] ml-44 bg-Extended/amber/500 rounded-lg drop-shadow-md">
                        <p class="py-2 px-3 font-lato text-Extended/true-gray/50 text-[12px] drop-shadow-md">Informations</p>
                    </button>
                </RouterLink>
            </div>
        </div>
    </div>  

    <!-- Composant Desktop -->
    <div class="md:flex flex-col">
        <img class="w-full object-cover hover:opacity-20" :src="image" alt="">
        <h2 class="mt-5 font-concert-one text-Extended/true-gray/50 text-3xl">{{nom}}</h2>
        <p class="mt-5 font-lato text-Extended/amber/300 text-lg">{{date}}</p>
    </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";


export default {
    props: {
        image: String,
        date: String,
        nom: String,
        lien:{
            type: String,
            default:"/"
        }
    }
}
</script>

