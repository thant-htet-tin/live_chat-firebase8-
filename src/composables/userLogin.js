import { auth } from "@/firebase/config";
import { ref } from "vue";

let error = ref(null);

let signIn =async(email,password)=>{
    try{
        let res = await auth.signInWithEmailAndPassword(email,password)
        if(!res){
          throw new Error("Can't Login Account")
        }
        return res;
    }catch(err){
      error.value = err.message;
    }        
}

let userLogin = () =>{
    return {error,signIn}
}

export default userLogin;