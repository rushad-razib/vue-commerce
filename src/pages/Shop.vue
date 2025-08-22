<style>
    input[type='range']::-webkit-slider-thumb {
        appearance: none;
        height: 20px;
        width: 20px;
        background: #DB4444; /* Tailwind blue-500 */
        border-radius: 50%;
        cursor: pointer;
        pointer-events: auto;
    }
    input[type='range']::-moz-range-thumb {
        height: 20px;
        width: 20px;
        background: #DB4444;
        border-radius: 50%;
        cursor: pointer;
        pointer-events: auto;
    }
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
        <div class="flex flex-row gap-x-2">
            <div class="w-1/5 pt-[95px] flex flex-col gap-y-2">
                <div class="category">
                    <h1 class="px-2 py-1 font-inter text-[16px] text-white bg-red-500">Category</h1>
                    <div class="pt-1" v-for="category in categories" :key="category.id">
                        <label :for="category.id" class="pl-1 font-inter">
                        <input type="checkbox" name="category" :id="category.id" :value="category.id" v-model="category_id" @change="onFilterChange">
                        {{category.name}}
                        </label>
                    </div>
                </div>
                <div class="color">
                    <h1 class="px-2 py-1 font-inter text-[16px] text-white bg-red-500">Color</h1>
                    <div class="pt-1" v-for="color in colors" :key="color.id">
                        <label :for="color.id" class="pl-1 font-inter">
                        <input type="checkbox" name="color" :id="color.id" :value="color.id" v-model="color_id" @change="onFilterChange">
                        {{color.name}}
                        </label>
                    </div>
                </div>
                <div class="price">
                    <h1 class="px-2 py-1 font-inter text-[16px] text-white bg-red-500">Price</h1>
                    <div class="flex justify-between mb-4 mt-3">
                        <span class="text-gray-700">Min: {{ minVal }}</span>
                        <span class="text-gray-700">Max: {{ maxVal }}</span>
                    </div>

                    <!-- Slider -->
                    <div class="relative h-2">
                        <!-- Background Track -->
                        <div class="absolute top-1/2 -translate-y-1/2 w-full h-2 bg-gray-200 rounded"></div>

                        <!-- Selected Range Highlight -->
                        <div class="absolute top-1/2 -translate-y-1/2 h-2 bg-[#DB4444] rounded" :style="trackStyle"></div>

                        <!-- Min Thumb -->
                        <input type="range" :min="min" :max="max" v-model.number="minVal" @input="onFilterChange()" class="absolute w-full h-2 bg-transparent appearance-none pointer-events-none z-20" />

                        <!-- Max Thumb -->
                        <input type="range" :min="min" :max="max" v-model.number="maxVal" @input="onFilterChange()" class="absolute w-full h-2 bg-transparent appearance-none pointer-events-none z-20" />
                    </div>
                </div>
            </div>
            <div class="w-4/5">
                <div class="flex flex-col">
                    <h1 class="font-inter font-semibold text-[30px] md:text-[36px] leading-12 text-center">Shop</h1>
                    <div class="products flex flex-row flex-wrap gap-x-1 gap-y-4 md:gap-x-[30px] pt-5 md:pt-10 px-2 md:px-0 pb-[30px] sm:pb-[102px]">
                        <div v-for="product in paginatedProducts" :key="product" class="product w-[48%] md:w-[20%] space-y-4 hover:shadow-2xl p-2">
                            <router-link :to="`/product/${product.id}`">
                                <div class="img-card p-10 bg-[#F5F5F5]">
                                    <img  :src="`${product_image_path}/${product.image}`" alt="">
                                </div>
                                <div class="product-cont space-y-1 pt-2">
                                    <h1 class="font-pop font-medium text-[16px] leading-6">{{product.name}}</h1>
                                    <div><span class="font-pop font-medium text-[16px] leading-6 text-[#DB4444] pr-3">&#2547;{{product.first_inventory.after_discount}}</span><del v-if="
                                    product.first_inventory.after_discount" class="font-pop font-medium text-[16px] leading-6 text-[#000]">&#2547;{{product.first_inventory.price}}</del></div>
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
        </div>
        
    </div>
</template>
<script setup>

    import axios from 'axios';
import { onMounted, onBeforeUnmount, ref, computed } from 'vue';
    import { useStore } from 'vuex';

    // product image path to be retrieved from env
    const product_image_path = import.meta.env.VITE_PRODUCT_IMAGE_PATH


    const store = useStore()
    onMounted(() => {
        store.dispatch('fetchColors')  
        fetchAllProducts()  
    })
    const min = 0
    const max = 100000
    const minVal = ref(0)
    const maxVal = ref(100000)

    const trackStyle = computed(() => {
        const left = ((minVal.value - min) / (max - min)) * 100
        const right = ((maxVal.value - min) / (max - min)) * 100
        return {
            left: `${left}%`,
            width: `${right - left}%`,
        }
    })
    const categories = computed(()=>store.getters.categories) 
    const colors = computed(()=>store.getters.colors) 
    const category_id = ref([]);
    const color_id = ref([]);
    const products = ref([]);

    const fetchAllProducts = () =>{
        axios.post("http://127.0.0.1:8000/api/product/search", {})
        .then(response=>{
            products.value = response.data.products;
        })
        .catch(error=>{
            console.log(error.response);
        })
    }
    const onFilterChange = () =>{
        axios.post("http://127.0.0.1:8000/api/product/search", {
            category_id: category_id.value,
            color_id: color_id.value,
            minPrice: minVal.value,
            maxPrice: maxVal.value,
        })
        .then(response=>{
            products.value = response.data.products;
        })
        .catch(error=>{
            console.log(error.response);
        })
    }

    const currentPage = ref(1);
    const itemPerPage = 8;
    
    const paginatedProducts = computed(() =>{
        const start = (currentPage.value - 1) * itemPerPage;
        const end = start + itemPerPage;

        return products.value.length ? products.value.slice(start, end):[];
    })


        
    
</script>