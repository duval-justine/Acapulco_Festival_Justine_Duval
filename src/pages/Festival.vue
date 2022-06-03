<template>
  <header>
    <Header class="relative z-10" />
  </header>
  <main>
    <img class="relative -mt-[85px] max-h-[812px] min-h-[805px] w-full object-cover opacity-80" src="/images/festi_fond.webp" alt="" />
    <div class="flex flex-col items-center">
      <h1 class="absolute -mt-[600px] font-concert-one text-5xl text-Extended/true-gray/50 md:text-7xl lg:text-9xl">Acapul'co</h1>
      <h2 class="absolute -mt-[500px] font-concert-one text-3xl text-Extended/true-gray/50 md:text-4xl lg:-mt-[460px] lg:text-6xl">
        Festival
      </h2>
    </div>
    <!-- Format Mobile -->
    <div class="md:hidden">
      <div class="mx-7 mt-7 font-lato text-xs text-Extended/true-gray/50">
        <p>Acapul’co est un Festival situé dans le département de l’Aude est plus précisement dans le petit village de Gruissan.</p>
        <p class="mt-4">
          C’est un festival de musique principalement de l’éléctro avec des dj qui viennent du monde entier spécialement pour vous !
        </p>
        <p class="mt-4">
          Le festival est composé de deux grandes scènes, de plusieurs espaces pour pouvoir s’hydrater et se ressoucer. Ainsi que des
          espaces pour vous amusez et remportez des goodies. Et à la fin de la soirée nous vous préparons d’autres surprises qui sont à
          venir découvrir...
        </p>
      </div>
      <div class="mt-3 flex justify-center">
        <img
          class="h-[189px] w-[312px] rounded-[40px] object-cover opacity-80"
          src="/images/festi_img1.webp"
          alt="Personnes qi font la fête"
        />
      </div>
      <h2 class="mt-10 ml-7 font-lato text-sm font-bold text-Extended/true-gray/50">La plage de Mateille</h2>
      <div class="mx-7 mt-3 flex justify-center">
        <img src="/images/festi_carte.png" alt="" />
      </div>
      <div class="mx-7 mt-6 font-lato text-xs text-Extended/true-gray/50">
        <p>
          La plage de Mateille est situé entre l’Étang de Mateille et l’entrée du port. C’est l’une des plages les plus sauvages de Gruissan
          et elle s’étend sur 1,2km.
        </p>
        <p class="mt-4">
          Pour vous rendre sur cette plage depuis le port de Gruissan, il suffit de prendre l’avenue des plages, puis de passer le pont qui
          passe au dessus de l’étang de Mateille.
        </p>
        <p class="mt-4">
          Cette plage dispose d’un grand parking situé juste après le petit pont qui passe au dessus de l’Étang de Mateille.
        </p>
      </div>
      <div class="mt-3 flex justify-center">
        <img class="h-[189px] w-[312px] rounded-[40px] object-cover" src="/images/festi_img2.webp" alt="" />
      </div>
      <h2 class="mt-10 ml-7 font-lato text-sm font-bold text-Extended/true-gray/50">Deux grandes scènes</h2>
      <div class="mt-3 flex justify-center">
        <img class="relative h-[189px] w-[312px] rounded-[40px] object-cover opacity-80" src="/images/festi_pulcoplaya.webp" alt="" />
        <p class="absolute my-16 font-concert-one text-4xl text-Extended/true-gray/50">Pulco Playa</p>
      </div>
      <div class="mt-3 flex justify-center">
        <img class="relative h-[189px] w-[312px] rounded-[40px] object-cover opacity-80" src="/images/festi_acaplaya.webp" alt="" />
        <p class="absolute my-16 font-concert-one text-4xl text-Extended/true-gray/50">Aca Playa</p>
      </div>
      <h2 class="mt-28 ml-7 font-lato text-lg font-bold text-Extended/true-gray/50 lg:text-2xl">Retour en images</h2>
      <div class="bg-Extended/amber/300">
        <h4 class="mt-5 ml-7 font-concert-one text-sm font-bold text-Extended/true-gray/50">Summer</h4>
      </div>
      <div class="mt-2 flex w-full snap-x gap-0 overflow-x-auto">
        <div class="shrink-0 snap-center first:pl-5 last:pr-5">
          <img class="w-full object-cover" src="/images/festi_sum1.webp" alt="" />
        </div>
        <div class="shrink-0 snap-center first:pl-5 last:pr-5">
          <img class="w-full object-cover" src="/images/festi_sum2.webp" alt="" />
        </div>
        <div class="shrink-0 snap-center first:pl-5 last:pr-5">
          <img class="w-full object-cover" src="/images/festi_sum3.webp" alt="" />
        </div>
        <div class="shrink-0 snap-center first:pl-5 last:pr-5">
          <img class="w-full object-cover" src="/images/festi_sum4.webp" alt="" />
        </div>
        <div class="shrink-0 snap-center first:pl-5 last:pr-5">
          <img class="w-full object-cover" src="/images/festi_sum5.webp" alt="" />
        </div>
        <div class="shrink-0 snap-center first:pl-5 last:pr-5">
          <img class="w-full object-cover" src="/images/festi_sum6.webp" alt="" />
        </div>
        <h4 class="mt-5 ml-7 font-concert-one text-sm font-bold text-Extended/amber/300">Night</h4>
        <div class="mt-2 flex w-full snap-x gap-0 overflow-x-auto">
          <div class="shrink-0 snap-center first:pl-5 last:pr-5">
            <img class="w-full object-cover" src="/images/festi_night1.webp" alt="" />
          </div>
          <div class="shrink-0 snap-center first:pl-5 last:pr-5">
            <img class="w-full object-cover" src="/images/festi_night2.webp" alt="" />
          </div>
          <div class="shrink-0 snap-center first:pl-5 last:pr-5">
            <img class="w-full object-cover" src="/images/festi_night3.webp" alt="" />
          </div>
        </div>
        <h4 class="mt-5 ml-7 font-concert-one text-sm font-bold text-Extended/amber/300">Fireworks</h4>
        <div class="mt-2 flex w-full snap-x gap-0 overflow-x-auto pb-5">
          <div class="shrink-0 snap-center first:pl-5 last:pr-5">
            <img class="w-full object-cover" src="/images/festi_fire1.webp" alt="" />
          </div>
          <div class="shrink-0 snap-center first:pl-5 last:pr-5">
            <img class="w-full object-cover" src="/images/festi_fire2.webp" alt="" />
          </div>
          <div class="shrink-0 snap-center first:pl-5 last:pr-5">
            <img class="w-full object-cover" src="/images/festi_fire3.webp" alt="" />
          </div>
        </div>
      </div>
    </div>
    <!-- Format Desktop -->
    <div class="mb-14 hidden flex-col align-middle md:flex">
      <div class="mx-auto mt-28 flex flex-row gap-16">
        <div class="ml-12">
          <img
            class="max-h-[189px] w-full rounded-[40px] opacity-80 lg:max-h-[345px]"
            src="/images/festi_img1.webp"
            alt="Personnes qi font la fête"
          />
        </div>
        <div class="mr-16 w-[670px] font-lato text-sm text-Extended/true-gray/50 lg:text-xl">
          <p>Acapul’co est un Festival situé dans le département de l’Aude est plus précisement dans le petit village de Gruissan.</p>
          <p class="mt-4">
            C’est un festival de musique principalement de l’éléctro avec des dj qui viennent du monde entier spécialement pour vous !
          </p>
          <p class="mt-4">
            Le festival est composé de deux grandes scènes, de plusieurs espaces pour pouvoir s’hydrater et se ressoucer. Ainsi que des
            espaces pour vous amusez et remportez des goodies. Et à la fin de la soirée nous vous préparons d’autres surprises qui sont à
            venir découvrir...
          </p>
        </div>
      </div>
      <h2 class="mt-28 ml-7 font-lato text-lg font-bold text-Extended/true-gray/50 lg:text-2xl">La plage de Mateille</h2>
      <div class="mx-auto mt-10 flex flex-row gap-16">
        <div class="ml-16 w-[670px] font-lato text-sm text-Extended/true-gray/50 lg:text-xl">
          <p>
            La plage de Mateille est situé entre l’Étang de Mateille et l’entrée du port. C’est l’une des plages les plus sauvages de
            Gruissan et elle s’étend sur 1,2km.
          </p>
          <p class="mt-4">
            Pour vous rendre sur cette plage depuis le port de Gruissan, il suffit de prendre l’avenue des plages, puis de passer le pont
            qui passe au dessus de l’étang de Mateille.
          </p>
          <p class="mt-4">
            Cette plage dispose d’un grand parking situé juste après le petit pont qui passe au dessus de l’Étang de Mateille.
          </p>
        </div>
        <div class="mt-3">
          <div class="mr-12">
            <img
              class="max-h-[189px] w-full rounded-[40px] opacity-80 lg:max-h-[345px]"
              src="/images/festi_img2.webp"
              alt="Image de la plage de Mateille"
            />
          </div>
        </div>
      </div>
      <div class="mx-7 mt-10 flex justify-center">
        <img src="/images/festi_carte.png" alt="Carte de la France" />
      </div>
      <h2 class="mt-28 ml-7 font-lato text-lg font-bold text-Extended/true-gray/50 lg:text-2xl">Deux grandes scènes</h2>
      <div class="mt-10 flex flex-row justify-center gap-20">
        <div class="mt-3 flex justify-center">
          <img
            class="relative max-h-[189px] w-full rounded-[40px] object-cover opacity-80 lg:max-h-[345px]"
            src="/images/festi_pulcoplaya.webp"
            alt=""
          />
          <p class="absolute my-16 font-concert-one text-4xl text-Extended/true-gray/50 lg:my-24 lg:text-5xl">Pulco Playa</p>
        </div>
        <div class="mt-3 flex justify-center">
          <img
            class="relative max-h-[189px] w-full rounded-[40px] object-cover opacity-80 lg:max-h-[345px]"
            src="/images/festi_acaplaya.webp"
            alt=""
          />
          <p class="absolute my-16 font-concert-one text-4xl text-Extended/true-gray/50 lg:my-24 lg:text-5xl">Aca Playa</p>
        </div>
      </div>
      <div class="mt-28 bg-Extended/amber/500">
        <h2 class="ml-7 py-5 font-lato text-base font-bold text-Extended/true-gray/50 lg:text-2xl">Retour en images</h2>
      </div>
      <div class="bg-Extended/amber/300 pt-2 pb-14">
        <h4 class="ml-7 pb-2 font-concert-one text-2xl font-bold text-Extended/true-gray/50">Summer</h4>
        <div
          class="
            grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))]
            items-center
            justify-between
            gap-0
            lg:grid-cols-[repeat(3,minmax(300px,1fr))]
          "
        >
          <img class="w-full object-cover" src="/images/festi_sum1.webp" alt="Personnes de dos" />
          <img class="w-full object-cover" src="/images/festi_sum2.webp" alt="Personnes qui font la fête" />
          <img class="w-full object-cover" src="/images/festi_sum3.webp" alt="Fille heureuse" />
          <img class="w-full object-cover" src="/images/festi_sum4.webp" alt="Panneaux Indications" />
          <img class="w-full object-cover" src="/images/festi_sum5.webp" alt="Platine Dj" />
          <img class="w-full object-cover" src="/images/festi_sum6.webp" alt="Bières" />
        </div>
      </div>
      <div class="bg-Extended/amber/400 pt-2 pb-14">
        <h4 class="ml-7 pb-2 font-concert-one text-2xl font-bold text-Extended/true-gray/50">Night</h4>
        <div
          class="
            grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))]
            items-center
            justify-between
            gap-0
            lg:grid-cols-[repeat(3,minmax(300px,1fr))]
          "
        >
          <img class="w-full object-cover" src="/images/festi_night1.webp" alt="Vue du concert un peu flou" />
          <img class="w-full object-cover" src="/images/festi_night2.webp" alt="Fille qui fait un coeur avec ses mains" />
          <img class="w-full object-cover" src="/images/festi_night3.webp" alt="Personnes qui dansent lors d'un concert" />
        </div>
      </div>
      <div class="bg-Extended/amber/500 pt-2 pb-14">
        <h4 class="ml-7 pb-2 font-concert-one text-2xl font-bold text-Extended/true-gray/50">Fireworks</h4>
        <div
          class="
            grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))]
            items-center
            justify-between
            gap-0
            lg:grid-cols-[repeat(3,minmax(300px,1fr))]
          "
        >
          <img class="w-full object-cover" src="/images/festi_fire1.webp" alt="Feux d'artifices" />
          <img class="w-full object-cover" src="/images/festi_fire2.webp" alt="Feux d'artifices" />
          <img class="w-full object-cover" src="/images/festi_fire3.webp" alt="Feux d'artifices" />
        </div>
      </div>
    </div>
  </main>
  <footer>
    <Footer />
  </footer>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  components: { Header, Footer },
};
</script>
