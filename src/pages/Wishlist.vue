<template>
    <section id="wishlist" class="py-10 px-4 md:py-20 md:px-0">
        <div class="container flex flex-col gap-y-4 md:gap-y-4">
            <h1 class="font-pop font-normal text-[20px] leading-[26px]">Wishlist (4)</h1>
            <div class="products flex flex-row flex-wrap gap-x-1 gap-y-4 md:gap-x-[30px] pt-5 md:pt-10 px-2 md:px-0">
                <div class="product w-[48%] md:w-[23%] space-y-4 hover:shadow-2xl p-2">
                    <div class="img-card p-10 bg-[#F5F5F5]">
                        <img :src="Product" alt="">
                    </div>
                    <div class="product-cont space-y-1">
                        <h1 class="font-pop font-medium text-[16px] leading-6">HAVIT HV-G92 Gamepad</h1>
                        <div><span class="font-pop font-medium text-[16px] leading-6 text-[#DB4444] pr-3">$120</span><del class="font-pop font-medium text-[16px] leading-6 text-[#000]">$160</del></div>
                        <div class="stars flex flex-row gap-x-1">
                            <i class="fas fa-star text-[#FFAD33]"></i>
                            <i class="fas fa-star text-[#FFAD33]"></i>
                            <i class="fas fa-star text-[#FFAD33]"></i>
                            <i class="fas fa-star text-[#FFAD33]"></i>
                            <i class="fas fa-star text-[#FFAD33]"></i>
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
                        <div class="stars flex flex-row gap-x-1">
                            <i class="fas fa-star text-[#FFAD33]"></i>
                            <i class="fas fa-star text-[#FFAD33]"></i>
                            <i class="fas fa-star text-[#FFAD33]"></i>
                            <i class="fas fa-star text-[#FFAD33]"></i>
                            <i class="fas fa-star text-[#FFAD33]"></i>
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
                        <div class="stars flex flex-row gap-x-1">
                            <i class="fas fa-star text-[#FFAD33]"></i>
                            <i class="fas fa-star text-[#FFAD33]"></i>
                            <i class="fas fa-star text-[#FFAD33]"></i>
                            <i class="fas fa-star text-[#FFAD33]"></i>
                            <i class="fas fa-star text-[#FFAD33]"></i>
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
                        <div class="stars flex flex-row gap-x-1">
                            <i class="fas fa-star text-[#FFAD33]"></i>
                            <i class="fas fa-star text-[#FFAD33]"></i>
                            <i class="fas fa-star text-[#FFAD33]"></i>
                            <i class="fas fa-star text-[#FFAD33]"></i>
                            <i class="fas fa-star text-[#FFAD33]"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
    import Product from '@/assets/images/product1.png'

</script>