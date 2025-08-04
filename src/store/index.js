import axios from "axios";
import { useRouter } from "vue-router";
import { createStore } from "vuex";
export default createStore({
    state:{
        token: localStorage.getItem('token')||'',
        isAuthenticated: !!localStorage.getItem('token'),
        user: null,
        categories: null,
        newArrivals: null,
        allProducts: [],
        product_details: [],
        tags: [],
        carts: [],
        myorders: [],
    },
    mutations:{
        updateToken(state, token){
            state.token = token,
            localStorage.setItem('token', token)
        },
        updateCustomerStatus(state, status){
            state.isAuthenticated = status
        },
        updateUser(state, user){
            state.user = user
        },
        resetAuth(state){
            localStorage.removeItem('token')
            state.token = ''
            state.isAuthenticated = false
            state.user = null
            delete axios.defaults.headers.common['Authorization']
        },
        setCategories(state, categories){
            state.categories = categories
        },
        setNewArrivals(state, newArrivals){
            state.newArrivals = newArrivals
        },
        setAllProducts(state, allProducts){
            state.allProducts = allProducts
        },
        set_productDetails(state, productDetails){
            state.product_details = productDetails
        },
        set_tags(state, tagDetails){
            state.tags = tagDetails
        },
        set_carts(state, cart_details){
            state.carts = cart_details
        },
        set_myorders(state, myorders){
            state.myorders = myorders
        }
    },
    actions:{
        setCustomerToken({commit}, token){
            commit("updateToken", token)
            commit("updateCustomerStatus", true)
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
        },
        setCustomerStatus({commit}, status){
            commit("updateCustomerStatus", status)
        },
        fetchUser({commit}){
            return axios.get('http://127.0.0.1:8000/api/customer/info')
            .then(response=>{
                commit("updateUser", response.data)
                commit("updateCustomerStatus", true)
            })
            .catch(error=>{
                console.log("error", 'User fetch error');
            })
        },
        logout({commit}){
            commit("resetAuth")
        },
        fetchCategories({commit}){
            return axios.get('http://127.0.0.1:8000/api/get/categories')
            .then(response=>{
                commit('setCategories', response.data.categories)
            })
            .catch(error=>{
                console.log('error fetching new categories');
            })
        },
        fetchNewArrivals({commit}){
            return axios.get('http://127.0.0.1:8000/api/new/arrivals')
            .then(response=>{
                commit('setNewArrivals', response.data.new_arrivals)
            })
            .catch(error=>{
                console.log('error fetching new arrivals');
            })
        },
        fetchAllProducts({commit}){
            return axios.get('http://127.0.0.1:8000/api/all/products')
            .then(response=>{
                commit('setAllProducts', response.data.products)
            })
            .catch(error=>{
                console.log('error fetching all products');
            })
        },
        fetchProductDetails({commit}, id){
            return axios.get(`http://127.0.0.1:8000/api/product/details/${id}`)
            .then(response=>{
                commit('set_productDetails', response.data.product_details)
                commit('set_tags', response.data.tag_info)
            })
            .catch(error=>{
                console.log('error fetching product details');
            })
        },
        fetchCartDetails({commit}, id){
            return axios.get(`http://127.0.0.1:8000/api/cart/${id}`)
            .then(response=>{
                commit('set_carts', response.data.carts)
            })
            .catch(error=>{
                console.log('error fetching cart');
            })
        },
        fetchMyOrders({commit}, id){
            return axios.get(`http://127.0.0.1:8000/api/myorders/${id}`)
            .then(response=>{
                commit('set_myorders', response.data.orders)
            })
            .catch(error=>{
                console.log('error fetching customer orders');
                
            })
        }
    },
    getters:{
        authStatus: (state)=> state.isAuthenticated ,
        user: (state)=> state.user ,
        categories: state => state.categories,
        newArrivals: state => state.newArrivals,
        allProducts: state => state.allProducts,
        product_details: state => state.product_details,
        tags: state => state.tags,
        carts: state => state.carts,
        myorders: state => state.myorders,
    }
})
