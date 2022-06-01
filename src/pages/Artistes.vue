<template>
  <!-- Header -->
  <header>
    <Header />
  </header>
  <!-- Contenus -->
  <main>
    <h1 class="mt-12 font-concert-one text-3xl text-Extended/true-gray/50">Artistes</h1>
    <!-- Mobile -->
    <div class="md:hidden">
      <Vignette class="mt-12 pb-52" image="/images/prog_daw.webp" nom="Alan Walker" date="Jeudi 7 juillet" lien="/" actif />
      <Vignette class="mt-12 pb-52" image="/images/prog_dalesso.webp" nom="Alesso" date="Dimanche 10 juillet" lien="/" actif />
      <Vignette class="mt-12 pb-52" image="/images/prog_dal.webp" nom="Amélie Lens" date="Vendredi 8 & Samedi 9 juillet" lien="/" actif />
      <Vignette class="mt-12 pb-52" image="/images/prog_dbj.webp" nom="B Jones" date="Jeudi 7 juillet" lien="/" actif />
      <Vignette class="mt-12 pb-52" image="/images/prog_deluize.webp" nom="Eluize" date="Samedi 9 juillet" lien="/" actif />
      <Vignette class="mt-12 pb-52" image="/images/prog_dfj.webp" nom="Felix Jaehn" date="Vendredi 9 juillet" lien="/" actif />
      <Vignette class="mt-12 pb-52" image="/images/prog_dhfr.webp" nom="Henri PFR" date="Samedi 9 & Dimanche 10 juillet" lien="/" actif />
      <Vignette class="mt-12 pb-52" image="/images/prog_dawjc.webp" nom="Joel Corry" date="Jeudi 7 juillet" lien="/" actif />
      <Vignette class="mt-12 pb-52" image="/images/prog_dawlp.webp" nom="Lilly Palmer" date="Jeudi 7 & Samedi 9 juillet" lien="/" actif />
      <Vignette
        class="mt-12 pb-52"
        image="/images/prog_dlf.webp"
        nom="Lost Frequencies"
        date="Vendredi 9 & Samedi 9 juillet"
        lien="/"
        actif
      />
      <Vignette class="mt-12 pb-12" image="/images/prog_dlpg.webp" nom="LP Giobbi" date="Vendredi 9 juillet" lien="/" actif />
      <Vignette class="mt-12 pb-52" image="/images/prog_dmadeon.webp" nom="Madeon" date="Samedi 9 juillet" lien="/" actif />
      <Vignette class="mt-12 pb-52" image="/images/prog_dmt.webp" nom="Marina Trench" date="Jeudi 7 juillet" lien="/" actif />
      <Vignette class="mt-12 pb-52" image="/images/prog_dmg.webp" nom="Martin Garrix" date="Samedi 9 juillet" lien="/" actif />
      <Vignette class="mt-12 pb-52" image="/images/prog_dmattn.webp" nom="MATTN" date="Samedi 9 & Dimanche10 juillet" lien="/" actif />
      <Vignette class="mt-12 pb-52" image="/images/prog_dmw.webp" nom="Mike Williams" date="Jeudi 7 juillet" lien="/" actif />
      <Vignette class="mt-12 pb-52" image="/images/prog_dofen.webp" nom="Ofenbach" date="Samedi 9 & Dimanche10 juillet" lien="/" actif />
      <Vignette class="mt-12 pb-52" image="/images/prog_dawpb.webp" nom="Petit Biscuit" date="Vendredi 9 juillet" lien="/" actif />
      <Vignette class="mt-12 pb-52" image="/images/prog_dpp.webp" nom="Pretty Pink" date="Jeudi 7 juillet" lien="/" actif />
      <Vignette class="mt-12 pb-52" image="/images/prog_dsh.webp" nom="Seth Hills" date="Vendredi 9 juillet" lien="/" actif />
      <Vignette class="mt-12 pb-52" image="/images/prog_dtopic.webp" nom="Topic" date="Vendredi 9 juillet" lien="/" actif />
      <Vignette class="mt-12 pb-52" image="/images/prog_durt.webp" nom="U.R.TRAX" date="Vendredi 9 juillet" lien="/" actif />
      <Vignette class="mt-12 pb-52" image="/images/prog_dy.webp" nom="Yuksek" date="Jeudi 7 juillet" lien="/" actif />
    </div>
    <!-- Reponsive -->
    <div class="hidden md:flex">
      <div class="mx-12 mt-20 mb-20 grid w-11/12 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-center justify-between gap-7">
        <Vignette class="mt-12 pb-52" image="/images/prog_daw.webp" nom="Alan Walker" date="Jeudi 7 juillet" lien="/" actif />
        <Vignette class="mt-12 pb-52" image="/images/prog_dalesso.webp" nom="Alesso" date="Dimanche 10 juillet" lien="/" actif />
        <Vignette class="mt-12 pb-52" image="/images/prog_dal.webp" nom="Amélie Lens" date="Vendredi 8 & Samedi 9 juillet" lien="/" actif />
        <Vignette class="mt-12 pb-52" image="/images/prog_dbj.webp" nom="B Jones" date="Jeudi 7 juillet" lien="/" actif />
        <Vignette class="mt-12 pb-52" image="/images/prog_deluize.webp" nom="Eluize" date="Samedi 9 juillet" lien="/" actif />
        <Vignette class="mt-12 pb-52" image="/images/prog_dfj.webp" nom="Felix Jaehn" date="Vendredi 9 juillet" lien="/" actif />
        <Vignette class="mt-12 pb-52" image="/images/prog_dhfr.webp" nom="Henri PFR" date="Samedi 9 & Dimanche 10 juillet" lien="/" actif />
        <Vignette class="mt-12 pb-52" image="/images/prog_dawjc.webp" nom="Joel Corry" date="Jeudi 7 juillet" lien="/" actif />
        <Vignette class="mt-12 pb-52" image="/images/prog_dawlp.webp" nom="Lilly Palmer" date="Jeudi 7 & Samedi 9 juillet" lien="/" actif />
        <Vignette
          class="mt-12 pb-52"
          image="/images/prog_dlf.webp"
          nom="Lost Frequencies"
          date="Vendredi 9 & Samedi 9 juillet"
          lien="/"
          actif
        />
        <Vignette class="mt-12 pb-52" image="/images/prog_dlpg.webp" nom="LP Giobbi" date="Vendredi 9 juillet" lien="/" actif />
        <Vignette class="mt-12 pb-52" image="/images/prog_dmadeon.webp" nom="Madeon" date="Samedi 9 juillet" lien="/" actif />
        <Vignette class="mt-12 pb-52" image="/images/prog_dmt.webp" nom="Marina Trench" date="Jeudi 7 juillet" lien="/" actif />
        <Vignette class="mt-12 pb-52" image="/images/prog_dmg.webp" nom="Martin Garrix" date="Samedi 9 juillet" lien="/" actif />
        <Vignette class="mt-12 pb-52" image="/images/prog_dmattn.webp" nom="MATTN" date="Samedi 9 & Dimanche10 juillet" lien="/" actif />
        <Vignette class="mt-12 pb-52" image="/images/prog_dmw.webp" nom="Mike Williams" date="Jeudi 7 juillet" lien="/" actif />
        <Vignette class="mt-12 pb-52" image="/images/prog_dofen.webp" nom="Ofenbach" date="Samedi 9 & Dimanche10 juillet" lien="/" actif />
        <Vignette class="mt-12 pb-52" image="/images/prog_dawpb.webp" nom="Petit Biscuit" date="Vendredi 9 juillet" lien="/" actif />
        <Vignette class="mt-12 pb-52" image="/images/prog_dpp.webp" nom="Pretty Pink" date="Jeudi 7 juillet" lien="/" actif />
        <Vignette class="mt-12 pb-52" image="/images/prog_dsh.webp" nom="Seth Hills" date="Vendredi 9 juillet" lien="/" actif />
        <Vignette class="mt-12 pb-52" image="/images/prog_dtopic.webp" nom="Topic" date="Vendredi 9 juillet" lien="/" actif />
        <Vignette class="mt-12 pb-52" image="/images/prog_durt.webp" nom="U.R.TRAX" date="Vendredi 9 juillet" lien="/" actif />
        <Vignette class="mt-12 pb-52" image="/images/prog_dy.webp" nom="Yuksek" date="Jeudi 7 juillet" lien="/" actif />
      </div>
    </div>
  </main>
  <!-- Footer -->
  <footer>
    <Footer />
  </footer>
</template>

<script>
import Header from "../components/Header.vue";
import Vignette from "../components/VignetteArtistes.vue";
import Footer from "../components/Footer.vue";

export default {
  components: { Header, Vignette, Footer },
};
</script>
