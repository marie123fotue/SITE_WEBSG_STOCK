<!-- ========================================
     COMPOSANT 2: FormCard.vue
     Composant réutilisable pour les formulaires
     ======================================== -->

<template>
    <div class="bg-white rounded-3xl p-8 shadow-2xl">
        <h2 class="text-2xl font-bold text-gray-900 mb-2">{{ title }}</h2>
        <p v-if="description" class="text-gray-700 text-sm mb-8">{{ description }}</p>

        <!-- SLOT pour insérer les champs personnalisés -->
        <slot></slot>

        <!-- Bouton Continuer -->
        <button 
            @click="handleContinue"
            class="px-8  w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg transition duration-300"
          >
            {{ buttonText }}
          </button>

    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
    title: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        default: ''
    },
    buttonText: {
        type: String,
        default: 'Continuer'
    },
    route: {
        type: String,
        required: false,
        default: null
    }
})



const handleContinue = () => {
    if (props.route) {
        router.push(props.route)
    }
}
    
</script>