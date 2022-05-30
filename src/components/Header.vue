<template>
    <div class="flex justify-between my-3 ">
        <Logo class="ml-8"/>
        <MenuIcon class="mr-8 text-Extended/true-gray/50 w-14"/>
    </div>
</template>

<script>
import Logo from './icons/LogoFestival.vue'
import {MenuIcon} from '@heroicons/vue/outline'

export default {
    components: {Logo, MenuIcon}
}
</script>
