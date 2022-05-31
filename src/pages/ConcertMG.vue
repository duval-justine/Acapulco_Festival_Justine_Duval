<template>
    <header>
        <HeaderRetour/>
    </header>
    <main class="bg-Extended/true-gray/900">
        <Vignette
        image="/images/concert_mg.webp"
        nom="Martin Garrix"
        date="Samedi 9 juillet 2022"
        heure="23h30 - 3h00"/>
        <div class="mx-8">
            <h3 class="font-lato text-sm text-Extended/true-gray/50">Description :</h3>
            <p class="mt-2 font-lato text-xs text-Extended/true-gray/50">Martin Garrix est un DJ hollandais né en 1996 à Amsterdam. A l’âge de seulement 16 ans il sort son premier titre “Keygen” qui est un morceau électro dans un style épuré. En 2013, il sort son single “Animals” qui devient célèbre dans la scène de l’électro. </p>
            <RouterLink to="/martingarrix" class="mt-2 relative font-lato text-xs text-Extended/amber/500 flex justify-end">
             Lire la suite
            </RouterLink>
        </div>
        <div class="mx-8">
            <h3 class="font-lato text-sm text-Extended/true-gray/50">Lieu :</h3>
            <p class="mt-2 font-lato text-xs text-Extended/true-gray/50">Scène Pul’co Playa - Plage des Ayguades</p>
            <div class="mt-2 flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-[13px]">
                <img class="flex-grow-0 flex-shrink-0 object-none w-[147px] h-[138px] rounded-[10px]" src="../../public/images/concert_scene1.webp" alt="">
                <img class="flex-grow-0 flex-shrink-0 object-none w-[147px] h-[138px] rounded-[10px]" src="../../public/images/concert_scene1_carte.webp" alt="">
            </div>
        </div>
    </main>
    <footer>
        <Footer/>
    </footer>
</template>

<script>
import HeaderRetour from '../components/HeaderRetour.vue'
import Vignette from '../components/VignetteConcert.vue'
import Footer from '../components/Footer.vue'

export default {
    components: {HeaderRetour, Vignette, Footer}
}
</script>
