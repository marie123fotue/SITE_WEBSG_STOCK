<!-- ========================================
     EXEMPLE D'UTILISATION: creationEntreprise.vue
     Page de création de compte utilisant les composants
     ======================================== -->

<template>
  <BaseFormLayout :steps="stepsConfig" route="/connexion"
    @submit="precedentEntreprise" >
    <div
      class="min-h-screen flex items-center justify-center p-4">
      <div class="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8">
        <!-- Header -->
        <div class="mb-8">
          <h1 class="text-2xl font-bold text-gray-900 mb-1">
            Compte <span class="text-gray-500">(Connecté)</span>
          </h1>
          <p class="text-sm text-gray-600">Raph sen.gue</p>
          <p class="text-xs text-gray-500">rasphengue@gmail.com</p>
        </div>

        <!-- Form Section Title -->
        <h2 class="text-lg font-bold text-gray-900 mb-6">
          Ajoutez les informations de votre entreprise
        </h2>

        <!-- Form Fields -->
        <form @submit.prevent="handleSubmit" class="space-y-5">
          <!-- Nom de l'entreprise -->
          <div>
            <label class="block text-sm font-semibold text-gray-900 mb-2">
              Nom de l'entreprise
            </label>
            <input v-model="form.nomEntreprise" type="text" placeholder="Nom de l'entreprise"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition" />
          </div>

          <!-- Adresse professionnelle -->
          <div>
            <label class="block text-sm font-semibold text-gray-900 mb-2">
              Adresse professionnelle enregistrée
            </label>
            <p class="text-xs text-gray-500 mb-2">
              utilisez une pièce de votre adresse ou votre code postal.
            </p>
            <input v-model="form.adresseProfessionnelle" type="text" placeholder="Votre adresse"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition" />
            <p class="text-xs text-gray-500 mt-2">
              Ou saisisez votre adresse manuellement
            </p>
          </div>

          <!-- Numéro de mobile -->
          <div>
            <label class="block text-sm font-semibold text-gray-900 mb-2">
              Numéro de mobile (facultatif)
            </label>
            <p class="text-xs text-gray-500 mb-3">
              En indiquant mon numéro, je consens à recevoir occasionnellement des fils gratuits de SG-STACK
              commentaires les informations sur la légalité utilisée et les offres senseurs
            </p>
            <div class="flex gap-2">
              <div class="flex items-center border border-gray-300 rounded-lg px-3 py-3 bg-gray-50">
                <span class="text-gray-600 text-sm font-medium">+237</span>
              </div>
              <input v-model="form.numeroMobile" type="tel" placeholder="6 88 08 08 76"
                class="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition" />
            </div>
          </div>

          <!-- Submit Button -->
           <RouterLink to="/Paiement" 
            class="w-full h-fit bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 rounded-lg transition duration-200 transform hover:scale-105 mt-8">
            Passez à la facturation
         
           </RouterLink>
       
        </form>
      </div>
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

