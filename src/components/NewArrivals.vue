<template>
    <div class="container pt-[20px] md:pt-[140px] pb-7 md:pb-15 border-b-[0.5px] border-[rgba(0,0,0,0.3)]">
        <div class="flex flex-col">
            <h1 class="font-inter font-semibold text-[30px] md:text-[36px] leading-12 text-center">New Arrivals</h1>
            <div class="products flex flex-row flex-wrap gap-x-1 gap-y-4 md:gap-x-[30px] pt-5 md:pt-10 px-2 md:px-0">
                <div class="product w-[48%] md:w-[23%] space-y-4 hover:shadow-2xl p-2">
                    <div class="img-card p-10 bg-[#F5F5F5]">
                        <img :src="Product" alt="">
                    </div>
                    <div class="product-cont space-y-1">
                        <h1 class="font-pop font-medium text-[16px] leading-6">HAVIT HV-G92 Gamepad</h1>
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
                <div class="product w-[48%] md:w-[23%] space-y-4 hover:shadow-2xl p-2">
                    <div class="img-card p-10 bg-[#F5F5F5]">
                        <img :src="Product" alt="">
                    </div>
                    <div class="product-cont space-y-1">
                        <h1 class="font-pop font-medium text-[16px] leading-6">HAVIT HV-G92 Gamepad</h1>
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
                <div class="product w-[48%] md:w-[23%] space-y-4 hover:shadow-2xl p-2">
                    <div class="img-card p-10 bg-[#F5F5F5]">
                        <img :src="Product" alt="">
                    </div>
                    <div class="product-cont space-y-1">
                        <h1 class="font-pop font-medium text-[16px] leading-6">HAVIT HV-G92 Gamepad</h1>
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
                <div class="product w-[48%] md:w-[23%] space-y-4 hover:shadow-2xl p-2">
                    <div class="img-card p-10 bg-[#F5F5F5]">
                        <img :src="Product" alt="">
                    </div>
                    <div class="product-cont space-y-1">
                        <h1 class="font-pop font-medium text-[16px] leading-6">HAVIT HV-G92 Gamepad</h1>
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
            <div class="m-auto">
                <button class="font-pop font-medium text-[16px] leading-6 py-4 px-12 bg-[#DB4444] text-white rounded-[4px] border border-transparent hover:bg-white hover:text-[#DB4444] hover:border hover:border-[#DB4444] duration-300 mt-[30px] md:mt-[67px]">View All Products</button>
            </div>
        </div>
    </div>
</template>
<script setup>
    import Product from '@/assets/images/product1.png'
</script>