<template>
  <header>
    <Header />
  </header>
  <main>
    <!-- Google Map -->
    <div class="relative">
      <iframe
        class="absolute -mt-10 h-[316px] w-full object-cover opacity-60 md:-mt-20 lg:h-[500px]"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11648.772046710292!2d3.1246769358562494!3d43.12147141628794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b0ffcdfcdf06c1%3A0xa96356bc0de41a8a!2sPlage%20de%20Mateille!5e0!3m2!1sfr!2sfr!4v1654071530761!5m2!1sfr!2sfr"
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div class="flex justify-center">
        <h1 class="absolute mt-40 font-concert-one text-3xl text-Extended/true-gray/50">Nous contacter</h1>
      </div>
      <div class="flex justify-center">
        <div class="absolute mt-56 w-[267px] bg-Extended/true-gray/900 py-3">
          <form class="mx-6 font-lato text-Extended/true-gray/50" id="form">
            <label for="fname" class="mx-6 text-xs">Nom </label>
            <input
              type="text"
              id="fname"
              name="name"
              placeholder="Votre nom"
              class="mx-6 mt-1.5 mb-4 w-[200px] bg-Extended/true-gray/900 font-lato text-xs font-light"
            />
            <Line />
            <label for="emailAddress" class="mx-6 text-xs">Email</label>
            <input
              id="emailAddress"
              type="email"
              name="email"
              placeholder="Votre email"
              required
              class="mx-6 mt-1.5 mb-4 w-[200px] bg-Extended/true-gray/900 font-lato text-xs font-light"
            />
            <Line />
            <label for="subject" class="mx-6 text-xs">Message</label>
            <textarea
              id="subject"
              name="message"
              placeholder="Votre message"
              style="height: 150px"
              class="mx-6 mt-1.5 mb-4 w-[200px] bg-Extended/true-gray/900 font-lato text-xs font-light"
            ></textarea>
            <Line />
            <RouterLink to="/message">
              <div class="mt-6 text-center">
                <input
                  type="submit"
                  value="Envoyer"
                  name="submit"
                  class="
                    cursor-pointer
                    rounded-4xl
                    border-none
                    bg-Extended/amber/500
                    px-9
                    py-2
                    font-lato
                    text-lg
                    font-medium
                    text-white
                    shadow-lg
                    hover:bg-Extended/amber/400
                  "
                />
              </div>
            </RouterLink>
          </form>
        </div>
      </div>
    </div>
  </main>
  <footer>
    <Footer />
  </footer>
</template>
<script>
import Header from "../components/Header.vue";
import Line from "../components/icons/Line.vue";
import Footer from "../components/Footer.vue";
export default {
  components: { Header, Line, Footer },
};
</script>
