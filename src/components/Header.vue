<template>
    <div class="flex justify-between py-3 max-h-10">
        <RouterLink to="/">
            <Logo class="ml-8 relative z-30"/>
        </RouterLink>
        <button class="relative z-40 text-xl" aria-haspopup="true" aria-controls="menu" :aria-expanded="menuOuvert" @click="menuOuvert = !menuOuvert">
            <div>
              <MenuIcon class="mt-4 mr-8 text-Extended/true-gray/50 w-10" :class="{'hidden' : menuOuvert}" />
            </div>
            <span class="sr-only">Menu</span>
        </button>
    </div>
    <div id="menu" class="z-40 fixed inset-0 translate-x-full bg-Extended/true-gray/900 motion-safe:duration-1000 motion-safe:transition-transform" v-if="menuOuvert"
      :class="{ 'translate-x-0': menuOuvert }">
        <div class="flex flex-row justify-between relative z-50">
          <button class="mt-52 text-Extended/true-gray/50" aria-haspopup="true" aria-controls="menu" :aria-expanded="menuOuvert" @click="menuOuvert = !menuOuvert">
            <XIcon :class="{'motion-safe:animate-[BackInRight_1s_cubic-bezier(0,1,.24,1)]' : menuOuvert}"/>
          </button>
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
      </div>
</template>

<script>
import Logo from './icons/LogoFestival.vue'
import {MenuIcon, XIcon} from '@heroicons/vue/outline'

export default {
    components: {Logo, MenuIcon, XIcon},

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
