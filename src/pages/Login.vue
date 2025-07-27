<template>
    <section id="login">
        <div class="pt-7 pb-[70px] pr-6 md:pt-15 md:pb-[140px] md:pr-[135px]">
            <div class="flex flex-row items-center gap-x-3 md:gap-x-[129px]">
                <div class="w-1/2 md:w-3/5">
                    <img :src="Side" alt="">
                </div>
                <div class="w-1/2 md:w-2/5 flex flex-col gap-y-2 md:gap-y-10">
                    <div class="flex flex-col gap-y-0 md:gap-y-6">
                        <h1 class="font-inter font-medium text-[18px] md:text-[36px] leading-7">Log in to Exclusive</h1>
                        <h4 class="font-pop font-normal text-[14px] md:text-[16px] leading-6">Enter your details below</h4>
                    </div>
                    <form @submit.prevent="login" action="">
                        <div class="flex flex-col gap-y-5 md:gap-y-10">
                            <div class="login-form flex flex-col gap-y-3 md:gap-y-10">
                                <div class="relative after:absolute after:content-[''] after:-bottom-[1px] after:left-0 after:w-[0px] focus-within:after:w-full after:h-[2px] after:bg-red-500 after:transition-all after:duration-500">
                                    <input v-model="email" type="email" placeholder="Email" class="pb-2 border-b-1 border-[rgba(0,0,0,0.5)] w-full text-[14px] md:text-[16px]">
                                    <strong class="text-red-500" v-if="errors.email && errors.email.length">{{ errors.email[0] }}</strong>
                                </div>
                                <div class="relative after:absolute after:content-[''] after:-bottom-[1px] after:left-0 after:w-[0px] focus-within:after:w-full after:h-[2px] after:bg-red-500 after:transition-all after:duration-500">
                                    <input v-model="password" type="password" placeholder="Password" class="pb-2 border-b-1 border-[rgba(0,0,0,0.5)] w-full text-[14px] md:text-[16px]">
                                    <strong class="text-red-500" v-if="errors.password && errors.password.length">{{ errors.password[0] }}</strong>
                                    <strong class="text-red-500" v-if="error">{{ error }}</strong>
                                </div>
                            </div>
                            <div class="flex flex-col md:flex-row items-center justify-between gap-y-3">
                                <button type="submit" class="py-2 px-6 md:py-4 md:px-12 w-full  md:w-auto bg-[#DB4444] text-white border border-transparent hover:bg-white hover:text-[#DB4444] hover:border-[#DB4444]  duration-300 font-pop font-medium text-[16px] leading-6 rounded">Log In</button>
                                <h4 class="font-pop font-medium text-[16px] leading-6 text-[#DB4444] hover:underline hover:cursor-pointer">Forget Password?</h4>
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
    import { ref, watch } from 'vue';
    import axios from 'axios';
    import { useRouter } from 'vue-router';
    import store from '@/store';
    const router = useRouter()
    const email = ref('')
    const password = ref('')
    const errors = ref({})
    const error = ref('')

    const login = () =>{
        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post('http://127.0.0.1:8000/api/customer/login', {
            email: email.value,
            password: password.value,
            }).then(response=>{
                const token = response.data.token
                store.dispatch("setCustomerToken", token)
                .then(()=>{
                    store.dispatch("fetchUser")
                })
                router.push('/profile')
                
            }).catch(err=>{
                if(err.response?.data?.errors){
                    errors.value = err.response.data.errors
                    
                }
                if(err.response?.data?.error){
                    error.value = err.response.data.error
                    
                }
            })
        });
    }

    watch(email, ()=>{
        if(errors.value.email) {
            delete errors.value.email
        }
        if(error.value) {
            error.value = ''
        }
    })
    watch(password, ()=>{
        if(errors.value.password) delete errors.value.password
    })




</script>