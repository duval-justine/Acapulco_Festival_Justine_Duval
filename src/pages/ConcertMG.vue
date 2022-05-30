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
    </main>
</template>

<script>
import HeaderRetour from '../components/HeaderRetour.vue'
import Vignette from '../components/VignetteConcert.vue'

export default {
    components: {HeaderRetour, Vignette}
}
</script>
