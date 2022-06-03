import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../pages/Accueil.vue'
import 'tw-elements';
import ProgrammationAll from '../pages/ProgrammationAll.vue'
import ProgrammationJeudi from '../pages/ProgrammationJeudi.vue'
import ProgrammationVendredi from '../pages/ProgrammationVendredi.vue'
import ConcertMG from '../pages/ConcertMG.vue'
import Artistes from '../pages/Artistes.vue'
import MartinGarrix from '../pages/MartinGarrix.vue'
import Festival from '../pages/Festival.vue'
import MentionsLegales from '../pages/MentionsLegales.vue'
import Contact from '../pages/Contact.vue'
import Message from '../pages/Message.vue'
import Page404 from '../pages/View404.vue'
import Connexion from '../pages/Connexion.vue'
import Inscription from '../pages/Inscription.vue'
import GuideStyle from '../pages/GuideStyle.vue'
import CreaArtistes from '../pages/CreaArtistes.vue'
import GestionArtistes from '../pages/GestionArtistes.vue'
import DeleteArtistes from '../pages/DeleteArtiste.vue'
import ModifArtiste from '../pages/ModifArtiste.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'Accueil', component: Accueil },
        { path: '/progall', name: 'Programmation All', component: ProgrammationAll },
        { path: '/progjeudi', name: 'Programmation Jeudi', component: ProgrammationJeudi },
        { path: '/progvendredi', name: 'Programmation Vendredi', component: ProgrammationVendredi },
        { path: '/concertmg', name: 'Concert Martin Garrix', component: ConcertMG },
        { path: '/artistes', name: 'Artistes', component: Artistes },
        { path: '/martingarrix', name: 'Artiste Martin Garrix', component: MartinGarrix },
        { path: '/festival', name: 'Festival', component: Festival },
        { path: '/mtnlegales', name: 'Mentions Légales', component: MentionsLegales },
        { path: '/contact', name: 'Contact', component: Contact },
        { path: '/message', name: 'Message', component: Message },
        { path: '/:pathMatch(.*)*', name: 'Page 404', component: Page404 },
        { path: '/connexion', name: 'Connexion', component: Connexion },
        { path: '/inscription', name: 'Inscription', component: Inscription },
        { path: '/guidestyle', name: 'Guide de Style', component: GuideStyle },
        { path: '/gestionartistes', name: 'Gestions des Artistes', component: GestionArtistes },
        { path: '/creaartistes', name: 'Créer des Artistes', component: CreaArtistes },
        { path: '/deleteartistes/:id', name: 'deleteartiste', component: DeleteArtistes },
        { path: '/modifartiste/:id', name: 'modifartiste', component: ModifArtiste },
    ],
})

export default router