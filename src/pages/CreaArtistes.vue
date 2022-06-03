<template>
  <header>
    <Header />
  </header>
  <h1 class="mt-14 text-center font-concert-one text-3xl font-bold text-Extended/true-gray/50">Création Artiste</h1>
  <div class="relative mt-12 flex flex-col gap-20 px-5">
    <div class="flex items-end justify-between">
      <h1 class="font-lato text-4xl underline">Ajouter Artiste</h1>
    </div>
    <form @submit.prevent="createArtiste">
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div class="grid place-items-center">
          <img :src="imageData" class="w-1/2" />
        </div>
        <div class="grid grid-cols-1 gap-14">
          <div class="flex h-10 overflow-hidden rounded-sm bg-zinc-400 font-lato text-black">
            <div class="mt-14 text-center font-concert-one text-3xl font-bold text-Extended/true-gray/50">Nom</div>
            <input
              class="mt-5 bg-Extended/true-gray/50 font-lato text-lg"
              type="text"
              placeholder="Nom de l'artiste"
              v-model="Artistes.nom"
              required
            />
          </div>

          <div class="flex h-10 overflow-hidden rounded-sm bg-zinc-400 font-lato text-black">
            <div class="mt-14 text-center font-concert-one text-3xl font-bold text-Extended/true-gray/50">Date</div>
            <input
              class="mt-5 bg-Extended/true-gray/50 font-lato text-lg"
              type="text"
              placeholder="Date du concert"
              v-model="Artistes.date"
              required
            />
          </div>

          <div class="flex h-10 overflow-hidden rounded-sm bg-zinc-400 font-lato text-black">
            <div class="mt-14 text-center font-concert-one text-3xl font-bold text-Extended/true-gray/50">Lien</div>
            <input
              class="mt-5 bg-Extended/true-gray/50 font-lato text-lg"
              type="text"
              placeholder="Lien de la page"
              v-model="Artistes.lien"
              required
            />
          </div>

          <div class="flex h-10 overflow-hidden rounded-sm bg-zinc-400 text-black">
            <div class="bg-true-gray-25 flex items-center justify-center border-[1px] px-5 font-lato">Photo</div>
            <div class="relative w-full">
              <input type="file" class="relative w-full" ref="file" id="file" @change="previewImage" />
              <label class="absolute left-0 top-0 bottom-0 flex w-full items-center justify-center bg-gray-300 p-3 font-lato" for="file"
                >Sélectionner l'image</label
              >
            </div>
          </div>
        </div>
      </div>
      <div class="mt-16 grid w-full grid-cols-2 place-items-center">
        <button class="w-fit rounded-xl bg-red-700 px-16 py-4 font-lato text-white" type="submit">Ajouter</button>
        <button class="w-fit rounded-xl bg-red-700 px-16 py-4 font-lato text-white" type="button">
          <RouterLink to="/gestion">Annuler</RouterLink>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  addDoc,
  updateDoc,
  onSnapshot,
  query,
  orderBy,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";
import { getStorage, ref, getDownloadURL, uploadString } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";
export default {
  data() {
    return {
      imageData: null,

      Artistes: {
        nom: null,
        date: null,
        image: null,
        lien: null,
      },
    };
  },
  mounted() {},
  methods: {
    previewImage: function (event) {
      this.file = this.$refs.file.files[0];
      this.Artistes.image = this.file.name;
      var input = event.target;
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.imageData = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
      }
    },
    async createArtiste() {
      const storage = getStorage();
      const refStorage = ref(storage, "Artistes/" + this.Artistes.image);
      console.log("refStorage", refStorage);
      await uploadString(refStorage, this.imageData, "data_url").then((snapshot) => {
        console.log("Uploaded a base64 string");
        const db = getFirestore();
        const docRef = addDoc(collection(db, "Artistes"), this.Artistes);
      });
      this.$router.push("/gestion");
      this.$router.push("../Artistes");
    },
  },
};
</script>