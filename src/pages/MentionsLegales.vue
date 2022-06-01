<template>
  <header>
    <Header />
  </header>
  <main>
    <h1 class="mx-8 mt-12 font-concert-one text-3xl text-Extended/true-gray/50 lg:mx-24 lg:text-[60px]">Mentions Légales</h1>
    <section>
      <div class="mx-8 text-Extended/true-gray/50 lg:mx-24">
        <h3 class="mt-4 font-concert-one text-xl lg:text-4xl">Contact</h3>
        <p class="mt-4 font-lato lg:text-xl">Justine Duval :</p>
        <p class="mt-1 font-lato lg:text-xl">justine.duval@edu.univ-fcomte.fr</p>
        <p class="mt-4 font-lato lg:text-xl">Acapul’co - Festival</p>
        <p class="mt-1 font-lato lg:text-xl">Mateille - Les Ayguades</p>
        <p class="mt-1 font-lato lg:text-xl">11430 Gruissan</p>
      </div>
    </section>
    <section>
      <div class="mx-8 text-Extended/true-gray/50 lg:mx-24">
        <h3 class="mt-8 font-concert-one text-xl lg:text-4xl">Mentions Légales</h3>
        <h4 class="mt-4 font-lato text-sm lg:text-xl"><b>Hébergement :</b> Infomaniak.com</h4>
        <h4 class="mt-4 font-lato text-sm font-bold lg:text-xl">Droits d’auteur :</h4>
        <p class="mt-1 font-lato lg:text-xl">
          L’ensemble de ce site relève de la législation française et internationale sur le droit d’auteur et la propriété industrielle.
          Tous les droits de reproduction sont réservés, y compris les représentations iconographiques et photographiques. La reproduction
          de tout ou partie de ce site sur un support quel qu’il soit, est formellement interdite sauf autorisation expresse des
          responsables d’Acapul’co Festival.
        </p>
        <p class="mt-1 font-lato lg:text-xl">
          La reproduction des textes sur un support papier est autorisée sous réserve du respect des trois conditions suivantes :
        </p>
        <p class="mt-1 font-lato lg:text-xl">– gratuité de la diffusion ;</p>
        <p class="mt-1 font-lato lg:text-xl">– respect de l’intégrité des documents reproduits (pas de modification ni altération) ;</p>
        <p class="mt-1 font-lato lg:text-xl">
          – la citation claire et lisible de la source sous la forme suivante : “ Document issu du site Internet www.acapulco.jduval.fr
          Acapul’co Festival.” Les droits de reproduction sont réservés et strictement limités.
        </p>
        <h4 class="mt-4 font-lato text-sm font-bold lg:text-xl">Politique de confidentialité des données:</h4>
        <p class="mt-1 font-lato lg:text-xl">
          L’équipe Acapal’co Festival traite les données personnelles avec grand respect. C’est-à-dire que toutes les informations
          personnelles que vous avez partagé ou partagerez avec Acapul’co Festival seront conservées en tout sécurité. Il n’y a aucune vente
          de données à une autre entreprise, qu’elle soit partenaire ou non.
        </p>
        <h4 class="mt-4 font-lato text-sm font-bold lg:text-xl">Informations nominatives :</h4>
        <p class="mt-1 font-lato lg:text-xl">
          Les informations que nous recueillons sont destinées à mieux vous connaître, ne seront en aucun cas transmises à des tiers.
          Conformément à la loi » Informatique et Libertés « , vous disposez d’un droit d’accès, de modification, de rectification et de
          suppression des données qui vous concernent. Pour l’exercer, il vous suffit d’envoyer un e-mail à acapulco.festival@gmail.com
        </p>
        <h5 class="mt-4 font-lato text-sm lg:text-xl">Confidentialité des courriers électroniques</h5>
        <p class="mt-1 font-lato lg:text-xl">
          Concernant tout courrier électronique adressé à travers ce site, merci de prendre note du fait que :
        </p>
        <p class="mt-1 font-lato lg:text-xl">– le secret des correspondances transmises par le réseau Internet n’est pas garanti ;</p>
        <p class="mt-1 font-lato lg:text-xl">
          – les courriers électroniques sont conservés sur support informatique, au moins le temps nécessaire à l’administration pour
          fournir une réponse ou pour traiter votre demande.
        </p>
        <h5 class="mt-4 font-lato text-sm lg:text-xl">Formalités de déclaration</h5>
        <p class="mt-1 font-lato lg:text-xl">
          Le présent site Internet et notamment le traitement automatisé de l’information ont fait l’objet d’une déclaration formelle auprès
          de la Commission Nationale de l’Informatique et des Libertés (CNIL).
        </p>
        <h4 class="mt-4 font-lato text-sm font-bold lg:text-xl">Cookies / Statistiques :</h4>
        <p class="mt-1 font-lato lg:text-xl">
          Les « cookies » sont des éléments d’information qu’un site Internet transmet au disque dur d’un ordinateur individuel afin de
          garder un enregistrement du passage ; les mots de passe ne sont pas gardés dans les « cookies ». Les « cookies » permettent aux
          utilisateurs de conserver la mémoire de leurs paramètres personnels pour accéder à ce site et ainsi faciliter leur navigation,
          mais aussi d’obtenir des statistiques. Si vous ne souhaitez pas recevoir de « cookie » vous pouvez utiliser l’option sur votre
          navigateur qui rend indisponible les « cookies ».
        </p>
        <h4 class="mt-4 font-lato text-sm font-bold lg:text-xl">Contenu embarqué depuis d’autres sites :</h4>
        <p class="mt-1 pb-12 font-lato lg:text-xl">
          Les articles de ce site peuvent inclure des contenus intégrés (par exemple des vidéos, images, articles…). Le contenu intégré
          depuis d’autres sites se comporte de la même manière que si le visiteur se rendait sur cet autre site. Ces sites web pourraient
          collecter des données sur vous, utiliser des cookies, embarquer des outils de suivis tiers, suivre vos interactions avec ces
          contenus embarqués si vous disposez d’un compte connecté sur leur site web.
        </p>
      </div>
    </section>
  </main>
  <footer>
    <Footer />
  </footer>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  components: { Header, Footer },
};
</script>
