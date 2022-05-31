<template>
    <div class="flex justify-between py-3 max-h-10">
        <RouterLink to="/">
            <Logo class="ml-8 relative z-30"/>
        </RouterLink>
        <button class="absolute top-0 right-0 z-50 text-xl" aria-haspopup="true" aria-controls="menu" :aria-expanded="menuOuvert" @click="menuOuvert = !menuOuvert">
            <div >
              <MenuIcon v-if="!menuOuvert" class="mt-4 mr-8 text-Extended/true-gray/50 w-10"  />
              <XIcon v-else class="mt-4 mr-8 text-Extended/true-gray/50 w-10"  />
             
            </div>
            <span class="sr-only">Menu</span>
        </button>
    </div>
    <div id="menu" class="z-40 fixed inset-0 translate-x-full bg-Extended/true-gray/900 motion-safe:duration-1000 motion-safe:transition-transform h-full" v-if="menuOuvert"
      :class="{ 'translate-x-0': menuOuvert }">
    
        <div>
          <DecoBD/>
        </div>
        <nav>
          <ul class="flex flex-col text-center gap-10 font-concert-one text-Extended/true-gray/50 text-3xl">
           <RouterLink :class="{' motion-safe:animate-[Depart_0.05s_cubic-bezier(.5,.5,.5,.5)]' : menuOuvert}" to="/">Accueil</RouterLink>
           <RouterLink :class="{' motion-safe:animate-[Depart_0.1s_cubic-bezier(.5,.5,.5,.5)]' : menuOuvert}" to="/progall">Programmes</RouterLink>
           <RouterLink :class="{' motion-safe:animate-[Depart_0.2s_cubic-bezier(.5,.5,.5,.5)]' : menuOuvert}" to="/">Artistes</RouterLink>
           <RouterLink :class="{' motion-safe:animate-[Depart_0.3s_cubic-bezier(.5,.5,.5,.5)]' : menuOuvert}" to="/festival">Festival</RouterLink>
           <RouterLink :class="{' motion-safe:animate-[Depart_0.4s_cubic-bezier(.5,.5,.5,.5)]' : menuOuvert}" to="/">Contact</RouterLink>
          </ul>
        </nav>
        <div >
          <DecoHG class="ml-auto"/>
        </div>
      </div>
</template>

<script>
import Logo from './icons/LogoFestival.vue'
import DecoHG from './icons/DecoHG.vue'
import DecoBD from './icons/DecoBD.vue'
import {MenuIcon, XIcon} from '@heroicons/vue/outline'

export default {
    components: {Logo, MenuIcon, XIcon, DecoHG, DecoBD},

    data() {
        return {
          menuOuvert: false,
        };
      },
    beforeMount(){
    this.$router.afterEach(() => (this.menuOuvert = false));
    }
}

</script>
