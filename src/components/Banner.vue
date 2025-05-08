<template>
    <div class="container">
        <div class="flex">
            <div class="w-1/4 pt-10 border-r-[0.5px] border-[rgba(0,0,0,0.3)] hidden md:block">
                <ul class="flex flex-col gap-y-[14px]">
                    <li class="font-pop font-normal text-[16px] leading-6"><a href="">Woman’s Fashion</a></li>
                    <li class="font-pop font-normal text-[16px] leading-6"><a href="">Men’s Fashion</a></li>
                    <li class="font-pop font-normal text-[16px] leading-6"><a href="">Electronics</a></li>
                    <li class="font-pop font-normal text-[16px] leading-6"><a href="">Home & Lifestyle</a></li>
                    <li class="font-pop font-normal text-[16px] leading-6"><a href="">Medicine</a></li>
                    <li class="font-pop font-normal text-[16px] leading-6"><a href="">Sports & Outdoor</a></li>
                    <li class="font-pop font-normal text-[16px] leading-6"><a href="">Baby’s & Toys</a></li>
                    <li class="font-pop font-normal text-[16px] leading-6"><a href="">Groceries & Pets</a></li>
                    <li class="font-pop font-normal text-[16px] leading-6"><a href="">Health & Beauty</a></li>
                </ul>
            </div>
            <div class="w-full md:w-3/4 pt-2 md:pt-10 px-2 md:pl-[45px]">
                <img :src='Banner' alt="">
            </div>
        </div>
    </div>
</template>
<script setup>
    import Banner from '@/assets/images/banner.png'
</script>