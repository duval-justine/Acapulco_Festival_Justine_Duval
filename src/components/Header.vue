<template>
  <div class="md:hidden">
    <div class="flex max-h-10 justify-between py-3">
      <RouterLink to="/">
        <Logo class="relative z-30 ml-8" />
      </RouterLink>
      <button
        class="absolute top-0 right-0 z-50 text-xl"
        aria-haspopup="true"
        aria-controls="menu"
        :aria-expanded="menuOuvert"
        @click="menuOuvert = !menuOuvert"
      >
        <div>
          <MenuIcon v-if="!menuOuvert" class="mt-4 mr-8 w-10 text-Extended/true-gray/50" />
          <XIcon v-else class="mt-4 mr-8 w-10 text-Extended/true-gray/50" />
        </div>
        <span class="sr-only">Menu</span>
      </button>
    </div>
    <div
      id="menu"
      class="
        fixed
        inset-0
        z-40
        h-full
        translate-x-full
        bg-Extended/true-gray/900
        motion-safe:transition-transform motion-safe:duration-1000
      "
      v-if="menuOuvert"
      :class="{ 'translate-x-0': menuOuvert }"
    >
      <div>
        <DecoBD />
      </div>
      <nav>
        <ul class="flex flex-col gap-10 text-center font-concert-one text-3xl text-Extended/true-gray/50">
          <RouterLink :class="{ ' motion-safe:animate-[Depart_0.05s_cubic-bezier(.5,.5,.5,.5)]': menuOuvert }" to="/">Accueil</RouterLink>
          <RouterLink :class="{ ' motion-safe:animate-[Depart_0.1s_cubic-bezier(.5,.5,.5,.5)]': menuOuvert }" to="/progall"
            >Programmes</RouterLink
          >
          <RouterLink :class="{ ' motion-safe:animate-[Depart_0.2s_cubic-bezier(.5,.5,.5,.5)]': menuOuvert }" to="/artistes"
            >Artistes</RouterLink
          >
          <RouterLink :class="{ ' motion-safe:animate-[Depart_0.3s_cubic-bezier(.5,.5,.5,.5)]': menuOuvert }" to="/festival"
            >Festival</RouterLink
          >
          <RouterLink :class="{ ' motion-safe:animate-[Depart_0.4s_cubic-bezier(.5,.5,.5,.5)]': menuOuvert }" to="/contact"
            >Contact</RouterLink
          >
          <RouterLink :class="{ ' motion-safe:animate-[Depart_0.4s_cubic-bezier(.5,.5,.5,.5)]': menuOuvert }" to="/connexion"
            >Connexion</RouterLink
          >
          <!-- <div v-if="isAdmin"></div> -->
        </ul>
      </nav>
      <div>
        <DecoHG class="ml-auto" />
      </div>
    </div>
  </div>
  <div class="relative z-30 mx-8 hidden justify-between pt-5 md:flex">
    <RouterLink to="/">
      <Logo class="relative z-30 ml-8" />
    </RouterLink>
    <div
      class="
        relative
        flex flex-shrink-0 flex-grow-0
        items-center
        justify-start
        gap-10
        font-lato
        text-base
        font-semibold
        text-Extended/true-gray/50
      "
    >
      <RouterLink class="lg:text-lg lg:hover:text-Extended/amber/500" to="/progall">Programmation</RouterLink>
      <RouterLink class="lg:text-lg lg:hover:text-Extended/amber/500" to="/artistes">Artistes</RouterLink>
      <RouterLink class="lg:text-lg lg:hover:text-Extended/amber/500" to="/festival">Festival</RouterLink>
      <RouterLink class="lg:text-lg lg:hover:text-Extended/amber/500" to="/contact">Contact</RouterLink>
      <RouterLink class="lg:text-lg lg:hover:text-Extended/amber/500" to="/connexion">Connexion</RouterLink>
    </div>
  </div>
</template>

<script>
import Logo from "./icons/LogoFestival.vue";
import DecoHG from "./icons/DecoHG.vue";
import DecoBD from "./icons/DecoBD.vue";
import { MenuIcon, XIcon } from "@heroicons/vue/outline";

import { getFirestore, collection, onSnapshot, query, where } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";
// Fonctions Storage
import { getStorage, ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";
// Fonction authentification
import { getAuth } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";
// Import emetteur de main.js
// import { emitter } from "../main";

export default {
  components: { Logo, MenuIcon, XIcon, DecoHG, DecoBD },

  beforeMount() {
    this.$router.afterEach(() => (this.menuOuvert = false));
  },

  data() {
    return {
      //     user: {
      //       // User connecté
      //       email: null,
      //       password: null,
      //     },
      //     userInfo: null, // Informations complémentaires user connecté
      //     name: "Acapulco", // Titre de l'application ou nom du user
      //     isAdmin: false, // Si l'utilisateur est ou non administrateur
      menuOuvert: false,
    };
  },
  // mounted() {
  //   // Vérifier si un user connecté existe déjà
  //   // Au lancement de l'application
  //   this.getUserConnect();
  //   // Ecoute de l'évènement de connexion

  //   // emitter.on("connectUser", (e) => {
  //   //   this.user = e.user;
  //   //   console.log("App => Reception user connecté", this.user);
  //   //   this.getUserInfo(this.user);
  //   // });

  //   // Ecoute de l'évènement de deconnexion
  //   // emitter.on("deConnectUser", (e) => {

  //   //   this.user = e.user;
  //   //   console.log("App => Reception user deconnecté", this.user);

  //   //   this.userInfo = null;
  //   //   this.name = "Acapulco";
  //   //   this.isAdmin = false;
  //   // });
  // },
  // methods: {
  //   // Obtenir les informations du user connecté
  //   async getUserConnect() {
  //     await getAuth().onAuthStateChanged(
  //       function (user) {
  //         if (user) {
  //           // Récupération du user connecté
  //           this.user = user;
  //           // Recherche de ses infos complémentaires
  //           this.getUserInfo(this.user);
  //         }
  //       }.bind(this)
  //     );
  //     // Noter le bind(this), cas des zones isolées
  //     // lors de 2 strucutres imbiquées, Vue perd la visibilité
  //     // des données
  //     // On les ré injecte par le mot-clef this
  //   },
  //   async getUserInfo(user) {
  //     // Rechercher les informations complémentaires de l'utilisateur
  //     // Obtenir Firestore
  //     const firestore = getFirestore();
  //     // Base de données (collection)  document participant
  //     const dbUsers = collection(firestore, "users");
  //     // Recherche du user par son uid
  //     const q = query(dbUsers, where("uid", "==", user.uid));
  //     await onSnapshot(q, (snapshot) => {
  //       this.userInfo = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  //       console.log("userInfo", this.userInfo);
  //       // userInfo étant un tableau, onn récupère
  //       // ses informations dans la 1° cellule du tableau : 0
  //       this.name = this.userInfo[0].login;
  //       this.isAdmin = this.userInfo[0].admin;
  //       // Recherche de l'image du user sur le Storage
  //       // Référence du fichier avec son nom
  //     });
  //   },
  // },
};
</script>
