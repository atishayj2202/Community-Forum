<script>
import {getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import {saveUser} from "@/handler/authUtils";
import axios from "axios";

export default {
  name: 'SignIn',
  methods: {
    loginWithGoogle() {
      const provider = new GoogleAuthProvider();
      const auth = getAuth();
      signInWithPopup(auth, provider)
          .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            // The signed-in user info.
            const user = result.user;
            const data = {
              name: user.displayName.toString(),
              uid: user.uid.toString()
            }
            axios.post("https://server.yellowbush-cadc3844.centralindia.azurecontainerapps.io/user/create_user/",null, {params: data}).then((response) => {
              const parsedData = JSON.parse(response.data);
              saveUser(parsedData.Data.toString())
              window.location.reload()
            }).catch((error) => {
              console.log(error)
            })
            // IdP data available using getAdditionalUserInfo(result)
            // ...
          }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + errorMessage)
        // ...
      });
    }
  }
}
</script>

<template>
  <div>
    <h1>Please Log In First</h1>
    <br/><br/><br/><br/>
    <button class="login-button" @click="loginWithGoogle">Sign In/Up with Google</button>
  </div>
</template>

<style scoped>
.login-button {
  padding: 10px 20px;
  background-color: #4285f4; /* Google blue */
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.login-button:hover {
  background-color: #357ae8; /* Darker Google blue on hover */
}
</style>
