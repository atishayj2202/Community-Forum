<script>
export default {
  name: 'ProfileView',
  data() {
    return {
      username: 'John' // Replace with the actual username or retrieve it from your authentication system
    }
  }
}
</script>

<template>
  <div>
    <h1>You have logged in successfully</h1>
    <p>Hi, {{ username }}</p>
    <br /><br /><br /><br />
    <button class="sign-out-button" @click="signOut">Sign Out</button>
  </div>
</template>

<style scoped>
h1 {
  font-size: 24px;
  color: white;
  margin-bottom: 20px;
}

p {
  font-size: 18px;
  color: white;
  margin-bottom: 20px;
}

.sign-out-button {
  padding: 10px 20px;
  background-color: #e74c3c; /* Red color */
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.sign-out-button:hover {
  background-color: #c0392b; /* Darker red on hover */
}
</style>
