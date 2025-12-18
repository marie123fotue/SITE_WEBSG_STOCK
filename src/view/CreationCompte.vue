<!-- ========================================
     EXEMPLE D'UTILISATION: CreationCompte.vue
     Page de création de compte utilisant les composants
     ======================================== -->

<template>
    <RouterView/>
  <BaseFormLayout

    :steps="stepsConfig"
    route="/connexion"
    @submit="precedentConexion"
  >
    <FormCard
      title="Création du compte"
      description="Avoir un compte SG-Stock vous permet d'accéder a tous nos produits et services."
      @submit="handleCreerCompte"
      route="/entreprise"
    >
      <FormField
        label="Adresse e-mail"
        v-model="formData.email"
        type="email"
      />
      <FormField
        label="Nom"
        v-model="formData.nom"
        type="text"
      />
      <FormField
        label="Prénom"
        v-model="formData.prenom"
        type="text"
      />
      <FormField
        label="Mot de passe"
        v-model="formData.motDePasse"
        type="password"
      />
      <FormField
        label="Confirmez le Mot de passe"
        v-model="formData.confirmMotDePasse"
        type="password"
      />
    </FormCard>
  </BaseFormLayout>
</template>

<script setup>
import { ref } from 'vue'
import BaseFormLayout from './../components/BaseFromLayout.vue'
import FormCard from './../components/FormCard.vue'
import FormField from './../components/FormField.vue'
import { useRouter } from 'vue-router' // Import du router
  const router = useRouter()

const stepsConfig = ref([
  { number: 1, label: 'Compte', active: true },
  { number: 2, label: 'Entreprise', active: false },
  { number: 3, label: 'Paiement', active: false }
])

const formData = ref({
  email: '',
  nom: '',
  prenom: '',
  motDePasse: '',
  confirmMotDePasse: ''
})

const handleCreerCompte = () => {
  console.log('Création du compte:', formData.value)
  // Ajoute ta logique ici
  router.push('/entreprise')
}

const precedentConexion = () =>{
  router.push('/connexion')
}
</script>