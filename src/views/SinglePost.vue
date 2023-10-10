<script>
import axios from "axios";

export default {
  name: 'PostTile',
  data: function () {
    return {
      post: {},
      comments: [],
      newComment: {
        text: ''
      }
    }
  },
  mounted() {
    // Make a POST request using Axios
    axios
        .post('https://server.yellowbush-cadc3844.centralindia.azurecontainerapps.io/post/get_single_post/?pid=' + this.$route.params.id)
        .then(response => {
          try {
            const parsedData = JSON.parse(response.data);
            this.post = ((parsedData.Data)[0])
            console.log(((parsedData.Data)[0]))
          } catch (error) {
            console.error('Error parsing JSON:', error);
          }
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
  },
}
</script>

<template>
  <div>
    <!-- Display the post data here -->
    <h1>{{ post.title }}</h1>
    <h4>By {{ post.author_name }}</h4>
    <br />
    <p>{{ post.body }}</p>
    <br /><br /><br />

    <div id="Bar">
      <div>&#x1F44D; {{ post.likes }}</div>
      <div>&#x1F4AC; {{ post.comments }}</div>
      <div>&#x1F44E; {{ post.unlikes }}</div>
    </div>
    <br /><br /><br />

    <h3>Comments</h3>
    <div v-for="comment in comments" :key="comment.id" class="comment">
      <p>{{ comment.text }}</p>
      <h4>By {{ comment.author }}</h4>
    </div>

    <!-- Add a comment form -->
    <div class="comment">
      <h3>Add a Comment</h3>
      <form @submit.prevent="addComment">
        <div class="form-group">
          <textarea
            id="commentText"
            v-model="newComment.text"
            required
            placeholder="Comment"
          ></textarea>
        </div>
        <button type="submit">Add Comment</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.comment {
  margin: 0 0 10px;
  padding: 2px 10px;
  border: 1px dotted #ccc;
}
h4 {
  text-align: right;
}
p {
  text-align: left;
}

#Bar {
  width: 100%;
  padding-top: 8px;
  display: flex;
  justify-content: space-evenly;
  font: caption;
  filter: grayscale(100%);
}
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
