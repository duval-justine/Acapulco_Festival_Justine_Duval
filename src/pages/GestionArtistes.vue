<template>
  <header>
    <Header />
  </header>
  <div class="relative mt-12 flex flex-col gap-20 px-5">
    <div class="flex items-end justify-between">
      <h1 class="mt-14 text-center font-concert-one text-3xl font-bold text-Extended/true-gray/50">Liste des artistes</h1>
      <RouterLink to="/creaartistes">
        <div class="rounded-2xl bg-Extended/amber/500 px-10 py-4 font-lato text-white hover:bg-Extended/amber/400">
          <p class="effet-shadowblanc">Créer un nouvel artiste</p>
        </div>
      </RouterLink>
    </div>
    <div class="block w-full overflow-x-auto">
      <div class="relative float-left w-[500px]">
        <p class="font-lato text-lg text-Extended/true-gray/50">Rechercher</p>
        <input
          type="search"
          class="h-10 w-full rounded-xl bg-Extended/true-gray/50 px-4 text-sm text-Extended/true-gray/900"
          placeholder="Recherche par nom"
          v-model="query"
        />
      </div>

      <table class="w-full">
        <thead>
          <tr class="border-b-2">
            <th class="w-64 p-3 font-lato text-sm text-Extended/true-gray/50">Image</th>
            <th class="w-1/5 font-lato text-sm text-Extended/true-gray/50">Nom</th>
            <th class="w-1/5 font-lato text-sm text-Extended/true-gray/50"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="Artistes in searchByName" :key="Artistes.id" class="mt-2">
            <td class=""><img :src="Artistes.Artistes" :alt="Artistes.nom" class="h-auto w-full" /></td>
            <td class="text-center font-lato text-sm text-Extended/true-gray/50">{{ Artistes.nom }}</td>

            <td class="text-center">
              <RouterLink :to="{ name: 'deleteartiste', params: { id: Artistes.id } }">
                <div class="effet-shadowblanc mb-8 rounded-2xl bg-Extended/amber/700 p-7 px-4 py-3 font-lato text-white">Supprimer</div>
              </RouterLink>

              <RouterLink :to="{ name: 'modifartiste', params: { id: Artistes.id } }">
                <div class="effet-shadowblanc rounded-2xl bg-Extended/amber/500 px-4 py-3 font-lato text-white">Modifier</div>
              </RouterLink>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <footer class="pt-20">
    <Footer />
  </footer>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import {
  getFirestore,
  collection,
  doc,
  query,
  orderBy,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";
import {
  getStorage, // Obtenir le Cloud Storage
  ref, // Pour créer une référence à un fichier à uploader
  getDownloadURL, // Permet de récupérer l'adress complète d'un fichier du Storage
  uploadString, // Permet d'uploader sur le Cloud Storage une image en Base64
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";
export default {
  components: { Header, Footer },
  data() {
    return {
      listeArtistesSynchro: [],
      query: "",
    };
  },
  mounted() {
    this.getArtiste();
  },
  methods: {
    async getArtiste() {
      const firestore = getFirestore();
      const dbArt = collection(firestore, "Artistes");
      const q = query(dbArt, orderBy("nom", "asc"));
      await onSnapshot(q, (snapshot) => {
        this.listeArtistesSynchro = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        this.listeArtistesSynchro.forEach(function (Artistes) {
          const storage = getStorage();
          const spaceRef = ref(storage, "Artistes/" + Artistes.image);
          getDownloadURL(spaceRef)
            .then((url) => {
              Artistes.image = url;
            })
            .catch((error) => {
              console.log("erreur download url", error);
            });
        });
      });
    },
  },
  computed: {
    searchByName() {
      let query = this.query;
      return this.listeArtistesSynchro.filter(function (Artistes) {
        return Artistes.nom.includes(query);
      });
    },
  },
};
</script>