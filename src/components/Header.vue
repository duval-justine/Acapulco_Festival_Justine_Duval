<template>
    <div class="flex justify-between my-3 max-h-10">
        <RouterLink to="/">
            <Logo class="ml-8 relative z-40"/>
        </RouterLink>
        <button class="relative z-50 text-xl" aria-haspopup="true" aria-controls="menu" :aria-expanded="menuOuvert" @click="menuOuvert = !menuOuvert">
            <div>
              <MenuIcon class="mr-8 text-Extended/true-gray/50 w-14" :class="{'hidden' : menuOuvert}" />
            </div>
            <span class="sr-only">Menu</span>
        </button>
    </div>
    <div id="menu" class="z-50 fixed inset-0 translate-x-full bg-Extended/true-gray/900 motion-safe:duration-1000 motion-safe:transition-transform" v-if="menuOuvert"
      :class="{ 'translate-x-0': menuOuvert }">
        <div class="flex flex-row justify-between">
          <button class="relative z-60 mt-52" aria-haspopup="true" aria-controls="menu" :aria-expanded="menuOuvert" @click="menuOuvert = !menuOuvert">
            <MenuIcon :class="{'motion-safe:animate-[BackInRight_1s_cubic-bezier(0,1,.24,1)]' : menuOuvert}"/>
          </button>
        </div>

        <nav>
          <ul class="flex flex-col text-center gap-9  font-medium text-xl">
           <RouterLink :class="{' motion-safe:animate-[Depart_0.05s_cubic-bezier(.5,.5,.5,.5)]' : menuOuvert}" to="/">Accueil</RouterLink>
           <RouterLink :class="{' motion-safe:animate-[Depart_0.1s_cubic-bezier(.5,.5,.5,.5)]' : menuOuvert}" to="../conseileco">Conseils Écologiques</RouterLink>
           <RouterLink :class="{' motion-safe:animate-[Depart_0.2s_cubic-bezier(.5,.5,.5,.5)]' : menuOuvert}" to="../newsletter">Newsletter</RouterLink>
           <RouterLink :class="{' motion-safe:animate-[Depart_0.3s_cubic-bezier(.5,.5,.5,.5)]' : menuOuvert}" to="../NousContacter">Nous contacter</RouterLink>
           <RouterLink :class="{' motion-safe:animate-[Depart_0.4s_cubic-bezier(.5,.5,.5,.5)]' : menuOuvert}" to="../Conseilramassage">Ramassage des déchets</RouterLink>
          </ul>
        </nav>
      </div>
</template>

<script>
import Logo from './icons/LogoFestival.vue'
import {MenuIcon} from '@heroicons/vue/outline'

export default {
    components: {Logo, MenuIcon},

    data() {
        return {
          menuOuvert: false,
        };
      },
}

</script>
