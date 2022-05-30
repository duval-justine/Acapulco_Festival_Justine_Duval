<template>
    <div class="bg-Extended/true-gray/900">
        <header >
            <Header/>
        </header>
        <main class="mt-14">
            <Entete/>
            <div class="pt-[223px] flex gap-4">
                <h4 class="ml-6 font-lato text-[12px] text-Extended/true-gray/50">En tête d'affiche</h4>
                <Line class="mt-2"/>
            </div>
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
                    date="Samedi 9 & Dimanche 10 juillet"/>
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
            <div class="pt-8 flex gap-2">
                <h4 class="ml-6 font-lato text-[12px] text-Extended/true-gray/50">Nos grandes stars</h4>
                <Line class="mt-2"/>
            </div>
            <div class="w-full flex gap-5 snap-x overflow-x-auto">
                <div class="snap-center shrink-0 first:pl-5 last:pr-5">
                    <Vignette class="ml-4 shrink-0"
                    image="/images/prog_aw.webp"
                    nom="Alan Walker"
                    date="Jeudi 7 juillet - 23h30 à 3h00"/>
                </div>
                <div class="snap-center shrink-0 first:pl-5 last:pr-5">
                    <Vignette class="ml-4 shrink-0"
                    image="/images/prog_alesso.webp"
                    nom="Alesso"
                    date="Dimanche 10 juillet - 16h30 à 19h00"/>
                </div>
                <div class="snap-center shrink-0 first:pl-5 last:pr-5">
                    <Vignette class="ml-4 shrink-0"
                    image="/images/prog_al.webp"
                    nom="Amélie Lens"
                    date="Vendredi 8 & Samedi 9 juillet"/>
                </div>
                <div class="snap-center shrink-0 first:pl-5 last:pr-5">
                    <Vignette class="ml-4 shrink-0"
                    image="/images/prog_bj.webp"
                    nom="B Jones"
                    date="Jeudi 7 juillet - 16h00 à 18h00"/>
                </div>
                <div class="snap-center shrink-0 first:pl-5 last:pr-5">
                    <Vignette class="ml-4 shrink-0"
                    image="/images/prog_fj.webp"
                    nom="Félix Jaehn"
                    date="Vendredi 8 juillet - 16h00 à 18h00"/>
                </div>
                <div class="snap-center shrink-0 first:pl-5 last:pr-5">
                    <Vignette class="ml-4 shrink-0"
                    image="/images/prog_hfr.webp"
                    nom="Henri PFR"
                    date="Samedi 9 & Dimanche 10 juillet"/>
                </div>
                <div class="snap-center shrink-0 first:pl-5 last:pr-5">
                    <Vignette class="ml-4 shrink-0"
                    image="/images/prog_jc.webp"
                    nom="Joel Corry"
                    date="Jeudi 7 juillet - 18h00 à 20h00"/>
                </div>
                <div class="snap-center shrink-0 first:pl-5 last:pr-5">
                    <Vignette class="ml-4 shrink-0"
                    image="/images/prog_lp.webp"
                    nom="Lilly Palmer"
                    date="Jeudi 7 & Samedi 9 juillet"/>
                </div>
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
                    date="Samedi 9 & Dimanche 10 juillet"/>
                </div>
                <div class="snap-center shrink-0 first:pl-5 last:pr-5">
                    <Vignette class="ml-4 shrink-0"
                    image="/images/prog_ofen.webp"
                    nom="Ofenbach"
                    date="Samedi 9 et Dimanche 10 juillet"/>
                </div>
                <div class="snap-center shrink-0 first:pl-5 last:pr-5">
                    <Vignette class="ml-4 shrink-0"
                    image="/images/prog_pb.webp"
                    nom="Petit Biscuit"
                    date="Vendredi 8 juillet - 20h00 à 23h30"/>
                </div>
                <div class="snap-center shrink-0 first:pl-5 last:pr-5">
                    <Vignette class="ml-4 shrink-0"
                    image="/images/prog_pp.webp"
                    nom="Pretty Pink"
                    date="Jeudi 7 juillet - 20h00 à 23h30"/>
                </div>
                <div class="snap-center shrink-0 first:pl-5 last:pr-5">
                    <Vignette class="ml-4 shrink-0"
                    image="/images/prog_topic.webp"
                    nom="Topic"
                    date="Vendredi 8 juillet - 23h30 à 3h00"/>
                </div>
            </div>
            <div class="pt-8 flex gap-1">
                <h4 class="ml-6 font-lato text-[12px] text-Extended/true-gray/50">Nos jeunes artistes</h4>
                <Line class="mt-2"/>
            </div>
            <div class="w-full flex gap-5 snap-x overflow-x-auto pb-12">
                <div class="snap-center shrink-0 first:pl-5 last:pr-5">
                    <Vignette class="ml-4 shrink-0"
                    image="/images/prog_eluize.webp"
                    nom="Eluize"
                    date="Samedi 9 juillet - 20h00 à 23h30"/>
                </div>
                <div class="snap-center shrink-0 first:pl-5 last:pr-5">
                    <Vignette class="ml-4 shrink-0"
                    image="/images/prog_lf.webp"
                    nom="Lost Frequencies"
                    date="Vendredi 8 juillet - 20h00 à 23h30"/>
                </div>
                <div class="snap-center shrink-0 first:pl-5 last:pr-5">
                    <Vignette class="ml-4 shrink-0"
                    image="/images/prog_lpg.webp"
                    nom="LP Giobbi"
                    date="Vendredi 8 juillet - 23h30 à 3h00"/>
                </div>
                <div class="snap-center shrink-0 first:pl-5 last:pr-5">
                    <Vignette class="ml-4 shrink-0"
                    image="/images/prog_madeon.webp"
                    nom="Madeon"
                    date="Samedi 9 juillet - 23h30 à 3h00"/>
                </div>
                <div class="snap-center shrink-0 first:pl-5 last:pr-5">
                    <Vignette class="ml-4 shrink-0"
                    image="/images/prog_mt.webp"
                    nom="Marina Trench"
                    date="Jeudi 7 juillet - 20h00 à 23h30"/>
                </div>
                <div class="snap-center shrink-0 first:pl-5 last:pr-5">
                    <Vignette class="ml-4 shrink-0"
                    image="/images/prog_mw.webp"
                    nom="Mike Williams"
                    date="Jeudi 7 juillet - 23h30 à 3h00"/>
                </div>
                <div class="snap-center shrink-0 first:pl-5 last:pr-5">
                    <Vignette class="ml-4 shrink-0"
                    image="/images/prog_sh.webp"
                    nom="Seth Hills"
                    date="Vendredi 8 juillet - 16h00 à 18h00"/>
                </div>
                <div class="snap-center shrink-0 first:pl-5 last:pr-5">
                    <Vignette class="ml-4 shrink-0"
                    image="/images/prog_mt.webp"
                    nom="U.R.TRAX"
                    date="Vendredi 8 juillet - 18h00 à 20h00"/>
                </div>
            </div>
        </main>
        <footer class="bg-Extended/true-gray/900">
        <Footer/>
        </footer>
    </div>
</template>
<script>
import Header from '../components/Header.vue'
import Entete from '../components/EnteteProg.vue'
import Vignette from '../components/VignetteProg.vue'
import Line from '../components/icons/Line.vue'
import Footer from '../components/Footer.vue'

export default {
    components: {Header, Entete, Vignette, Line, Footer}
}
</script>
