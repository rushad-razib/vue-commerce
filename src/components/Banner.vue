<template>
    <div class="container">
        <div class="flex">
            <div class="w-1/4 pt-10 border-r-[0.5px] border-[rgba(0,0,0,0.3)] hidden md:block">
                <ul class="flex flex-col gap-y-[14px]">
                    <li v-for="category in categories" :key="category.id" class="font-pop font-normal text-[16px] leading-6"><a href="">{{category.name}}</a></li>
                </ul>
            </div>
            <div class="w-full md:w-3/4 pt-2 md:pt-10 px-2 md:pl-[45px]">
                <img :src='Banner' alt="">
            </div>
        </div>
    </div>
</template>
<script setup>
    import Banner from '@/assets/images/banner.png'
    import { computed } from 'vue';
    import { useStore } from 'vuex';
    const store = useStore()
    const categories = computed(()=> store.getters.categories)
    
</script>