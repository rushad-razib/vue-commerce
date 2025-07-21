<template>
    <div class="container pt-[40px] md:pt-[90px] pb-10 md:pb-15 border-b-[0.5px] border-[rgba(0,0,0,0.3)]">
        <div class="flex flex-col">
            <h1 class="font-inter font-semibold text-[25px] md:text-[36px] leading-12 text-center">Explore Our Products</h1>
            <div class="products flex flex-row flex-wrap gap-x-1 gap-y-4 md:gap-x-[30px] pt-5 md:pt-10 px-2 md:px-0">
                <div v-for="product in productsToDisplay" :key="product.id"  class="product w-[48%] md:w-[23%] space-y-4 hover:shadow-2xl p-2">
                    <div class="img-card p-10 bg-[#F5F5F5]">
                        <img :src="`${product_image_path}/${product.image}`" alt="">
                    </div>
                    <div class="product-cont space-y-1">
                        <router-link :to="`/product/${product.id}`"><h1 class="font-pop font-medium text-[16px] leading-6">{{product.name}}</h1></router-link>
                        <div>
                            <span class="font-pop font-medium text-[16px] leading-6 text-[#DB4444] pr-3">&#2547; {{product.rel_to_inventory[0].after_discount}}</span>
                            <del class="font-pop font-medium text-[16px] leading-6 text-[#000]" v-if="product.discount">&#2547; {{product.rel_to_inventory[0].price}}</del>
                        </div>
                        <div class="flex flex-row gap-x-2">
                            <div class="stars flex flex-row gap-x-1">
                                <i class="fas fa-star text-[#FFAD33]"></i>
                            </div>
                            <h5 class="font-pop font-normal text-[14px] leading-[21px] opacity-[50%]">(88)</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div class="m-auto mt-[30px] md:mt-[67px]">
                <a @click="loadMore" :hidden="!products || displayedProducts >= products.length" class="cursor-pointer font-pop font-medium text-[16px] leading-6 py-4 px-12 bg-[#DB4444] text-white rounded-[4px] border border-transparent hover:bg-white hover:text-[#DB4444] hover:border hover:border-[#DB4444] duration-300">View More Products</a>
            </div>
        </div>
    </div>
</template>
<script setup>
    import Product from '@/assets/images/product1.png'
    import { onMounted, ref, onBeforeUnmount, computed } from 'vue';
    import { useRouter } from 'vue-router';
    import { useStore } from 'vuex';
    const store = useStore();
    const router = useRouter();
    let displayedProducts = ref(4);
    const products = computed(()=>store.getters.allProducts);
    const product_image_path = import.meta.env.VITE_PRODUCT_IMAGE_PATH

    const productsToDisplay = computed(() => 
        (products.value || []).slice(0, displayedProducts.value)
    )
    const loadMore = () => {
        if (!products.value || displayedProducts.value >= products.value.length) return
        displayedProducts.value += 4
    }

    







</script>