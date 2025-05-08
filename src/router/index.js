import { createMemoryHistory, createRouter } from 'vue-router'

import Home from '@/pages/Home.vue'
import Wishlist from '@/pages/Wishlist.vue'
import Cart from '@/pages/Cart.vue'
import Checkout from '@/pages/Checkout.vue'
import Profile from '@/pages/Profile.vue'
import Error from '@/pages/Error.vue'
import ProductLanding from '@/pages/ProductLanding.vue'
import Login from '@/pages/Login.vue'
import Register from '@/pages/Register.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/wishlist', component: Wishlist },
  { path: '/cart', component: Cart },
  { path: '/checkout', component: Checkout },
  { path: '/user/profile', component: Profile },
  { path: '/error', component: Error },
  { path: '/product', component: ProductLanding },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
export default router;