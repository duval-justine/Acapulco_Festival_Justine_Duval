<template>
  <div class="bg-Extended/true-gray/900">
    <header>
      <Header />
    </header>
    <main class="mt-14">
      <Entete actif />
      <div class="flex gap-4 pt-[223px] lg:pt-[350px]">
        <h4 class="ml-6 font-lato text-[12px] text-Extended/true-gray/50 lg:text-xl">En tête d'affiche</h4>
        <Line class="mt-5" />
      </div>

      <!-- Format Mobile -->
      <div class="md:hidden">
        <div class="flex w-full snap-x gap-5 overflow-x-auto">
          <div class="shrink-0 snap-center first:pl-5 last:pr-5">
            <Vignette
              class="ml-4 shrink-0"
              image="/images/prog_mg.webp"
              nom="Martin Garrix"
              date="Samedi 9 juillet - 23h30 à 3h00"
              lien="/concertmg"
            />
          </div>
          <div class="shrink-0 snap-center first:pl-5 last:pr-5">
            <Vignette class="ml-4 shrink-0" image="/images/prog_mattn.webp" nom="MATTN" date="Samedi 9 & Dimanche 10 juillet" />
          </div>
          <div class="shrink-0 snap-center first:pl-5 last:pr-5">
            <Vignette class="ml-4 shrink-0" image="/images/prog_pb.webp" nom="Petit Biscuit" date="Vendredi 8 juillet - 20h00 à 23h30" />
          </div>
          <div class="shrink-0 snap-center first:pl-5 last:pr-5">
            <Vignette class="ml-4 shrink-0" image="/images/prog_al.webp" nom="Amélie Lens" date="Vendredi 8 & Samedi 9 juillet" />
          </div>
          <div class="shrink-0 snap-center first:pl-5 last:pr-5">
            <Vignette class="ml-4 shrink-0" image="/images/prog_aw.webp" nom="Alan Walker" date="Jeudi 7 juillet - 23h30 à 3h00" />
          </div>
          <div class="shrink-0 snap-center first:pl-5 last:pr-5">
            <Vignette class="ml-4 shrink-0" image="/images/prog_lp.webp" nom="Lilly Palmer" date="Jeudi 7 & Samedi 9 juillet" />
          </div>
        </div>
        <div class="flex gap-2 pt-8">
          <h4 class="ml-6 font-lato text-[12px] text-Extended/true-gray/50">Nos grandes stars</h4>
          <Line class="mt-2" />
        </div>
        <div class="flex w-full snap-x gap-5 overflow-x-auto">
          <div class="shrink-0 snap-center first:pl-5 last:pr-5">
            <Vignette class="ml-4 shrink-0" image="/images/prog_aw.webp" nom="Alan Walker" date="Jeudi 7 juillet - 23h30 à 3h00" />
          </div>
          <div class="shrink-0 snap-center first:pl-5 last:pr-5">
            <Vignette class="ml-4 shrink-0" image="/images/prog_alesso.webp" nom="Alesso" date="Dimanche 10 juillet - 16h30 à 19h00" />
          </div>
          <div class="shrink-0 snap-center first:pl-5 last:pr-5">
            <Vignette class="ml-4 shrink-0" image="/images/prog_al.webp" nom="Amélie Lens" date="Vendredi 8 & Samedi 9 juillet" />
          </div>
          <div class="shrink-0 snap-center first:pl-5 last:pr-5">
            <Vignette class="ml-4 shrink-0" image="/images/prog_bj.webp" nom="B Jones" date="Jeudi 7 juillet - 16h00 à 18h00" />
          </div>
          <div class="shrink-0 snap-center first:pl-5 last:pr-5">
            <Vignette class="ml-4 shrink-0" image="/images/prog_fj.webp" nom="Félix Jaehn" date="Vendredi 8 juillet - 16h00 à 18h00" />
          </div>
          <div class="shrink-0 snap-center first:pl-5 last:pr-5">
            <Vignette class="ml-4 shrink-0" image="/images/prog_hfr.webp" nom="Henri PFR" date="Samedi 9 & Dimanche 10 juillet" />
          </div>
          <div class="shrink-0 snap-center first:pl-5 last:pr-5">
            <Vignette class="ml-4 shrink-0" image="/images/prog_jc.webp" nom="Joel Corry" date="Jeudi 7 juillet - 18h00 à 20h00" />
          </div>
          <div class="shrink-0 snap-center first:pl-5 last:pr-5">
            <Vignette class="ml-4 shrink-0" image="/images/prog_lp.webp" nom="Lilly Palmer" date="Jeudi 7 & Samedi 9 juillet" />
          </div>
          <div class="shrink-0 snap-center first:pl-5 last:pr-5">
            <Vignette class="ml-4 shrink-0" image="/images/prog_mg.webp" nom="Martin Garrix" date="Samedi 9 juillet - 23h30 à 3h00" />
          </div>
          <div class="shrink-0 snap-center first:pl-5 last:pr-5">
            <Vignette class="ml-4 shrink-0" image="/images/prog_mattn.webp" nom="MATTN" date="Samedi 9 & Dimanche 10 juillet" />
          </div>
          <div class="shrink-0 snap-center first:pl-5 last:pr-5">
            <Vignette class="ml-4 shrink-0" image="/images/prog_ofen.webp" nom="Ofenbach" date="Samedi 9 et Dimanche 10 juillet" />
          </div>
          <div class="shrink-0 snap-center first:pl-5 last:pr-5">
            <Vignette class="ml-4 shrink-0" image="/images/prog_pb.webp" nom="Petit Biscuit" date="Vendredi 8 juillet - 20h00 à 23h30" />
          </div>
          <div class="shrink-0 snap-center first:pl-5 last:pr-5">
            <Vignette class="ml-4 shrink-0" image="/images/prog_pp.webp" nom="Pretty Pink" date="Jeudi 7 juillet - 20h00 à 23h30" />
          </div>
          <div class="shrink-0 snap-center first:pl-5 last:pr-5">
            <Vignette class="ml-4 shrink-0" image="/images/prog_topic.webp" nom="Topic" date="Vendredi 8 juillet - 23h30 à 3h00" />
          </div>
        </div>
        <div class="flex gap-1 pt-8">
          <h4 class="ml-6 font-lato text-[12px] text-Extended/true-gray/50">Nos jeunes artistes</h4>
          <Line class="mt-2" />
        </div>
        <div class="flex w-full snap-x gap-5 overflow-x-auto pb-12">
          <div class="shrink-0 snap-center first:pl-5 last:pr-5">
            <Vignette class="ml-4 shrink-0" image="/images/prog_eluize.webp" nom="Eluize" date="Samedi 9 juillet - 20h00 à 23h30" />
          </div>
          <div class="shrink-0 snap-center first:pl-5 last:pr-5">
            <Vignette class="ml-4 shrink-0" image="/images/prog_lf.webp" nom="Lost Frequencies" date="Vendredi 8 juillet - 20h00 à 23h30" />
          </div>
          <div class="shrink-0 snap-center first:pl-5 last:pr-5">
            <Vignette class="ml-4 shrink-0" image="/images/prog_lpg.webp" nom="LP Giobbi" date="Vendredi 8 juillet - 23h30 à 3h00" />
          </div>
          <div class="shrink-0 snap-center first:pl-5 last:pr-5">
            <Vignette class="ml-4 shrink-0" image="/images/prog_madeon.webp" nom="Madeon" date="Samedi 9 juillet - 23h30 à 3h00" />
          </div>
          <div class="shrink-0 snap-center first:pl-5 last:pr-5">
            <Vignette class="ml-4 shrink-0" image="/images/prog_mt.webp" nom="Marina Trench" date="Jeudi 7 juillet - 20h00 à 23h30" />
          </div>
          <div class="shrink-0 snap-center first:pl-5 last:pr-5">
            <Vignette class="ml-4 shrink-0" image="/images/prog_mw.webp" nom="Mike Williams" date="Jeudi 7 juillet - 23h30 à 3h00" />
          </div>
          <div class="shrink-0 snap-center first:pl-5 last:pr-5">
            <Vignette class="ml-4 shrink-0" image="/images/prog_sh.webp" nom="Seth Hills" date="Vendredi 8 juillet - 16h00 à 18h00" />
          </div>
          <div class="shrink-0 snap-center first:pl-5 last:pr-5">
            <Vignette class="ml-4 shrink-0" image="/images/prog_mt.webp" nom="U.R.TRAX" date="Vendredi 8 juillet - 18h00 à 20h00" />
          </div>
          <div class="shrink-0 snap-center first:pl-5 last:pr-5">
            <Vignette class="ml-4 shrink-0" image="/images/prog_yuksek.webp" nom="Yuksek" date="Jeudi 7 juillet - 18h00 à 20h00" />
          </div>
        </div>
      </div>

      <!-- Format Desktop -->
      <div class="hidden flex-col md:flex">
        <div class="mx-12 mt-20 mb-20 grid w-11/12 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-center justify-between gap-7">
          <RouterLink to="/concertMG">
            <Vignette image="/images/prog_dmg.webp" nom="Martin Garrix" date="Samedi 9 juillet - 23h30 à 3h00" />
          </RouterLink>
          <Vignette image="/images/prog_dmattn.webp" nom="MATTN" date="Samedi 9 & Dimanche 10 juillet" />
          <Vignette image="/images/prog_dawpb.webp" nom="Petit Biscuit" date="Vendredi 8 juillet - 20h00 à 23h30" />
          <Vignette image="/images/prog_dal.webp" nom="Amélie Lens" date="Vendredi 8 & Samedi 9 juillet" />
          <Vignette image="/images/prog_daw.webp" nom="Alan Walker" date="Jeudi 7 juillet - 23h30 à 3h00" />
          <Vignette image="/images/prog_dawlp.webp" nom="Lilly Palmer" date="Jeudi 7 & Samedi 9 juillet" />
        </div>
        <div class="flex gap-2 pt-8">
          <h4 class="ml-6 font-lato text-xl text-Extended/true-gray/50">Nos grandes stars</h4>
          <Line class="mt-2" />
        </div>
        <div class="mx-12 mt-20 mb-20 grid w-11/12 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-center justify-between gap-7">
          <Vignette image="/images/prog_daw.webp" nom="Alan Walker" date="Jeudi 7 juillet - 23h30 à 3h00" />
          <Vignette image="/images/prog_dalesso.webp" nom="Alesso" date="Dimanche 10 juillet - 16h30 à 19h00" />
          <Vignette image="/images/prog_dal.webp" nom="Amélie Lens" date="Vendredi 8 & Samedi 9 juillet" />
          <Vignette image="/images/prog_dbj.webp" nom="B Jones" date="Jeudi 7 juillet - 16h00 à 18h00" />
          <Vignette image="/images/prog_dfj.webp" nom="Félix Jaehn" date="Vendredi 8 juillet - 16h00 à 18h00" />
          <Vignette image="/images/prog_dhfr.webp" nom="Henri PFR" date="Samedi 9 & Dimanche 10 juillet" />
          <Vignette image="/images/prog_dawjc.webp" nom="Joel Corry" date="Jeudi 7 juillet - 18h00 à 20h00" />
          <Vignette image="/images/prog_dawlp.webp" nom="Lilly Palmer" date="Jeudi 7 & Samedi 9 juillet" />
          <RouterLink to="/concertMG">
            <Vignette image="/images/prog_dmg.webp" nom="Martin Garrix" date="Samedi 9 juillet - 23h30 à 3h00" />
          </RouterLink>
          <Vignette image="/images/prog_dmattn.webp" nom="MATTN" date="Samedi 9 & Dimanche 10 juillet" />
          <Vignette image="/images/prog_dofen.webp" nom="Ofenbach" date="Samedi 9 et Dimanche 10 juillet" />
          <Vignette image="/images/prog_dawpb.webp" nom="Petit Biscuit" date="Vendredi 8 juillet - 20h00 à 23h30" />
          <Vignette image="/images/prog_dpp.webp" nom="Pretty Pink" date="Jeudi 7 juillet - 20h00 à 23h30" />
          <Vignette image="/images/prog_dtopic.webp" nom="Topic" date="Vendredi 8 juillet - 23h30 à 3h00" />
        </div>
        <div class="flex gap-2 pt-8">
          <h4 class="ml-6 font-lato text-xl text-Extended/true-gray/50">Nos jeunes artistes</h4>
          <Line class="mt-2" />
        </div>
        <div class="mx-12 mt-20 mb-20 grid w-11/12 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-center justify-between gap-7">
          <Vignette image="/images/prog_dlf.webp" nom="Lost Frequencies" date="Vendredi 8 juillet - 20h00 à 23h30" />
          <Vignette image="/images/prog_dlpg.webp" nom="LP Giobbi" date="Vendredi 8 juillet - 23h30 à 3h00" />
          <Vignette image="/images/prog_dmadeon.webp" nom="Madeon" date="Samedi 9 juillet - 23h30 à 3h00" />
          <Vignette image="/images/prog_deluize.webp" nom="Eluize" date="Samedi 9 juillet - 20h00 à 23h30" />
          <Vignette image="/images/prog_dmt.webp" nom="Marina Trench" date="Jeudi 7 juillet - 20h00 à 23h30" />
          <Vignette image="/images/prog_dmw.webp" nom="Mike Williams" date="Jeudi 7 juillet - 23h30 à 3h00" />
          <Vignette image="/images/prog_dsh.webp" nom="Seth Hills" date="Vendredi 8 juillet - 16h00 à 18h00" />
          <Vignette image="/images/prog_durt.webp" nom="U.R.TRAX" date="Vendredi 8 juillet - 18h00 à 20h00" />
          <Vignette image="/images/prog_dy.webp" nom="Yuksek" date="Jeudi 7 juillet - 18h00 à 20h00" />
        </div>
      </div>
    </main>
    <footer class="bg-Extended/true-gray/900">
      <Footer />
    </footer>
  </div>
</template>
<script>
import Header from "../components/Header.vue";
import Entete from "../components/EnteteProg.vue";
import Vignette from "../components/VignetteProg.vue";
import Line from "../components/icons/Line.vue";
import Footer from "../components/Footer.vue";

export default {
  components: { Header, Entete, Vignette, Line, Footer },
};
</script>
