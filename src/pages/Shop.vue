<style>
  .pagination-container {
    display: flex;

    column-gap: 10px;
  }

  .paginate-buttons {
    height: 40px;

    width: 40px;

    border-radius: 20px;

    cursor: pointer;

    background-color: rgb(242, 242, 242);

    border: 1px solid rgb(217, 217, 217);

    color: black;
  }

  .paginate-buttons:hover {
    background-color: #d8d8d8;
  }

  .active-page {
    background-color: #3498db;

    border: 1px solid #3498db;

    color: white;
  }

  .active-page:hover {
    background-color: #2988c8;
  }
</style>
<template>
    <div class="container pt-[20px] md:pt-[40px] pb-7 md:pb-15 border-b-[0.5px] border-[rgba(0,0,0,0.3)]">
        <div class="flex flex-col">
            <h1 class="font-inter font-semibold text-[30px] md:text-[36px] leading-12 text-center">Shop</h1>
            <div class="products flex flex-row flex-wrap gap-x-1 gap-y-4 md:gap-x-[30px] pt-5 md:pt-10 px-2 md:px-0 pb-[30px] sm:pb-[102px]">
                
                <div v-for="product in paginatedProducts" :key="product" class="product w-[48%] md:w-[23%] space-y-4 hover:shadow-2xl p-2">
                    <router-link to="/product">
                        <div class="img-card p-10 bg-[#F5F5F5]">
                            <img :src="product.thumbnail" alt="">
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
                    </router-link>
                </div>
            </div>
            <div class="m-auto">
                <vue-awesome-paginate
                    :total-items="products.length"
                    :items-per-page="itemPerPage"
                    v-model="currentPage"
                />
            </div>
        </div>
    </div>
</template>
<script setup>

    import { onMounted, onBeforeUnmount, ref, computed } from 'vue';

    let products = ref([]);
    let isAlive = true;

    onMounted(async () => {
    const res = await fetch('https://dummyjson.com/products');
    if (!isAlive) return;           
    const data = await res.json();
    products.value = data.products;
    });

    onBeforeUnmount(() => { isAlive = false });

    const currentPage = ref(1);
    const itemPerPage = 12;
    
    const paginatedProducts = computed(() =>{
        const start = (currentPage.value - 1) * itemPerPage;
        const end = start + itemPerPage;

        return products.value.length ? products.value.slice(start, end):[];
    })


    
</script>