import { createRouter, createWebHistory } from "vue-router"

import accueil from "@/view/accueil.vue"

const routes =[

 { path: '/', name: 'rout-Accueil', component: accueil },
]
const router = createRouter({
    history:createWebHistory(),
    routes
})
export default router 