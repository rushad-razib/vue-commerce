<template>

    <header class="bg-black">
        <div class="container flex py-3 items-center px-5 md:px-0">
            <div class="w-[80%] md:w-[90%] flex gap-x-2 justify-center">
                <h4 class="font-normal text-[14px] leading-[21px] text-[#FAFAFA] font-pop">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</h4>
                <button class="font-pop font-semibold text-[14px] leadning-[24px] underline text-white">ShopNow</button>
            </div>
            <div class="w-[20%] md:w-[10%] text-right">
                <select name="" id="" class="text-white font-pop text-[14px] leading-[21px]">
                    <option value="" class="text-black font-pop text-[14px] leading-[21px]">English</option>
                    <option value="" class="text-black font-pop text-[14px] leading-[21px]">Bangla</option>
                </select>
            </div>
        </div>
    </header>
    <div class="section  pb-2 md:pb-4 border-b-[0.5px] border-[rgba(0,0,0,0.3)]">
        <div class="container menu_section pt-3 md:pt-10 flex gap-x-2 md:gap-x-0 items-center px-5 md:px-0">
            <div class="logo w-[40%] md:w-[20%]">
                <img :src=Logo alt="" class="">
            </div>
            <div class="w-[40%] hidden md:block">
                <nav class="flex gap-x-12">
                    <router-link to = "/" class="font-pop font-normal text-[16px] leading-6 text-black">Home</router-link>
                    <router-link to = "/shop" class="font-pop font-normal text-[16px] leading-6 text-black">Shop</router-link>
                    <router-link to = "/" class="font-pop font-normal text-[16px] leading-6 text-black">Contact</router-link>
                    <router-link to = "/register" class="font-pop font-normal text-[16px] leading-6 text-black">Sign up</router-link>
                    
                    <div class="relative" @mouseenter="openDropdown" @mouseleave="closeDropdown">
                        <button class="font-pop font-normal text-[16px] leading-6 text-black focus:outline-none flex items-center gap-x-1">Extras<span :class="{'rotate-180': showDropdown}" class="transition-transform duration-200">▼</span></button>

                        <!-- Dropdown Menu -->
                        <div v-if="showDropdown" class="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md border border-gray-200" @mouseenter="cancelCloseDropdown" @mouseleave="closeDropdown">
                            <router-link to="/product" class="block px-4 py-2 text-black">Product</router-link>
                            <router-link to="/cart" class="block px-4 py-2 text-black">Cart</router-link>
                            <router-link to="/checkout" class="block px-4 py-2 text-black">Checkout</router-link>
                            <router-link to="/wishlist" class="block px-4 py-2 text-black">Wishlist</router-link>
                            <router-link to="/profile" class="block px-4 py-2 text-black">Profile</router-link>
                            <router-link to="/login" class="block px-4 py-2 text-black">Log in</router-link>
                            <router-link to="/error" class="block px-4 py-2 text-black">Error</router-link>
                        </div>
                    </div>
                </nav>
            </div>
            <div class="w-[40%] md:w-[25%]">
                <div class="relative">
                    <input type="text" :placeholder="placeholderText" class="bg-[#F5F5F5] w-full p-2 md:p-2 rounded-[4px] md:py-[7px] md:px-5 text-normal text-[15px]">
                    <i class="fas fa-search text-black absolute top-[50%] right-0 -translate-[50%]"></i>
                </div>
            </div>
            <div class="w-[20%] md:w-[15%]">
                <div class="hidden md:flex gap-x-0 md:gap-x-2 md:pl-6">
                    <router-link to="/cart"><i class="fas fa-shopping-cart text-black text-[24px] hover:bg-[#DB4444] hover:text-white p-1 md:p-[9px] rounded-full"></i></router-link>
                    <router-link to="/profile"><i class="far fa-user text-black text-[24px] hover:bg-[#DB4444] hover:text-white p-1 md:p-[9px] rounded-full"></i></router-link>
                    <a v-if="user" @click="logout" class="cursor-pointer" ><i class="fa-solid fa-right-from-bracket text-black text-[24px] hover:bg-[#DB4444] hover:text-white p-1 md:p-[9px] rounded-full"></i></a>
                </div>
                <div class="block md:hidden text-end">
                    <i class="fas fa-bars fa-xl"></i>
                </div>
            </div>
        </div>
    </div>

</template>
<script setup>
    import Logo from '@/assets/images/logo.png'
    import Profile from '@/pages/Profile.vue';
    import { computed, ref } from 'vue';
    import useAuth from '@/composables/useAuth';
    const {user, isAuthenticated, logout} = useAuth();

    
    const showDropdown = ref(false);
    let timeout = null;

    const openDropdown = () => {
        clearTimeout(timeout);
        showDropdown.value = true;
    };

    const closeDropdown = () => {
        timeout = setTimeout(() => {
            showDropdown.value = false;
        }, 200);
    };

    const cancelCloseDropdown = () => {
        clearTimeout(timeout);
    };

    const placeholderText = computed(()=>{
        if(window.innerWidth > 768){
            return 'What are you looking for?'
        }
        else{
            return 'Search'
        }
    });

</script>