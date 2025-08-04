<template>
    <section id="user-profile">
        <div class="container px-5 md:px-0 pt-10 md:pt-20">
            <h3 class="font-pop font-normal text-[14px] leading-[21px] text-start md:text-end">Welcome! <span class="text-[#DB4444]" v-if="user">{{ user.name }}</span></h3>
        </div>
        <div class="container flex flex-col md:flex-row px-5 md:px-0 pt-[30px] pb-[70px] md:pt-[100px] md:pb-[140px]">
            <div class="w-full md:w-1/4">
                <nav class="profile-nav flex flex-row md:flex-col gap-y-3 gap-x-0 md:gap-x-0">
                    <router-link to="" class="font-pop font-medium text-[16px] leading-6 px-2 border-r-1 last:border-r-0 md:px-0 md:border-none">My Account</router-link>
                    <router-link to="/myorder" class="font-pop font-medium text-[16px] leading-6 px-2 border-r-1 last:border-r-0 md:px-0 md:border-none">My Orders</router-link>
                    <router-link to="" class="font-pop font-medium text-[16px] leading-6 px-2 border-r-1 last:border-r-0 md:px-0 md:border-none">My Wishlist</router-link>
                    <!-- <a class="hover:cursor-pointer font-pop font-medium text-[16px] leading-6 px-2 border-r-1 last:border-r-0 md:px-0 md:border-none" v-if="user" @click="logout">Logout</a> -->
                    <a class="hover:cursor-pointer font-pop font-medium text-[16px] leading-6 px-2 border-r-1 last:border-r-0 md:px-0 md:border-none" v-if="user" @click="logout">Logout</a>
                </nav>
            </div>
            <div class="w-full md:w-3/4">
                <div class="flex flex-col gap-y-4">
                    <h3 class="font-pop font-medium text-[20px] leading-7 text-[#DB4444]">Edit Your Profile</h3>
                    <form @submit.prevent="update">
                        <div class="flex flex-col gap-y-2 md:gap-y-6">
                            <div class="flex flex-col md:flex-row gap-x-[50px] gap-y-2">
                                <div class="w-full">
                                    <label for="name" class="inline-block pb-1 md:pb-2 font-pop font-normal text-[16px] leading-6">Full Name</label>
                                    <input v-model="name" type="text" class="bg-[#F5F5F5] outline-0 ring-0 rounded px-3 py-2 w-full">
                                    <strong class="text-red-500" v-if="errors.name">{{ errors.name[0] }}</strong>
                                </div>
                            </div>
                            <div class="flex flex-col md:flex-row gap-x-[50px] gap-y-2">
                                <div class="w-full md:w-1/2">
                                    <label for="" class="inline-block pb-1 md:pb-2 font-pop font-normal text-[16px] leading-6">Email</label>
                                    <input v-model="email" type="email" class="bg-[#F5F5F5] outline-0 ring-0 rounded px-3 py-2 w-full" disabled>
                                </div>
                                <div class="w-full md:w-1/2">
                                    <label for="" class="inline-block pb-1 md:pb-2 font-pop font-normal text-[16px] leading-6">Address</label>
                                    <input v-model="address" placeholder="House, Street, City, Country" type="text" class="bg-[#F5F5F5] outline-0 ring-0 rounded px-3 py-2 w-full">
                                </div>
                            </div>
                            <div class="flex flex-col gap-y-0 md:gap-y-2">
                                <label class="font-pop font-normal text-[16px] leading-6 inline-block pb-1">Password Changes</label>
                                <div class="flex flex-col gap-y-4">

                                    <input v-model="curpass" type="password" placeholder="Current Passwod" class="bg-[#F5F5F5] outline-0 ring-0 rounded px-3 py-2 w-full">
                                    <strong class="text-red-500" v-if="errors.curpass">{{ errors.curpass[0] }}</strong>
                                    <strong class="text-red-500" v-if="wrongpass">{{ wrongpass }}</strong>
                                    <input v-model="password" type="password" placeholder="New Passwod" class="bg-[#F5F5F5] outline-0 ring-0 rounded px-3 py-2 w-full">
                                    <strong class="text-red-500" v-if="errors.password">{{ errors.password[0] }}</strong>

                                    <input v-model="password_confirmation" type="password" placeholder="Confirm New Passwod" class="bg-[#F5F5F5] outline-0 ring-0 rounded px-3 py-2 w-full">
                                    <strong class="text-red-500" v-if="errors.password_confirmation">{{ errors.password_confirmation[0] }}</strong>
                                    
                                </div>
                            </div>
                            <div class="flex flex-row justify-end pt-5">
                                <button type="submit" class="w-2/3 md:w-2/5 font-pop font-medium text-[16px] leading-6 px-12 py-4 bg-[#DB4444] text-[white] rounded hover:bg-white hover:text-[#DB4444] hover:outline-1 hover:outline-[#DB4444] duration-300">Save Changes</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
    import store from '@/store';
    import { computed, ref, watchEffect, watch } from 'vue';
    import { useRouter } from 'vue-router';
    import useAuth from '@/composables/useAuth';
    import axios from 'axios';
    import Swal from 'sweetalert2';

    const {user, isAuthenticated, logout} = useAuth()
    const router = useRouter()
    const name = ref('')
    const email = ref('')
    const address = ref('')
    const curpass = ref('')
    const password = ref('')
    const password_confirmation = ref('')
    const wrongpass = ref()
    const error = ref('')
    const errors = ref({})
    const successmsg = ref('')

    watchEffect(() => {
        if(user.value){
            name.value = user.value.name || ''
            email.value = user.value.email || ''
            address.value = user.value.address || ''
        }
    })

    const update = async() => {
        try {
            const response = await axios.post(`http://127.0.0.1:8000/api/customer/update/${user.value.id}`, {
                name: name.value,
                address: address.value,
                curpass: curpass.value,
                password: password.value,
                password_confirmation: password_confirmation.value,
            })
            successmsg.value = response.data.success
            name.value = response.data.name
            address.value = response.data.address
            password.value = ''
            curpass.value = ''
            password_confirmation.value = ''
            if(response.data.success){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: successmsg.value,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
            
        } 
        catch (err) {
            if(err.response?.data?.errors){
                errors.value = err.response.data.errors
            }
            if(err.response?.data?.error){
                error.value = err.response.data.error
            }
            if(err.response?.data?.passerror){
                wrongpass.value = err.response.data.passerror
            }
            
            
        }
    }

    watch(name, ()=>{
        if(errors.value.name) delete errors.value.name
    })
    watch(curpass, ()=>{
        if(errors.value.curpass) delete errors.value.curpass
    })
    watch(password, ()=>{
        if(errors.value.password) delete errors.value.password
    })
    watch(password_confirmation, ()=>{
        if(errors.value.password_confirmation) delete errors.value.password_confirmation
    })


    
</script>