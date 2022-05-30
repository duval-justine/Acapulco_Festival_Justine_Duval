import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../pages/Accueil.vue'
import 'tw-elements';
import ProgrammationAll from '../pages/ProgrammationAll.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'Accueil', component: Accueil },
        { path: '/progall', name: 'Programmation All', component: ProgrammationAll },
    ],
})

export default router