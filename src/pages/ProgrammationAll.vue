<template>
    <div class="bg-Extended/true-gray/900">
        <header >
            <Header/>
        </header>
        <main class="mt-14">
            <Entete/>
            <div class="w-full flex gap-5 snap-x overflow-x-auto">
                <div class="snap-center shrink-0 first:pl-5 last:pr-5">
                    <Vignette class="ml-4 shrink-0"
                    image="/images/prog_mg.webp"
                    nom="Martin Garrix"
                    date="Samedi 9 juillet - 23h30 à 3h00"/>
                </div>
                <div class="snap-center shrink-0 first:pl-5 last:pr-5">
                    <Vignette class="ml-4 shrink-0"
                    image="/images/prog_mattn.webp"
                    nom="MATTN"
                    date="Samedi 9 & Dimache 10 juillet"/>
                </div>
                <div class="snap-center shrink-0 first:pl-5 last:pr-5">
                    <Vignette class="ml-4 shrink-0"
                    image="/images/prog_pb.webp"
                    nom="Petit Biscuit"
                    date="Vendredi 8 juillet - 20h00 à 23h30"/>
                </div>
                <div class="snap-center shrink-0 first:pl-5 last:pr-5">
                    <Vignette class="ml-4 shrink-0"
                    image="/images/prog_al.webp"
                    nom="Amélie Lens"
                    date="Vendredi 8 & Samedi 9 juillet"/>
                </div>
                <div class="snap-center shrink-0 first:pl-5 last:pr-5">
                    <Vignette class="ml-4 shrink-0"
                    image="/images/prog_aw.webp"
                    nom="Alan Walker"
                    date="Jeudi 7 juillet - 23h30 à 3h00"/>
                </div>
                <div class="snap-center shrink-0 first:pl-5 last:pr-5">
                    <Vignette class="ml-4 shrink-0"
                    image="/images/prog_lp.webp"
                    nom="Lilly Palmer"
                    date="Jeudi 7 & Samedi 9 juillet"/>
                </div>
            </div>
            <p class="mt-72">test</p>
        </main>
    </div>
</template>
<script>
import Header from '../components/Header.vue'
import Entete from '../components/EnteteProg.vue'
import Vignette from '../components/VignetteProg.vue'

export default {
    components: {Header, Entete, Vignette}
}
</script>
