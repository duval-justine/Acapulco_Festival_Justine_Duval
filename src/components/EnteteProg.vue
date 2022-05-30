<template>
    <div class="relative">
        <img class="absolute w-full object-cover" src="../../public/images/prog_img1.webp" alt="">
        <h1 class="absolute mt-16 mr-5 font-concert-one text-Extended/true-gray/50 text-3xl">Programmes</h1>
    </div>
    <div class="mt-40 flex gap-2 absolute">
        <Bouton
        texte="All"
        lien="/progall"/>
        <Bouton
        texte="Jeudi"
        lien="/"/>
        <Bouton
        texte="Vendredi"
        lien="/"/>
        <Bouton
        texte="Samedi"
        lien="/"/>
        <Bouton
        texte="Dimanche"
        lien="/"/>
    </div>
</template>

<script>
import Bouton from '../components/Bouton.vue'

export default {
    components: {Bouton}
}
</script>
