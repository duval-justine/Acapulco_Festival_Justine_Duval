<template>
  <header>
    <Header />
  </header>
  <main>
    <!-- Google Map -->
    <div>
      <iframe
        class="-mt-10 h-[316px] w-full object-cover opacity-60 md:-mt-20 lg:h-[500px]"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11648.772046710292!2d3.1246769358562494!3d43.12147141628794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b0ffcdfcdf06c1%3A0xa96356bc0de41a8a!2sPlage%20de%20Mateille!5e0!3m2!1sfr!2sfr!4v1654071530761!5m2!1sfr!2sfr"
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div class="flex justify-center">
        <h1 class="relative z-20 -mt-40 font-concert-one text-3xl text-Extended/true-gray/50 md:-mt-20 md:text-7xl lg:-mt-60 lg:text-8xl">
          Nous contacter
        </h1>
      </div>
      <div class="flex justify-center pb-12">
        <div
          class="relative z-20 -mt-10 w-[267px] bg-Extended/true-gray/900 py-3 md:h-[1273.01px] md:w-[729.09px] lg:h-[1055px] lg:w-[1170px]"
        >
          <form class="mx-6 font-lato text-Extended/true-gray/50" id="form">
            <label for="fname" class="mx-6 text-xs md:text-2xl">Nom </label>
            <br />
            <input
              type="text"
              id="fname"
              name="name"
              placeholder="Votre nom"
              class="mx-6 mt-1.5 mb-4 w-[200px] bg-Extended/true-gray/900 font-lato text-xs font-light md:text-2xl"
            />
            <div class="flex justify-center">
              <Line />
            </div>
            <label for="emailAddress" class="mx-6 text-xs md:text-2xl">Email</label>
            <br />
            <input
              id="emailAddress"
              type="email"
              name="email"
              placeholder="Votre email"
              required
              class="mx-6 mt-1.5 mb-4 w-[200px] bg-Extended/true-gray/900 font-lato text-xs font-light md:text-2xl"
            />
            <div class="flex justify-center">
              <Line />
            </div>
            <label for="subject" class="mx-6 text-xs md:text-2xl">Message</label>
            <br />
            <textarea
              id="subject"
              name="message"
              placeholder="Votre message"
              style="height: 150px"
              class="mx-6 mt-1.5 mb-4 w-[200px] bg-Extended/true-gray/900 font-lato text-xs font-light md:text-2xl"
            ></textarea>
            <div class="flex justify-center">
              <Line />
            </div>
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
