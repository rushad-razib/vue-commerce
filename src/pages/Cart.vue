<template>
    <section id="cart" class="py-[20px] md:py-[140px] px-5">
        <div class="container">
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
                        <tr v-for="(item, index) in cart" :key="index" class="shadow-md outline-1 outline-gray-200">
                            <td class="px-4 md:px-10 py-6 align-middle text-sm font-normal text-gray-700 whitespace-nowrap">
                                <div class="flex items-center gap-x-5">
                                    <img :src="item.image" alt="product-img" class="hidden md:block w-1/4">
                                    <h1 class="pl-4 font-pop font-normal text-[16px] leading-6 text-black">{{ item.name }}</h1>
                                </div>
                            </td>
                            <td class="pl-10 w-1/6 font-pop font-normal text-[16px] leading-6 py-6 whitespace-nowrap">&#2547; {{ item.price }}</td>
                            <td class="pl-10 w-1/6 py-6 font-pop font-normal text-[16px] leading-6 whitespace-nowrap">
                                <div class="w-full md:w-1/2 flex items-center justify-evenly p-3 bg-gray-100 border border-[rgba(0,0,0,0.4)] rounded cursor-pointer select-none gap-x-2">
                                        
                                        <span class="text-end quantity font-pop font-normal text-[16px] leading-6">{{item.count}}</span>
                                        <div class="flex flex-col gap-y-3">
                                            <i @click = increment(index) class="fas fa-chevron-up fa-sm"></i>
                                            <i @click = decrement(index) class="fas fa-chevron-down fa-sm"></i>
                                        </div>
                                </div>
                            </td>
                            <td class="pl-10 w-1/6 font-pop font-normal text-[16px] leading-6 whitespace-nowrap">{{item.price * item.count}}</td>
                            <td class="w-1/6 pl-10 py-6 font-pop font-normal text-[16px] leading-6 text-red-700 whitespace-nowrap"><a href="#"><i class="fas fa-trash-alt"></i></a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="cart-butns flex flex-row justify-between pt-5">
                <button class="px-4 md:px-12 py-2 md:py-4 font-pop font-medium text-[16px] leading-6 border border-[rgba(0,0,0,0.5)] rounded hover:bg-[#DB4444] hover:text-white hover:border-white duration-300">Return To Shop</button>
                <button class="px-4 md:px-12 py-2 md:py-4 font-pop font-medium text-[16px] leading-6 border border-[rgba(0,0,0,0.5)] rounded hover:bg-[#DB4444] hover:text-white hover:border-white duration-300">Update Cart</button>
            </div>
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
                            <h4 class="font-pop font-normal text-[16px] leading-6">Shipping:</h4>
                            <h4 class="font-pop font-normal text-[16px] leading-6">Free</h4>
                        </div>
                        <div class="amount flex flex-row justify-between py-4">
                            <h4 class="font-pop font-normal text-[16px] leading-6">Total:</h4>
                            <h4 class="font-pop font-normal text-[16px] leading-6">$1750</h4>
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
    import { ref, computed } from 'vue'

    const cart = ref([
        {
            id:1,
            name: 'LCD Monitor',
            image: 'https://placehold.co/70',
            price: 650,
            count: 1,
        },
        {
            id:2,
            name: 'H1 Gamepad',
            image: 'https://placehold.co/70',
            price: 550,
            count: 2,
        },
    ])

    const increment = (index) =>{
        cart.value[index].count++
    }
    const decrement = (index) =>{
        if(cart.value[index].count > 1){
            cart.value[index].count--
        }
    }

    const subtotal = computed(() =>{
        return cart.value.reduce((acc, cart)=>acc + cart.price * cart.count, 0)
    })






</script>