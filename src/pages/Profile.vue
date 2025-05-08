<template>
    <section id="user-profile">
        <div class="container px-5 md:px-0 pt-10 md:pt-20">
            <h3 class="font-pop font-normal text-[14px] leading-[21px] text-start md:text-end">Welcome! <span class="text-[#DB4444]">Md Rimel</span></h3>
        </div>
        <div class="container flex flex-col md:flex-row px-5 md:px-0 pt-[30px] pb-[70px] md:pt-[100px] md:pb-[140px]">
            <div class="w-full md:w-1/4">
                <nav class="profile-nav flex flex-row md:flex-col gap-y-3 gap-x-0 md:gap-x-0">
                    <router-link to="" class="font-pop font-medium text-[16px] leading-6 px-2 border-r-1 last:border-r-0 md:px-0 md:border-none">My Account</router-link>
                    <router-link to="" class="font-pop font-medium text-[16px] leading-6 px-2 border-r-1 last:border-r-0 md:px-0 md:border-none">My Orders</router-link>
                    <router-link to="" class="font-pop font-medium text-[16px] leading-6 px-2 border-r-1 last:border-r-0 md:px-0 md:border-none">My Wishlist</router-link>
                </nav>
            </div>
            <div class="w-full md:w-3/4">
                <div class="flex flex-col py-5 px-0 md:py-10 md:px-20 gap-y-4">
                    <h3 class="font-pop font-medium text-[20px] leading-7 text-[#DB4444]">Edit Your Profile</h3>
                    <form action="">
                        <div class="flex flex-col gap-y-2 md:gap-y-6">
                            <div class="flex flex-col md:flex-row gap-x-[50px] gap-y-2">
                                <div class="w-full md:w-1/2">
                                    <label for="" class="inline-block pb-1 md:pb-2 font-pop font-normal text-[16px] leading-6">First Name</label>
                                    <input type="text" placeholder="Md" class="bg-[#F5F5F5] outline-0 ring-0 rounded px-3 py-2 w-full">
                                </div>
                                <div class="w-full md:w-1/2">
                                    <label for="" class="inline-block pb-1 md:pb-2 font-pop font-normal text-[16px] leading-6">Last Name</label>
                                    <input type="text" placeholder="Rimel" class="bg-[#F5F5F5] outline-0 ring-0 rounded px-3 py-2 w-full">
                                </div>
                            </div>
                            <div class="flex flex-col md:flex-row gap-x-[50px] gap-y-2">
                                <div class="w-full md:w-1/2">
                                    <label for="" class="inline-block pb-1 md:pb-2 font-pop font-normal text-[16px] leading-6">Email</label>
                                    <input type="text" placeholder="rimel1111@gmail.com" class="bg-[#F5F5F5] outline-0 ring-0 rounded px-3 py-2 w-full">
                                </div>
                                <div class="w-full md:w-1/2">
                                    <label for="" class="inline-block pb-1 md:pb-2 font-pop font-normal text-[16px] leading-6">Address</label>
                                    <input type="text" placeholder="Kingston, 5236, United State" class="bg-[#F5F5F5] outline-0 ring-0 rounded px-3 py-2 w-full">
                                </div>
                            </div>
                            <div class="flex flex-col gap-y-0 md:gap-y-2">
                                <label class="font-pop font-normal text-[16px] leading-6 inline-block pb-1">Password Changes</label>
                                <div class="flex flex-col gap-y-4">
                                    <input type="text" placeholder="Current Passwod" class="bg-[#F5F5F5] outline-0 ring-0 rounded px-3 py-2 w-full">
                                    <input type="text" placeholder="New Passwod" class="bg-[#F5F5F5] outline-0 ring-0 rounded px-3 py-2 w-full">
                                    <input type="text" placeholder="Confirm New Passwod" class="bg-[#F5F5F5] outline-0 ring-0 rounded px-3 py-2 w-full">
                                </div>
                            </div>
                            <div class="flex flex-row justify-end pt-5">
                                <button class="w-1/3 md:w-2/5 font-pop font-medium text-[16px] leading-6 px-4 py-4 text-black rounded hover:text-red-500">Cancel</button>
                                <button class="w-2/3 md:w-2/5 font-pop font-medium text-[16px] leading-6 px-12 py-4 bg-[#DB4444] text-[white] rounded hover:bg-white hover:text-[#DB4444] hover:outline-1 hover:outline-[#DB4444] duration-300">Save Changes</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>

</script>