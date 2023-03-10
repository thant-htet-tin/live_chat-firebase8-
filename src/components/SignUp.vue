<template>
  <h2>Sign Up</h2>
  <form action="" @submit.prevent="signUp">
    <input type="text" placeholder="Display Your Name" v-model="displayName">
    <input type="email" placeholder="email" v-model="email">
    <input type="password" name="" id="" placeholder="password" v-model="password">
    <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import { auth} from '@/firebase/config';
export default {
    setup(){
        let displayName = ref('');
        let email = ref('');
        let password = ref('');
        
        let error = ref("")
        let signUp=async()=>{
          try{
            let res=await auth.createUserWithEmailAndPassword(email.value,password.value);
            console.log(res.user);
            if(!res){
              throw new Error(`could not create new user`);
            }
          }catch(err){
            error.value = err.message;
            console.log(error.value);
          }       
        };

        return {displayName,email,password,signUp}
    }
}
</script>

<style>

</style>