<template>
  <h1 class="mb-20 border-b-2 text-center font-lato text-2xl">Suppression Artiste</h1>

  <div class="relative mt-12 flex flex-col gap-20 px-5">
    <div class="flex flex-col gap-8">
      <h1 class="font-poppins text-4xl underline">Delete Artiste</h1>
      <p class="font-poppins w-full bg-red-500 py-3 text-center text-white">Êtes-vous sur de vouloir supprimer cet artiste ?</p>
    </div>
    <form @submit.prevent="deleteArtiste">
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div class="grid place-items-center">
          <img :src="photoActuelle" class="w-1/2" />
        </div>
        <div class="grid grid-cols-1 gap-14">
          <div class="flex h-10 overflow-hidden rounded-sm text-black">
            <div class="bg-true-gray-25 font-poppins flex items-center justify-center border-[1px] bg-zinc-400 px-5">Nom</div>
            <input class="font-poppins w-full bg-gray-300" type="text" placeholder="Nom de l'artiste" v-model="Artistes.nom" disabled />
          </div>
        </div>
      </div>
      <div class="mt-14 grid w-full grid-cols-2 place-items-center">
        <button class="font-poppins w-fit rounded-xl bg-red-700 px-16 py-4 text-white hover:bg-red-600" type="submit">Supprimer</button>
        <button class="font-poppins w-fit rounded-xl bg-red-700 px-16 py-4 text-white hover:bg-red-600" type="button">
          <RouterLink to="/gestion">Annuler</RouterLink>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { getFirestore, doc, getDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";
import { getStorage, ref, getDownloadURL, uploadString, deleteObject } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";
export default {
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
      this.$router.push("/gestion");
    },
  },
};
</script>