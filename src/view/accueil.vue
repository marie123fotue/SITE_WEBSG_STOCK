<template>
  <div class="w-full min-h-[500px] md:h-[500px] relative overflow-hidden">
    
    <!-- Dégradé de fond optimisé -->
   <div 
    class="w-full h-[500px]
    bg-gradient-to-br from-blue-300 via-purple-300 to-pink-300"
>
    <div class="absolute inset-0 bg-gradient-to-r from-transparent via-purple-900/10 to-transparent"></div>
    
    <!-- Bouton Connexion -->
    <div class="absolute top-4 right-4 md:top-6 md:right-8 z-10">
      <button class="bg-[#00A8E8] hover:bg-[#0090CC] text-white font-semibold px-4 py-2 md:px-6 md:py-2 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-sm md:text-base">
        Connexion
      </button>
    </div>git 

    <!-- Contenu central -->
    <div class="relative z-10 flex flex-col items-center justify-center min-h-[500px] md:h-full text-center px-4 md:px-8 py-12 md:py-0">
      
      <!-- Logo avec effet graphique -->
      <div class="mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
        <div class="relative">
          <div class="flex gap-0.5 md:gap-1">
            <div class="w-1 md:w-1.5 h-6 md:h-8 bg-green-400 rounded-sm transform -rotate-12"></div>
            <div class="w-1 md:w-1.5 h-8 md:h-10 bg-green-400 rounded-sm transform -rotate-6"></div>
            <div class="w-1 md:w-1.5 h-10 md:h-12 bg-green-400 rounded-sm"></div>
            <div class="w-1 md:w-1.5 h-8 md:h-10 bg-green-400 rounded-sm transform rotate-6"></div>
            <div class="w-1 md:w-1.5 h-6 md:h-8 bg-green-400 rounded-sm transform rotate-12"></div>
          </div>
          <div class="absolute -right-1 md:-right-2 top-0 w-6 md:w-8 h-1.5 md:h-2 bg-blue-400 rounded-full transform rotate-45"></div>
        </div>
        <h1 class="text-2xl md:text-4xl font-bold text-white">
          SG-<span class="text-green-400">Stocks</span>
        </h1>
      </div>

      <!-- Titre principal -->
      <h2 class="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight max-w-4xl px-4">
        Simplifiez votre comptabilité
        <span class="block mt-2">avec SG-stocks</span>
      </h2>

      <!-- Description -->
      <p class="text-white text-base md:text-lg mb-8 md:mb-10 max-w-2xl leading-relaxed opacity-95 px-4">
        Faite un suivi de votre stock, en contrôlant vos dépenses
        <span class="block mt-1">et ressortez votre compte de résultat, vos charges, vos</span>
        <span class="block mt-1">produits, et votre bénéfice</span>
      </p>

      <!-- CTA avec flèche -->
      <div class="relative px-4">
        <div class="bg-purple-600/40 backdrop-blur-sm rounded-2xl px-6 md:px-8 py-4 md:py-6 border border-purple-300/30 shadow-xl">
          <p class="text-white text-lg md:text-xl font-semibold mb-1 md:mb-2">
            Cliquez pour suivre le lien
          </p>
          <p class="text-white text-lg md:text-xl font-semibold">
            pour la phase test <span class="text-xl md:text-2xl">✨👌</span>
          </p>
        </div>
        
        <!-- Flèche décorative (cachée sur mobile) -->
        <div class="hidden lg:block absolute -right-24 top-1/2 transform -translate-y-1/2 opacity-60">
          <svg width="120" height="80" viewBox="0 0 120 80" class="text-white">
            <path
              d="M10 40 Q 60 10, 110 35"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-dasharray="4 4"
            />
            <path
              d="M110 35 L105 30 M110 35 L105 40"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            />
          </svg>
          <span class="absolute right-0 top-12 text-white text-sm italic">Delattre</span>
        </div>
      </div>
    </div>

   </div> 
    </div>
    <!-- Images d'aperçu en bas -->
    <div class="absolute bottom-0 left-0 right-0 h-32 md:h-48 bg-gradient-to-t from-white via-white to-transparent">
      <div class="absolute bottom-0 left-0 right-0 flex gap-3 md:gap-4 px-4 md:px-8 pb-4 md:pb-6 overflow-x-auto scrollbar-hide">
        <div 
          v-for="i in 6" 
          :key="i"
          class="flex-shrink-0 w-36 md:w-48 h-24 md:h-32 bg-white rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
        >
          <div class="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg flex items-center justify-center">
            <div class="text-gray-400 text-xs md:text-sm">Aperçu {{ i }}</div>
          </div>
        </div>
      </div>

  </div>
</template>

<script setup>
// Composant SG-Stocks Header
// Responsive et optimisé pour mobile, tablette et desktop
</script>

<style scoped>
/* Masquer la scrollbar sur les aperçus */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}



</style>