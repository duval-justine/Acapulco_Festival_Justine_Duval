<template>
  <header>
    <Header />
  </header>
  <h1 class="mt-14 text-center font-concert-one text-3xl font-bold text-Extended/true-gray/50">Supprimer un artiste</h1>

  <div class="relative mt-12 flex flex-col gap-20 px-5">
    <div class="rounded-xl bg-Extended/amber/500">
      <p class="w-full py-3 text-center font-lato text-base text-Extended/true-gray/50">Êtes-vous sur de vouloir supprimer cet artiste ?</p>
    </div>
    <form @submit.prevent="deleteArtiste">
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div class="grid place-items-center">
          <img :src="photoActuelle" class="w-1/2" />
        </div>
        <div class="grid grid-cols-1 gap-14">
          <div class="flex h-10 overflow-hidden rounded-sm text-Extended/true-gray/900">
            <div class="font-poppins rounded-l-sm-sm flex items-center justify-center border-[1px] bg-Extended/amber/500 px-5">Nom</div>
            <input
              class="w-full bg-Extended/true-gray/50 pl-3 font-lato text-sm"
              type="text"
              placeholder="Nom de l'artiste"
              v-model="Artistes.nom"
              disabled
            />
          </div>
        </div>
      </div>
      <div class="mt-14 grid w-full grid-cols-2 place-items-center">
        <button class="w-fit rounded-xl bg-Extended/amber/500 px-16 py-4 font-lato text-white hover:bg-Extended/amber/400" type="button">
          <RouterLink to="/gestionartistes">Annuler</RouterLink>
        </button>
        <button class="w-fit rounded-xl bg-Extended/amber/500 px-16 py-4 font-lato text-white hover:bg-Extended/amber/400" type="submit">
          Supprimer
        </button>
      </div>
    </form>
  </div>
  <footer class="pt-20">
    <Footer />
  </footer>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import { getFirestore, doc, getDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";
import { getStorage, ref, getDownloadURL, uploadString, deleteObject } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";
export default {
  components: { Header, Footer },
  data() {
    return {
      Artistes: {
        artiste: null,
        image: null,
      },
      refArtiste: null,
      photoActuelle: null,
    };
  },
  mounted() {
    this.getArtiste(this.$route.params.id);
  },
  methods: {
    async getArtiste(id) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "Artistes", id);
      this.refArtiste = await getDoc(docRef);
      if (this.refArtiste.exists()) {
        this.Artistes = this.refArtiste.data();
        this.photoActuelle = this.Artistes.image;
      } else {
        this.console.log("artiste inexistant");
      }
      const storage = getStorage();
      const spaceRef = ref(storage, "Artistes/" + this.Artistes.image);
      getDownloadURL(spaceRef)
        .then((url) => {
          this.photoActuelle = url;
        })
        .catch((error) => {
          console.log("erreur downloadurl", error);
        });
    },
    async deleteArtiste() {
      const firestore = getFirestore();
      await deleteDoc(doc(firestore, "Artistes", this.$route.params.id));
      const storage = getStorage();
      let docRef = ref(storage, "Artistes/" + this.Artistes.image);
      deleteObject(docRef);
      this.$router.push("/gestionartistes");
    },
  },
};
</script>