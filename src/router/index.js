import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../pages/Accueil.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'Accueil', component: Accueil },
    ],
})

export default router