<template>
<section id="user-orders">
        <div class="container px-5 md:px-0 pt-10 md:pt-20">
            <h3 class="font-pop font-normal text-[14px] leading-[21px] text-start md:text-end">Welcome! <span class="text-[#DB4444]" v-if="user">{{ user.name }}</span></h3>
        </div>
        <div class="container flex flex-col md:flex-row px-5 md:px-0 pt-[30px] pb-[70px] md:pt-[100px] md:pb-[140px]">
            <div class="w-full md:w-1/5">
                <nav class="profile-nav flex flex-row md:flex-col gap-y-3 gap-x-0 md:gap-x-0">
                    <router-link to="/profile" class="font-pop font-medium text-[16px] leading-6 px-2 border-r-1 last:border-r-0 md:px-0 md:border-none">My Account</router-link>
                    <router-link to="" class="font-pop font-medium text-[16px] leading-6 px-2 border-r-1 last:border-r-0 md:px-0 md:border-none">My Orders</router-link>
                    <router-link to="" class="font-pop font-medium text-[16px] leading-6 px-2 border-r-1 last:border-r-0 md:px-0 md:border-none">My Wishlist</router-link>
                    <!-- <a class="hover:cursor-pointer font-pop font-medium text-[16px] leading-6 px-2 border-r-1 last:border-r-0 md:px-0 md:border-none" v-if="user" @click="logout">Logout</a> -->
                    <a class="hover:cursor-pointer font-pop font-medium text-[16px] leading-6 px-2 border-r-1 last:border-r-0 md:px-0 md:border-none" v-if="user" @click="logout">Logout</a>
                </nav>
            </div>
            <div class="w-full md:w-4/5">
                <div class="flex flex-col pb-5 px-0 md:pb-10 gap-y-4">
                    <table class="w-full">
                        <thead class="">
                            <tr class="shadow-md outline-1 outline-gray-200">
                                <th class="pl-5 md:pl-10 py-6 font-pop font-normal text-[16px] leading-6 tracking text-start">Order ID</th>
                                <th class="pl-5 md:pl-10 py-6 font-pop font-normal text-[16px] leading-6 tracking text-start">Total</th>
                                <th class="pl-5 md:pl-10 py-6 font-pop font-normal text-[16px] leading-6 tracking text-start">Payment Method</th>
                                <th class="pl-5 md:pl-10 py-6 font-pop font-normal text-[16px] leading-6 tracking text-start">Status</th>
                                <th class="pl-5 md:pl-10 py-6 font-pop font-normal text-[16px] leading-6 tracking text-start">Date</th>
                                <th class="pl-5 md:pl-10 py-6 font-pop font-normal text-[16px] leading-6 tracking text-start pr-5 md:pr-0">Action</th>
                            </tr>
                        </thead>
                        <tbody class="">
                            <tr v-for="(item, index) in ordered_products" :key="index" class="shadow-md outline-1 outline-gray-200">
                                <td class="pl-10 w-1/10 font-pop font-normal text-[16px] leading-6 py-6">{{ item.order_id }}</td>
                                <td class="pl-10 w-1/10 font-pop font-normal text-[16px] leading-6 py-6">&#2547; {{ item.total }}</td>
                                <td class="pl-10 w-1/10 font-pop font-normal text-[16px] leading-6 py-6">{{ item.payment_method }}</td>
                                <td class="pl-10 w-1/10 font-pop font-normal text-[16px] leading-6 py-6">{{ statusLabel[item.status] }}</td>
                                <!-- <td class="pl-10 w-1/10 font-pop font-normal text-[16px] leading-6 py-6">{{ formatDate(item.created_at) }}</td> -->
                                <td class="pl-10 w-1/10 font-pop font-normal text-[16px] leading-6 py-6">{{ dateFormat(item.created_at) }}</td>
                                <td class="pl-10 w-2/10 font-pop font-normal text-[16px] leading-6 py-6">
                                    <a @click="download_invoice(item.order_id)" class="px-4 py-2 text-white rounded bg-red-500 cursor-pointer">Download Invoice</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
    import useAuth from '@/composables/useAuth';
import axios from 'axios';
    import { computed, watch } from 'vue';
    import { useStore } from 'vuex';
    import moment from 'moment';

    const dateFormat = ((value)=>{
        if(value){
            return moment(String(value)).fromNow();
        }
        return ''
    })

    const {user, isAuthenticated, logout} = useAuth()
    const store = useStore()
    watch(user, (newUser)=>{
        store.dispatch('fetchMyOrders', newUser.id)
    })
    const ordered_products = computed(()=>store.getters.myorders)

    function formatDate(dateStr) {
        const date = new Date(dateStr)
        return date.toLocaleDateString('en-GB') // returns 'dd/mm/yyyy'
    }

    const statusLabel = {
        0:'Pending',
        1:'Processing',
        2:'Dispatched',
        3:'Received',
        4:'Returned',
    }

    const download_invoice = (order_id) => {
        axios({
            url: `http://127.0.0.1:8000/api/order/invoice/download/${order_id}`,
            method: 'GET',
            responseType: 'blob', // important!
            withCredentials: true // only if using Laravel Sanctum with cookie-based auth
        })
        .then((response) => {
            const blob = new Blob([response.data], { type: 'application/pdf' })
            const url = window.URL.createObjectURL(blob)
            const link = document.createElement('a')
            link.href = url
            link.setAttribute('download', `invoice_${order_id}.pdf`)
            document.body.appendChild(link)
            link.click()
            link.remove()
            window.URL.revokeObjectURL(url)
        })
        .catch((error) => {
            console.error('Failed to download invoice:', error)
        })
    }



</script>
<style>
</style>