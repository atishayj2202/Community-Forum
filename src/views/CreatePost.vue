<script>
import {authUser} from "@/handler/authUtils";
import axios from "axios";

export default {
  name: 'CreatePost',
  data() {
    return {
      newPost: {
        title: '',
        body: ''
      }
    }
  },
  methods: {
    createPost(){
      const temp = authUser()
      if (temp.status){
        axios.post("https://server.yellowbush-cadc3844.centralindia.azurecontainerapps.io/user/get_user/", null, {
          params : {id : temp.uid}
        }).then((response) => {
          const parsedData = JSON.parse(response.data);
          const author = parsedData.Data.name
          axios.post("https://server.yellowbush-cadc3844.centralindia.azurecontainerapps.io/post/add_post/", null, {
            params: {
              title: this.newPost.title,
              body: this.newPost.body,
              author_name: author,
              author_id: temp.uid
            }
          }).then((response) => {
            const parsedData = JSON.parse(response.data);
            if (parsedData.Status === "Success") {
              alert("Posted")
              this.$router.push('/')
            }
            else {
              alert("Unexpected Error, Unable to post")
            }
          }).catch((error) => {
            alert("Unexpected Error, Unable to post")
            console.log(error)
          })
        }).catch((error) => {
          console.log(error)
        })
      }
      else {
        alert("Pls login to post")
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
