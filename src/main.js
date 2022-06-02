import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAM_NkkvNqmgrrWr3hlqBHCEg4YsyqezUY",
    authDomain: "acapulco-festival.firebaseapp.com",
    projectId: "acapulco-festival",
    storageBucket: "acapulco-festival.appspot.com",
    messagingSenderId: "668144072972",
    appId: "1:668144072972:web:f896d5944a8515a625f129"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);


const app = createApp(App)
app.use(router)
app.mount('#app')