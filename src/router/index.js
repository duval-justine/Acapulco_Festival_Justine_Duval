import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../pages/Accueil.vue'
import 'tw-elements';
import ProgrammationAll from '../pages/ProgrammationAll.vue'
import ConcertMG from '../pages/ConcertMG.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'Accueil', component: Accueil },
        { path: '/progall', name: 'Programmation All', component: ProgrammationAll },
        { path: '/concertmg', name: 'Concert Martin Garrix', component: ConcertMG },
    ],
})

export default router