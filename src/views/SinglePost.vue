<script>
import {authUser} from "@/handler/authUtils";
import axios from "axios";
export default {
  name: 'PostTile',
  data: function () {
    return {
      post: {},
      comments: [],
      newComment: {
        body: ''
      },
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    addLike() {
      axios.post("https://server.yellowbush-cadc3844.centralindia.azurecontainerapps.io/reaction/add_like/?pid=" + this.$route.params.id).then((response) => {
        this.init()
        console.log(response.data)
      }).catch((error) => {
        console.log(error)
      })
    },
    unLike() {
      axios.post("https://server.yellowbush-cadc3844.centralindia.azurecontainerapps.io/reaction/add_unlike/?pid=" + this.$route.params.id).then((response) => {
        this.init()
        console.log(response.data)
      }).catch((error) => {
        console.log(error)
      })
    },
    init(){
      axios
          .post('https://server.yellowbush-cadc3844.centralindia.azurecontainerapps.io/post/get_single_post/?pid=' + this.$route.params.id)
          .then(response => {
            try {
              const parsedData = JSON.parse(response.data);
              if (parsedData.Status === "Error" || parsedData.Status === "Not Success") {
                alert("Wrong Post ID Selected")
              }
              else{
                this.post = ((parsedData.Data)[0])
                axios
                    .post('https://server.yellowbush-cadc3844.centralindia.azurecontainerapps.io/reaction/get_comments/?pid=' + this.$route.params.id)
                    .then(response => {
                      try {
                        const parsedData = JSON.parse(response.data);
                        if (parsedData.Status === "Error" || parsedData.Status === "Not Success") {
                          this.comments = []
                        }
                        else {
                          this.comments = ((parsedData.Data))
                        }
                      } catch (error) {
                        console.error('Error parsing JSON:', error);
                      }
                    })
                    .catch(error => {
                      console.error('Error fetching data:', error);
                    });
              }
            } catch (error) {
              console.error('Error parsing JSON:', error);
            }
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
    },
    add_comment: function () {
      const temp = authUser()
      if (temp.status === false){
        alert("Pls Login to Comment")
      }
      else {
        var data = {
          pid : this.$route.params.id,
          author_id : temp.uid,
          body: this.newComment.body
        }
        axios.post("https://server.yellowbush-cadc3844.centralindia.azurecontainerapps.io/reaction/add_comment/",null, {params: data}).then((response) => {
          if (response.data.status === "Error") {
            alert("Unexpected Error")
          }
          else {
            this.init()
          }
        }).catch((error) =>{
          alert(error)
        })
      }
    }
  }
}
</script>

<template>
  <div>
    <!-- Display the post data here -->
    <h1>{{ post.title }}</h1>
    <h4>By {{ post.author_name }}</h4>
    <br/>
    <p>{{ post.body }}</p>
    <br/><br/><br/>

    <div id="Bar">
      <div @click="addLike">&#x1F44D; {{ post.likes }}</div>
      <div>&#x1F4AC; {{ post.comments }}</div>
      <div @click="unLike">&#x1F44E; {{ post.unlikes }}</div>
    </div>
    <br/><br/><br/>

    <h3>Comments</h3>
    <div v-for="comment in comments" :key="comment.id" class="comment">
      <p>{{ comment.body }}</p>
      <h4>By {{ comment.author_name }}</h4>
    </div>

    <!-- Add a comment form -->
    <div class="comment">
      <h3>Add a Comment</h3>
      <form @submit.prevent="add_comment">
        <div class="form-group">
          <textarea
              id="commentText"
              v-model="newComment.body"
              placeholder="Comment"
              required
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
