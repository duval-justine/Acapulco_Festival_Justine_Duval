<template>
  <header>
    <Header />
  </header>
  <h1 class="mt-14 text-center font-concert-one text-3xl font-bold text-Extended/true-gray/50">Modification</h1>

  <div class="relative mt-12 flex flex-col gap-20 px-5">
    <form @submit.prevent="updateArtiste">
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div class="grid place-items-center">
          <img :src="imageData" class="w-1/2" />
        </div>
        <div class="grid grid-cols-1 gap-14">
          <div class="flex h-10 overflow-hidden rounded-sm text-black">
            <div class="font-poppins rounded-l-sm-sm flex items-center justify-center border-[1px] bg-Extended/amber/500 px-5">Nom</div>
            <input
              class="w-full bg-Extended/true-gray/50 pl-3 font-lato text-sm"
              type="text"
              placeholder="Nom de l'artiste"
              v-model="Artistes.nom"
              required
            />
          </div>
          <div class="flex h-10 overflow-hidden rounded-sm text-black">
            <div class="font-poppins rounded-l-sm-sm flex items-center justify-center border-[1px] bg-Extended/amber/500 px-5">Date</div>
            <input
              class="w-full bg-Extended/true-gray/50 pl-3 font-lato text-sm"
              type="text"
              placeholder="Date du concert"
              v-model="Artistes.date"
              required
            />
          </div>
          <div class="flex h-10 overflow-hidden rounded-sm text-black">
            <div class="font-poppins rounded-l-sm-sm flex items-center justify-center border-[1px] bg-Extended/amber/500 px-5">Lien</div>
            <input
              class="w-full bg-Extended/true-gray/50 pl-3 font-lato text-sm"
              type="text"
              placeholder="Lien de la page"
              v-model="Artistes.lien"
              required
            />
          </div>

          <div class="flex h-10 overflow-hidden rounded-sm text-black">
            <div class="font-poppins rounded-l-sm-sm flex items-center justify-center border-[1px] bg-Extended/amber/500 px-5">Photo</div>
            <div class="relative w-full">
              <input type="file" class="font-poppins relative w-full bg-gray-300" ref="file" id="file" @change="previewImage" />
              <label
                class="absolute left-0 top-0 bottom-0 flex w-full items-center justify-center bg-Extended/true-gray/50 p-3 font-lato"
                for="file"
                >Sélectionner l'image</label
              >
            </div>
          </div>
        </div>
      </div>

      <div class="mt-14 grid w-full grid-cols-2 place-items-center">
        <button class="w-fit rounded-xl bg-Extended/amber/500 px-16 py-4 font-lato text-white hover:bg-Extended/amber/400" type="button">
          <RouterLink to="/gestionartistes">Annuler</RouterLink>
        </button>
        <button class="w-fit rounded-xl bg-Extended/amber/500 px-16 py-4 font-lato text-white hover:bg-Extended/amber/400" type="submit">
          Modifier
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
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  updateDoc,
  onSnapshot,
  query,
  orderBy,
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js";
import { getStorage, ref, getDownloadURL, uploadString, deleteObject } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-storage.js";
export default {
  components: { Header, Footer },
  data() {
    return {
      imageData: null,

      Artistes: {
        artiste: null,
        image: null,
      },
      refArtiste: null,
      imgModifiee: false,
      photoActuelle: null,
    };
  },
  mounted() {
    this.getArtiste(this.$route.params.id);
  },
  methods: {
    previewImage: function (event) {
      this.file = this.$refs.file.files[0];
      this.Artistes.image = this.file.name;
      this.imgModifiee = true;
      var input = event.target;
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.imageData = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
      }
    },
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
          this.imageData = url;
        })
        .catch((error) => {
          console.log("erreur downloadurl", error);
        });
    },
    async updateArtiste() {
      if (this.imgModifiee) {
        const storage = getStorage();
        let docRef = ref(storage, "Artistes/" + this.photoActuelle);
        deleteObject(docRef);
        docRef = ref(storage, "Artistes/" + this.Artistes.image);
        await uploadString(docRef, this.imageData, "data_url").then((snapshot) => {
          console.log("Uploaded a base64 string", this.Artistes.image);
        });
      }
      const firestore = getFirestore();
      await updateDoc(doc(firestore, "Artistes", this.$route.params.id), this.Artistes);
      this.$router.push("/gestionartistes");
    },
  },
};
</script>