import { createWebHistory, createRouter } from 'vue-router'

import Home from '@/pages/Home.vue'
import Wishlist from '@/pages/Wishlist.vue'
import Cart from '@/pages/Cart.vue'
import Checkout from '@/pages/Checkout.vue'
import Profile from '@/pages/Profile.vue'
import Error from '@/pages/Error.vue'
import ProductLanding from '@/pages/ProductLanding.vue'
import Login from '@/pages/Login.vue'
import Register from '@/pages/Register.vue'
import Shop from '@/pages/Shop.vue'
import store from '@/store'

const routes = [
  { path: '/', component: Home },
  { path: '/wishlist', component: Wishlist },
  { path: '/cart', component: Cart },
  { path: '/checkout', component: Checkout },
  { path: '/profile', component: Profile, meta: { requiresAuth: true } },
  { path: '/error', component: Error },
  { path: '/product/:id', component: ProductLanding },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/shop', component: Shop },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.getters.authStatus) {
    next("/login");
  } else {
    next();
  }
});

export default router;