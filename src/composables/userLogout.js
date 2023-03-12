import { auth } from "../firebase/config";
import { ref } from "vue";

let error = ref(null);

let signout=async()=>{
    try{
        await auth.signOut();
        // console.log(`user logout`);
    }catch(err){
        error.value =err.message;
        console.log(err.message);
    }
}

let userLogout = () => {
    return {error,signout}
}

export default userLogout;