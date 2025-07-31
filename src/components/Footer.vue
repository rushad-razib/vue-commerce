<template>
    <footer class="bg-black">
        <div class="container py-10 md:py-20 flex flex-row flex-wrap justify-items-start items-start gap-y-5 px-5 md:px-0">
            <div class="w-full md:w-1/5 space-y-1 md:space-y-6 justify-items-center md:justify-items-start">
                <img :src=Footer_logo alt="">
                <h4 class="pt-2 md:pt-0 font-pop font-normal text-[20px] leading-7 text-[#FAFAFA]">Subscribe</h4>
                <h5 class="font-pop font-normal text-[16px] leading-6 text-[#FAFAFA]">Get 10% off your first order</h5>
            </div>
            <div class="w-1/2 md:w-1/5 space-y-2 md:space-y-6">
                <h3 class="font-pop font-medium text-[20px] leading-7 text-[#FAFAFA]">Support</h3>
                <div class="flex flex-col gap-y-2 md:gap-y-4">
                    <a href="" class="font-pop font-normal text-[16px] leading-6 text-[#FAFAFA]">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</a>
                    <a href="" class="font-pop font-normal text-[16px] leading-6 text-[#FAFAFA] hover:text-[#FE8D01]">exclusive@gmail.com</a>
                    <a href="" class="font-pop font-normal text-[16px] leading-6 text-[#FAFAFA] hover:text-[#FE8D01]">+88015-88888-9999</a>
                </div>
            </div>
            <div class="w-1/2 md:w-1/5 space-y-2 md:space-y-6 pl-4 md:pl-0">
                <h3 class="font-pop font-medium text-[20px] leading-7 text-[#FAFAFA]">Account</h3>
                <div class="flex flex-col gap-y-2 md:gap-y-4">
                    <a href="" class="font-pop font-normal text-[16px] leading-6 text-[#FAFAFA] hover:text-[#FE8D01]">My Account</a>
                    <a href="" class="font-pop font-normal text-[16px] leading-6 text-[#FAFAFA] hover:text-[#FE8D01]">Login / Register</a>
                    <a href="" class="font-pop font-normal text-[16px] leading-6 text-[#FAFAFA] hover:text-[#FE8D01]">Cart</a>
                    <a href="" class="font-pop font-normal text-[16px] leading-6 text-[#FAFAFA] hover:text-[#FE8D01]">Wishlist</a>
                </div>
            </div>
            <div class="w-1/2 md:w-1/5 space-y-2 md:space-y-6">
                <h3 class="font-pop font-medium text-[20px] leading-7 text-[#FAFAFA]">Quick Link</h3>
                <div class="flex flex-col gap-y-2 md:gap-y-4">
                    <a href="" class="font-pop font-normal text-[16px] leading-6 text-[#FAFAFA] hover:text-[#FE8D01]">Privacy Policy</a>
                    <a href="" class="font-pop font-normal text-[16px] leading-6 text-[#FAFAFA] hover:text-[#FE8D01]">Terms Of Use</a>
                    <a href="" class="font-pop font-normal text-[16px] leading-6 text-[#FAFAFA] hover:text-[#FE8D01]">FAQ</a>
                    <a href="" class="font-pop font-normal text-[16px] leading-6 text-[#FAFAFA] hover:text-[#FE8D01]">Contact</a>
                </div>
            </div>
            <div class="w-1/2 md:w-1/5 space-y-4 md:space-y-6 pl-4 md:pl-0">
                <h3 class="font-pop font-medium text-[20px] leading-7 text-[#FAFAFA]">Download App</h3>
                <div class="flex gap-x-[11px] items-center">
                    <img :src=qr_code alt="">
                    <div class="flex flex-col gap-y-[10px]">
                        <img :src=play_store alt="" class="cursor-pointer">
                        <img :src=app_store alt="" class="cursor-pointer">
                    </div>
                </div>
                <div class="flex gap-x-4 md:gap-x-6">
                    <i class="fab fa-facebook-f text-[#FAFAFA] hover:text-[#FE8D01] cursor-pointer font-thin"></i>
                    <i class="fab fa-twitter text-[#FAFAFA] hover:text-[#FE8D01] cursor-pointer"></i>
                    <i class="fab fa-instagram text-[#FAFAFA] hover:text-[#FE8D01] cursor-pointer"></i>
                    <i class="fab fa-linkedin-in text-[#FAFAFA] hover:text-[#FE8D01] cursor-pointer"></i>
                </div>
            </div>
        </div>
        
    </footer>
</template>
<script setup>
    import Footer_logo from '@/assets/images/footer_logo.png'
    import qr_code from '@/assets/images/qr_code.png'
    import play_store from '@/assets/images/play_store.png'
    import app_store from '@/assets/images/app_store.png'
</script>