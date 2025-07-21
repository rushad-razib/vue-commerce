<style scope>
    .colors input[type='radio']{
        appearance: none;
        border: 1px solid transparent;
        border-radius: 50%;
        height: 20px;
        width: 20px;
        display: grid;
        place-content: center;
    }
    .colors input[type='radio']::before{
        content: '';
        height: 17px;
        width: 17px;
        transform: translate(-50%);
        background: #A0BCE0;
        border:2px solid white;
        transform: scale(0);
        transition: 150ms transform ease-in-out;
    }
    .colors input[type='radio']:checked:before{
        transform: scale(1);
    }
    .sizes input[type='radio']{
        appearance: none;
        border: 1px solid black;
        border-radius: 4px;
        /* height: 32px;
        width: 32px; */
        padding: 10px 20px;
        display: grid;
        place-content: center;
    }
    .sizes input[type='radio']:checked+h4{
        background: #DB4444;
        border: transparent;
        color:white;
        text-align: center;
        border: 1px solid #DB4444;
        border-radius: 4px;
        width: 100%;
        height: 100%;
    }
</style>
<template>
<section id="product-landing" class="font-pop">
    <div class="container py-[50px] md:py-[109px] px-5 md:px-0">
        <div v-if="loading" class="animate-pulse space-y-4">
            <div class="h-6 bg-gray-200 rounded w-3/4"></div>
            <div class="h-4 bg-gray-200 rounded w-1/2"></div>
            <div class="h-6 bg-gray-300 rounded w-1/3"></div>
            <div class="h-20 bg-gray-100 rounded w-full"></div>
        </div>
        <div v-else>
            <div class="flex flex-row items-center gap-x-5 md:gap-x-[70px]">
                <div class="w-1/3 md:w-1/2 flex flex-col-reverse gap-y-2 md:flex-row gap-x-[30px]">
                    <div class="w-1/4 flex flex-row flex-wrap md:flex-col gap-y-4 gap-x-1">
                        <img v-for="gallery in product_details.rel_to_gallery" :key="gallery.id" :src="`${gallery_image_path}/${gallery.image}`" alt="product image" class="px-[25px] py-[12px] bg-[#F5F5F5]" @click="selected_img = `${gallery_image_path}/${gallery.image}`">
                    </div>
                    <div class="w-full md:w-3/4">
                        <img :src="selected_img" alt="product image" class="bg-[#F5F5F5]">
                    </div>
                </div>
                <div class="w-2/3 md:w-1/2">
                    <div class="flex flex-col gap-y-2 md:gap-y-4">
                        <h1 class="font-inter font-semibold text-[24px] leading-6">{{ product_details.name }}</h1>
                        <div class="flex flex-row gap-x-1 md:gap-x-2 items-center">
                            <div class="stars">
                                <i class="fas fa-star text-[#FFAD33]"></i>
                                <i class="fas fa-star text-[#FFAD33]"></i>
                                <i class="fas fa-star text-[#FFAD33]"></i>
                                <i class="fas fa-star text-[#FFAD33]"></i>
                                <i class="fas fa-star text-[#FFAD33]"></i>
                            </div>
                            <h4 class=" font-normal text-[14px] leading-[21px] opacity-[50%] hidden md:block">(150 Reviews)</h4>
                        </div>
                        <h4 v-if="selectedInventory" class="font-inter font-normal text-[20px] md:text-[24px] leading-6">&#2547; ${{ selectedInventory && selectedInventory.discount_price ? + selectedInventory.discount_price : product_details.rel_to_inventories[0].discount_price }}</h4>
                        <hr class="">
                        <div class="flex flex-row gap-x-2 md:gap-x-6">
                            <h4 class="font-inter font-medium md:font-normal text-[16px] md:text-[20px] leading-[20px]">Colours:</h4>
                            <div v-if="product_details.rel_to_inventory" class="colors flex gap-x-2">
                                <label v-for="color in uniqColors" :key="color.id">
                                    <input type="radio" name="color" :style="{background:color.rel_to_color.code}">
                                </label>
                            </div>
                        </div>
                        <div class="flex flex-row gap-x-2 md:gap-x-6 items-center flex-wrap">
                            <div class="sizes flex flex-row gap-x-2 md:gap-x-6 items-center" ref="sizes">
                                <h4 class="font-inter font-medium md:font-normal text-[16px] md:text-[20px] leading-[20px]">Sizes:</h4>
                                <div v-if="product_details.rel_to_inventory" class="flex gap-x-2">
                                    <label v-for="size in uniqSizes" :key="size" class="relative">
                                        <input type="radio" name="size">
                                        <h4 class="absolute top-[50%] left-[50%] -translate-[50%] text-[14px]  text-black font-medium">{{size.rel_to_size.name}}</h4>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col md:flex-row gap-y-2 md:gap-x-4 items-start md:items-center w-full">
                            <div class="quantity border border-[rgba(0,0,0,0.5)] rounded flex flex-row items-center w-2/5">
                                <button class="focus:text-white focus:bg-[#DB4444] focus:border-transparent border-r-1 border-[rgba(0,0,0,0.5)]" @click="decrement"><i class="fas fa-minus px-3 py-[14px]"></i></button>
                                <input type="text" class="font-medium text-[20px] leading-7 px-4 md:px-8 w-full text-center" :value=count>
                                <button class="focus:text-white focus:bg-[#DB4444] focus:border-transparent border-l-1 border-[rgba(0,0,0,0.5)]" @click="increment"><i class="fas fa-plus px-3 py-[14px]"></i></button>
                            </div>
                            <button class="w-2/5 font-medium text-[16px] leading-6 text-white bg-[#DB4444] py-[10px] px-[48px] rounded hover:outline hover:outline-[#DB4444] hover:text-[#DB4444] hover:bg-white duration-300">Add Cart</button>
                            <button class="w-1/5 focus:text-white focus:bg-[#DB4444] focus:border-transparent border-1 rounded border-[rgba(0,0,0,0.5)] p-[9px]"><i class="far fa-heart fa-xl"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="product-details flex flex-col pb-[30px] pt-[18px] md:pb-[62px] md:pt-[45px]">
                <h1 class=" font-semibold text-[36px] leading-10 pb-2 md:pb-4">{{product_details.name}}</h1>
                <p class=" font-normal text-[16px] leading-6 pb-2 md:pb-7" v-html="product_details.description"></p>
                
                <h4 class=" font-semibold text-[24px] leading-8 pb-2">Keywords</h4>
                <div class="tags flex flex-row flex-wrap gap-x-2 gap-y-2">
                    <div v-for="tag in tags" :key="tag.id" class="flex gap-x-1 items-center border border-[rgba(0,0,0,0.5)] rounded-full py-2 px-3 hover:text-white hover:bg-[#DB4444] hover:border-transparent duration-300 hover:cursor-pointer">
                        <i class="fas fa-tag fa-sm"></i>
                        <h4 class=" font-normal text-[12px] leading-4">{{tag.name}}</h4>
                    </div>
                    
                </div>
            </div>
            <h1 class="font-inter font-semibold text-[36px] leading-6">Related Products</h1>
            <div class="products flex flex-row flex-wrap gap-x-1 gap-y-4 md:gap-x-[30px] pt-5 md:pt-10 px-2 md:px-0">
                <div v-for="(product, index) in products" :key="index" class="product w-[48%] md:w-[23%] space-y-4 hover:shadow-2xl p-2">
                    <div class="img-card p-10 bg-[#F5F5F5]">
                        <img :src="product.images" alt="">
                    </div>
                    <div class="product-cont space-y-1">
                        <h1 class=" font-medium text-[16px] leading-6">{{product.title}}</h1>
                        <div><span class=" font-medium text-[16px] leading-6 text-[#DB4444] pr-3">$120</span><del class=" font-medium text-[16px] leading-6 text-[#000]">$160</del></div>
                        <div class="flex flex-row flex-wrap gap-x-2">
                            <div class="stars flex flex-row gap-x-1">
                                <i class="fas fa-star text-[#FFAD33]"></i>
                                <i class="fas fa-star text-[#FFAD33]"></i>
                                <i class="fas fa-star text-[#FFAD33]"></i>
                                <i class="fas fa-star text-[#FFAD33]"></i>
                                <i class="fas fa-star text-[#FFAD33]"></i>
                            </div>
                            <h5 class=" font-normal text-[14px] leading-[21px] opacity-[50%]">(88)</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script setup>
    import product_img1 from '@/assets/images/product_img1.png'
    import product_img2 from '@/assets/images/product_img2.png'
    import product_img3 from '@/assets/images/product_img3.png'
    import product_img4 from '@/assets/images/product_img4.png'
    import { ref, onMounted, onBeforeUnmount, computed, watch } from 'vue'
    import { useRoute } from 'vue-router'
    import { useStore } from 'vuex'

    // product image path to be retrieved from env
    const gallery_image_path = import.meta.env.VITE_GALLERY_IMAGE_PATH
    const product_image_path = import.meta.env.VITE_PRODUCT_IMAGE_PATH

    const route = useRoute()
    const store = useStore()

    const product_details = computed(()=> store.getters.product_details)
    const tags = computed(()=> store.getters.tags)

    let isAlive = true

    const products = ref([])

    onMounted(async() => {
        const response = await fetch('https://dummyjson.com/products?limit=4')
        if(!isAlive) return
        const data = await response.json()
        products.value = data.products
    })
    onBeforeUnmount(()=>{
        isAlive = false
    })

    const count = ref(1)
    const increment = () =>{
        count.value++
    }
    const decrement = () =>{
        if(count.value > 1){
            count.value--
        }
    }


    // Fetching Product Details
    onMounted(async()=>{
        const productId = route.params.id
        const savedProduct = JSON.parse(localStorage.getItem('product_details'))

        if(savedProduct && savedProduct.id == productId){
            // if same product
            store.commit('set_productDetails', savedProduct)
        }
        else{
            const response = await store.dispatch('fetchProductDetails', productId)
            if(response){
                localStorage.setItem('product_details', JSON.stringify(response))
            }
        }
    })

    // Setting unique color and size

    const uniqColors = computed(()=>{
        const seen = new Set()
        return product_details.value.rel_to_inventory.filter((item)=>{
            const id = item.rel_to_color.id
            if (seen.has(id)) return false
            seen.add(id)
            return true
        })
    })

    const uniqSizes = computed(()=>{
        const seen = new Set()
        return product_details.value.rel_to_inventory.filter((item)=>{
            const id = item.rel_to_size.id
            if (seen.has(id)) return false
            seen.add(id)
            return true
        })
    })

    // loading screen
    const loading = ref(true)
    const selected_img = ref('')
    onMounted(async() => {
        const productId = route.params.id
        loading.value = true
        await store.dispatch('fetchProductDetails', productId)
        loading.value = false
    })

    // product preview image change by gallery
    watch(product_details, (val)=>{
        if(val && val.preview){
            selected_img.value = `${product_image_path}/${val.image}`
        } else if (val?.rel_to_gallery?.length > 0) {
        selected_img.value = `${gallery_image_path}/${val.rel_to_gallery[0].image}`
    }
    }, {immediate: true})

    // setting price to set by selected inventory
    const selectedSize = ref(null)
    const selectedColor = ref(null)
    const selectedInventory = computed(()=>{
        const inventory = product_details.value.rel_to_inventory
        if(!inventory){
            return null
        }
        const hasColor = inventory.some((inv) => inv.color_id != null)
        const hasSize = inventory.some((inv) => inv.size_id != null)
        if(hasColor && hasSize && selectedColor.value && selectedSize.value){
            return inventory.find(inv =>{
                inv.color_id === selectedColor
                inv.size_id === selectedSize
            })
        }
        if(hasColor && selectedColor){
            return inventory.find(inv =>{
                inv.color_id === selectedColor
            })
        }
        if(hasSize && selectedSize){
            return inventory.find(inv =>{
                inv.size_id === selectedColor
            })
        }
        // if null
        return inventories[0] || null
    })

</script>