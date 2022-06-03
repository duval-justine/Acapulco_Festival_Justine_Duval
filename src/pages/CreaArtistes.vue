<template>
  <header>
    <Header />
  </header>
  <h5 class="mt-14 text-center font-concert-one text-3xl font-bold text-Extended/true-gray/50">Création de fiche Artiste</h5>
  <!-- <section class="mx-2 pb-6 md:m-auto md:max-w-[70%] lg:max-w-[50%] lg:pb-14">
    <form @submit.prevent="createArtiste">
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div class="grid place-items-center">
          <img :src="imageData" class="w-1/2" />
        </div>
        <div class="grid grid-cols-1 gap-14">
          <div class="flex h-10 overflow-hidden rounded-sm bg-zinc-400 font-lato text-black">
            <div class="bg-true-gray-25 flex items-center justify-center border-[1px] px-5">Nom</div>
            <input class="w-full bg-gray-300 font-lato" type="text" placeholder="Nom de l'artiste" v-model="artistes.nom" required />
          </div>

          <div class="flex h-10 overflow-hidden rounded-sm bg-zinc-400 text-black">
            <div class="bg-true-gray-25 flex items-center justify-center border-[1px] px-5 font-lato">Photo</div>
            <div class="relative w-full">
              <input type="file" class="relative w-full" ref="file" id="file" @change="previewImage" />
              <label class="absolute left-0 top-0 bottom-0 flex w-full items-center justify-center bg-gray-300 font-lato" for="file"
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
  </section> -->
  <!-- Création d'une nouvelle fiche
  <div>
    <div>
      <form enctype="multipart/form-data" @submit.prevent="createArtiste">
        <div class="card bg-dark">
          <h5 class="mt-14 text-center font-concert-one text-3xl font-bold text-Extended/true-gray/50">Création de fiche Artiste</h5>
          <div class="card-body">
            <div class="row mt-6 ml-8">
              <div class="col-6">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text font-lato text-xl text-Extended/true-gray/50">Nom</span>
                  </div>
                  <input
                    class="mt-5 bg-Extended/true-gray/50 font-lato text-lg"
                    placeholder="Nom de l'artiste"
                    v-model="artiste.nom"
                    required
                  />
                </div>
                <br />
                <div class="input-group">
                  <div class="input-group-preprend">
                    <span class="input-group-text font-lato text-xl text-Extended/true-gray/50">Date du Concert</span>
                  </div>
                  <input
                    class="mt-5 bg-Extended/true-gray/50 font-lato text-lg"
                    placeholder="Date du concert"
                    v-model="artiste.date"
                    required
                  />
                </div>
                <br />
                <div class="input-group">
                  <div class="input-group-preprend">
                    <span class="input-group-text font-lato text-xl text-Extended/true-gray/50">Lien</span>
                  </div>
                  <input class="mt-5 bg-Extended/true-gray/50 font-lato text-lg" placeholder="Lien" v-model="artiste.lien" required />
                </div>
                <br />
                <div class="input-group">
                  <div class="input-group-preprend">
                    <span class="input-group-text font-lato text-xl text-Extended/true-gray/50">Photo</span>
                  </div>
                  <div class="custom-file">
                    <input type="file" class="custom-file-input" ref="file" id="file" @change="previewImage" />
                    <label class="custom-file-label" for="file">Sélectionner l'image</label>
                  </div>
                </div>
                <br />
              </div>
            </div>
          </div>
          <div class="card-footer">
            <button type="submit" class="btn-dark btn float-left">Créer</button>
            <button type="submit" class="btn-dark btn float-right">
              <RouterLink to="/artistes">Cancel</RouterLink>
            </button>
          </div>
        </div>
      </form>
    </div>
  </div> -->
</template>

<script>
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
import Header from "../components/Header.vue";
export default {
  components: { Header },
  data() {
    return {
      nom: null,
      listeArtistesSynchro: [],
      imageData: null,
      artiste: {
        nom: null,
        date: null,
        image: null,
        lien: null,
      },
    };
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
      });
    },

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
      // redirection sur la liste des  artistes
      this.$router.push("/artistesadmin");
    },
  },
};
</script>
