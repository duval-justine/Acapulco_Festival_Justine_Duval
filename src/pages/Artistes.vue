<template>
  <!-- Header -->
  <header>
    <Header />
  </header>
  <!-- Contenus -->
  <main>
    <h1 class="mt-12 font-concert-one text-3xl text-Extended/true-gray/50">Artistes</h1>
    <Vignette class="mt-12 pb-52" image="/images/prog_dmg.webp" nom="Martin Garrix" date="Samedi 9 juillet" lien="/martingarrix" actif />
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
