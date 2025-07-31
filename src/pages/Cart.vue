<template>
    <section id="cart" class="py-[20px] md:py-[140px] px-5">
        <div class="container">
            <form @submit.prevent="update">
            <div class="overflow-auto">
                <table class="w-full border-separate border-spacing-y-10">
                    <thead class="">
                        <tr class="shadow-md outline-1 outline-gray-200">
                            <th class="pl-5 md:pl-10 py-6 font-pop font-normal text-[16px] leading-6 tracking text-start">Product</th>
                            <th class="pl-5 md:pl-10 py-6 font-pop font-normal text-[16px] leading-6 tracking text-start">Price</th>
                            <th class="pl-5 md:pl-10 py-6 font-pop font-normal text-[16px] leading-6 tracking text-start">Quantity</th>
                            <th class="pl-5 md:pl-10 py-6 font-pop font-normal text-[16px] leading-6 tracking text-start">Sub Total</th>
                            <th class="pl-5 md:pl-10 py-6 font-pop font-normal text-[16px] leading-6 tracking text-start pr-5 md:pr-0">Remove</th>
                        </tr>
                    </thead>
                    <tbody class="">
                        <tr v-for="(item, index) in carts" :key="index" class="shadow-md outline-1 outline-gray-200">
                            <td class="px-4 md:px-10 py-6 align-middle text-sm font-normal text-gray-700">
                                <div class="flex items-center gap-x-5">
                                    <img :src="`${product_img_path}/${item.rel_to_product.image}`" alt="product-img" class="hidden md:block w-1/4">
                                    <h1 class="pl-4 font-pop font-normal text-[16px] leading-6 text-black">{{ item.rel_to_product.name }}</h1>
                                </div>
                            </td>
                            <td class="pl-10 w-1/6 font-pop font-normal text-[16px] leading-6 py-6 whitespace-nowrap">&#2547; {{ item.inventory.after_discount }}</td>
                            <td class="pl-10 w-1/6 py-6 font-pop font-normal text-[16px] leading-6 whitespace-nowrap">
                                <div class="w-full md:w-1/2 flex items-center justify-evenly p-3 bg-gray-100 border border-[rgba(0,0,0,0.4)] rounded cursor-pointer select-none gap-x-2">
                                        
                                        <span class="text-end quantity font-pop font-normal text-[16px] leading-6">{{item.quantity}}</span>
                                        <div class="flex flex-col gap-y-3">
                                            <i @click = increment(index) class="fas fa-chevron-up fa-sm"></i>
                                            <i @click = decrement(index) class="fas fa-chevron-down fa-sm"></i>
                                        </div>
                                </div>
                            </td>
                            <td class="pl-10 w-1/6 font-pop font-normal text-[16px] leading-6 whitespace-nowrap">{{item.inventory.after_discount * item.quantity}}</td>
                            <td class="w-1/6 pl-10 py-6 font-pop font-normal text-[16px] leading-6 text-red-700 whitespace-nowrap"><a href="#"><i class="fas fa-trash-alt"></i></a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="cart-butns flex flex-row justify-between pt-5">
                <button class="px-4 md:px-12 py-2 md:py-4 font-pop font-medium text-[16px] leading-6 border border-[rgba(0,0,0,0.5)] rounded hover:bg-[#DB4444] hover:text-white hover:border-white duration-300">Return To Shop</button>
                <button type="submit" class="px-4 md:px-12 py-2 md:py-4 font-pop font-medium text-[16px] leading-6 border border-[rgba(0,0,0,0.5)] rounded hover:bg-[#DB4444] hover:text-white hover:border-white duration-300">Update Cart</button>
            </div>
            </form>
        </div>
        <div class="container py-10 md:pt-[113px]">
            <div class="w-full md:w-1/3 ms-auto">
                <div class="flex flex-col outline-1 md:outline-[1.5] outline-black rounded py-8 px-6 gap-y-6">
                    <h1 class="font-pop font-medium text-[20px] leading-7">Cart Total</h1>
                    <div class="cart-amount flex flex-col gap-y-4">
                        <div class="amount flex flex-row justify-between py-4 border-b-1 border-black">
                            <h4 class="font-pop font-normal text-[16px] leading-6">Subtotal:</h4>
                            <h4 class="font-pop font-normal text-[16px] leading-6">&#2547; {{ subtotal }}</h4>
                        </div>
                        <div class="amount flex flex-row justify-between py-4 border-b-1 border-black">
                            <h4 class="font-pop font-normal text-[16px] leading-6">Discount:</h4>
                            <h4 class="font-pop font-normal text-[16px] leading-6">&#2547; {{ subtotal-total }}</h4>
                        </div>
                        <div class="amount flex flex-row justify-between py-4">
                            <h4 class="font-pop font-normal text-[16px] leading-6">Total:</h4>
                            <h4 class="font-pop font-normal text-[16px] leading-6">&#2547; {{ total }}</h4>
                        </div>
                    </div>
                    <router-link to="/checkout" class="text-center px-4 md:px-12 py-2 md:py-4 font-pop font-medium text-[16px] leading-6 border rounded bg-[#DB4444] text-white border-white hover:bg-white hover:text-[#DB4444] hover:border-[#DB4444] duration-300">Proceed to checkout</router-link>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
    import product from '@/assets/images/product1.png'
    import useAuth from '@/composables/useAuth'
    import axios from 'axios'
    import Swal from 'sweetalert2'
    import { ref, computed, watch } from 'vue'
    import { useStore } from 'vuex'
    const {user, isAuthenticated, logout} = useAuth()

    const product_img_path = import.meta.env.VITE_PRODUCT_IMAGE_PATH

    const store = useStore()
    watch(user, (newUser)=>{
        store.dispatch('fetchCartDetails', newUser.id)
    })
    const carts = computed(()=> store.getters.carts )

    

    const increment = (index) =>{
        carts.value[index].quantity++
    }
    const decrement = (index) =>{
        if(carts.value[index].quantity > 1){
            carts.value[index].quantity--
        }
    }

    const subtotal = computed(() =>{
        return carts.value.reduce((acc, cart)=>acc + cart.inventory.price * cart.quantity, 0)
    })
    const total = computed(() =>{
        return carts.value.reduce((acc, cart)=>acc + cart.inventory.after_discount * cart.quantity, 0)
    })

    const update = () =>{
        const updatedCarts = carts.value.map(item=>({
            id:item.id,
            quantity:item.quantity,
        }))
        axios.post('http://127.0.0.1:8000/api/cart/update', {
            carts: updatedCarts
        })
        .then(response=>{
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: response.data.success,
                showConfirmButton: false,
                timer: 1500
            });
        })
        .catch(error=>{
            console.log(error.response.data.errors);
            
        })
    }



</script>