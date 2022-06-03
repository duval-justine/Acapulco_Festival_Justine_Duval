<template>
  <header>
    <Header />
  </header>
  <main>
    <DecoBD class="mt-12" />
    <h1 class="text-center font-concert-one text-3xl text-Extended/true-gray/50">Inscription</h1>
    <div class="flex flex-col items-center">
      <form @submit.prevent="onCreate">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <button class="mt-9 mb-2 ml-6 font-lato text-sm font-medium text-Extended/true-gray/50">Adresse-email</button>
          </div>
          <input
            class="bg-Extended/true-gray/50 px-20 py-1 text-sm text-Extended/true-gray/900"
            type="text"
            v-model="user.email"
            required
          />
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <button class="mt-9 mb-2 ml-6 font-lato text-sm font-medium text-Extended/true-gray/50">Mot de passe</button>
          </div>
          <input
            class="border-Extended/true-gray/50 bg-Extended/true-gray/50 px-20 py-1 text-Extended/true-gray/900"
            type="password"
            v-model="user.password"
            required
          />
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <button class="mt-9 mb-2 ml-6 font-lato text-sm font-medium text-Extended/true-gray/50">Vérification du mot de passe</button>
            </div>
            <input
              class="border-Extended/true-gray/50 bg-Extended/true-gray/50 px-20 py-1 text-Extended/true-gray/900"
              type="password"
              v-model="password2"
              required
            />
          </div>
        </div>
        <div
          class="relative mx-[88px] flex items-center justify-center gap-2 rounded-5xl bg-Extended/amber/500 px-7 py-2"
          style="box-shadow: 0px 1.5600000619888306px 1.5600000619888306px 2.017021417617798px rgba(0, 0, 0, 0.25)"
        >
          <button
            variant="dark"
            class="flex-shrink-0 flex-grow-0 text-left font-lato text-base font-medium text-Extended/true-gray/50 drop-shadow-sm"
            type="submit"
          >
            S'inscrire
          </button>
        </div>
      </form>
    </div>
    <div class="flex flex-row justify-center gap-1">
      <p class="mt-10 text-center font-lato font-medium text-Extended/true-gray/50">Déjà inscrit ?</p>
      <RouterLink to="/connexion">
        <p class="mt-10 text-center font-lato font-medium text-Extended/amber/500">Se connecter</p>
      </RouterLink>
    </div>

    <DecoHG class="ml-auto" />
  </main>
</template>
 
<script>
import Header from "../components/Header.vue";
import DecoHG from "../components/icons/DecoHG.vue";
import DecoBD from "../components/icons/DecoBD.vue";
//import {emitter} from '../main.js'
import {
  getFirestore, // Obtenir le Firestore
  collection, // Utiliser une collection de documents
  doc, // Obtenir un document par son id
  getDocs, // Obtenir la liste des documents d'une collection
  getDoc,
  addDoc, // Ajouter un document à une collection
  updateDoc, // Mettre à jour un document dans une collection
  deleteDoc, // Supprimer un document d'une collection
  onSnapshot, // Demander une liste de documents d'une collection, en les synchronisant
  query, // Permet d'effectuer des requêtes sur Firestore
  orderBy, // Permet de demander le tri d'une requête query
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";
export default {
  components: { Header, DecoHG, DecoBD },
  data() {
    return {
      user: {
        login: "",
        email: "",
        password: "",
      },
      password2: "",
      message: "bonjour",
      type: "password",
    };
  },
  mounted() {
    this.message = "User non connecté";
  },
  methods: {
    onCnx() {
      signInWithEmailAndPassword(getAuth(), this.user.email, this.user.password)
        .then((response) => {
          this.user = response.user;
          console.log("user", this.user);
          this.message = "user connecté : " + this.user.email;
        })
        .catch((error) => {
          console.log("erreur connexion", error);
          this.message = "erreur d'authentification";
        });
    },
    onDcnx() {
      signOut(getAuth())
        .then((response) => {
          this.message = "User non connecté";
          this.user = {
            email: null,
            password: null,
          };
        })
        .catch((error) => {
          console.log("erreur deconnexion", error);
        });
    },
    onCreate() {
      if (this.user.password === this.password2) {
        createUserWithEmailAndPassword(getAuth(), this.user.email, this.user.password)
          .then((response) => {
            const user = response.user;
          })
          .catch((error) => {
            console.log("erreur création", error);
            this.message = "erreur de création";
          });

        this.onCnx();
        onAuthStateChanged(getAuth(), (user) => {
          if (user) {
            const uid = user.uid;
            const firestore = getFirestore();
            const dbUser = collection(firestore, "users");
            const docRef = addDoc(dbUser, {
              uid: uid,
              admin: false,
              login: this.user.login,
            });
            console.log("document créé avec le id : ", docRef.id);
          } else {
            console.log("user pas connecter");
          }
        });
      } else {
        this.message = "password pas cohérent";
        console.log("erreur mot de passe");
      }
    },
  },
};
</script>
