<template>
    <div class="bg-Extended/true-gray/900">
        <header >
            <Header/>
        </header>
        <main>
            <Entete/>
        </main>
    </div>
</template>
<script>
import Header from '../components/Header.vue'
import Entete from '../components/EnteteProg.vue'

export default {
    components: {Header, Entete}
}
</script>
