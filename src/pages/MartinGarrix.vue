<template>
    <header>
        <HeaderRetour/>
    </header>
    <main>
        <Vignette/>
    </main>
    <footer>
        <Footer/>
    </footer>
</template>

<script>
import HeaderRetour from '../components/HeaderRetour.vue'
import Footer from '../components/Footer.vue'
import Vignette from '../components/VignetteArtiste.vue'

export default {
    components: {HeaderRetour, Footer, Vignette}
}
</script>
