<template>
    <section id="login">
        <div class="pt-7 pb-[70px] pr-6 md:pt-15 md:pb-[140px] md:pr-[135px]">
            <div class="flex flex-row items-center gap-x-3 md:gap-x-[129px]">
                <div class="w-1/2 md:w-3/5">
                    <img :src="Side" alt="">
                </div>
                <div class="w-1/2 md:w-2/5 flex flex-col gap-y-2 md:gap-y-10">
                    <div class="flex flex-col gap-y-0 md:gap-y-6">
                        <h1 class="font-inter font-medium text-[18px] md:text-[36px] leading-7">Create an account</h1>
                        <h4 class="font-pop font-normal text-[14px] md:text-[16px] leading-6">Enter your details below</h4>
                    </div>
                    <form @submit.prevent="register">
                    <div class="flex flex-col gap-y-5 md:gap-y-10">
                        <div class="login-form flex flex-col gap-y-3 md:gap-y-10">
                            <div class="relative after:absolute after:content-[''] after:-bottom-[1px] after:left-0 after:w-[0px] focus-within:after:w-full after:h-[2px] after:bg-red-500 after:transition-all after:duration-500">
                                <input v-model="name" type="text" placeholder="Name" class="pb-2 border-b-1 border-[rgba(0,0,0,0.5)] w-full text-[14px] md:text-[16px]">
                                <strong class="text-red-500" v-if="errors.name">{{ errors.name[0] }}</strong>
                            </div>
                            <div class="relative after:absolute after:content-[''] after:-bottom-[1px] after:left-0 after:w-[0px] focus-within:after:w-full after:h-[2px] after:bg-red-500 after:transition-all after:duration-500">
                                <input v-model="email" type="email" placeholder="Email" class="pb-2 border-b-1 border-[rgba(0,0,0,0.5)] w-full text-[14px] md:text-[16px]">
                                <strong class="text-red-500" v-if="errors.email">{{ errors.email[0] }}</strong>
                            </div>
                            <div class="relative after:absolute after:content-[''] after:-bottom-[1px] after:left-0 after:w-[0px] focus-within:after:w-full after:h-[2px] after:bg-red-500 after:transition-all after:duration-500">
                                <input v-model="password" type="password" placeholder="Password" autocomplete="new-password" class="pb-2 border-b-1 border-[rgba(0,0,0,0.5)] w-full text-[14px] md:text-[16px]">
                                <strong class="text-red-500" v-if="errors.password">{{ errors.password[0] }}</strong>
                            </div>
                        </div>
                        <div class="flex flex-col items-center justify-between gap-y-3">
                            <button type="submit" class="py-2 px-6 md:py-4 md:px-12 w-full bg-[#DB4444] text-white border border-transparent hover:bg-white hover:text-[#DB4444] hover:border-[#DB4444]  duration-300 font-pop font-medium text-[16px] leading-6 rounded">Create Account</button>
                            <button type="submit" class="py-2  px-3 md:py-4 md:px-12 w-full bg-white text-black border hover:bg-gray-200 hover:border-transparent  duration-300 rounded">
                                <div class="flex flex-row items-center gap-x-0 md:gap-x-2 justify-center">
                                    <img :src="Google" alt="">
                                    <h4 class="font-pop font-medium text-[16px] leading-6">Sign up with Google</h4>
                                </div>
                            </button>
                        </div>
                        <div class="flex flex-col md:flex-row gap-x-2 mx-auto">
                            <h4 class="font-pop font-regular text-[16px] leading-6 text-[rgba(0,0,0,0.7)]">Already have an account?</h4>
                            <router-link to="/login"><h4 class="font-pop font-regular text-[16px] leading-6 text-[rgba(0,0,0,0.7)] hover:underline hover:cursor-pointer">Log in</h4></router-link>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
    import Side from '@/assets/images/side.png'
    import Google from '@/assets/images/google.png'
    import { ref, watch } from 'vue';
    import axios from 'axios';
    import Swal from 'sweetalert2'

    const name = ref('')
    const email = ref('')
    const password = ref('')
    const successmsg = ref('')
    const errors = ref({})

    const register = () => {
        axios.post('http://127.0.0.1:8000/api/customer/register', {
           name : name.value,
           email : email.value,
           password : password.value,
        }).then(function(response){
            successmsg.value = response.data.success
            name.value = ''
            email.value = ''
            password.value = ''
            showAlert()
        }).catch(function(error){
            if(error.response?.data?.errors){
                errors.value = error.response.data.errors
            }
        })
    }

    watch(name, ()=>{
        if(errors.value.name) delete errors.value.name;
    })
    watch(email, ()=>{
        if(errors.value.email) delete errors.value.email;
    })
    watch(password, ()=>{
        if(errors.value.password) delete errors.value.password;
    })

    const showAlert = () =>{
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: successmsg.value,
            showConfirmButton: false,
            timer: 1500
        });
    }

</script>