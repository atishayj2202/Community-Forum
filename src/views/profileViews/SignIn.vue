<script>
export default {
  name: 'SignIn'
}
</script>

<template>
  <div>
    <h1>Please Log In First</h1><br><br><br><br>
    <button @click="loginWithGoogle" class="login-button">Sign In/Up with Google</button>
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
