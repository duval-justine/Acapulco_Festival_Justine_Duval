import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../pages/Accueil.vue'
import 'tw-elements';
import ProgrammationAll from '../pages/ProgrammationAll.vue'
import ConcertMG from '../pages/ConcertMG.vue'
import MartinGarrix from '../pages/MartinGarrix.vue'
import Festival from '../pages/Festival.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'Accueil', component: Accueil },
        { path: '/progall', name: 'Programmation All', component: ProgrammationAll },
        { path: '/concertmg', name: 'Concert Martin Garrix', component: ConcertMG },
        { path: '/martingarrix', name: 'Artiste Martin Garrix', component: MartinGarrix },
        { path: '/festival', name: 'Festival', component: Festival },
    ],
})

export default router