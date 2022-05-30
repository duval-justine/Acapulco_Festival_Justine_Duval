<template>
<main class="bg-Extended/true-gray/900">
<Header class="z-10" />
<img class="-z-10 -mt-[85px] w-full object-cover" src="../../public/images/acc_fond.webp" alt="">
<div class="bg-Extended/amber/500 pt-14">
    <VignetteCarrousel
    image="/images/acc_carrousel1.webp"
    texte="Samedi 9 juillet"
    />
<button>
    <p class="px-[60px] py-3 font-lato text-Extended/true-gray/50 text-xl text-center drop-shadow-md">Toute la programmation</p>
</button>
</div>
<p class="mx-8 mt-16 mb-8 font-lato text-Extended/true-gray/50 text-sm">Le Jeudi 7 juillet 2022, le festival Acapul’co vous ouvre ses portes pour vous offrir un Festival grandiose ! Venez en famille ou entre amis pour s’amuser et vivre des moments inoubliables. Le festival propose cette année, une édition sur 4 jours avec une programmation de 23 artistes du monde entier.  Qu’attendez vous ? Que la fête commence !</p>
    <Bouton 
    texte="En savoir plus sur le Festival"
    lien="/"/>

<div>
    <img class="px-11 py-20 w-full object-cover" src="../../public/images/acc_scene.webp" alt="">
    <p class="font-lato text-Extended/true-gray/50 text-[12px] text-center mx-24 my-6">Deux grandes scènes pour vous offir le plus beau des spectacles.</p>
    <img class="px-11 py-6 w-full object-cover" src="../../public/images/acc_concert.webp" alt="">
    <p class="font-lato text-Extended/true-gray/50 text-[12px] text-center mx-24 my-6">Plongez dans un monde imaginaire, parcourez nos nombreux stands...</p>
    <img class="px-11 py-6 w-full object-cover" src="../../public/images/acc_feux.webp" alt="">
    <p class="font-lato text-Extended/true-gray/50 text-[12px] text-center mx-24 my-6">... et venez découvrir les surprises qui vous attendent.</p>
</div>
<div>
    <h4 class="ml-11 mt-12 font-lato text-Extended/true-gray/50 text-sm drop-shadow-xl">Une question ?</h4>
    <p class="mx-11 mt-4 font-lato text-Extended/true-gray/50 text-[12px]">Vous avez une question  ou vous désirez nous faire part d’une suggestion ? N’hésitez pas à laisser votre message dans ce formulaire de contact. </p>
    <Bouton
    texte="Formulaire de Contact"
    lien="/" />
</div>

</main>
</template>

<script>
import Header from '../components/Header.vue'
import VignetteCarrousel from '../components/CarrouselAcc.vue'
import Bouton from '../components/Bouton.vue'
export default {
    components: {Header, Bouton, VignetteCarrousel}
}
</script>
