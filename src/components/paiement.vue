<template>

    <!-- Le wrapper avec le dégradé (agit comme bordure) -->
    <section class=" relative bg-gradient-to-r from-[#001C80] via-[#153ABF] to-[#2B59FF] 
                rounded-[10px] px-[2px] py-[2px]   hover:-translate-y-4 transition-all duration-500">

        <!-- Le contenu principal (avec un petit espace pour voir le dégradé) -->
        <main class="group overflow-hidden flex flex-col gap-5 
               w-[265px] h-[550px] font-[Poppins] bg-white 
               rounded-[10px]  shadow-blue-200
               hover:bg-[#000B6B] hover:text-white hover:shadow-2xl 
               hover:-translate-y-4 transition-all duration-500">

            <!-- entete -->
            <div class="flex  flex-col ">
                <!-- button classe -->
                <button
                    class="h-[30px] text-[15px]  mx-4 my-3 w-fit py-1 px-2 rounded-[5px] font-bold  bg-[#e6e6e6] text-[#000000d7]">
                    {{ plan.classe }}
                </button>

                <div class=" flex flex-col  mx-4">

                    <!-- message de bienvenue et  trait et prix  initial  -->
                    <div class="flex flex-col gap-5 ">
                        <!-- message de bienvenue et  trait  -->
                        <div class="flex flex-col  justify-center items-center gap-2 ">
                            <!-- message de bienvenue -->
                            <div class="flex text-[10px] items-center gap-1 w-[250px] h-5">

                                <h2 class="">Economisez jusqu'a </h2>
                                <h2 class="">{{ plan.economie }}</h2>
                                <span class="mt-[3px]">FCFA/mois</span>
                            </div>
                            <!-- trait horizontal -->
                            <hr class="w-[180px] text-gray-400 flex text-center">
                        </div>
                        <!-- prix initial -->
                        <div class="flex justify-center items-center mt-0 ">
                            <h2 class="text-[#362d2d8f] text-[20px] font-semibold ">{{ plan.pi }}</h2>
                            <span class=" text-[10px] text-[#8F8F8F]  font-semiblod  flex mt-4 justify-end">FCFA</span>
                            <hr class="w-[35px] text-gray-400 flex text-center left-7">

                        </div>
                    </div>

                    <!-- prix officiel  et limite-->

                    <div class="flex flex-col  ">

                        <!-- prix officiel -->
                        <div class="flex justify-start items-center font-semibold w-fit h-fit  font-sans  gap-1 ml-4 ">
                            <h2 class="text-black  text-[30px]  ">{{ plan.pf }}</h2>
                            <div class="flex justify-end items-end gap-0 font-semibold mt-1  ">
                                <span class=" text-[15px]">FCFA</span>
                                <div class="flex justify-end items-end  gap-0">
                                    <span class=" text-[20px] ">/</span>
                                    <span class=" text-[15px] mr-2">mois</span>

                                </div>
                            </div>

                        </div>
                        <!-- limite-- -->

                        <div class="flex flex-col gap-3  my-3">
                            <h2 class=" font-serif text-[10px]">Limité</h2>
                            <div class="flex w-[300px] mx-4">
                                <hr class="w-[200px] text-gray-400 flex justify-center text-center mr-4">

                            </div>
                        </div>
                    </div>

                </div>


            </div>
            <!-- corps  -->
            <main class=" flex mx-6 text-[12px] gap-2 ">
                <div class="flex gap-2 w-fit  ">
                    <button class="w-[21px] h-[21px] bg-black rounded-full flex justify-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-4 h-4 text-white font-semibold">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                    </button>
                    <h2>{{ plan.font }}</h2>
                </div>

            </main>
        </main>

    </section>

</template>

<script setup>

import { ref } from 'vue'
defineProps({
    plan: Object
})
</script>