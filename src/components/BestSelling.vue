<template>
    <div class="container pt-10 md:pt-[80px] pb-7 md:pb-15 border-b-[0.5px] border-[rgba(0,0,0,0.3)]">
        <div class="flex flex-col px-4 md:px-0">
            <div class="flex flex-row md:justify-between">
                <h1 class="font-inter font-semibold text-[25px] md:text-[36px] leading-8 md:leading-12 ">Best Selling Products</h1>
                <router-link to="/shop" class="w-1/2 md:w-1/5 font-pop font-medium text-[16px] leading-6 py-2 md:py-4 px-2 md:px-12 bg-[#DB4444] text-white rounded-[4px] border border-transparent hover:bg-white hover:text-[#DB4444] hover:border-[#DB4444] text-center duration-300 self-center">View All</router-link>
            </div>
            <div class="products flex flex-row flex-wrap gap-x-1 gap-y-4 md:gap-x-[30px] pt-5 md:pt-10 px-2 md:px-0">
                <div v-for="(product, index) in allProducts" :key="index" class="product w-[48%] md:w-[23%] space-y-4 hover:shadow-2xl p-2">
                    <div class="img-card p-10 bg-[#F5F5F5]">
                        <img :src="product.images" alt="">
                    </div>
                    <div class="product-cont space-y-1">
                        <h1 class="font-pop font-medium text-[16px] leading-6">{{product.title}}</h1>
                        <div><span class="font-pop font-medium text-[16px] leading-6 text-[#DB4444] pr-3">$120</span><del class="font-pop font-medium text-[16px] leading-6 text-[#000]">$160</del></div>
                        <div class="flex flex-row gap-x-2">
                            <div class="stars flex flex-row gap-x-1">
                                <i class="fas fa-star text-[#FFAD33]"></i>
                                <i class="fas fa-star text-[#FFAD33]"></i>
                                <i class="fas fa-star text-[#FFAD33]"></i>
                                <i class="fas fa-star text-[#FFAD33]"></i>
                                <i class="fas fa-star text-[#FFAD33]"></i>
                            </div>
                            <h5 class="font-pop font-normal text-[14px] leading-[21px] opacity-[50%]">(88)</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    import Product from '@/assets/images/product1.png'
    import {ref, onMounted, onBeforeMount } from 'vue'

    const allProducts = ref([])
    onMounted(async() => {
      const response = await fetch('https://dummyjson.com/products?limit=4')
      const data  = await response.json()
      allProducts.value = data.products
    })

</script>