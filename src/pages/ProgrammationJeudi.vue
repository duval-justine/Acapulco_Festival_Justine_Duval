<template>
  <!-- Header -->
  <header>
    <Header />
  </header>

  <!-- Contenus -->

  <main class="mt-14">
    <Entete actif2 />
    <div class="flex gap-4 pt-[223px] lg:pt-[350px]">
      <h4 class="ml-6 font-lato text-[12px] text-Extended/true-gray/50 lg:text-xl">En tête d'affiche</h4>
      <Line class="mt-5" />
    </div>

    <!-- Format Mobile -->
    <div class="md:hidden">
      <div class="flex w-full snap-x gap-5 overflow-x-auto">
        <div class="shrink-0 snap-center first:pl-5 last:pr-5">
          <Vignette class="ml-4 shrink-0" image="/images/prog_aw.webp" nom="Alan Walker" date="Jeudi 7 juillet - 23h30 à 3h00" />
        </div>
        <div class="shrink-0 snap-center first:pl-5 last:pr-5">
          <Vignette class="ml-4 shrink-0" image="/images/prog_lp.webp" nom="Lilly Palmer" date="Jeudi 7 juillet - 16h00 à 18h00" />
        </div>
        <div class="shrink-0 snap-center first:pl-5 last:pr-5">
          <Vignette class="ml-4 shrink-0" image="/images/prog_pp.webp" nom="Pretty Pink" date="Jeudi 7 juillet - 20h00 à 23h30" />
        </div>
      </div>
      <div class="flex gap-2 pt-8">
        <h4 class="ml-6 font-lato text-[12px] text-Extended/true-gray/50">Aca Playa</h4>
        <Line class="mt-2" />
      </div>
      <div class="flex w-full snap-x gap-5 overflow-x-auto">
        <div class="shrink-0 snap-center first:pl-5 last:pr-5">
          <Vignette class="ml-4 shrink-0" image="/images/prog_lp.webp" nom="Lilly Palmer" date="Jeudi 7 juillet - 16h00 à 18h00" />
        </div>
        <div class="shrink-0 snap-center first:pl-5 last:pr-5">
          <Vignette class="ml-4 shrink-0" image="/images/prog_mt.webp" nom="Yuksek" date="Jeudi 7 juillet - 18h00 à 20h00" />
        </div>
        <div class="shrink-0 snap-center first:pl-5 last:pr-5">
          <Vignette class="ml-4 shrink-0" image="/images/prog_mt.webp" nom="Marina Trench" date="Jeudi 7 juillet - 20h00 à 23h30" />
        </div>
        <div class="shrink-0 snap-center first:pl-5 last:pr-5">
          <Vignette class="ml-4 shrink-0" image="/images/prog_mw.webp" nom="Mike Williams" date="Jeudi 7 juillet - 23h30 à 3h00" />
        </div>
      </div>
      <div class="flex gap-1 pt-8">
        <h4 class="ml-6 font-lato text-[12px] text-Extended/true-gray/50">Pulco Playa</h4>
        <Line class="mt-2" />
      </div>
      <div class="flex w-full snap-x gap-5 overflow-x-auto pb-12">
        <div class="shrink-0 snap-center first:pl-5 last:pr-5">
          <Vignette class="ml-4 shrink-0" image="/images/prog_bj.webp" nom="B Jones" date="Jeudi 7 juillet - 16h00 à 18h00" />
        </div>
        <div class="shrink-0 snap-center first:pl-5 last:pr-5">
          <Vignette class="ml-4 shrink-0" image="/images/prog_jc.webp" nom="Joel Corry" date="Jeudi 7 juillet - 18h00 à 20h00" />
        </div>
        <div class="shrink-0 snap-center first:pl-5 last:pr-5">
          <Vignette class="ml-4 shrink-0" image="/images/prog_pp.webp" nom="Pretty Pink" date="Jeudi 7 juillet - 20h00 à 23h30" />
        </div>
        <div class="shrink-0 snap-center first:pl-5 last:pr-5">
          <Vignette class="ml-4 shrink-0" image="/images/prog_aw.webp" nom="Alan Walker" date="Jeudi 7 juillet - 23h30 à 3h00" />
        </div>
      </div>
    </div>

    <!-- Format Desktop  -->
    <div class="hidden flex-col md:flex">
      <div class="mx-12 mt-20 mb-20 grid w-11/12 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-center justify-between gap-7">
        <Vignette image="/images/prog_daw.webp" nom="Alan Walker" date="Jeudi 7 juillet - 23h30 à 3h00" />
        <Vignette image="/images/prog_dawlp.webp" nom="Lilly Palmer" date="Jeudi 7 juillet -16h00 à 18h00" />
        <Vignette image="/images/prog_dpp.webp" nom="Pretty Pink" date="Jeudi 7 juillet - 20h00 à 23h30" />
      </div>
      <div class="flex gap-2 pt-8">
        <h4 class="ml-6 font-lato text-xl text-Extended/true-gray/50">Aca Playa</h4>
        <Line class="mt-2" />
      </div>
      <div class="mx-12 mt-20 mb-20 grid w-11/12 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-center justify-between gap-7">
        <Vignette image="/images/prog_dawlp.webp" nom="Lilly Palmer" date="Jeudi 7 juillet - 16h00 à 18h00" />
        <Vignette image="/images/prog_dy.webp" nom="Yuksek" date="Jeudi 7 juillet - 18h00 à 20h00" />
        <Vignette image="/images/prog_dmt.webp" nom="Marina Trench" date="Jeudi 7 juillet - 20h00 à 23h30" />
        <Vignette image="/images/prog_dmw.webp" nom="Mike Williams" date="Jeudi 7 juillet - 23h30 à 3h00" />
      </div>
      <div class="flex gap-2 pt-8">
        <h4 class="ml-6 font-lato text-xl text-Extended/true-gray/50">Pulco Playa</h4>
        <Line class="mt-2" />
      </div>
      <div class="mx-12 mt-20 mb-20 grid w-11/12 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-center justify-between gap-7">
        <Vignette image="/images/prog_dbj.webp" nom="B Jones" date="Jeudi 7 juillet - 16h00 à 18h00" />
        <Vignette image="/images/prog_dawjc.webp" nom="Joel Corry" date="Jeudi 7 juillet - 18h00 à 20h00" />
        <Vignette image="/images/prog_dpp.webp" nom="Pretty Pink" date="Jeudi 7 juillet - 20h00 à 23h30" />
        <Vignette image="/images/prog_daw.webp" nom="Alan Walker" date="Jeudi 7 juillet - 23h30 à 3h00" />
      </div>
    </div>
  </main>
  <!-- Footer -->
  <footer class="bg-Extended/true-gray/900">
    <Footer />
  </footer>
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
