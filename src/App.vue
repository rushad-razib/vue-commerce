
<template>
  <Nav></Nav>
  <router-view></router-view>
  <Footer></Footer>
</template>

<script setup>
    import Nav from '@/components/Nav.vue'
    import Footer from '@/components/Footer.vue'
    import Home from './pages/Home.vue';
</script>