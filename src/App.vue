
<template>
  <Nav></Nav>
  <router-view></router-view>
  <Footer></Footer>
</template>

<script setup>
    import Nav from '@/components/Nav.vue'
    import Footer from '@/components/Footer.vue'
    import Home from './pages/Home.vue';
    import { onMounted } from 'vue';
    import axios from 'axios';
    import { useStore } from 'vuex';

    const store = useStore()

    onMounted(()=>{
      const token = store.state.token;
      if(token){
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        store.dispatch("fetchUser")
      }
    })
    
    onMounted(()=>{
      store.dispatch('fetchCategories')
    })
    onMounted(()=>{
      store.dispatch('fetchNewArrivals')
    })
    onMounted(()=>{
      store.dispatch('fetchAllProducts')
    })
</script>