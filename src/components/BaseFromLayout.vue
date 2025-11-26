<!-- ========================================
     COMPOSANT 1: BaseFormLayout.vue
     Layout de base réutilisable pour toutes les pages
     le contenu de la page en dehors du formulaire 
     ======================================== -->

<template>

  <div class="min-h-screen bg-gradient-to-br from-indigo-800 via-purple-800 to-purple-900 flex flex-col font-poppins">
    <!-- Header logo et le bouton precedent -->
    <div class="flex items-center justify-between md:mx-25 mx-3 py-2 ">
      <!-- hidden md:flex pour dire que mon bouton n'est pas visible sur le mobile -->
      <button class="  flex  items-center gap-2 text-gray-300 hover:text-gray-700 transition duration-1000"
        @click="precedent">
        <svg class="w-15 h-15  md:w-9 md:9 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
        <span class=" hidden md:flex text-sm font-semibold lg:text-[25px]  md:text-[30px]">Précédent</span>
      </button>

      <div class="flex items-center ">
        <img src="./../assets/image/OBJECTS.png" alt="" class="w-auto h-[50px]">
      </div>

    </div>
    <hr class="mb-2 bg-purple-900 h-[3.5px] border-none">

    <!-- Contenu principal -->
    <div class="flex-1 flex items-center justify-center px-8 pb-8 relative overflow-hidden mb-7">
      <!-- Décoration circulaire rose -->
      <div class="absolute -left-32 top-1/2 -translate-y-1/2 w-80 h-80 bg-pink-400 rounded-full opacity-30 blur-3xl">
      </div>

      <div class="w-full max-w-5xl relative z-10">
        <!-- Titre et Étapes -->
        <div class="text-center mb-10">
          <h1 class="text-white text-2xl md:text-5xl font-bold mb-8">
            Plus que 3 étapes pour Passer commande
          </h1>

          <!-- Étapes de progression -->
          <div class="flex items-center justify-center  gap-5 md:gap-8 flex-wrap">
            <div v-for="(step, index) in steps" :key="index" class="flex items-center gap-3">
              <div :class="[
                'w-10 h-10 rounded-full text-white font-bold flex items-center justify-center flex-shrink-0',
                step.active ? 'bg-purple-600' : 'bg-gray-500'
              ]">
                {{ step.number }}
              </div>
              <span :class="['font-bold', step.active ? 'text-white' : 'text-gray-300']">
                {{ step.label }}
              </span>
              <svg v-if="index < steps.length - 1" class="w-5 h-5 text-white flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </div>
        </div>

        <!-- Formulaire et Section promesse -->
        <div class="flex gap-12 flex-wrap items-start">
          <!-- Section promesse (toujours la même) -->
          <div class=" text-white">
            <h3 class="text-2xl font-bold mb-6">{{ rightSectionTitle }}</h3>

            <div class="space-y-5 text-sm leading-relaxed">
              <p v-for="(text, index) in rightSectionTexts" :key="index" v-html="text"></p>
            </div>
          </div>
          <!-- SLOT pour insérer le formulaire personnalisé -->
          <div class="flex-1">
            <slot></slot>
          </div>


        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const props = defineProps({

  steps: {
    type: Array,
    required: true,
    default: () => [
      { number: 1, label: 'Compte', active: true },
      { number: 2, label: 'Entreprise', active: false },
      { number: 3, label: 'Paiement', active: false }
    ]
  },
  rightSectionTitle: {
    type: String,
    default: 'Faites vos premiers\nAvec SG-Stocks'
  },
  rightSectionTexts: {
    type: Array,
    default: () => [
      '<span class="font-bold">Obtenez un accès complet</span> à votre produit.',
      'Ajoutez des utilisateurs ou annulez à tout moments.',
      '<span class="font-bold">Sans engagement de durée</span> et sans frais cachés'
    ]
  },
  route: {
    type: String,
    required: false,
    default: null
  }

})
const precedent = () => {
  if (props.route) {
    router.push(props.route)
  }
}


</script>