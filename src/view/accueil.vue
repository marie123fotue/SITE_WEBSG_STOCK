<template>


    <!-- Fond avec dégradé précis : bleu léger à gauche, dégradé violet et orange à droite -->

<div class="w-full h-[480px] relative" style="background: radial-gradient(at 50% 75%, #7CC3EC, #4F32B8, #BF645D);">      <!-- Superposition dégradée subtile pour adoucir
      <div class="absolute h-[480px] inset-0 bg-gradient-to-r from-transparent via-purple-900/10 to-transparent"></div> -->

      <!-- Bouton Connexion -->
      <div class="absolute top-4 right-4 md:top-6 md:right-8 z-10">
        <button
          class="bg-[#00A8E8] hover:bg-[#0090CC] text-white font-semibold px-4 py-2 md:px-6 md:py-2 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-sm md:text-base">
          Connexion
        </button>
      </div>

      <!-- Zone centrale -->
      <div
        class="relative z-10 flex flex-col items-center justify-center min-h-[500px] md:h-full text-center px-4 md:px-4 py-4 md:py-0">
        <!-- Logo -->
        <img src="@/assets/image/OBJECTS.png" alt="mon logo" class="mb-6 md:mb-6" />

        <!-- Titre principal -->
        <h2
          class="text-[25px] md:text-[35px] font-bold text-white mb-4 md:mb-4 leading-tight max-w-3xl px-4 text-center">
          Simplifiez votre comptabilité
          <span class="block mt-2">avec SG-stocks</span>
        </h2>

        <!-- Description -->
        <p class="text-white text-base md:text-lg mb-8 md:mb-10 max-w-2xl  opacity-95 px-4 text-center">
          Faites un suivi de votre stock, en contrôlant vos dépenses
          <span class="block mt-1">et ressortez votre compte de résultat, vos charges, vos</span>
          <span class="block mt-1">produits, et votre bénéfice</span>
        </p>

        <!-- CTA avec "interface" au-dessus -->
        <div class="relative px-4">
          <div class="px-3 md:px-8 py-1 md:py-2 relative">


            <!-- Texte principal -->
            <a href="#"
              class="flex   flex-col md:flex-col items-center justify-center mb-6 text-[#6500F3] font-bold text-2xl md:text-xl">
              <p class="mb-1 md:mb-0">Cliquez pour suivre le lien</p>
              <p class="flex items-center">
                pour la phase test <span class="ml-2 text-3xl">✨👌</span>
              </p>
            </a>
          </div>

          <!-- Flèche décorative -->
          <div class="hidden lg:block absolute -right-24 top-1/2 transform -translate-y-1/2 opacity-60">
            <svg width="120" height="80" viewBox="0 0 120 80" class="text-white">
              <path d="M10 40 Q 60 10, 110 35" fill="none" stroke="currentColor" stroke-width="2"
                stroke-dasharray="4 4" />
              <path d="M110 35 L105 30 M110 35 L105 40" fill="none" stroke="currentColor" stroke-width="2" />
            </svg>
            <span class="absolute right-0 top-12 text-white text-sm italic">Interface</span>
          </div>
        </div>
      </div>
    </div>




</template>


<script setup></script>