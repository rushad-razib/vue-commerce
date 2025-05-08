<template>
    <section id="product-landing">
        <div class="container py-[50px] md:py-[109px] px-5 md:px-0">
            <div class="flex flex-row items-center gap-x-5 md:gap-x-[70px]">
                <div class="w-1/3 md:w-1/2 flex flex-col-reverse gap-y-2 md:flex-row gap-x-[30px]">
                    <div class="w-1/4 flex flex-row flex-wrap md:flex-col gap-y-4 gap-x-1">
                        <img :src="product_img1" alt="product image" class="px-[25px] py-[12px] bg-[#F5F5F5]">
                        <img :src="product_img2" alt="product image" class="px-[25px] py-[12px] bg-[#F5F5F5]">
                        <img :src="product_img3" alt="product image" class="px-[25px] py-[12px] bg-[#F5F5F5]">
                    </div>
                    <div class="w-full md:w-3/4">
                        <img :src="product_img4" alt="product image" class="px-[27px] py-[40px] md:py-[92px] bg-[#F5F5F5]">
                    </div>
                </div>
                <div class="w-2/3 md:w-1/2">
                    <div class="flex flex-col gap-y-2 md:gap-y-4">
                        <h1 class="font-inter font-semibold text-[24px] leading-6">Havic HV G-92 Gamepad</h1>
                        <div class="flex flex-row gap-x-1 md:gap-x-2 items-center">
                            <div class="stars">
                                <i class="fas fa-star text-[#FFAD33]"></i>
                                <i class="fas fa-star text-[#FFAD33]"></i>
                                <i class="fas fa-star text-[#FFAD33]"></i>
                                <i class="fas fa-star text-[#FFAD33]"></i>
                                <i class="fas fa-star text-[#FFAD33]"></i>
                            </div>
                            <h4 class="font-pop font-normal text-[14px] leading-[21px] opacity-[50%] hidden md:block">(150 Reviews)</h4>
                        </div>
                        <h4 class="font-inter font-normal text-[20px] md:text-[24px] leading-6">$192.00</h4>
                        <p class="font-pop font-normal text-[14px] leading-[21px]">PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
                        <hr class="">
                        <div class="flex flex-row gap-x-2 md:gap-x-6 items-center">
                            <h4 class="font-inter font-medium md:font-normal text-[16px] md:text-[20px] leading-[20px]">Colours:</h4>
                            <div class="colors pt-0 md:pt-1 flex gap-x-2 flex-wrap">
                                <input type="radio" name="color">
                                <input type="radio" name="color">
                            </div>
                        </div>
                        <div class="flex flex-row gap-x-2 md:gap-x-6 items-center flex-wrap">
                            <h4 class="font-inter font-medium md:font-normal text-[16px] md:text-[20px] leading-[20px]">Size:</h4>
                            <div class="sizes flex gap-x-2">
                                <button class="font-pop font-medium text-[14px] leading-[21px] py-[6px] px-[7px] border border-[rgba(0,0,0,0.5)] rounded focus:bg-[#DB4444] focus:text-white">XS</button>
                                <button class="font-pop font-medium text-[14px] leading-[21px] py-[6px] px-[7px] border border-[rgba(0,0,0,0.5)] rounded focus:bg-[#DB4444] focus:text-white">XS</button>
                                <button class="font-pop font-medium text-[14px] leading-[21px] py-[6px] px-[7px] border border-[rgba(0,0,0,0.5)] rounded focus:bg-[#DB4444] focus:text-white">XS</button>
                            </div>
                        </div>
                        <div class="flex flex-col md:flex-row gap-y-2 md:gap-x-4 items-start md:items-center">
                            <div class="quantity border border-[rgba(0,0,0,0.5)] rounded flex flex-row items-center">
                                <button class="focus:text-white focus:bg-[#DB4444] focus:border-transparent border-r-1 border-[rgba(0,0,0,0.5)]"><i class="fas fa-minus px-3  py-[14px]"></i></button>
                                <span class="font-pop font-medium text-[20px] leading-7 px-4 md:px-8">2</span>
                                <button class="focus:text-white focus:bg-[#DB4444] focus:border-transparent border-l-1 border-[rgba(0,0,0,0.5)]"><i class="fas fa-plus px-3  py-[14px]"></i></button>
                            </div>
                            <button class="font-pop font-medium text-[16px] leading-6 text-white bg-[#DB4444] py-[10px] px-[48px] rounded hover:outline hover:outline-[#DB4444] hover:text-[#DB4444] hover:bg-white duration-300">Add Cart</button>
                            <button class="focus:text-white focus:bg-[#DB4444] focus:border-transparent border-1 rounded border-[rgba(0,0,0,0.5)] p-[9px]"><i class="far fa-heart fa-xl"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="product-details flex flex-col pb-[30px] pt-[18px] md:pb-[62px] mdpt-[39px]">
                <h1 class="font-pop font-semibold text-[36px] leading-10 pb-2 md:pb-4">Havic HV G-92 Gamepad</h1>
                <p class="font-pop font-normal text-[16px] leading-6 pb-2 md:pb-7">The St. Louis Meramec Canoe Company was founded by Alfred Wickett in 1922. Wickett had previously worked for the Old Town Canoe Co from 1900 to 1914. Manufacturing of the classic wooden canoes in Valley Park, Missouri ceased in 1978.</p>
                <h4 class="font-pop font-semibold text-[24px] leading-8 pb-2 md:pb-7">Features</h4>
                <p class="font-pop font-normal text-[16px] leading-6 pb-2 md:pb-9">The St. Louis Meramec Canoe Company was founded by Alfred Wickett in 1922. Wickett had previously worked for the Old Town Canoe Co from 1900 to 1914. Manufacturing of the classic wooden canoes in Valley Park, Missouri ceased in 1978.</p>
                <h4 class="font-pop font-semibold text-[24px] leading-8 pb-2">Keywords</h4>
                <div class="tags flex flex-row flex-wrap gap-x-2 gap-y-2">
                    <div class="flex gap-x-1 items-center border border-[rgba(0,0,0,0.5)] rounded-full py-2 px-3 hover:text-white hover:bg-[#DB4444] hover:border-transparent duration-300 hover:cursor-pointer">
                        <i class="fas fa-tag fa-sm"></i>
                        <h4 class="font-pop font-normal text-[12px] leading-4">men's fashion</h4>
                    </div>
                    <div class="flex gap-x-1 items-center border border-[rgba(0,0,0,0.5)] rounded-full py-2 px-3 hover:text-white hover:bg-[#DB4444] hover:border-transparent duration-300 hover:cursor-pointer">
                        <i class="fas fa-tag fa-sm"></i>
                        <h4 class="font-pop font-normal text-[12px] leading-4">men's fashion</h4>
                    </div>
                    <div class="flex gap-x-1 items-center border border-[rgba(0,0,0,0.5)] rounded-full py-2 px-3 hover:text-white hover:bg-[#DB4444] hover:border-transparent duration-300 hover:cursor-pointer">
                        <i class="fas fa-tag fa-sm"></i>
                        <h4 class="font-pop font-normal text-[12px] leading-4">men's fashion</h4>
                    </div>
                    <div class="flex gap-x-1 items-center border border-[rgba(0,0,0,0.5)] rounded-full py-2 px-3 hover:text-white hover:bg-[#DB4444] hover:border-transparent duration-300 hover:cursor-pointer">
                        <i class="fas fa-tag fa-sm"></i>
                        <h4 class="font-pop font-normal text-[12px] leading-4">men's fashion</h4>
                    </div>
                    
                </div>
            </div>
            <div class="products flex flex-row flex-wrap gap-x-1 gap-y-4 md:gap-x-[30px] pt-5 md:pt-10 px-2 md:px-0">
                <div class="product w-[48%] md:w-[23%] space-y-4 hover:shadow-2xl p-2">
                    <div class="img-card p-10 bg-[#F5F5F5]">
                        <img :src="Product" alt="">
                    </div>
                    <div class="product-cont space-y-1">
                        <h1 class="font-pop font-medium text-[16px] leading-6">HAVIT HV-G92 Gamepad</h1>
                        <div><span class="font-pop font-medium text-[16px] leading-6 text-[#DB4444] pr-3">$120</span><del class="font-pop font-medium text-[16px] leading-6 text-[#000]">$160</del></div>
                        <div class="flex flex-row flex-wrap gap-x-2">
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
                        <div class="flex flex-row flex-wrap gap-x-2">
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
                        <div class="flex flex-row flex-wrap gap-x-2">
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
                        <div class="flex flex-row flex-wrap gap-x-2">
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
        </div>
    </section>
</template>
<script setup>
    import product_img1 from '@/assets/images/product_img1.png'
    import product_img2 from '@/assets/images/product_img2.png'
    import product_img3 from '@/assets/images/product_img3.png'
    import product_img4 from '@/assets/images/product_img4.png'
    import Product from '@/assets/images/product1.png'
</script>