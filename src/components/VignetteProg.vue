<template>
    <div class=" w-[270px] h-[248px] relative">
        <img class="absolute opacity-80 w-full object-cover rounded-xl" src="../../public/images/prog_aw.webp" alt="">
        <div>
            <p class="absolute mt-[214px] ml-3 text-[10px] font-lato font-semibold text-left text-Extended/amber/300 ">Jeudi 7 juillet - 23h30 à 3h00</p>
            <p class="absolute mt-44 ml-3 text-2xl font-concert-one text-Extended/true-gray/50 text-center">Alan Walker</p>
            <div class="absolute">
                <Bouton class="absolute mt-[220px] ml-44"
                texte="Informations"/>
            </div>
        </div>
    </div>  
</template>

<script>
import Bouton from './Bouton.vue'

export default {
    components: {Bouton}
}
</script>

