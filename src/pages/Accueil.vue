<template>
    <main class="bg-Extended/true-gray/900">
        <Header class="z-10 relative" />
        <img class="-mt-[85px] max-h-[812px] min-h-[812px] w-full object-cover" src="../../public/images/acc_fond.webp" alt="Image de la plage lors du Festival">
        <div class="bg-Extended/amber/500 pt-14">
            <!-- Carrousel au format mobile -->
            <div id="carouselExampleSlidesOnly" class="carousel slide relative md:hidden lg:hidden" data-bs-ride="carousel">
                <div class="carousel-inner relative w-full overflow-hidden">
                    <div class="carousel-item active relative float-left w-full">
                        <VignetteCarrousel class="block w-full"
                            image="/images/acc_carrousel1.webp"
                            texte="Samedi 9 juillet"
                        />
                    </div>
                    <div class="carousel-item relative float-left w-full">
                        <VignetteCarrousel class="block w-full"
                            image="/images/acc_carrousel2.webp"
                            texte="Vendredi 8 & Samedi 9 juillet"
                        />
                    </div>
                    <div class="carousel-item relative float-left w-full">
                        <VignetteCarrousel class="block w-full"
                            image="/images/acc_carrousel3.webp"
                            texte="Jeudi 7 juillet"
                        />
                    </div>
                    <div class="carousel-item relative float-left w-full">
                        <VignetteCarrousel class="block w-full"
                            image="/images/acc_carrousel4.webp"
                            texte="Samedi 9 & Dimanche 10 juillet"
                        />
                    </div>
                    <div class="carousel-item relative float-left w-full">
                        <VignetteCarrousel class="block w-full"
                            image="/images/acc_carrousel5.webp"
                            texte="Jeudi 7 & Samedi 9 juillet"
                        />
                    </div>
                </div>
            </div>
            <!-- Carrousel au format Tablette  -->
            <div id="carouselExampleControls" class="carousel slide relative hidden md:flex" data-bs-ride="carousel">
                <div class="carousel-inner relative w-full overflow-hidden">
                    <div class="carousel-item active relative float-left w-full">
                        <VignetteCarrousel class="block w-full"
                            image="/images/acc_carrousel1.webp"
                            texte="Samedi 9 juillet"
                        />
                    </div>
                    <div class="carousel-item relative float-left w-full">
                    <VignetteCarrousel class="block w-full"
                        image="/images/acc_carrousel2.webp"
                        texte="Vendredi 8 & Samedi 9 juillet"
                    />
                    </div>
                    <div class="carousel-item relative float-left w-full">
                    <VignetteCarrousel class="block w-full"
                        image="/images/acc_carrousel3.webp"
                        texte="Jeudi 7 juillet"
                    />
                    </div>
                    <div class="carousel-item relative float-left w-full">
                    <VignetteCarrousel class="block w-full"
                        image="/images/acc_carrousel4.webp"
                        texte="Samedi 9 & Dimanche 10 juillet"
                    />
                    </div>
                    <div class="carousel-item relative float-left w-full">
                    <VignetteCarrousel class="block w-full"
                        image="/images/acc_carrousel5.webp"
                        texte="Jeudi 7 & Samedi 9 juillet"
                    />
                    </div>
                </div>
                <button
                class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
            >
                <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span class="visually-hidden">Avant</span>
                </button>
                <button
                class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
            >
                <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span class="visually-hidden">Après</span>
                </button>
            </div>
            <!-- Carrousel au format Desktop -->
        
            <!-- Bouton Programme -->
            <RouterLink to="/progall" class="w-full">
                <p class="py-3 font-lato text-Extended/true-gray/50 text-xl text-center drop-shadow-md md:text-2xl">Toute la programmation</p>
            </RouterLink>
        </div>

         <!-- Texte d'intro sur le festival -->
        <div class="md:hidden">
            <p class="mx-8 mt-16 mb-8 font-lato text-Extended/true-gray/50 text-sm">Le Jeudi 7 juillet 2022, le festival Acapul’co vous ouvre ses portes pour vous offrir un Festival grandiose ! Venez en famille ou entre amis pour s’amuser et vivre des moments inoubliables. Le festival propose cette année, une édition sur 4 jours avec une programmation de 23 artistes du monde entier.  Qu’attendez vous ? Que la fête commence !</p>
            <Bouton class="flex justify-end mr-5"
                texte="En savoir plus sur le Festival"
                lien="/festival"/>
        </div>

        <div class="flex-row hidden gap-[50px] lg:gap-[106px] md:flex">
            <img class="rounded-17xl mt-[75px] ml-14 w-[506px] h-[386px] object-cover" src="../../public/images/acc_into.webp" alt="Image de personne qui font la fête">
            <div class="flex flex-col gap-8">
                <p class="mt-28 mr-2 lg:mr-36 font-lato text-xl text-Extended/true-gray/50">Le Jeudi 7 juillet 2022, le festival Acapul’co vous ouvre ses portes pour vous offrir un Festival grandiose ! Venez en famille ou entre amis pour s’amuser et vivre des moments inoubliables. Le festival propose cette année, une édition sur 4 jours avec une programmation de 23 artistes du monde entier.  Qu’attendez vous ? Que la fête commence !</p>
                 <Bouton class="flex justify-end mr-[50px] lg:mr-[135px]"
                        texte="En savoir plus sur le Festival"
                        lien="/festival"/>
            </div>
        </div>

        <!-- Séparation -->
       <div class="hidden md:flex">
           <div class="right-auto mt-10 lg:mt-20">
               <Line/>
           </div>
            <Line class="mt-10"/>
       </div>

        <!-- Images et Contenus de Présentation -->
        <div class="md:hidden">
            <img class="px-11 py-20 w-full object-cover" src="../../public/images/acc_scene.webp" alt="Image de la Scène Pulco Playa">
            <p class="font-lato text-Extended/true-gray/50 text-[12px] text-center mx-24 my-6">Deux grandes scènes pour vous offir le plus beau des spectacles.</p>
            <img class="px-11 py-6 w-full object-cover" src="../../public/images/acc_concert.webp" alt="Image lors d'un concert">
            <p class="font-lato text-Extended/true-gray/50 text-[12px] text-center mx-24 my-6">Plongez dans un monde imaginaire, parcourez nos nombreux stands...</p>
            <img class="px-11 py-6 w-full object-cover" src="../../public/images/acc_feux.webp" alt="Image des feux d'artifices">
            <p class="font-lato text-Extended/true-gray/50 text-[12px] text-center mx-24 my-6">... et venez découvrir les surprises qui vous attendent.</p>
        </div>

        <div class="hidden md:flex flex-col gap-14 mt-32 items-center">
            <div class="flex flex-row mx-10 gap-[25px] lg:gap-[103px]">
                <img class="w-[357px] h-[219px] lg:w-[519px] lg:h-[319px] rounded-17xl object-cover" src="../../public/images/acc_scene.webp" alt="Image de la Scène Pulco Playa">
                <p class="font-lato text-Extended/true-gray/50 text-xl mx-24 mt-28">Deux grandes scènes pour vous offir le plus beau des spectacles.</p>
            </div>
            <div class="flex flex-row mx-10 gap-[25px] lg:gap-[103px] ">
                <p class="font-lato text-Extended/true-gray/50 text-xl mx-24 mt-28">Plongez dans un monde imaginaire, parcourez nos nombreux stands...</p>
                <img class="w-[357px] h-[219px] lg:w-[519px] lg:h-[319px] rounded-17xl object-cover" src="../../public/images/acc_concert.webp" alt="Image lors d'un concert">
            </div>
            <div class="flex flex-row mx-10 gap-[25px] lg:gap-[103px] ">
                <img class="w-[357px] h-[219px] lg:w-[519px] lg:h-[319px] rounded-17xl object-cover" src="../../public/images/acc_feux.webp" alt="Image des feux d'artifices">
            <p class="font-lato text-Extended/true-gray/50 text-xl mx-24 mt-28">... et venez découvrir les surprises qui vous attendent.</p>
            </div>
        </div>

        <!-- Séparation -->
       <div class="hidden md:flex">
           <div class="right-auto mt-10 lg:mt-20">
               <Line/>
           </div>
            <Line class="mt-10"/>
       </div>

        <!-- Partie sur le formulaire de contact -->
        <div>
            <h4 class="ml-11 md:mx-60 lg:ml-[373px] mt-12 font-lato md:text-3xl text-Extended/true-gray/50 text-sm drop-shadow-xl">Une question ?</h4>
            <div class="md:hidden">
                <p class="mx-11 mt-4 font-lato text-Extended/true-gray/50 text-[12px]">Vous avez une question  ou vous désirez nous faire part d’une suggestion ? N’hésitez pas à laisser votre message dans ce formulaire de contact. </p>
                <Bouton class="flex justify-end mt-6 pb-12 mr-5"
                    texte="Formulaire de Contact"
                    lien="/" />
            </div>
            <div class="hidden md:flex flex-col">
                <p class="mt-8 lg:mx-[373px] mx-60 font-lato text-Extended/true-gray/50 text-base lg:text-xl">Vous avez une question  ou vous désirez nous faire part d’une suggestion ? N’hésitez pas à laisser votre message dans ce formulaire de contact. </p>
                <Bouton class="flex justify-end mt-6 mr-[323px] pb-5"
                    texte="Formulaire de Contact"
                    lien="/" />
            </div>
        </div>
    </main>

    <!-- Footer -->
    <footer class="bg-Extended/true-gray/900">
        <Footer/>
    </footer>
</template>

<script>
import Header from '../components/Header.vue'
import VignetteCarrousel from '../components/CarrouselAcc.vue'
import Bouton from '../components/Bouton.vue'
import Line from '../components/icons/Line2.vue'
import Footer from '../components/Footer.vue'
export default {
    components: {Header, Bouton, VignetteCarrousel, Footer, Line}
}
</script>
