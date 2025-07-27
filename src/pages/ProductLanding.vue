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
        <!-- <div v-if="loading" class="animate-pulse space-y-4">
            <div class="h-6 bg-gray-200 rounded w-3/4"></div>
            <div class="h-4 bg-gray-200 rounded w-1/2"></div>
            <div class="h-6 bg-gray-300 rounded w-1/3"></div>
            <div class="h-20 bg-gray-100 rounded w-full"></div>
        </div> -->
        <div>
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
                <form @submit.prevent="cart_store">
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
                        </div>
                        <h4 v-if="selectedInventory?.after_discount" class="font-inter font-normal text-[20px] md:text-[24px] leading-6">
                            <span>&#2547; {{ selectedInventory && selectedInventory.after_discount ? + selectedInventory.after_discount : product_details.rel_to_inventory[0].after_discount }}</span>
                        </h4>
                        <hr class="">
                        <div class="flex flex-row gap-x-2 md:gap-x-6">
                            <h4 class="font-inter font-medium md:font-normal text-[16px] md:text-[20px] leading-[20px]">Colours:</h4>
                            <div v-if="product_details.rel_to_inventory" class="colors flex gap-x-2">
                                <label v-for="color in uniqueColors" :key="color.id">
                                    <input v-if="color.rel_to_color.name!='NA'" type="radio" name="color" :value="Number(color.rel_to_color.id)" :style="{background:color.rel_to_color.code}" v-model="selectedColor">
                                    <span v-else>NA</span>
                                </label>
                            </div>
                            <strong class="text-red-500" v-if="errors?.color_id">{{ errors.color_id[0] }}</strong>
                        </div>
                        <div class="flex flex-row gap-x-2 md:gap-x-6 items-center flex-wrap">
                            <div class="sizes flex flex-row gap-x-2 md:gap-x-6 items-center" ref="sizes">
                                <h4 class="font-inter font-medium md:font-normal text-[16px] md:text-[20px] leading-[20px]">Sizes:</h4>
                                <div v-if="product_details.rel_to_inventory" class="flex gap-x-2">
                                    <label v-for="size in uniqueSizes" :key="size" class="relative">
                                        <input type="radio" name="size" :value="Number(size.rel_to_size.id)" v-model="selectedSize">
                                        <h4 class="absolute top-[50%] left-[50%] -translate-[50%] text-[14px]  text-black font-medium">{{size.rel_to_size.name}}</h4>
                                    </label>
                                </div>
                                <strong class="text-red-500" v-if="errors?.size_id">{{ errors.size_id[0] }}</strong>
                            </div>
                        </div>
                        <div class="flex flex-col md:flex-row gap-y-2 md:gap-x-4 items-start md:items-center w-full">
                            <div class="quantity border border-[rgba(0,0,0,0.5)] rounded flex flex-row items-center w-2/5">
                                <button type="button" class="focus:text-white focus:bg-[#DB4444] focus:border-transparent border-r-1 border-[rgba(0,0,0,0.5)]" @click="decrement"><i class="fas fa-minus px-3 py-[14px]"></i></button>
                                <input type="text" class="font-medium text-[20px] leading-7 px-4 md:px-8 w-full text-center" :value=count>
                                <button type="button" class="focus:text-white focus:bg-[#DB4444] focus:border-transparent border-l-1 border-[rgba(0,0,0,0.5)]" @click="increment"><i class="fas fa-plus px-3 py-[14px]"></i></button>
                            </div>
                            <button type="submit" class="w-2/5 font-medium text-[16px] leading-6 text-white bg-[#DB4444] py-[10px] px-[48px] rounded hover:outline hover:outline-[#DB4444] hover:text-[#DB4444] hover:bg-white duration-300">Add Cart</button>
                            <button class="w-1/5 focus:text-white focus:bg-[#DB4444] focus:border-transparent border-1 rounded border-[rgba(0,0,0,0.5)] p-[9px]"><i class="far fa-heart fa-xl"></i></button>
                        </div>
                    </div>
                </form>
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
                <div v-for="(product, index) in new_arrivals" :key="index" class="product w-[48%] md:w-[23%] space-y-4 hover:shadow-2xl p-2">
                    <router-link :to="`/product/${product.id}`">
                    <div class="img-card p-10 bg-[#F5F5F5]">
                        <img :src="`${product_image_path}/${product.image}`" alt="">
                    </div>
                    <div class="product-cont space-y-1">
                        <h1 class=" font-medium text-[16px] leading-6">{{product.name}}</h1>
                        <div v-if="product.first_inventory">
                            <span class=" font-medium text-[16px] leading-6 text-[#DB4444] pr-3">&#2547; {{product.first_inventory.after_discount}}</span>
                            <del v-if="product.discount" class=" font-medium text-[16px] leading-6 text-[#000]">&#2547; {{product.first_inventory.price}}</del>
                        </div>
                        <div v-else>
                            <span class=" font-medium text-[16px] leading-6 text-[#DB4444] pr-3">Out of Stock</span>
                        </div>

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
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script setup>
    import axios from 'axios'
import { ref, onMounted, onBeforeUnmount, computed, watch } from 'vue'
    import { useRoute } from 'vue-router'
    import { useStore } from 'vuex'
    import Swal from 'sweetalert2'

    // product image path to be retrieved from env
    const gallery_image_path = import.meta.env.VITE_GALLERY_IMAGE_PATH
    const product_image_path = import.meta.env.VITE_PRODUCT_IMAGE_PATH

    const route = useRoute()
    const store = useStore()
    
    const tags = computed(()=> store.getters.tags)
    const product_details = computed(()=> store.getters.product_details)
    const new_arrivals = computed(()=> store.getters.newArrivals)
    const user = computed(()=> store.getters.user)



    const count = ref(1)
    const increment = () =>{
        count.value++
    }
    const decrement = () =>{
        if(count.value > 1){
            count.value--
        }
    }

    const selectedColor = ref(null);
    const selectedSize = ref(null);

    // Fetch Product

    const selected_img = ref('')
    onMounted(async() => {
        const productId = route.params.id
        await store.dispatch('fetchProductDetails', productId)

        if(product_details.value.rel_to_inventory){
            const defaultSize = product_details.value.rel_to_inventory.find(
                (item)=>item.rel_to_size?.name == 'NA'
            )
            if(defaultSize){
                selectedSize.value = defaultSize.rel_to_size.id
            }
        }
        if(product_details.value.rel_to_inventory){
            const defaultColor = product_details.value.rel_to_inventory.find(
                (item)=>item.rel_to_color?.name == 'NA'
            )
            if(defaultColor){
                selectedColor.value = defaultColor.rel_to_color.id
            }
        }
    })


    const uniqueColors = computed(()=>{
        const seen = new Set()
        return product_details.value.rel_to_inventory.filter((item)=>{
            const id = item.rel_to_color.id
            if (seen.has(id)) return false
            seen.add(id)
            return true
        })
    })

    const defaultSizes = computed(()=>{
        const seen = new Set()
        return product_details.value.rel_to_inventory.filter((item)=>{
            const sizeId = item.rel_to_size.id
            if(!sizeId || seen.has(sizeId)) return false
            seen.add(sizeId)
            return true
        })
    })

    const uniqueSizes = computed(()=>{
        if(!selectedColor.value){
            return defaultSizes.value
        }
        const seen = new Set()
        return product_details.value.rel_to_inventory.filter(item=>{
            if(item.color_id !== selectedColor.value) return false
            const sizeId = item.rel_to_size?.id
            if(seen.has(sizeId)) return false
            seen.add(sizeId)
            return true
        })
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

    const selectedInventory = computed(() => {
        const inventories = product_details.value.rel_to_inventory;

        if (!inventories) return null;

        const hasColors = inventories.some(inv => inv.color_id != null);
        const hasSizes = inventories.some(inv => inv.size_id != null);

        // Match both if available
        if (hasColors && hasSizes && selectedColor.value && selectedSize.value) {
            return inventories.find(inv =>
                inv.color_id === selectedColor.value &&
                inv.size_id === selectedSize.value
            );
        }

        // Match color only
        if (hasColors && selectedColor.value) {
            return inventories.find(inv => Number(inv.color_id) === Number(selectedColor.value));
        }

        // Match size only
        if (hasSizes && selectedSize.value) {
            return inventories.find(inv => Number(inv.size_id) === Number(selectedSize.value));
        }

        // Default fallback (no variants)
        return inventories[0] || null;
    })

    const customer_id = ref('')
    const product_id = ref('')
    const color_id = ref('')
    const size_id = ref('')
    const quantity = ref('')
    const errors = ref({})

    // Cart Store
    const cart_store = computed(()=>{
        axios.post(`http://127.0.0.1:8000/api/cart/store`, {
            customer_id: user.value.id,
            product_id: product_details.value.id,
            color_id: selectedColor.value,
            size_id: selectedSize.value,
            quantity: count.value,
        })
        .then(response=>{
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: response.data.success,
                showConfirmButton: false,
                timer: 1500
            });
            store.dispatch('fetchCartDetails', user.value.id)
        })
        .catch(error=>{
            errors.value = error.response.data.errors
        })
    })

    watch(selectedColor, ()=>{
        if (errors.value.color_id) {
            delete errors.value.color_id
        }
    })
    watch(selectedSize, ()=>{
        if (errors.value.size_id) {
            delete errors.value.size_id
        }
    })


    // watch([selectedColor, selectedSize], ([color, size]) => {
    //     console.log("Selected Color ID:", color);
    //     console.log("Selected Size ID:", size);
    // });

    // watch(selectedInventory, (val) => {
    //     console.log("Selected Inventory:", val)
    // });

</script>