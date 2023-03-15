<template>
  <h2>Sign Up</h2>
  <form action="" @submit.prevent="signUp">
    <input type="text" placeholder="Display Your Name" v-model="displayName">
    <input type="email" placeholder="email" v-model="email">
    <input type="password" name="" id="" placeholder="password" v-model="password">
    <div v-if="error" class="error">{{error}}</div>
    <button>Sign Up</button>
  </form>
</template>

<script>
import useSignup from "../composables/useSignup"
import { ref } from 'vue'

export default {
    setup(props,context){
        let displayName = ref('');
        let email = ref('');
        let password = ref('');
        
        let {error,createAccount}=useSignup();
                
        let signUp=async()=>{
          let res = await createAccount(email.value,password.value,displayName.value);          
          if(res){
            context.emit('enterChatroom');
            
            
          }else{
            console.log(error.value);
          }
        };

        return {displayName,email,password,signUp,error}
    }
}
</script>

<style>

</style>