<template>
<div class="w-full h-[362px] relative -mt-[85px]">
    <img class="absolute max-h-[570px] min-h-[362px] w-full object-cover opacity-40" :src="image" alt="">
    <div class="flex flex-col justify-start items-start absolute ml-8 mt-64 gap-3">
        <p class="self-stretch flex-grow-0 flex-shrink-0 text-2xl font-bold font-lato text-left text-Extended/true-gray/50">{{nom}}</p>
        <div class="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-9">
            <div class="flex justify-start items-start flex-grow relative gap-2.5">
                <Calendrier/>
                <p class="font-lato flex-grow-0 flex-shrink-0 text-xs text-left text-Extended/true-gray/50">{{date}}</p>
            </div>
            <div class="flex justify-start items-start flex-grow relative gap-2.5">
                <ClockIcon class="flex-grow-0 flex-shrink-0 w-5 h-5 relative text-Extended/amber/300"/>
                <p class="font-lato flex-grow-0 flex-shrink-0 text-xs text-left text-Extended/true-gray/50">{{heure}}</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Calendrier from '../components/icons/Calendrier.vue'
import {ClockIcon} from '@heroicons/vue/outline'

export default {
    components: {Calendrier, ClockIcon},
    props: {
        image: String,
        nom: String,
        date: String,
        heure: String, 
    }
}
</script>
