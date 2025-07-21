<template>
    <div class="container pt-10 md:pt-[80px] pb-[60px] md:pb-[130px] border-b-[0.5px] border-[rgba(0,0,0,0.3)]">
        <div class="flex flex-col px-4 md:px-0">
            <h1 class="font-inter font-semibold text-[30px] md:text-[36px] leading-12 text-center">Browse By Category</h1>
            <div class="products flex flex-row flex-wrap justify-center gap-x-4 gap-y-4 md:gap-x-[30px] pt-5 md:pt-10">
                <div v-for="category in categories" :key="category.id" class="w-[30%] md:w-[14%] flex flex-col items-center gap-y-4 p-6 border-[0.5px] border-[rgba(0,0,0,0.3)] hover:bg-[#DB4444] hover:text-white duration-300 ease-in cursor-pointer">
                    <div class="cat-img">
                        <img width="40" :src="`${category_image_path}/${category.image}`" alt="">
                    </div>
                    <div class="cat-title">
                        <h4 class="text-center font-pop font-normal text-[16px] leading-6">{{category.name}}</h4>
                    </div>
                </div>
                
            </div>
            
        </div>
    </div>
</template>
<script setup>
    import Category from '@/assets/images/category.png'
    import { onMounted, ref, onBeforeUnmount, computed } from 'vue';
    import { useStore } from 'vuex';

    const store = useStore()
    const categories = computed(()=>store.getters.categories)
    const category_image_path = import.meta.env.VITE_CATEGORY_IMAGE_PATH
    
</script>