<template>
  <header>
    <HeaderRetour />
    <Header class="hidden md:flex" />
  </header>
  <main>
    <Vignette />
  </main>
  <footer>
    <Footer />
  </footer>
</template>

<script>
import HeaderRetour from "../components/HeaderRetour.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Vignette from "../components/VignetteArtiste.vue";

export default {
  components: { HeaderRetour, Header, Footer, Vignette },
};
</script>
