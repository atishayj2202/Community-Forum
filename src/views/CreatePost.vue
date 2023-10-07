<script>
export default {
  name: 'CreatePost',
  data() {
    return {
      newPost: {
        title: '',
        author: '',
        body: ''
      }
    }
  }
}
</script>

<template>
  <h1>Create a New Post</h1>
  <form @submit.prevent="createPost">
    <div class="form-group">
      <input type="text" id="title" v-model="newPost.title" required placeholder="Title" />
    </div>
    <div class="form-group">
      <textarea id="body" v-model="newPost.body" required placeholder="Body"></textarea>
    </div>
    <button type="submit">Create Post</button>
  </form>
</template>

<style scoped>
.form-group {
  width: 100%;
  padding-top: 8px;
  display: flex;
  align-items: center;
  font-size: 15px;
  justify-content: space-evenly;
  font: caption;
  filter: grayscale(100%);
}
button {
  background-color: rgba(255, 255, 255, 1);
  border: 3px solid black;
  color: black;
  font-size: 15px;
  font-weight: bold;
  padding: 8px;
  width: 30vh;
}

button:hover {
  background-color: rgba(52, 73, 94, 0.8);
  border: 3px solid rgb(65, 184, 131);
  color: white;
}

input,
textarea {
  color: white;
  background-color: #34495e;
  font-size: 20px;
  border: 3px solid #41b883;
  padding: 5px;
  margin: 5px;
  width: 70%;
  font-weight: bold;
}
</style>
