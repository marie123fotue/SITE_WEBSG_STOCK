<!-- ========================================
     EXEMPLE D'UTILISATION: creationEntreprise.vue
     Page de création de compte utilisant les composants
     ======================================== -->

<template>
  <BaseFormLayout :steps="stepsConfig" route="/connexion"
    @submit="precedentEntreprise" >
  
    <!-- Contenu du formulaire avec design PREMIUM -->
    <div class="group relative bg-white/60 hover:bg-white/80 backdrop-blur-xl border border-white/40 hover:border-white/60 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-1 overflow-hidden max-w-lg w-full mx-auto">
      
      <!-- Déco subtile -->
      <div class="absolute top-4 right-4 w-16 h-16 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-2xl blur-xl -rotate-12 opacity-40 group-hover:opacity-60 transition-all"></div>

      <!-- Header utilisateur PRO -->
      <div class="text-center mb-6 sm:mb-8 pb-6 border-b border-white/20">
        <div class="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-4 py-2 rounded-2xl border border-blue-200/50 backdrop-blur-sm mb-3 mx-auto max-w-sm">
          <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
            <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6.47 4.72a6 6 0 001.18-.38l1.66 1.66a1 1 0 001.41 0l1.41-1.41a1 1 0 000-1.41l-1.66-1.66a6 6 0 00-.38-1.18A5.92 5.92 0 0020 10a6 6 0 00-12 0 5.92 5.92 0 00.38 1.18zM10 11a3 3 0 100-6 3 3 0 000 6z"/>
            </svg>
          </div>
          <div>
            <h1 class="text-lg sm:text-xl font-black text-gray-900 leading-tight">
              Compte <span class="text-blue-600 font-normal">Connecté</span>
            </h1>
            <p class="text-sm sm:text-base text-gray-700 font-medium">Raph sen.gue</p>
            <p class="text-xs text-gray-500 font-mono tracking-wider">rasphengue@gmail.com</p>
          </div>
        </div>
      </div>

      <!-- Titre principal -->
      <h2 class="text-2xl sm:text-2.5xl lg:text-3xl font-black bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-1 sm:mb-2 text-center leading-tight">
        Informations entreprise
      </h2>
      <p class="text-gray-600 text-sm sm:text-base text-center mb-8 lg:mb-10 font-medium opacity-90 leading-relaxed max-w-md mx-auto">
        Complétez les informations de votre entreprise pour finaliser votre inscription
      </p>

      <!-- Formulaire optimisé -->
      <form @submit.prevent="handleSubmit" class="space-y-6">
        
        <!-- Nom Entreprise -->
        <div class="relative">
          <label class="block text-sm font-bold text-gray-900 mb-2.5 bg-gradient-to-r from-gray-900 to-gray-800 bg-clip-text">
            Nom de l'entreprise <span class="text-red-500">*</span>
          </label>
          <input 
            v-model="form.nomEntreprise" 
            type="text" 
            placeholder="SG-Stock Cameroun SARL"
            required
            class="w-full px-5 py-4 text-sm lg:text-base border-2 border-gray-200/60 focus:border-blue-400 focus:ring-4 focus:ring-blue-100/50 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md focus:shadow-xl transition-all duration-300 font-medium peer"
          />
          <div class="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl pointer-events-none opacity-0 peer-focus:opacity-100 blur-xl transition-all -inset-1"></div>
        </div>

        <!-- Adresse professionnelle -->
        <div>
          <label class="block text-sm font-bold text-gray-900 mb-2.5 bg-gradient-to-r from-gray-900 to-gray-800 bg-clip-text">
            Adresse professionnelle <span class="text-red-500">*</span>
          </label>
          <div class="text-xs text-gray-500 mb-3 leading-relaxed bg-gray-50/50 p-3 rounded-xl backdrop-blur-sm border border-gray-100">
            Utilisez votre adresse Google Maps ou code postal pour plus de précision
          </div>
          <input 
            v-model="form.adresseProfessionnelle" 
            type="text" 
            placeholder="Douala, Bonapriso, Rue 1505"
            class="w-full px-5 py-4 text-sm lg:text-base border-2 border-gray-200/60 focus:border-blue-400 focus:ring-4 focus:ring-blue-100/50 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md focus:shadow-xl transition-all duration-300 font-medium peer"
          />
        </div>

        <!-- Téléphone Cameroon -->
        <div>
          <label class="block text-sm font-bold text-gray-900 mb-2.5 bg-gradient-to-r from-gray-900 to-gray-800 bg-clip-text">
            Numéro mobile
          </label>
          <p class="text-xs text-gray-500 mb-4 leading-relaxed max-w-none">
            En indiquant votre numéro, recevez des conseils gratuits SG-Stock et informations importantes
          </p>
          <div class="bg-gray-50/50 border-2 border-gray-200/50 rounded-2xl p-1 focus-within:border-blue-400 focus-within:ring-4 focus-within:ring-blue-100/30 transition-all backdrop-blur-sm hover:shadow-md">
            <div class="flex">
              <div class="flex items-center bg-white/60 border-r border-gray-200 px-4 py-4 rounded-l-2xl min-w-[80px]">
                <svg class="w-4 h-4 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <span class="text-sm font-semibold text-gray-700">+237</span>
              </div>
              <input 
                v-model="form.numeroMobile" 
                type="tel" 
                placeholder="688 08 08 76"
                class="flex-1 px-5 py-4 text-sm lg:text-base border-0 rounded-r-2xl focus:outline-none bg-white/80 backdrop-blur-sm font-medium"
              />
            </div>
          </div>
        </div>

        <!-- Bouton ULTRA-PREMIUM -->
        <RouterLink 
          to="/paiement"
          class="group/btn w-full relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 hover:from-blue-700 hover:via-purple-700 hover:to-pink-600 text-white font-bold py-4.5 px-8 rounded-2xl shadow-2xl hover:shadow-3xl active:scale-[0.98] transition-all duration-400 overflow-hidden transform hover:-translate-y-0.5 text-lg lg:text-xl font-black border-0 focus:outline-none focus:ring-4 focus:ring-blue-500/30 block text-center leading-none"
        >
          <!-- Shimmer magique -->
          <div class="absolute inset-0 bg-gradient-to-r from-white/30 via-white/50 to-transparent skew-x-12 -translate-x-[150%] group-hover/btn:translate-x-[500%] transition-transform duration-1000 h-full"></div>
          <span class="relative flex items-center justify-center gap-3">
            <svg class="w-5 h-5 shrink-0 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12"></path>
            </svg>
            Passez à la facturation
          </span>
        </RouterLink>
      </form>
    </div>


    
  </BaseFormLayout>
</template>

<script setup>
import { ref } from 'vue'
import BaseFormLayout from './../components/BaseFromLayout.vue'
import { useRouter } from 'vue-router'
const  router= useRouter()


const stepsConfig = ref([
  { number: 1, label: 'Compte', active: false },
  { number: 2, label: 'Entreprise', active: true },
  { number: 3, label: 'Paiement', active: false }
])

const form = ref({
  nomEntreprise: '',
  adresseProfessionnelle: '',
  numeroMobile: ''
})


const precedentEntreprise =() =>{
  router.push('/connexion')
}
</script>

