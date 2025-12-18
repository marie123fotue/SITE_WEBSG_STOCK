<template>
  <BaseFormLayout :steps="stepsConfig" @submit="precedentEntreprise" route="/entreprise">
    <FormCard>
      <!-- Main Container -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-5 max-w-6xl w-full">
        <!-- Left Side - Payment Form -->
        <div class="lg:col-span-2">
          <div class="bg-white rounded-2xl shadow-2xl p-8">
            <!-- Header -->
            <h1 class="text-2xl font-bold text-gray-900 mb-2">
              Information de facturation
            </h1>
            <p class="text-lg font-semibold text-gray-700 mb-1">
              Chaque transaction est sécurisée
            </p>
            <p class="text-sm text-gray-600 mb-6">
              SG-STOCK dispose du certificat de sécurité SSL le plus élevé
            </p>

            <hr class="my-6" />

            <!-- Payment Methods -->
            <div class="space-y-4 mb-8">
              <!-- Carte de crédit -->
              <label
                class="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-blue-500 transition"
                :class="{ 'border-blue-600 bg-blue-50': selectedMethod === 'card' }">
                <input type="radio" v-model="selectedMethod" value="card" class="w-5 h-5 text-blue-600" />
                <span class="ml-4 font-semibold text-gray-900">Carte de crédit</span>
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='25' viewBox='0 0 40 25'%3E%3Crect width='40' height='25' rx='3' fill='%231434CB'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='10' font-weight='bold'%3E4532%3C/text%3E%3C/svg%3E"
                  alt="Card" class="ml-auto w-12" />
              </label>

              <!-- Orange Money -->
              <label
                class="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-blue-500 transition"
                :class="{ 'border-blue-600 bg-blue-50': selectedMethod === 'orange' }">
                <input type="radio" v-model="selectedMethod" value="orange" class="w-5 h-5 text-blue-600" />
                <div class="ml-4 flex-1">
                  <span class="font-semibold text-gray-900">Orange Money</span>
                </div>
                <div class="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <span class="text-white font-bold text-xs">OM</span>
                </div>
              </label>

              <!-- Mobile Money -->
              <label
                class="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-blue-500 transition"
                :class="{ 'border-blue-600 bg-blue-50': selectedMethod === 'mobile' }">
                <input type="radio" v-model="selectedMethod" value="mobile" class="w-5 h-5 text-blue-600" />
                <div class="ml-4 flex-1">
                  <span class="font-semibold text-gray-900">Mobile Money</span>
                  <p class="text-sm text-blue-600 mt-1">Information de paiement</p>
                </div>
                <div class="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span class="text-yellow-900 font-bold text-xs">MTN</span>
                </div>
              </label>
            </div>

            <!-- Form Fields -->
            <form @submit.prevent="handleSubmit" class="space-y-4">


              <!-- Champs supplémentaires pour Orange et Mobile -->
              <div v-if="showInputs" class="mt-4 space-y-4">
                <div>
                  <input v-model="form.orangeNumber" type="text" placeholder="Entrez votre Nom"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition" />
                </div>
                <div>
                  <input v-model="form.orangeNumber" type="text" placeholder="Numéro Orange Money"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition" />
                </div>
                <div>
                  <input v-model="form.mobileNumber" type="text" placeholder="Numéro Mobile Money"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition" />
                </div>
              </div>

              <!-- Submit Button -->
              <button type="submit"
                class="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 rounded-full transition duration-200 transform hover:scale-105 mt-8">
                Payer
              </button>
            </form>
          </div>
        </div>
      </div>
    </FormCard>
  </BaseFormLayout>
</template>

<script setup>
import { ref, watch } from 'vue'
import BaseFormLayout from './../components/BaseFromLayout.vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const stepsConfig = ref([
  { number: 1, label: 'Compte', active: false },
  { number: 2, label: 'Entreprise', active: false },
  { number: 3, label: 'Paiement', active: true },
])

// La méthode sélectionnée (card, orange, mobile)
const selectedMethod = ref('card')

// Formulaire avec champs email, nom, et ceux pour momo
const form = ref({
  email: '',
  name: '',
  orangeNumber: '',
  mobileNumber: '',
})

// Variable pour afficher ou masquer les inputs pour Orange/Mobile
const showInputs = ref(false)

// Sur changement de méthode, afficher ou cacher les champs
watch(selectedMethod, (newVal) => {
  showInputs.value = (newVal === 'orange' || newVal === 'mobile')
})

const handleSubmit = () => {
  console.log('Paiement avec:', selectedMethod.value)
  console.log('Données:', form.value)
}
const precedentEntreprise = () => {
  router.push('/entreprise')
}
</script>

<style scoped></style>