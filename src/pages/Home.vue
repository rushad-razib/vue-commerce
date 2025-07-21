<template>
  <Banner></Banner>
  <NewArrivals title="New Arrivals" :productitems="new_arrivals" classprop1 = 'hidden'></NewArrivals>
  <Categories></Categories>
  <NewArrivals title="Best Selling" :productitems="new_arrivals" classprop2 = 'hidden'></NewArrivals>
  <ExploreProducts></ExploreProducts>
</template>
<script setup>
import Banner from "@/components/Banner.vue";
import NewArrivals from "@/components/NewArrivals.vue";
import Categories from "@/components/Categories.vue";
import ExploreProducts from "@/components/ExploreProducts.vue";
import { useStore } from "vuex";
import { computed } from "vue";


const store = useStore()
const new_arrivals = computed(()=> store.getters.newArrivals)



</script>
