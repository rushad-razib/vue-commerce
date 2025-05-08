<template>
    <section id="checkout">
        <div class="container pt-[70px] px-4 md:px-0 md:pt-[180px] py-[140px] flex flex-col md:flex-row gap-x-[173px]">
            <div class="w-full md:w-1/2 billing">
                <h1 class="font-inter font-medium text-[36px] leading-[30px] pb-12">Billing Details</h1>
                <form action="">
                    <div class="flex flex-col gap-y-8">
                        <div class="flex flex-col gap-y-2">
                            <label for="" class="font-pop font-normal text-[16px] leading-6 opacity-[60%] text-[#DB4444]">First Name*</label>
                            <input type="text" class="bg-[#F5F5F5] outline-0 ring-0 rounded p-2 w-full">
                        </div>
                        <div class="flex flex-col gap-y-2">
                            <label for="" class="font-pop font-normal text-[16px] leading-6 opacity-[60%] text-[#DB4444]">Company Name</label>
                            <input type="text" class="bg-[#F5F5F5] outline-0 ring-0 rounded p-2 w-full">
                        </div>
                        <div class="flex flex-col gap-y-2">
                            <label for="" class="font-pop font-normal text-[16px] leading-6 opacity-[60%] text-[#DB4444]">Street Address*</label>
                            <input type="text" class="bg-[#F5F5F5] outline-0 ring-0 rounded p-2 w-full">
                        </div>
                        <div class="flex flex-col gap-y-2">
                            <label for="" class="font-pop font-normal text-[16px] leading-6 opacity-[60%] text-[#DB4444]">Apartment, floor, etc. (optional)</label>
                            <input type="text" class="bg-[#F5F5F5] outline-0 ring-0 rounded p-2 w-full">
                        </div>
                        <div class="flex flex-col gap-y-2">
                            <label for="" class="font-pop font-normal text-[16px] leading-6 opacity-[60%] text-[#DB4444]">Town/City*</label>
                            <input type="text" class="bg-[#F5F5F5] outline-0 ring-0 rounded p-2 w-full">
                        </div>
                        <div class="flex flex-col gap-y-2">
                            <label for="" class="font-pop font-normal text-[16px] leading-6 opacity-[60%] text-[#DB4444]">Phone Number*</label>
                            <input type="text" class="bg-[#F5F5F5] outline-0 ring-0 rounded p-2 w-full">
                        </div>
                        <div class="flex flex-col gap-y-2">
                            <label for="" class="font-pop font-normal text-[16px] leading-6 opacity-[60%] text-[#DB4444]">Email Address*</label>
                            <input type="text" class="bg-[#F5F5F5] outline-0 ring-0 rounded p-2 w-full">
                        </div>
                    </div>
                </form>
            </div>
            <div class="w-full md:w-1/2 cart-info pt-[60px] md:pt-[115px]">
                <div class="flex flex-col gap-y-8">
                    <div class="cart-product flex flex-row justify-between items-center pr-0 md:pr-[102px]">
                        <div class="product-info flex flex-row items-center gap-x-6">
                            <img :src="product" alt="product-image" class="w-1/5">
                            <h4 class="font-pop font-normal text-[16px] leading-6">LCD Monitor</h4>
                        </div>
                        <div class="product-price">
                            <h4 class="font-pop font-normal text-[16px] leading-6">$650</h4>
                        </div>
                    </div>
                    <div class="cart-product flex flex-row justify-between items-center pr-0 md:pr-[102px]">
                        <div class="product-info flex flex-row items-center gap-x-6">
                            <img :src="product2" alt="product-image" class="w-1/5">
                            <h4 class="font-pop font-normal text-[16px] leading-6">H1 Gamepad</h4>
                        </div>
                        <div class="product-price">
                            <h4 class="font-pop font-normal text-[16px] leading-6">$1100</h4>
                        </div>
                    </div>
                    <div class="flex flex-col gap-y-8 pr-0 md:pr-[102px]">
                        <div class="cart-amount flex flex-row justify-between pb-4 border-b-1">
                            <h4 class="font-pop font-normal text-[16px] leading-6">Subtotal:</h4>
                            <h4 class="font-pop font-normal text-[16px] leading-6">$1750</h4>
                        </div>
                        <div class="cart-amount flex flex-row justify-between pb-4 border-b-1">
                            <h4 class="font-pop font-normal text-[16px] leading-6">Shipping:</h4>
                            <h4 class="font-pop font-normal text-[16px] leading-6">Free</h4>
                        </div>
                        <div class="cart-amount flex flex-row justify-between pb-4 border-b-1">
                            <h4 class="font-pop font-normal text-[16px] leading-6">Total:</h4>
                            <h4 class="font-pop font-normal text-[16px] leading-6">$1750</h4>
                        </div>
                    </div>
                    <form action="">
                        <div class="flex flex-col gap-y-8">
                            <div class="flex flex-row gap-x-4 items-center">
                                <input type="radio" name="payment_method" class="h-5">
                                <h4 class="font-pop font-normal text-[16px] leading-6">Stripe</h4>
                            </div>
                            <div class="flex flex-row gap-x-4 items-center">
                                <input type="radio" name="payment_method" checked>
                                <h4 class="font-pop font-normal text-[16px] leading-6">Cash on Delivery</h4>
                            </div>
                        </div>
                    </form>
                    <div class="flex flex-row flex-wrap md:flex-nowrap justify-between md:gap-x-2">
                        <input type="text" placeholder="Coupon Code" class="w-3/5 font-pop font-normal text-[16px] leading-6 px-2 py-2 md:px-6 md:py-4 rounded outline outline-black ring-0 focus:bg-[#F5F5F5]">
                        <button class="w-2/5 font-pop font-medium text-[16px] leading-6 px-3 py-2 md:px-12 md:py-4 bg-[#DB4444] text-white rounded hover:bg-white hover:text-[#DB4444] hover:outline-1 hover:outline-[#DB4444] duration-300">Apply Coupon</button>
                    </div>
                    <button class="w-3/4 md:w-2/5 font-pop font-medium text-[16px] leading-6 px-12 py-4 bg-[#DB4444] text-white rounded hover:bg-white hover:text-[#DB4444] hover:outline-1 hover:outline-[#DB4444] duration-300">Place Order</button>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
    import product from '@/assets/images/product1.png'
    import product2 from '@/assets/images/product2.png'
</script>