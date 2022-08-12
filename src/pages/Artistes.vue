<template>
  <!-- Header -->
  <header>
    <Header />
  </header>
  <!-- Contenus -->
  <main>
    <h1 class="mt-12 text-center font-concert-one text-3xl text-Extended/true-gray/50">Artistes</h1>

    <!-- <div class="ml-44 mt-12 block w-full overflow-x-auto">
      <div class="relative float-left w-[500px]">
        <p class="font-lato text-lg text-Extended/true-gray/50">Rechercher</p>
        <input
          type="search"
          class="h-10 w-full rounded-xl bg-Extended/true-gray/50 px-4 text-sm text-Extended/true-gray/900"
          placeholder="Recherche par nom"
          v-model="query"
        />
      </div>
    </div> -->

    <!-- Mobile -->

    <!-- <div class="md:hidden">
      <Vignette
        class="mt-12 pb-52"
        v-for="artiste in searchByName"
        :key="artiste.id"
        :image="artiste.image"
        :nom="artiste.nom"
        :date="artiste.date"
        :lien="artiste.lien"
        :actif="artiste.actif"
      />
    </div> -->

    <div class="md:hidden">
      <Vignette class="mt-12 pb-52" image="/images/prog_daw.webp" nom="Alan Walker" date="Jeudi 7 juillet" lien="/" actif />
      <Vignette class="mt-12 pb-52" image="/images/prog_dalesso.webp" nom="Alesso" date="Dimanche 10 juillet" lien="/" actif />
      <Vignette class="mt-12 pb-52" image="/images/prog_dal.webp" nom="Amélie Lens" date="Vendredi 8 & Samedi 9 juillet" lien="/" actif />
      <Vignette class="mt-12 pb-52" image="/images/prog_dbj.webp" nom="B Jones" date="Jeudi 7 juillet" lien="/" actif />
      <Vignette class="mt-12 pb-52" image="/images/prog_deluize.webp" nom="Eluize" date="Samedi 9 juillet" lien="/" actif />
      <Vignette class="mt-12 pb-52" image="/images/prog_dfj.webp" nom="Felix Jaehn" date="Vendredi 9 juillet" lien="/" actif />
      <Vignette class="mt-12 pb-52" image="/images/prog_dhfr.webp" nom="Henri PFR" date="Samedi 9 & Dimanche 10 juillet" lien="/" actif />
      <Vignette class="mt-12 pb-52" image="/images/prog_dawjc.webp" nom="Joel Corry" date="Jeudi 7 juillet" lien="/" actif />
      <Vignette class="mt-12 pb-52" image="/images/prog_dawlp.webp" nom="Lilly Palmer" date="Jeudi 7 & Samedi 9 juillet" lien="/" actif />
      <Vignette
        class="mt-12 pb-52"
        image="/images/prog_dlf.webp"
        nom="Lost Frequencies"
        date="Vendredi 9 & Samedi 9 juillet"
        lien="/"
        actif
      />
      <Vignette class="mt-12 pb-12" image="/images/prog_dlpg.webp" nom="LP Giobbi" date="Vendredi 9 juillet" lien="/" actif />
      <Vignette class="mt-12 pb-52" image="/images/prog_dmadeon.webp" nom="Madeon" date="Samedi 9 juillet" lien="/" actif />
      <Vignette class="mt-12 pb-52" image="/images/prog_dmt.webp" nom="Marina Trench" date="Jeudi 7 juillet" lien="/" actif />
      <Vignette class="mt-12 pb-52" image="/images/prog_dmg.webp" nom="Martin Garrix" date="Samedi 9 juillet" lien="/" actif />
      <Vignette class="mt-12 pb-52" image="/images/prog_dmattn.webp" nom="MATTN" date="Samedi 9 & Dimanche10 juillet" lien="/" actif />
      <Vignette class="mt-12 pb-52" image="/images/prog_dmw.webp" nom="Mike Williams" date="Jeudi 7 juillet" lien="/" actif />
      <Vignette class="mt-12 pb-52" image="/images/prog_dofen.webp" nom="Ofenbach" date="Samedi 9 & Dimanche10 juillet" lien="/" actif />
      <Vignette class="mt-12 pb-52" image="/images/prog_dawpb.webp" nom="Petit Biscuit" date="Vendredi 9 juillet" lien="/" actif />
      <Vignette class="mt-12 pb-52" image="/images/prog_dpp.webp" nom="Pretty Pink" date="Jeudi 7 juillet" lien="/" actif />
      <Vignette class="mt-12 pb-52" image="/images/prog_dsh.webp" nom="Seth Hills" date="Vendredi 9 juillet" lien="/" actif />
      <Vignette class="mt-12 pb-52" image="/images/prog_dtopic.webp" nom="Topic" date="Vendredi 9 juillet" lien="/" actif />
      <Vignette class="mt-12 pb-52" image="/images/prog_durt.webp" nom="U.R.TRAX" date="Vendredi 9 juillet" lien="/" actif />
      <Vignette class="mt-12 pb-52" image="/images/prog_dy.webp" nom="Yuksek" date="Jeudi 7 juillet" lien="/" actif />
    </div>

    <!-- Reponsive -->

    <div class="hidden md:flex">
      <div class="mx-12 mt-20 mb-20 grid w-11/12 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-center justify-between gap-x-20">
        <!-- <Vignette
          class="mt-12 pb-52"
          v-for="artiste in searchByName"
          :key="artiste.id"
          :image="artiste.image"
          :nom="artiste.nom"
          :date="artiste.date"
          :lien="artiste.lien"
          :actif="artiste.actif"
        /> -->

        <Vignette class="mt-12 pb-52" image="/images/prog_daw.webp" nom="Alan Walker" date="Jeudi 7 juillet" lien="/" actif />
        <Vignette class="mt-12 pb-52" image="/images/prog_dalesso.webp" nom="Alesso" date="Dimanche 10 juillet" lien="/" actif />
        <Vignette class="mt-12 pb-52" image="/images/prog_dal.webp" nom="Amélie Lens" date="Vendredi 8 & Samedi 9 juillet" lien="/" actif />
        <Vignette class="mt-12 pb-52" image="/images/prog_dbj.webp" nom="B Jones" date="Jeudi 7 juillet" lien="/" actif />
        <Vignette class="mt-12 pb-52" image="/images/prog_deluize.webp" nom="Eluize" date="Samedi 9 juillet" lien="/" actif />
        <Vignette class="mt-12 pb-52" image="/images/prog_dfj.webp" nom="Felix Jaehn" date="Vendredi 9 juillet" lien="/" actif />
        <Vignette class="mt-12 pb-52" image="/images/prog_dhfr.webp" nom="Henri PFR" date="Samedi 9 & Dimanche 10 juillet" lien="/" actif />
        <Vignette class="mt-12 pb-52" image="/images/prog_dawjc.webp" nom="Joel Corry" date="Jeudi 7 juillet" lien="/" actif />
        <Vignette class="mt-12 pb-52" image="/images/prog_dawlp.webp" nom="Lilly Palmer" date="Jeudi 7 & Samedi 9 juillet" lien="/" actif />
        <Vignette
          class="mt-12 pb-52"
          image="/images/prog_dlf.webp"
          nom="Lost Frequencies"
          date="Vendredi 9 & Samedi 9 juillet"
          lien="/"
          actif
        />
        <Vignette class="mt-12 pb-52" image="/images/prog_dlpg.webp" nom="LP Giobbi" date="Vendredi 9 juillet" lien="/" actif />
        <Vignette class="mt-12 pb-52" image="/images/prog_dmadeon.webp" nom="Madeon" date="Samedi 9 juillet" lien="/" actif />
        <Vignette class="mt-12 pb-52" image="/images/prog_dmt.webp" nom="Marina Trench" date="Jeudi 7 juillet" lien="/" actif />
        <Vignette class="mt-12 pb-52" image="/images/prog_dmg.webp" nom="Martin Garrix" date="Samedi 9 juillet" lien="/" actif />
        <Vignette class="mt-12 pb-52" image="/images/prog_dmattn.webp" nom="MATTN" date="Samedi 9 & Dimanche10 juillet" lien="/" actif />
        <Vignette class="mt-12 pb-52" image="/images/prog_dmw.webp" nom="Mike Williams" date="Jeudi 7 juillet" lien="/" actif />
        <Vignette class="mt-12 pb-52" image="/images/prog_dofen.webp" nom="Ofenbach" date="Samedi 9 & Dimanche10 juillet" lien="/" actif />
        <Vignette class="mt-12 pb-52" image="/images/prog_dawpb.webp" nom="Petit Biscuit" date="Vendredi 9 juillet" lien="/" actif />
        <Vignette class="mt-12 pb-52" image="/images/prog_dpp.webp" nom="Pretty Pink" date="Jeudi 7 juillet" lien="/" actif />
        <Vignette class="mt-12 pb-52" image="/images/prog_dsh.webp" nom="Seth Hills" date="Vendredi 9 juillet" lien="/" actif />
        <Vignette class="mt-12 pb-52" image="/images/prog_dtopic.webp" nom="Topic" date="Vendredi 9 juillet" lien="/" actif />
        <Vignette class="mt-12 pb-52" image="/images/prog_durt.webp" nom="U.R.TRAX" date="Vendredi 9 juillet" lien="/" actif />
        <Vignette class="mt-12 pb-52" image="/images/prog_dy.webp" nom="Yuksek" date="Jeudi 7 juillet" lien="/" actif />
      </div>
    </div>
  </main>
  <!-- Footer -->
  <footer>
    <Footer />
  </footer>
</template>

<script>
import Header from "../components/Header.vue";
import Vignette from "../components/VignetteArtistes.vue";
import Footer from "../components/Footer.vue";
import { groupBy } from "lodash";
import {
  getFirestore, // Obtenir le Firestore
  collection, // Utiliser une collection de documents
  doc, // Obtenir un document par son id
  getDocs, // Obtenir la liste des documents d'une collection
  addDoc, // Ajouter un document à une collection
  updateDoc, // Mettre à jour un document dans une collection
  deleteDoc, // Supprimer un document d'une collection
  onSnapshot, // Demander une liste de documents d'une collection, en les synchronisant
  query, // Permet d'effectuer des requêtes sur Firestore
  orderBy, // Permet de demander le tri d'une requête query
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

// Cloud Storage : import des fonctions
import {
  getStorage, // Obtenir le Cloud Storage
  ref, // Pour créer une référence à un fichier à uploader
  getDownloadURL, // Permet de récupérer l'adress complète d'un fichier du Storage
  uploadString, // Permet d'uploader sur le Cloud Storage une image en Base64
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

export default {
  components: { Header, Vignette, Footer },
  data() {
    return {
      nom: null,
      listeArtistes: [],
      listeArtistesSynchro: [],
      query: "",
    };
  },

  computed: {
    searchByName() {
      let query = this.query;
      return this.listeArtistesSynchro.filter(function (Artistes) {
        return Artistes.nom.includes(query);
      });
    },
  },

  mounted() {
    this.getArtistesSynchro();
  },
  methods: {
    async getArtistesSynchro() {
      const firestore = getFirestore();
      const dbArtiste = collection(firestore, "Artistes");
      const q = query(dbArtiste, orderBy("nom", "asc"));
      await onSnapshot(q, (snapshot) => {
        this.listeArtistesSynchro = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

        this.listeArtistesSynchro.forEach(function (Artistes) {
          const storage = getStorage();
          const spaceRef = ref(storage, "Artistes/" + Artistes.image);
          getDownloadURL(spaceRef)
            .then((url) => {
              Artistes.image = url;
            })
            .catch((error) => {
              console.log("erreur downloadUrl", error);
            });
        });
      });
    },
  },
};
</script>
