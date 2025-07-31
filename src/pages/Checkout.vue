<template>
    <section id="checkout">
        <form @submit.prevent="order" >
        <div class="container pt-[70px] px-4 md:px-0 md:pt-[180px] py-[140px] flex flex-col md:flex-row gap-x-[173px]">
            <!-- left section -->
            <div class="w-full md:w-1/2 billing">
                <h1 class="font-inter font-medium text-[36px] leading-[30px] pb-12">Billing Details</h1>
                    <div class="flex flex-col gap-y-8">
                        <div class="flex flex-col gap-y-2">
                            <label for="" class="font-pop font-normal text-[16px] leading-6 opacity-[60%] text-[#DB4444]">Full Name*</label>
                            <input type="text" v-model="name" disabled class="bg-[#F5F5F5] outline-0 ring-0 rounded p-2 w-full">
                        </div>
                        <div class="flex flex-col gap-y-2">
                            <label for="" class="font-pop font-normal text-[16px] leading-6 opacity-[60%] text-[#DB4444]">Company Name</label>
                            <input type="text" v-model="company" class="bg-[#F5F5F5] outline-0 ring-0 rounded p-2 w-full">
                        </div>
                        <div class="flex flex-col gap-y-2">
                            <label for="" class="font-pop font-normal text-[16px] leading-6 opacity-[60%] text-[#DB4444]">Street Address*</label>
                            <input type="text" v-model="address" class="bg-[#F5F5F5] outline-0 ring-0 rounded p-2 w-full">
                            <strong v-if="errors.address" class="text-red-500">{{ errors.address[0] }}</strong>
                        </div>
                        <div class="flex flex-col gap-y-2">
                            <label for="" class="font-pop font-normal text-[16px] leading-6 opacity-[60%] text-[#DB4444]">Apartment, floor, etc. (optional)</label>
                            <input type="text" v-model="floor" class="bg-[#F5F5F5] outline-0 ring-0 rounded p-2 w-full">
                        </div>
                        <div class="flex flex-col gap-y-2">
                            <label for="" class="font-pop font-normal text-[16px] leading-6 opacity-[60%] text-[#DB4444]">Town/City*</label>
                            <input type="text" v-model="city" class="bg-[#F5F5F5] outline-0 ring-0 rounded p-2 w-full">
                            <strong v-if="errors.city" class="text-red-500">{{ errors.city[0] }}</strong>
                        </div>
                        <div class="flex flex-col gap-y-2">
                            <label for="" class="font-pop font-normal text-[16px] leading-6 opacity-[60%] text-[#DB4444]">Phone Number*</label>
                            <input type="text" v-model="phone" class="bg-[#F5F5F5] outline-0 ring-0 rounded p-2 w-full">
                            <strong v-if="errors.phone" class="text-red-500">{{ errors.phone[0] }}</strong>
                        </div>
                        <div class="flex flex-col gap-y-2">
                            <label for="" class="font-pop font-normal text-[16px] leading-6 opacity-[60%] text-[#DB4444]">Email Address*</label>
                            <input type="text" v-model="email" disabled class="bg-[#F5F5F5] outline-0 ring-0 rounded p-2 w-full">
                        </div>
                    </div>
            </div>
            <!-- right section -->
            <div class="w-full md:w-1/2 cart-info pt-[60px] md:pt-[80px]">
                <div class="flex flex-col gap-y-8">
                    <div v-for="(item, index) in carts" :key="index" class="cart-product flex flex-row justify-between items-center pr-0  w-full">
                        <div class="w-2/4 product-info flex flex-row items-center gap-x-6">
                            <img height="50" width="50" :src="`${preview_image_path}/${item.rel_to_product.image}`" alt="product-image">
                            <h4 class="font-pop font-normal text-[16px] leading-6">{{item.rel_to_product.name}}</h4>
                        </div>
                        <div class="w-1/4 quantity">
                            <h4 class="font-pop font-normal text-[16px] leading-6">x{{ item.quantity }}</h4>
                        </div>
                        <div class="w-1/4 product-price">
                            <h4 class="font-pop font-normal text-[16px] leading-6">&#2547; {{ item.inventory.price * item.quantity }}</h4>
                        </div>
                    </div>
                    
                    <div class="flex flex-col gap-y-8 pr-0 md:pr-[68px]">
                        <div class="cart-amount flex flex-row justify-between pb-4 border-b-1">
                            <h4 class="font-pop font-normal text-[16px] leading-6">Subtotal:</h4>
                            <h4 class="font-pop font-normal text-[16px] leading-6">&#2547; {{ subtotal }}</h4>
                        </div>
                        <div v-if="discount" class="cart-amount flex flex-row justify-between pb-4 border-b-1">
                            <h4 class="font-pop font-normal text-[16px] leading-6">Coupon Discount:</h4>
                            <h4 class="font-pop font-normal text-[16px] leading-6">&#2547; {{discount}}</h4>
                        </div>
                        <div v-if="charge" class="cart-amount flex flex-row justify-between pb-4 border-b-1">
                            <h4 class="font-pop font-normal text-[16px] leading-6">Delivery Charge:</h4>
                            <h4 class="font-pop font-normal text-[16px] leading-6">&#2547; {{charge}}</h4>
                        </div>
                        <div class="cart-amount flex flex-row justify-between pb-4 border-b-1">
                            <h4 class="font-pop font-normal text-[16px] leading-6">Total:</h4>
                            <h4 class="font-pop font-normal text-[16px] leading-6">&#2547; {{ subtotal - discount + charge}}</h4>
                        </div>
                    </div>
                    
                    <div class="flex flex-col gap-y-8">
                        <div class="flex flex-row gap-x-4 items-center">
                            <input type="radio" id="stripe" v-model="payment_method" value="stripe" class="h-5">
                            <label for="stripe" class="font-pop font-normal text-[16px] leading-6">Stripe</label>
                        </div>
                        <div class="flex flex-row gap-x-4 items-center">
                            <input type="radio" id="COD" v-model="payment_method" value="COD">
                            <label for="COD" class="font-pop font-normal text-[16px] leading-6">Cash on Delivery</label>
                        </div>
                    </div>
            
                    <form @submit.prevent="coupon_apply">
                    <div class="flex flex-row flex-wrap md:flex-nowrap justify-between md:gap-x-2">
                        <input type="text" v-model="coupon" placeholder="Coupon Code" class="w-3/5 font-pop font-normal text-[16px] leading-6 px-2 py-2 md:px-6 md:py-4 rounded outline outline-black ring-0 focus:bg-[#F5F5F5]">
                        <button type="submit" class="w-2/5 font-pop font-medium text-[16px] leading-6 px-3 py-2 md:px-12 md:py-4 bg-[#DB4444] text-white rounded hover:bg-white hover:text-[#DB4444] hover:outline-1 hover:outline-[#DB4444] duration-300">Apply Coupon</button>
                    </div>
                    <div class="mt-2">
                        <strong v-if="coupon_err" class="text-red-500">{{ coupon_err }}</strong>
                    </div>
                    </form>
                    <button type="submit" class="w-3/4 md:w-2/5 font-pop font-medium text-[16px] leading-6 px-12 py-4 bg-[#DB4444] text-white rounded hover:bg-white hover:text-[#DB4444] hover:outline-1 hover:outline-[#DB4444] duration-300">Place Order</button>
                </div>
            </div>
        </div>
        </form>
    </section>
</template>
<script setup>
    import product from '@/assets/images/product1.png'
    import product2 from '@/assets/images/product2.png'
    import useAuth from '@/composables/useAuth';
    import axios from 'axios';
    import Swal from 'sweetalert2'
    import { ref, computed, watch } from 'vue';
    import { useStore } from 'vuex';
    const {user, isAuthenticated, logout} = useAuth()
    const store = useStore()
    const preview_image_path = import.meta.env.VITE_PRODUCT_IMAGE_PATH

    
    const name = ref('')
    const email = ref('')

    watch(user, (newUser)=>{
        store.dispatch('fetchCartDetails', newUser.id)
        name.value = newUser.name
        email.value = newUser.email
    })
    const carts = computed(()=>store.getters.carts)

    const subtotal = computed(()=>{
        return carts.value.reduce((acc, cart)=>acc + cart.inventory.price * cart.quantity, 0)
    })

    const coupon_err = ref('')
    const coupon = ref('')
    const discount = ref('')
    const type = ref('')
    const amount = ref('')
    
    const coupon_apply = () =>{
        axios.post('http://127.0.0.1:8000/api/coupon/apply', {
            coupon: coupon.value,
            subtotal: subtotal.value
        })
        .then(response=>{
            if(response.data.coupon_err){
                coupon_err.value = response.data.coupon_err
            }
            if(response.data.success){
                type.value = response.data.type
                amount.value = response.data.amount
                if(type.value == 1){
                    discount.value = subtotal.value * amount.value/100
                    
                }
                else{
                    discount.value = amount.value
                }
            }
            
        })
        .catch(err=>{
            if (err.response?.data?.errors?.coupon) {
                coupon_err.value = err.response.data.errors.coupon[0]
            }
            
        })
    }

    

    const payment_method = ref('COD')
    const charge = ref(50)
    const company = ref('')
    const address = ref('')
    const floor = ref('')
    const city = ref('')
    const phone = ref('')
    const errors = ref({})
    const order = () => {
        axios.post('http://127.0.0.1:8000/api/order',{
            customer_id: user.value.id,
            discount: Number(discount.value),
            subtotal: subtotal.value,
            payment_method: payment_method.value,
            charge: charge.value,
            company:company.value,
            address:address.value,
            floor:floor.value,
            city:city.value,
            phone:phone.value,
        })
        .then(response=>{
            Swal.fire({
                position: "bottom-end",
                icon: "success",
                title: response.data.success,
                showConfirmButton: false,
                timer: 1500
            });
            
        })
        .catch(error=>{
            if(error.response?.data?.errors){
                errors.value = error.response.data.errors
            }
            
        })
    }


    watch(coupon, ()=>{
        if(coupon_err.value) return coupon_err.value = ''
    })
    watch(address, ()=>{
        if(errors.value.address) return errors.value.address = ''
    })
    watch(city, ()=>{
        if(errors.value.city) return errors.value.city = ''
    })
    watch(phone, ()=>{
        if(errors.value.phone) return errors.value.phone = ''
    })

</script>