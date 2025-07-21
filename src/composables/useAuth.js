import axios from "axios";
import store from "@/store";
import { computed } from "vue";
import { useRouter } from "vue-router";


export default function useAuth(){
    const user = computed(()=>store.state.user)
    const isAuthenticated = computed(()=>store.state.isAuthenticated)
    const router = useRouter()
    const logout = async() => {
        try {
            const response  = await axios.post('http://127.0.0.1:8000/api/customer/logout')
        } 
        catch (error) {
            console.log(error.response);
        }
        finally{
            store.dispatch('logout')
            router.push('/login')
        }
    }

    return {
        user,
        isAuthenticated,
        logout,
    }
}