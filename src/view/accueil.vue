<template>
  <!-- En-tête -->
  <div
    class="w-full min-h-[500px] relative bg-gradient-to-tr from-[#77C1EB] via-[#9B7EC4] to-[#dfb49fec] flex items-center justify-center">
    <!-- Dégradé transparent -->
    <div class="absolute inset-0 bg-gradient-to-r from-transparent via-purple-900/10 to-transparent"></div>

    <!-- Bouton Connexion -->
    <div class="absolute top-4 right-4 md:top-6 md:right-8 z-10">
      <button
        class="bg-[#00A8E8] hover:bg-[#0090CC] text-white font-semibold px-4 py-2 md:px-6 md:py-2 rounded-lg shadow-lg hover:shadow-xl text-sm md:text-base">
        Connexion
      </button>
    </div>

    <!-- Contenu central -->
    <div class="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center justify-center">
      <img src="@/assets/image/OBJECTS.png" alt="mon logo" class="mb-6 max-w-xs w-full object-contain" />

      <h2 class="text-[25px] md:text-[35px] font-bold text-white mb-4 leading-tight">
        Simplifiez votre comptabilité
        <span class="block mt-2">avec SG-stocks</span>
      </h2>

      <div class="relative flex gap-50 align-items ">
        <div class=" flex justify-start">
          <p class="text-white text-base md:text-lg mb-8 max-w-2xl opacity-95">
            Faites un suivi de votre stock, en contrôlant vos dépenses
            <span class="block mt-1">et ressortez votre compte de résultat, vos charges, vos</span>
            <span class="block mt-1">produits, et votre bénéfice</span>
          </p>
        </div>
        <div class="flex justify-end right-10">
          <img src="./../assets/image/interface.png" alt="">
        </div>
      </div>


      <!-- CTA -->
      <!-- Texte du lien à gauche -->
      <div class="flex w-10/15 text-center md:text-left">
        <a href="#" class="inline-block group">
          <p class="text-[#6500F3] font-bold text-xl md:text-2xl mb-2 hover:underline">
            Cliquez pour suivre le lien
          </p>
          <p
            class="text-[#6500F3] font-bold text-xl md:text-2xl flex items-center justify-center md:justify-start gap-2">
            pour la phase test
            <span class="text-3xl">✨👌</span>
          </p>
        </a>
      </div>

    </div>
  </div>

  <!-- Slider images -->
  <div class="overflow-hidden relative w-full h-[200px] md:h-[300px] p-4 mx-auto">
    <div class="flex transition-transform duration-500" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div v-for="(img, index) in images" :key="index" class="w-full flex-shrink-0 flex justify-center items-center">
        <img :src="img" alt="Slide Image" class="max-w-full h-auto object-contain" />
      </div>
    </div>
    <!-- Navigation -->
    <button @click="prevSlide"
      class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-75 hover:bg-opacity-100 rounded-full p-2 shadow-lg focus:outline-none">←</button>
    <button @click="nextSlide"
      class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-75 hover:bg-opacity-100 rounded-full p-2 shadow-lg focus:outline-none">→</button>
    <!-- Indicateurs -->
    <div class="flex justify-center mt-4 space-x-2">
      <div v-for="(img, index) in images" :key="index" @click="goToSlide(index)"
        :class="{ 'w-3 h-3 rounded-full cursor-pointer': true, 'bg-blue-500': index === currentIndex, 'bg-gray-300': index !== currentIndex }">
      </div>
    </div>
  </div>

  <!-- Section fonctionnalités -->
  <section class="w-full flex items-center bg-[#f1f3f6de] mb-10 py-16 px-25">
    <!-- Partie gauche -->
    <div class="flex w-3/5">
      <div class="text-left">
        <h2 class="text-[25px] md:text-[30px] font-bold text-black mb-2">
          Les fonctionnalités de
        </h2>
        <h2 class="text-[25px] md:text-[30px] font-bold text-black mb-4">
          notre logiciel
        </h2>
        <p class="text-[15px] text-gray-700 max-w-[600px] mb-8">
          Notre logiciel a été conçu pour répondre aux besoins concrets des professionnels et des entreprises en
          quête d'efficacité, de simplicité et de performance. Grâce à une interface intuitive et des outils puissants,
          il vous accompagne dans vos tâches quotidiennes, optimise vos processus et vous aide à atteindre vos objectifs
          plus rapidement.
          Découvrez ci-dessous les fonctionnalités clés qui font de notre solution un véritable allié dans votre
          activité.
        </p>

        <!-- Liste de fonctionnalités -->
        <div class="flex  justify-between gap-8">
          <!-- Fonctionnalités de gauche -->
          <div class="flex  flex-col space-y-4">
            <!-- Fonctionnalité 1 -->
            <div class="flex items-center gap-10">
              <button class="w-[25px] h-[25px] rounded-full bg-[#0736CF] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-4 h-4 text-white">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </button>
              <p class="text-xl font-semibold text-black">Gestion des stocks</p>
            </div>
            <!-- Fonctionnalité 2 -->
            <div class="flex items-center gap-10">
              <button class="w-[25px] h-[25px] rounded-full bg-[#0736CF] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-4 h-4 text-white">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </button>
              <p class="text-xl font-semibold text-black">Gestion des Achats/Ventes</p>
            </div>
            <!-- Fonctionnalité 3 -->
            <div class="flex items-center gap-10">
              <button class="w-[25px] h-[25px] rounded-full bg-[#0736CF] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-4 h-4 text-white">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </button>
              <p class="text-xl font-semibold text-black">Suivi des ventes</p>
            </div>
            <!-- Fonctionnalité 4 -->
            <div class="flex items-center gap-10">
              <button class="w-[25px] h-[25px] rounded-full bg-[#0736CF] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-4 h-4 text-white">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </button>
              <p class="text-xl font-semibold text-black">Rapports analytiques</p>
            </div>
          </div>

          <!-- Fonctionnalités de droite -->
          <div class="flex  flex-col space-y-4">
            <!-- Fonctionnalité 1 -->
            <div class="flex items-center gap-10">
              <button class="w-[25px] h-[25px] rounded-full bg-[#0736CF] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-4 h-4 text-white">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </button>
              <p class="text-xl font-semibold text-black">Gestion des Fournisseurss</p>
            </div>
            <!-- Fonctionnalité 2 -->
            <div class="flex items-center gap-10">
              <button class="w-[25px] h-[25px] rounded-full bg-[#0736CF] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-4 h-4 text-white">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </button>
              <p class="text-xl font-semibold text-black">Gestion des Achats / ventes</p>
            </div>
            <!-- Fonctionnalité 3 -->
            <div class="flex items-center gap-10">
              <button class="w-[25px] h-[25px] rounded-full bg-[#0736CF] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-4 h-4 text-white">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </button>
              <p class="text-xl font-semibold text-black">Gestion des Clients</p>
            </div>
            <!-- Fonctionnalité 4 -->
            <div class="flex items-center gap-10">
              <button class="w-[25px] h-[25px] rounded-full bg-[#0736CF] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-4 h-4 text-white">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </button>
              <p class="text-xl font-semibold text-black">Statistiques</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Partie droite - Image avec slider -->
    <div class="w-2/5 flex justify-center items-center px-8 relative">
      <div class="relative w-full max-w-lg">

        <img src="./../assets/image/Frame.png" alt="">
      </div>
    </div>
  </section>

  <!-- Image fonctionnalités -->
  <section class="bg-white flex  flex-col gap-3">
    <div class="max-w-4xl mx-auto text-center  gap-1">
      <h2 class="text-xl md:text-2xl font-bold mb-1 text-black">
        Voici trois critères convaincants qui pourraient vous
      </h2>
      <h2 class="text-[15px] md:text-2xl font-bold mb-1 text-black"> inciter vous grande entreprise ou petite
        commerçants à
      </h2>
      <h2 class="text-[15px] md:text-2xl font-bold mb-1 text-black">adopter notre logiciel de gestion comptable, de
        stock et
      </h2>
      <h2 class="text-[15px] md:text-2xl font-bold mb-1 text-black"> commercial en 3 en 1</h2>
    </div>

    <div class="flex justify-around gap-20 mb-10 px-8 bg-white">
      <!-- Fonctionnalité 1 -->
      <div class="flex flex-col items-center max-w-[270px]">
        <div class="w-full h-[200px] flex items-center justify-center">
          <img src="./../assets/image/Group.png" alt="">
        </div>
        <div class="flex flex-col gap-5">
          <h2 class="text-[14px] md:text-[18px] font-bold  text-black flex ">Suivie de stock en temps réel </h2>
          <p class="text-[15px]  text-center text-gray-700">
            Alertes automatiques, tableaux de bord dynamiques,
            et génération de rapports instantanés pour une prise de
            décision rapide et éclairée.
          </p>

        </div>

      </div>

      <!-- Fonctionnalité 2 -->
      <div class="flex flex-col items-center max-w-[270px]">
        <div class="w-full h-[200px] flex items-center justify-center">
          <img src="./../assets/image/Group (1).png" alt="">
        </div>

        <div class="flex flex-col gap-5">
          <h2 class="text-[14px] md:text-[18px] font-bold  text-black flex ">Suivie de stock en temps réel </h2>
          <p class="text-[15px] mb-6 text-center text-gray-700">
            Une image plus professionnelle (factures conformes, suivi client structuré),
            une meilleure organisation, et des données fiables pour convaincre partenaires
            ou investisseurs.
          </p>
        </div>
      </div>

      <!-- Fonctionnalité 3 -->
      <div class="flex flex-col items-center max-w-[250px]">
        <div class="w-full h-[200px] flex items-center justify-center">
          <img src="./../assets/image/Group (2).png" alt="">
        </div>
        <div class="flex flex-col gap-5">
          <h2 class="text-[14px] md:text-[18px] font-bold  text-black flex ">Centralisation des opérations</h2>
          <p class="text-[15px] mb-6 text-center text-gray-700">
            Une seule plateforme pour gérer la comptabilité, le stock et les ventes,
            ce qui réduit les erreurs, les doublons et les pertes de données.
          </p>
        </div>
      </div>
    </div>
  </section>


  <!-- Section Critères Convaincants -->
  <section class="bg-white py-16 px-8">


    <div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
      <!-- Critère 1 -->
      <div class="text-center">
        <div class="w-32 h-32 mx-auto mb-6 bg-red-100 rounded-lg flex items-center justify-center">
          <svg class="w-16 h-16 text-red-500" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
              clip-rule="evenodd" />
          </svg>
        </div>
        <h3 class="text-xl font-bold mb-3 text-black">Gain en temps idéal d'automatisation</h3>
        <p class="text-gray-600">
          Réduisez considérablement le temps consacré aux tâches répétitives grâce à l'automatisation intelligente de
          nos processus.
        </p>
      </div>

      <!-- Critère 2 -->
      <div class="text-center">
        <div class="w-32 h-32 mx-auto mb-6 bg-blue-100 rounded-lg flex items-center justify-center">
          <svg class="w-16 h-16 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd"
              d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z"
              clip-rule="evenodd" />
          </svg>
        </div>
        <h3 class="text-xl font-bold mb-3 text-black">Croissance et professionnalisation</h3>
        <p class="text-gray-600">
          Structurez votre activité avec des outils professionnels qui évoluent avec votre entreprise et favorisent
          votre croissance.
        </p>
      </div>

      <!-- Critère 3 -->
      <div class="text-center">
        <div class="w-32 h-32 mx-auto mb-6 bg-purple-100 rounded-lg flex items-center justify-center">
          <svg class="w-16 h-16 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
          </svg>
        </div>
        <h3 class="text-xl font-bold mb-3 text-black">Centralisation des opérations</h3>
        <p class="text-gray-600">
          Gérez toutes vos opérations depuis une seule plateforme intuitive et performante. Fini les multiples
          logiciels.
        </p>
      </div>
    </div>
  </section>

</template>



<script>
import image5 from '@/assets/image/slide/Frame 2.png';
import image6 from '@/assets/image/slide/Frame 3 (1).png';
import image7 from '@/assets/image/slide/Frame 4.png';
import image8 from '@/assets/image/slide/Frame 5.png';
import image9 from '@/assets/image/slide/Frame 6.png';
import image10 from '@/assets/image/slide/Frame.png';

export default {
  data() {
    return {
      images: [image5, image6, image7, image8, image9, image10,],
      currentIndex: 0,
    };
  },
  methods: {
    prevSlide() {
      this.currentIndex =
        this.currentIndex === 0 ? this.images.length - 1 : this.currentIndex - 1;
    },
    nextSlide() {
      this.currentIndex =
        this.currentIndex === this.images.length - 1 ? 0 : this.currentIndex + 1;
    },
    goToSlide(index) {
      this.currentIndex = index;
    },
  },
};
import { ref, onMounted, onUnmounted } from 'vue';

const currentSlide = ref(0);
const totalSlides = 3;
const sliderRef = ref(null);
let intervalId = null;

const goToSlide = (index) => {
  currentSlide.value = index;
};

// Auto-slide every 4 seconds
onMounted(() => {
  intervalId = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % totalSlides;
  }, 4000);
});

// Clean up interval when component is unmounted
onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});



</script>