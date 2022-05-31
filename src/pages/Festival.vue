<template>
    <header>
        <Header class="z-10 relative"/>
    </header>
    <main>
    <img class="-mt-[85px] max-h-[812px] min-h-[805px] opacity-80 w-full object-cover" src="../../public/images/festi_fond.webp" alt="">
    <div class="mt-7 mx-7 font-lato text-xs text-Extended/true-gray/50">
        <p>Acapul’co est un Festival situé dans le département de l’Aude est plus précisement dans le petit village de Gruissan.</p>
        <p class="mt-4"> C’est un festival de musique principalement de l’éléctro avec des dj qui viennent du monde entier spécialement pour vous ! </p>
        <p class="mt-4">Le festival est composé de deux grandes scènes, de plusieurs espaces pour pouvoir s’hydrater et se ressoucer. Ainsi que des espaces pour vous amusez et remportez des goodies. Et à la fin de la soirée nous vous préparons d’autres surprises qui sont à venir découvrir...</p>
    </div>
    <div class="mt-3 flex justify-center">
    <img class="rounded-[40px] w-[312px] h-[189px] opacity-80 object-cover" src="../../public/images/festi_img1.webp" alt="">
   </div>
   <h2 class="mt-10 ml-7 font-lato text-sm text-Extended/true-gray/50 font-bold">La plage de Mateille</h2>
   <div class="mt-3 mx-7 flex justify-center">
       <img src="../../public/images/festi_carte.png" alt="">
   </div>
   <div class="mt-6 mx-7 font-lato text-xs text-Extended/true-gray/50">
       <p>La plage de Mateille est situé entre l’Étang de Mateille et l’entrée du port. C’est l’une des plages les plus sauvages de Gruissan et elle s’étend sur 1,2km.</p>
       <p class="mt-4">Pour vous rendre sur cette plage depuis le port de Gruissan, il suffit de prendre l’avenue des plages, puis de passer le pont qui passe au dessus de l’étang de Mateille.</p>
       <p class="mt-4">Cette plage dispose d’un grand parking situé juste après le petit pont qui passe au dessus de l’Étang de Mateille. </p>
   </div>
   <div class="mt-3 flex justify-center">
    <img class="rounded-[40px] w-[312px] h-[189px] object-cover" src="../../public/images/festi_img2.webp" alt="">
   </div>
   <h2 class="mt-10 ml-7 font-lato text-sm text-Extended/true-gray/50 font-bold">Deux grandes scènes</h2>
   <div class="mt-3 flex justify-center">
    <img class="rounded-[40px] w-[312px] h-[189px] object-cover" src="../../public/images/festi_pulcoplaya.webp" alt="">
   </div>
   <div class="mt-3 flex justify-center">
    <img class="rounded-[40px] w-[312px] h-[189px] object-cover" src="../../public/images/festi_acaplaya.webp" alt="">
   </div>
    </main>
    <footer>
        <Footer/>
    </footer>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
    components: {Header, Footer}
}
</script>
